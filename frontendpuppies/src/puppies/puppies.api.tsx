export function FetchPuppies<T>(resourceUrl: string): Promise<T> {
  return fetch(resourceUrl).then((response) => {
    return response.json();
  });
}
