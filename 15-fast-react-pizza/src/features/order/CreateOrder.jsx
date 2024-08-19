/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export default function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const actionErrors = useActionData();
  const status = useNavigation();
  const isSubmitting = status.state === "submitting";

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="py-4 font-bold">Ready to order? Let's go!</h2>

      <Form method="POST" className="space-y-4 sm:w-4/6">
        <div>
          <input
            className="input"
            placeholder="First Name"
            type="text"
            name="customer"
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full">
            <input
              className="input"
              placeholder="Phone number"
              type="tel"
              name="phone"
            />
          </div>
          {actionErrors && (
            <p className="py mt-1 w-fit rounded-md bg-red-100 px-2 text-red-700">
              {actionErrors}
            </p>
          )}
        </div>

        <div>
          <input
            className="input"
            placeholder="Address"
            type="text"
            name="address"
          />
        </div>

        <div className="flex items-center justify-center gap-2">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label
            htmlFor="priority"
            className="text-xs font-semibold text-stone-600 sm:text-lg"
          >
            Want to give your order priority?
          </label>
        </div>

        <div className="text-center">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "is Submitting" : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function createOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const error = {};
  if (!isValidPhone(order.phone)) return "Phone is not valid";

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}
