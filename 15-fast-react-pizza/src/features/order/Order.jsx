// Test ID: IIDSAT
import { useLoaderData } from "react-router";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";

export default function Order() {
  const order = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 p-4">
      <div className="mb-4 flex flex-col text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <h2 className="mb-2 text-xl font-semibold text-stone-500">
          Order #IIDSAT status
        </h2>

        <div className="flex justify-center gap-3">
          {priority && (
            <span className="rounded-full bg-red-400 px-2 py-1">Priority</span>
          )}
          <span className="rounded-full bg-green-400 px-2 py-1">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-col bg-stone-200 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="text-l font-semibold text-stone-700">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="my-4 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </ul>

      <div className="flex flex-col space-y-2 bg-stone-200 p-4">
        <p className="text-sm font-semibold text-stone-500">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-semibold text-stone-500">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-l font-semibold text-stone-700">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function orderLoader({ params }) {
  const order = await getOrder(params.id);
  return order;
}
