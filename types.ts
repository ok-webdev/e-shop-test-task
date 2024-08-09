export interface IItem {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
  quantity: number;
}

export interface ICartItem {
  id: number;
  src: string;
  title: string;
  price: number;
  quantity: number;
}
