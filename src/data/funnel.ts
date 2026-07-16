/** Six-stage B2B inquiry funnel for industrial bearing sourcing pages. */
export type FunnelStage = 'awareness' | 'comparison' | 'selection' | 'quote' | 'signing' | 'service';
export type BlogPostLike = { slug: string; title: string; intent?: 'informational' | 'commercial' | 'transactional'; tags?: readonly string[] };
const comparisonSlugPattern = /-vs-|-versus-/;
const selectionSlugPattern = /^(how-to-choose|best-|top-|guide-to-)/;
const selectionTitlePattern = /\b(best|how to choose|top \d+|which .+ (?:for|to choose))\b/i;
export function getPostFunnelStage(post: BlogPostLike): FunnelStage {
  if (comparisonSlugPattern.test(post.slug) || /\bvs\.?\b/i.test(post.title)) return 'comparison';
  if (selectionSlugPattern.test(post.slug) || selectionTitlePattern.test(post.title) || post.intent === 'commercial') return 'selection';
  return 'awareness';
}
export type FunnelCtaConfig = { title: string; text: string; primaryLabel: string; primaryHref: string; primaryEvent: string; secondaryLabel?: string; secondaryHref?: string; secondaryEvent?: string };
export const funnelCtaByStage: Record<FunnelStage, FunnelCtaConfig> = {
  awareness: { title: 'Have a Bearing Model to Source?', text: 'Send the model, dimensions, quantity, application and destination for availability and specification review.', primaryLabel: 'Request a Quote', primaryHref: '/contact/?source=bearing-inquiry', primaryEvent: 'rfq_cta_click', secondaryLabel: 'Browse Bearings', secondaryHref: '/products/', secondaryEvent: 'catalog_view' },
  comparison: { title: 'Need Help Comparing Bearing Models?', text: 'Send both model references or a drawing. We review dimensions, load arrangement, sealing and application requirements.', primaryLabel: 'Request Model Review', primaryHref: '/contact/?source=model-review', primaryEvent: 'consultation_request', secondaryLabel: 'View Product Range', secondaryHref: '/products/', secondaryEvent: 'catalog_view' },
  selection: { title: 'Select the Right Industrial Bearing', text: 'Tell us the application, load, speed, dimensions, accuracy, quantity and delivery target for a useful recommendation.', primaryLabel: 'Submit Bearing Inquiry', primaryHref: '/contact/?source=selection', primaryEvent: 'selection_consult_request', secondaryLabel: 'Browse Bearing Types', secondaryHref: '/products/', secondaryEvent: 'catalog_view' },
  quote: { title: 'Ready for a Bearing Quote?', text: 'Send your model list or drawings with quantities and destination. We will confirm specification questions before pricing.', primaryLabel: 'Request a Quote', primaryHref: '/contact/', primaryEvent: 'rfq_cta_click' },
  signing: { title: 'Ready to Place a Bearing Order?', text: 'Confirm the selected model, inspection scope, packing and shipping requirements with our team.', primaryLabel: 'Request Order Support', primaryHref: '/contact/?source=order-support', primaryEvent: 'order_support', secondaryLabel: 'Quality Control', secondaryHref: '/certifications/', secondaryEvent: 'quality_view' },
  service: { title: 'Need Inspection Documents?', text: 'Tell us which dimensional, material, packing or shipment records your bearing order requires.', primaryLabel: 'Contact Bearing Support', primaryHref: '/contact/?source=quality-support', primaryEvent: 'rfq_cta_click', secondaryLabel: 'Quality & Inspection', secondaryHref: '/certifications/', secondaryEvent: 'certifications_view' },
};
export const funnelViewEventByStage: Record<FunnelStage, string> = { awareness: 'bearing_info_view', comparison: 'model_comparison_view', selection: 'selection_guide_view', quote: 'rfq_form_view', signing: 'order_support_view', service: 'quality_resource_view' };
