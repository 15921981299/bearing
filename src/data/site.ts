export const site = {
  name: 'Combined Bearing Source',
  company: {
    legalName: 'Combined Bearing Source',
    legalNameEn: 'Combined Bearing Source',
  },
  url: 'https://combinedbearingsource.com',
  email: 'charles@combinedbearingsource.com',
  phone: '+862133282711',
  whatsapp: '+8618018620661',
  tagline: 'Factory-Direct Industrial Bearings | OEM & Custom',
  logo: {
    default: '/logo.png',
    compact: '/logo-compact.png',
    icon: '/favicon.png',
    width: 2048,
    height: 768,
  },
  /** Set your GA4 Measurement ID (e.g. G-XXXXXXXX) to enable analytics. Leave empty to disable. */
  gaMeasurementId: 'G-WFJ59G7FKN',
  /** Paste the content value from Google Search Console HTML verification. Leave empty to skip. */
  googleSiteVerification: 'RqNtSOYc73P2ni6Y1FZl1tsK9INXgsi5qOE2HtyIdIY',
  /** Google Tag Manager container ID (e.g. GTM-XXXXXXX). Leave empty to disable GTM. */
  gtmContainerId: '',
  social: {
    /** Company LinkedIn — set here or via PUBLIC_LINKEDIN_URL in .env */
    linkedin:
      (typeof import.meta.env.PUBLIC_LINKEDIN_URL === 'string' && import.meta.env.PUBLIC_LINKEDIN_URL.trim()) ||
      '',
    /** Factory tour video — matches quality.inspectionMedia.youtubeVideoId. */
    youtube: 'https://www.youtube.com/watch?v=M7uJEbDD-_8',
  },
  /** Author external profiles — fill URLs when live; used in Person schema sameAs */
  authorSocial: {
    weiChenLinkedIn:
      (typeof import.meta.env.PUBLIC_AUTHOR_WEI_CHEN_LINKEDIN === 'string' &&
        import.meta.env.PUBLIC_AUTHOR_WEI_CHEN_LINKEDIN.trim()) ||
      '',
    lisaHuangLinkedIn:
      (typeof import.meta.env.PUBLIC_AUTHOR_LISA_HUANG_LINKEDIN === 'string' &&
        import.meta.env.PUBLIC_AUTHOR_LISA_HUANG_LINKEDIN.trim()) ||
      '',
  },
  /**
   * Quality claims shown on site — factory-facing export positioning.
   * Set iso9001CertNumber / iso9001CertBody when a certificate number is on file.
   */
  quality: {
    iso9001Label: 'ISO 9001 Manufacturing Quality System',
    iso9001Description:
      'Combined bearings, track rollers and full-complement cylindrical roller bearings are produced under our Changzhou manufacturing quality system. We control model verification, dimensional checks, inspection scope, packing and export shipment for qualified inquiries.',
    iso9001CertNumber: '',
    iso9001CertBody: '',
    /** Shown on certifications when no direct cert number is on file. */
    iso9001VerificationNote:
      'Factory inspection reports, material notes and packing photos can be provided for qualified bearing inquiries.',
    /** Industry workflows we support — link to /certifications/ pages. */
    industryPrograms: [
      { label: 'Forklift mast bearings', href: '/products/combined-bearings/' },
      { label: 'Conveyor track rollers', href: '/products/track-roller-bearings/' },
      { label: 'Heavy-duty cylindrical bearings', href: '/products/full-complement-cylindrical-roller-bearings/' },
      { label: 'Metal-forming back-up rollers', href: '/products/backup-roller-bearings/' },
      { label: 'Robotics cross roller bearings', href: '/products/cross-roller-bearings/' },
    ],
    /** Optional YouTube tour (fills VideoObject on proof pages). */
    inspectionMedia: {
      /** YouTube video ID only (not full URL). Leave empty to hide embed. */
      youtubeVideoId: 'M7uJEbDD-_8',
    },
  },
  defaultDescription:
    'China industrial bearing manufacturer for combined bearings, track rollers, full-complement cylindrical roller bearings, back-up rollers, cross roller bearings and Standard NbV profiles. Factory-direct OEM and replacement supply.',
  /** Manufacturing plant (Changzhou) + export office (Shanghai). */
  locations: {
    plant: {
      name: 'Changzhou Manufacturing Plant',
      streetAddress: 'Niutang Town, Wujin District',
      addressLocality: 'Changzhou',
      addressRegion: 'Jiangsu',
      postalCode: '213168',
      addressCountry: 'CN',
    },
    exportOffice: {
      name: 'Shanghai Export Office',
      streetAddress: 'Room A102, No. 399 Hengnan Road, Pujiang Town, Minhang District',
      addressLocality: 'Shanghai',
      addressRegion: 'Shanghai',
      addressCountry: 'CN',
    },
  },
};

