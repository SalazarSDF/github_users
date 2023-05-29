export default async function client(endpoint: string) {
  const headers = { "Content-Type": "application/json" };

  const config = {
    method: "GET",
    headers,
  };

  let data;
  try {
    const response = await window.fetch(endpoint, config);
    data = await response.json();
    if (response.ok) {
      // Return a result object similar to Axios
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      };
    }
    throw new Error(response.statusText);
  } catch (err) {
    if (err instanceof Error) {
      return Promise.reject(err.message ? err.message : data);
    }
  }
}

client.get = function (endpoint: string) {
  return client(endpoint);
};
