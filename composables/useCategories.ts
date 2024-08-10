export async function useCategories() {
  const { data: categories, error } = await useAsyncData<string[]>(
    'categories',
    () => $fetch('https://fakestoreapi.com/products/categories')
  );

  return {
    categories,
    error,
  };
}
