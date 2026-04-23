const FoodSection = () => {

  const foods = [
    { id: 1, name: "Grilled Chicken", description: "Served with vegetables", price: 15 },
    { id: 2, name: "Pasta", description: "Creamy white sauce", price: 12 },
    { id: 3, name: "Burger", description: "Beef burger with fries", price: 10 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {foods.map(food => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodSection;