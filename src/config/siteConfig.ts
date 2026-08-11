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
    // María Angeles
    "MARIA10": { code: "MARIA10", sellerName: "María Angeles", discountUSD: 10 },
    "MARIAANGELES10": { code: "MARIAANGELES10", sellerName: "María Angeles", discountUSD: 10 },
    "ANGELES10": { code: "ANGELES10", sellerName: "María Angeles", discountUSD: 10 },
    "MARIA": { code: "MARIA10", sellerName: "María Angeles", discountUSD: 10 },

    // Estephani Cadete
    "ESTEPHANI10": { code: "ESTEPHANI10", sellerName: "Estephani Cadete", discountUSD: 10 },
    "ESTEFANI10": { code: "ESTEFANI10", sellerName: "Estephani Cadete", discountUSD: 10 },
    "ESTEPHANICADETE10": { code: "ESTEPHANICADETE10", sellerName: "Estephani Cadete", discountUSD: 10 },
    "ESTEPHANI": { code: "ESTEPHANI10", sellerName: "Estephani Cadete", discountUSD: 10 },

    // Luis Remache
    "LUIS10": { code: "LUIS10", sellerName: "Luis Remache", discountUSD: 10 },
    "LUISREMACHE10": { code: "LUISREMACHE10", sellerName: "Luis Remache", discountUSD: 10 },
    "LUIS": { code: "LUIS10", sellerName: "Luis Remache", discountUSD: 10 },

    // Jennia Vicuña
    "JENNIA10": { code: "JENNIA10", sellerName: "Jennia Vicuña", discountUSD: 10 },
    "JENNIAVICUNA10": { code: "JENNIAVICUNA10", sellerName: "Jennia Vicuña", discountUSD: 10 },
    "JENNIA": { code: "JENNIA10", sellerName: "Jennia Vicuña", discountUSD: 10 },

    // María Buenaño
    "BUENANO10": { code: "BUENANO10", sellerName: "María Buenaño", discountUSD: 10 },
    "MARIABUENANO10": { code: "MARIABUENANO10", sellerName: "María Buenaño", discountUSD: 10 },
    "MARIAB10": { code: "MARIAB10", sellerName: "María Buenaño", discountUSD: 10 },

    // Cindy Leon
    "CINDY10": { code: "CINDY10", sellerName: "Cindy Leon", discountUSD: 10 },
    "CINDYLEON10": { code: "CINDYLEON10", sellerName: "Cindy Leon", discountUSD: 10 },
    "CINDY": { code: "CINDY10", sellerName: "Cindy Leon", discountUSD: 10 },

    // Elian Verdugo
    "ELIAN10": { code: "ELIAN10", sellerName: "Elian Verdugo", discountUSD: 10 },
    "ELIANVERDUGO10": { code: "ELIANVERDUGO10", sellerName: "Elian Verdugo", discountUSD: 10 },
    "ELIAN": { code: "ELIAN10", sellerName: "Elian Verdugo", discountUSD: 10 },

    // Erika LLiguicota
    "ERIKA10": { code: "ERIKA10", sellerName: "Erika LLiguicota", discountUSD: 10 },
    "ERIKALLIGUICOTA10": { code: "ERIKALLIGUICOTA10", sellerName: "Erika LLiguicota", discountUSD: 10 },
    "ERIKA": { code: "ERIKA10", sellerName: "Erika LLiguicota", discountUSD: 10 },

    // Direct / General Coupons
    "GIRLPEPS": { code: "GIRLPEPS", sellerName: "Girl Peps Direct", discountUSD: 10 },
    "PEPS10": { code: "PEPS10", sellerName: "Girl Peps Direct", discountUSD: 10 },
  },
};
