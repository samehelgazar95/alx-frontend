import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

export default function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex h-28 gap-4 py-2">
      <img
        className={`h-24 ${soldOut && "opacity-70 grayscale"}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex flex-grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-stone-400">Sold out</p>
          )}
          <Button type="small" allowed={soldOut}>
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
}
