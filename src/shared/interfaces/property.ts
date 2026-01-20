export interface PropertyInterface {
  id: string;
  name: string;
  listingType: "SALE" | "RENT";
  price: number;
  gallery: string[];
  user: {
    id: string;
    name: string;
  };
}
