import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

export default function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between py-3">
      <p className="text-stone-500">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-4">
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}
