export type Order = {
  id: number;
  Title: string;
  Description: string;
  Status: string;
  ActivateDate: string;
  DeactivateDate: string;
  Stock: number;
  Price: number;
};

export async function getAllOrdhers(): Promise<Order[]> {
  try {
    const resp = await fetch("http://localhost:8000/item/");

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    const data: Order[] = await resp.json();
    return data.results ?? data;
  } catch (err) {
    console.error("Failed to fetch orders:", err);
    return [];
  }
}
export async function getAllOrders(): Promise<Order[]> {
  const resp = await fetch("http://localhost:8000/item/");

  if (!resp.ok) {
    throw new Error(`HTTP error: ${resp.status}`);
  }

  const data = await resp.json();

  return data.results ?? data; // 👈 handles pagination OR plain array
}
