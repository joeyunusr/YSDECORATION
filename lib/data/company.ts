export interface CompanySettings {
  name: string;
  tagline: string;
  legalName: string;
  businessType: string;
  whatsappNumber: string; // e.g. 628123456789 (format numeric without + or dashes for wa.me)
  whatsappDisplay: string;
  email: string;
  officeAddress?: string;
  operationalHours?: string;
  instagramUrl?: string;
  marketplaceUrl?: string;
  catalogDownloadUrl?: string;
}

export const COMPANY_CONFIG: CompanySettings = {
  name: 'YS Decoration',
  legalName: 'YS DECORATION',
  tagline: 'Manufaktur Konveksi & Supplier Perlengkapan Event, Hospitality, dan Dekorasi Tenda B2B',
  businessType: 'Manufaktur & Supplier B2B',
  whatsappNumber: '628997211524',
  whatsappDisplay: '+62 899-7211-524',
  email: 'ysgroupdekorasitenda@gmail.com',
  operationalHours: 'Senin - Sabtu: 08.00 - 17.00 WIB',
  officeAddress: 'Desa Sampora, Kuningan, Jawa Barat',
};

export function buildWhatsAppUrl(message: string, overrideNumber?: string): string {
  const number = overrideNumber || COMPANY_CONFIG.whatsappNumber;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