const organizationLogoUrl = `${site.url}/logo.png`;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'Manufacturer'],
  name: site.company.legalNameEn,
  alternateName: [site.name, site.company.legalName],
  url: site.url,
  email: site.email,
  telephone: site.phone,
  description: site.defaultDescription,
  logo: organizationLogoUrl,
  areaServed: 'Worldwide',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.locations.plant.streetAddress,
    addressLocality: site.locations.plant.addressLocality,
    addressRegion: site.locations.plant.addressRegion,
    postalCode: site.locations.plant.postalCode,
    addressCountry: site.locations.plant.addressCountry,
  },
  department: [
    {
      '@type': 'Organization',
      name: site.locations.plant.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.locations.plant.streetAddress,
        addressLocality: site.locations.plant.addressLocality,
        addressRegion: site.locations.plant.addressRegion,
        postalCode: site.locations.plant.postalCode,
        addressCountry: site.locations.plant.addressCountry,
      },
    },
    {
      '@type': 'Organization',
      name: site.locations.exportOffice.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.locations.exportOffice.streetAddress,
        addressLocality: site.locations.exportOffice.addressLocality,
        addressRegion: site.locations.exportOffice.addressRegion,
        addressCountry: site.locations.exportOffice.addressCountry,
      },
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: site.email,
      telephone: site.phone,
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Chinese'],
    },
  ],
  knowsAbout: [
    'Combined Bearings',
    'Track Roller Bearings',
    'Full Complement Cylindrical Roller Bearings',
    'Back-up Roller Bearings',
    'Cross Roller Bearings',
    'Standard NbV Profiles',
    'OEM Bearing Manufacturing',
    'Custom Track Roller Production',
  ],
  // sameAs is populated only with non-empty social URLs to avoid emitting empty links.
  ...(Object.values(site.social).some(Boolean)
    ? { sameAs: Object.values(site.social).filter(Boolean) }
    : {}),
};

/** schema.org Service markup for capability/service detail pages. */
export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.name,
    description: service.description,
    url: service.url,
    ...(service.image ? { image: service.image } : {}),
    provider: {
      '@type': ['Organization', 'Manufacturer'],
      name: site.name,
      url: site.url,
    },
    areaServed: 'Worldwide',
  };
}

/** schema.org Product markup for industrial bearings and quote-based inquiries. */
export function productSchema(product: {
  name: string;
  description: string;
  url: string;
  image: string;
  material?: string;
  sku?: string;
  model?: string;
  brandName?: string;
  manufacturerName?: string;
  category?: string;
  offer?: {
    price: number | string;
    priceCurrency: string;
    availability?: string;
  };
}) {
  const description = product.material
    ? `${product.description} Reference groups: ${product.material}.`
    : product.description;
  const sku = product.sku ?? product.model;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description,
    url: product.url,
    image: product.image,
    ...(product.brandName
      ? { brand: { '@type': 'Brand', name: product.brandName } }
      : {}),
    ...(product.category ? { category: product.category } : {}),
    ...(product.manufacturerName
      ? {
          manufacturer: {
            '@type': 'Organization',
            name: product.manufacturerName,
          },
        }
      : {}),
    ...(product.offer
      ? {
          offers: {
            '@type': 'Offer',
            url: product.url,
            price: product.offer.price,
            priceCurrency: product.offer.priceCurrency,
            ...(product.offer.availability
              ? { availability: product.offer.availability }
              : {}),
            itemCondition: 'https://schema.org/NewCondition',
            seller: {
              '@type': 'Organization',
              name: site.name,
              url: site.url,
            },
          },
        }
      : {}),
    ...(sku
      ? {
          sku,
          mpn: sku,
          model: product.model ?? sku,
        }
      : {}),


  };
}

/** schema.org FAQPage markup for pages with Q&A sections. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** schema.org ItemList for collection pages. */
export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

/** schema.org VideoObject for embedded factory / process videos. */
export function videoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl?: string;
  embedUrl?: string;
  uploadDate?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    ...(video.contentUrl ? { contentUrl: video.contentUrl } : {}),
    ...(video.embedUrl ? { embedUrl: video.embedUrl } : {}),
    ...(video.uploadDate ? { uploadDate: video.uploadDate } : {}),
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: {
        '@type': 'ImageObject',
        url: organizationLogoUrl,
      },
    },
  };
}

/** schema.org Article markup for customer case study detail pages. */
export function caseStudySchema(study: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  industry: string;
  authorName: string;
  authorUrl: string;
  authorJobTitle: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.description,
    image: study.image,
    datePublished: study.datePublished,
    ...(study.dateModified ? { dateModified: study.dateModified } : {}),
    articleSection: study.industry,
    about: {
      '@type': 'Thing',
      name: `${study.industry} industrial bearings`,
    },
    author: {
      '@type': 'Person',
      name: study.authorName,
      url: study.authorUrl,
      jobTitle: study.authorJobTitle,
      worksFor: {
        '@type': 'Organization',
        name: site.name,
        url: site.url,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
      logo: {
        '@type': 'ImageObject',
        url: organizationLogoUrl,
      },
    },
    mainEntityOfPage: study.url,
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
  authorJobTitle?: string;
  authorSameAs?: string[];
  authorType?: 'Person' | 'Organization';
}) {
  const authorType = article.authorType ?? 'Organization';
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    ...(article.dateModified ? { dateModified: article.dateModified } : {}),
    author: {
      '@type': authorType,
      name: article.authorName,
      ...(article.authorUrl ? { url: article.authorUrl } : {}),
      ...(authorType === 'Person' && article.authorJobTitle
        ? { jobTitle: article.authorJobTitle }
        : {}),
      ...(article.authorSameAs?.length ? { sameAs: article.authorSameAs } : {}),
      ...(authorType === 'Person'
        ? {
            worksFor: {
              '@type': 'Organization',
              name: site.name,
              url: site.url,
            },
          }
        : {}),
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: {
        '@type': 'ImageObject',
        url: organizationLogoUrl,
      },
    },
    mainEntityOfPage: article.url,
  };
}

export function personProfileSchema(person: {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  sameAs?: string[];
  knowsAbout?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: person.name,
    description: person.description,
    url: person.url,
    mainEntity: {
      '@type': 'Person',
      name: person.name,
      jobTitle: person.jobTitle,
      description: person.description,
      url: person.url,
      ...(person.sameAs?.length ? { sameAs: person.sameAs } : {}),
      ...(person.knowsAbout?.length ? { knowsAbout: person.knowsAbout } : {}),
      worksFor: {
        '@type': 'Organization',
        name: site.name,
        url: site.url,
      },
    },
  };
}
