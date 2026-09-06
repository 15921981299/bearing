import { fireAttributionLeadEvent, populateRfqAttributionFields } from './attribution';

function getResultEl(form: HTMLFormElement) {
  return form.querySelector<HTMLElement>('.form-result');
}

function showResult(form: HTMLFormElement, html: string, type: 'success' | 'error' | 'info' = 'success') {
  const result = getResultEl(form);
  if (!result) return;
  result.className = `form-result is-visible is-${type}`;
  result.innerHTML = html;
}

function getSubmitButton(form: HTMLFormElement) {
  return form.querySelector<HTMLButtonElement>(
    'button[type="submit"], .service-form-button, .contact-form-button'
  );
}

function setLoading(form: HTMLFormElement, loading: boolean) {
  const submit = getSubmitButton(form);
  if (!submit) return;
  submit.disabled = loading;
  submit.dataset.originalText ??= submit.textContent ?? '';
  submit.textContent = loading ? 'Please wait...' : submit.dataset.originalText;
}

function getThankYouSource(form: HTMLFormElement, formData: FormData) {
  const source = formData.get('source')?.toString().trim();
  if (source) return source.toLowerCase().replace(/[^a-z0-9_-]+/g, '-');
  if (form.id === 'rfq-form') return 'contact';
  return 'sidebar';
}

async function handleRfqSubmit(form: HTMLFormElement) {
  const endpoint = form.dataset.endpoint ?? '/api/rfq';
  const fallbackEmail = form.dataset.fallbackEmail ?? 'sales@combinedbearingsource.com';

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  populateRfqAttributionFields(form);
  const formData = new FormData(form);

  if (formData.get('website')) {
    window.location.href = `/thank-you/?source=${getThankYouSource(form, formData)}`;
    return;
  }

  setLoading(form, true);
  getResultEl(form)?.replaceChildren();

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as { message?: string } | null;
      throw new Error(payload?.message || 'Server error');
    }

    const source = getThankYouSource(form, formData);
    const attachment = formData.get('drawing');

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'rfq_submit', {
        event_category: 'RFQ',
        event_label: source,
        funnel_stage: 'quote',
        has_attachment: attachment instanceof File && attachment.size > 0 ? 'yes' : 'no',
      });
      window.gtag('event', 'generate_lead', {
        event_category: 'RFQ',
        event_label: source,
      });
      fireAttributionLeadEvent({
        lead_source: source,
        url_source: formData.get('url_source')?.toString() || 'unspecified',
      });
    }

    window.location.href = `/thank-you/?source=${encodeURIComponent(source)}`;
  } catch (error) {
    const message =
      error instanceof Error && error.message !== 'Server error'
        ? error.message
        : 'Something went wrong.';
    showResult(
      form,
      `<strong>${message}</strong> Please email us at <a href="mailto:${fallbackEmail}">${fallbackEmail}</a> or try again in a moment.`,
      'error'
    );
    setLoading(form, false);
  }
}

function trackFormStart(form: HTMLFormElement, label: string) {
  let started = false;
  form.querySelectorAll('input, textarea, select').forEach((field) => {
    field.addEventListener(
      'focus',
      () => {
        if (started || typeof window.gtag !== 'function') return;
        started = true;
        window.gtag('event', 'form_start', {
          event_category: 'RFQ',
          event_label: label,
          funnel_stage: 'quote',
        });
      },
      { once: true }
    );
  });
}

function initFileUploadLabels() {
  document.querySelectorAll<HTMLInputElement>('.file-upload-input').forEach((input) => {
    const filenameEl = input
      .closest('.file-upload-label')
      ?.querySelector<HTMLElement>('.file-upload-filename');
    const placeholder = filenameEl?.dataset.placeholder || 'No file selected';

    input.addEventListener('change', () => {
      if (!filenameEl) return;
      const file = input.files?.[0];
      filenameEl.textContent = file?.name || placeholder;
    });
  });
}

const rfqForms = new Set<HTMLFormElement>();
document.querySelectorAll<HTMLFormElement>('[data-endpoint], [data-form="quote"]').forEach((form) => {
  if (rfqForms.has(form) || form.id === 'rfq-modal-form') return;
  rfqForms.add(form);

  const label =
    form.id === 'rfq-form'
      ? 'contact'
      : form.dataset.form === 'quote'
        ? `sidebar:${window.location.pathname}`
        : form.dataset.endpoint || 'rfq';

  trackFormStart(form, label);
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    await handleRfqSubmit(form);
  });
});

initFileUploadLabels();
