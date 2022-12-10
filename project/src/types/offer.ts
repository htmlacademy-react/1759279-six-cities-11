export type CardOffer ={
  id: number;
  src: string;
  title: string;
  description: string;
  premium: boolean; //TODO или string?
  type: string;
  rating: number;
  bedrooms: number;
  guests: number;
  price: number;
  facilities: string[];
  proInfo: boolean; //TODO или string?
  lat: number;
  lng: number;
};

export type CardOffers = CardOffer[];
