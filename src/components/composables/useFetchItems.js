export async function useFetchItems(url, array, loading) {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  try {
    loading.value = true;
    const response = await fetch(url);
    const data = await response.json();
    array.value = data;
  } catch (err) {
    if (err.status === 429) {
      await delay(500);
    } else {
      console.log(err);
    }
  } finally {
    loading.value = false;
  }
}
