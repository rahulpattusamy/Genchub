import type { Products } from "../hooks/useProducts";

export const findproduct = (cart?: Products[], id?: number) =>
  !!cart?.length && cart.some((c) => c.id == id);

export const findWishlist = (wishilst?: Products[], id?: number) =>
  !!wishilst?.length && wishilst.some((w) => w.id == id);
