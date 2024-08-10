import { ref, watch } from 'vue';
import type { Ref } from 'vue';
import type { IItem } from '@/types';

export function useItems(selectedCategory: Ref<string>) {
  const items = ref<IItem[]>([]);
  const loading = ref<boolean>(true);
  const error = ref<Error | null>(null);

  const fetchProducts = async () => {
    try {
      loading.value = true;
      const url = selectedCategory.value
        ? `https://fakestoreapi.com/products/category/${selectedCategory.value}`
        : 'https://fakestoreapi.com/products';

      const data = await $fetch<IItem[]>(url);
      items.value = data || [];
    } catch (err) {
      error.value = err as Error;
    } finally {
      loading.value = false;
    }
  };

  watch(selectedCategory, fetchProducts, { immediate: true });

  return {
    items,
    loading,
    error,
  };
}
