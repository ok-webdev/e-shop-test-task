import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { ICartItem } from '@/types';

export const useCart = defineStore('cart', () => {
  const items = ref<ICartItem[]>([]);

  const addItem = (item: ICartItem): void => {
    const existingItem = items.value.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push(item);
    }
  };

  const decreaseQuantity = (id: number): void => {
    const item = items.value.find((i) => i.id === id);
    if (item) {
      item.quantity--;
      if (item.quantity === 0) {
        items.value = items.value.filter((i) => i.id !== id);
      }
    }
  };

  const increaseQuantity = (id: number): void => {
    const item = items.value.find((i) => i.id === id);
    if (item) {
      item.quantity++;
    }
  };

  const totalPrice = (): number => {
    return +items.value
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(0);
  };

  const totalQuantity = (): number => {
    return items.value.reduce((total, item) => total + item.quantity, 0);
  };

  return {
    items,
    addItem,
    decreaseQuantity,
    increaseQuantity,
    totalPrice,
    totalQuantity,
  };
});
