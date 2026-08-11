export interface CouponConfig {
  code: string;
  sellerName: string;
  discountUSD: number;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  whatsappNumber: string;
  whatsappRaw: string;
  instagramHandle: string;
  instagramUrl: string;
  coupons: Record<string, CouponConfig>;
}

export const siteConfig: SiteConfig = {
  brandName: "Girl Peps",
  tagline: "Premium Research Catalog & Cosmetics",
  whatsappNumber: "+1 (862) 233-3919",
  whatsappRaw: "18622333919",
  instagramHandle: "@girl_peps",
  instagramUrl: "https://www.instagram.com/girl_peps/",
  coupons: {
    "NOMBREPEPS": {
      code: "NOMBREPEPS",
      sellerName: "Representative A",
      discountUSD: 10,
    },
    "NOMBREPEPS2": {
      code: "NOMBREPEPS2",
      sellerName: "Representative B",
      discountUSD: 10,
    },
    "NOMBREPEPS3": {
      code: "NOMBREPEPS3",
      sellerName: "Representative C",
      discountUSD: 10,
    },
    "GIRLPEPS": {
      code: "GIRLPEPS",
      sellerName: "Girl Peps Direct",
      discountUSD: 10,
    },
    "PEPS10": {
      code: "PEPS10",
      sellerName: "Special Promotion",
      discountUSD: 10,
    },
  },
};

