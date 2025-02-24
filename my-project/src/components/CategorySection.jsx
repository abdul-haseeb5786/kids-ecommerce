import React from "react";

const categories = [
  { name: "Action Figures", img: "action-figures.jpg" },
  { name: "Counter Toys", img: "counter-toys.jpg" },
  { name: "Games & Puzzles", img: "games-puzzles.jpg" },
  { name: "Girls Toys", img: "girls-toys.jpg" },
  { name: "Learning Toys", img: "learning-toys.jpg" },
  { name: "Model Cars", img: "model-cars.jpg" },
  { name: "Musical Toys", img: "musical-toys.jpg" },
  { name: "Outdoor Play", img: "outdoor-play.jpg" },
  { name: "Play Slimes", img: "play-slimes.jpg" },
  { name: "RC Toys", img: "rc-toys.jpg" },];

const CategorySection = () => {
  return (
    <div className="text-center py-8 bg-white">
      <h2 className="text-3xl font-bold mb-8">SHOP BY CATEGORY</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 responsive-grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-2 duration-300"
          >
            <img
              src={`/images/${category.img}`}
              alt={category.name}
              className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
