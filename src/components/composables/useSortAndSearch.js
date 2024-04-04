export async function useSortAndSearch(url, array, sort, search) {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  try {
    const params = {
      sortBy: sort,
    };

    if (search) {
      params.title = `*${search}*`;
    }

    const response = await fetch(url + '?' + new URLSearchParams(params));

    if (response.status === 429) {
      await delay(500);
    } else {
      const data = await response.json();
      array.value = data;
    }
  } catch (err) {
    console.log(err);
  }
}
