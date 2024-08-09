import type { ICartItem } from '@/types';
import { useCart } from '@/stores/cart';

export function useAddToCart() {
  const cart = useCart();
  const addToCart = (item: ICartItem) => {
    cart.addItem(item);
  };
  return {
    addToCart,
  };
}
