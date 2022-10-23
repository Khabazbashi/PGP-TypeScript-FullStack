export async function FetchPuppies<T>(resourceUrl: string): Promise<T> {
  const response = await fetch(resourceUrl);
  return await response.json();
}

export async function RemovePuppy(resourceUrl: string) {
  await fetch(resourceUrl, {
    method: "DELETE",
  });
}

export async function CreatePuppy<T>(
  resourceUrl: string,
  content: T
): Promise<T> {
  const response = await fetch(resourceUrl, {
    method: "POST",
    body: JSON.stringify(content),
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  return await response.json();
}
