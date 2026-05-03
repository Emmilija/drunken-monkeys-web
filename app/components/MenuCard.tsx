type MenuItemProps = {
  name: string;
  price: number;
  description?: string;
};

export default function MenuCard({
  name,
  price,
  description,
}: MenuItemProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white hover:bg-white/10 transition">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-green-400 font-bold">{price} ден</span>
      </div>

      {description && (
        <p className="text-sm text-gray-400 mt-2">{description}</p>
      )}
    </div>
  );
}