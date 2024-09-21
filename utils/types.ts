import { Prisma } from "@prisma/client";

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;
// This adds the product types to the CartItem types. The product field is a relation to the Product model.
// This is because the Shopping Cart requires the product details to display the product image, name, and company.


export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type CartItem = {
  productId: string;
  image: string;
  title: string;
  price: string;
  amount: number;
  company: string;
};

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};
