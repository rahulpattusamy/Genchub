export const saveOrderToLocal = (userId?: string, items?: any[], totalAmount?: number) => {
  const storageKey = `orderedProducts_${userId}`;
  const existing = JSON.parse(localStorage.getItem(storageKey) || "{}");
  const orders = existing.orders || [];

  const newOrder = {
    items,
    totalAmount,
    timestamp: new Date().toISOString(),
  };

  const updated = {
    orders: [...orders, newOrder],
  };

  localStorage.setItem(storageKey, JSON.stringify(updated));
};



export const getOrdersFromLocal = (userId: string) => {
  const storageKey = `orderedProducts_${userId}`;
  const data = localStorage.getItem(storageKey);
  return data ? JSON.parse(data).orders || [] : [];
};
