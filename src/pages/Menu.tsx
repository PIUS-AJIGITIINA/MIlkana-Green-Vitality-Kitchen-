import { useState } from 'react';

export default function Menu() {
  const [activeTab, setActiveTab] = useState<'food' | 'drinks'>('food');

  const foodItems = [
    {
      id: 1,
      name: "Grilled Chicken Green Sauce Rice",
      description: "Generous pieces of tender grilled chicken topped with our signature fresh green sauce, served over special rice.",
      price: "GHS 55",
      image: "https://i.pinimg.com/originals/ef/84/ea/ef84ea9f1e4032197c05167e6497c6a9.jpg"
    },
    {
      id: 2,
      name: "Classic Assorted Fried Rice",
      description: "Our signature fried rice beautifully packed in a family tray with sausage, chicken, and fresh vegetables.",
      price: "GHS 45",
      image: "https://i.pinimg.com/originals/f5/81/68/f581687ef873096f37c1cfddb5c0f5ba.jpg"
    },
    {
      id: 3,
      name: "Vegetable and Chicken Fried Rice",
      description: "A hearty bowl of light and fluffy fried rice tossed with fresh carrots, sweet peas, and egg.",
      price: "GHS 35",
      image: "https://i.pinimg.com/originals/b4/62/0e/b4620e0d8925c5e675f845680964277b.jpg"
    },
    {
      id: 4,
      name: "Vegetable Fried Rice",
      description: "Light and healthy fried rice loaded with fresh mixed vegetables.",
      price: "GHS 50",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Spicy Chicken Fried Rice",
      description: "Flavorful fried rice packed with tender chicken chunks, diced carrots, and a kick of spice.",
      price: "GHS 40",
      image: "https://i.pinimg.com/originals/f1/57/16/f157168a2488f4e47ff65add90091c74.jpg"
    }
  ];

  const drinkItems = [
    {
      id: 6,
      name: "Malt Drink",
      description: "A rich, refreshing non-alcoholic malt beverage.",
      price: "GHS 15",
      image: "https://i.pinimg.com/originals/6e/9a/76/6e9a762e8eb9c4b8b6979f5f9055bae7.jpg"
    },
    {
      id: 7,
      name: "Coca Cola",
      description: "The classic, refreshing, cold Coca Cola.",
      price: "GHS 12",
      image: "https://i.pinimg.com/736x/ed/b5/62/edb562b35c22bde49d0c4392d134c37e.jpg"
    },
    {
      id: 8,
      name: "Fanta",
      description: "Crisp, cold Fanta orange drink.",
      price: "GHS 12",
      image: "https://i.pinimg.com/originals/38/76/c2/3876c2c8d59020d55ff757a83a1c5ac9.jpg"
    }
  ];

  const currentItems = activeTab === 'food' ? foodItems : drinkItems;

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of freshly prepared meals and refreshing drinks. Everything is made to order.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab('food')}
              className={`px-8 py-3 rounded-full font-medium transition-colors ${
                activeTab === 'food' 
                  ? 'bg-brand-orange text-white shadow-md' 
                  : 'text-gray-600 hover:text-brand-orange'
              }`}
            >
              Fried Rice
            </button>
            <button
              onClick={() => setActiveTab('drinks')}
              className={`px-8 py-3 rounded-full font-medium transition-colors ${
                activeTab === 'drinks' 
                  ? 'bg-brand-orange text-white shadow-md' 
                  : 'text-gray-600 hover:text-brand-orange'
              }`}
            >
              Drinks
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row">
              <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className={`w-full h-full object-cover`}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <span className="font-bold text-brand-orange">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">{item.description}</p>
                </div>
                <a 
                  href={`https://wa.me/233550827113?text=I%20want%20to%20order%20${encodeURIComponent(item.name)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center text-white py-2 rounded-lg font-medium transition-colors bg-brand-orange hover:bg-orange-600"
                >
                  Add to WhatsApp Order
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
