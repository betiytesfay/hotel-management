const FoodCard = ({ food }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">

      <div className="h-40 bg-gray-200"></div>

      <div className="p-4 space-y-2">

        <h3 className="text-lg font-semibold">
          {food.name}
        </h3>

        <p className="text-sm text-gray-500">
          {food.description}
        </p>

        <p className="text-[#C8A96A] font-bold">
          ${food.price}
        </p>

      </div>

    </div>
  );
};