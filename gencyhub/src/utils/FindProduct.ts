import type { Products } from "../hooks/useProducts";

export const findproduct = (cart?: Products[], id?: number) =>
  !!cart?.length && cart.some((c) => c.id == id);
