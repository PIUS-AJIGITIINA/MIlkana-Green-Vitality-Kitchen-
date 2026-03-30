import { useState } from 'react';

export default function Menu() {
  const [activeTab, setActiveTab] = useState<'food' | 'drinks'>('food');

  const foodItems = [
    {
      id: 1,
      name: "Classic Assorted Fried Rice",
      description: "Our signature fried rice with chicken, beef, sausage, and fresh vegetables.",
      price: "GHS 45",
      image: "https://images.unsplash.com/photo-1645696301019-35adcc18fc21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Spicy Chicken Fried Rice",
      description: "Flavorful fried rice packed with tender chicken chunks and a kick of spice.",
      price: "GHS 40",
      image: "https://images.unsplash.com/photo-1533745848184-3db07256e163?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Beef & Mushroom Fried Rice",
      description: "Savory beef strips and mushrooms stir-fried with our special rice blend.",
      price: "GHS 50",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Vegetarian Delight",
      description: "A healthy mix of seasonal vegetables, tofu, and light soy sauce.",
      price: "GHS 35",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const drinkItems = [
    {
      id: 5,
      name: "Green Vitality Smoothie",
      description: "Probiotic drink with yogurt, pineapple, spinach, coconut water, honey, lemon, and chia seeds.",
      price: "GHS 20",
      image: "https://images.unsplash.com/photo-1610970881699-44a5587ce578?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isBottleCrop: false
    },
    {
      id: 6,
      name: "Pineapple Ginger Blast",
      description: "Freshly squeezed pineapple juice with a strong ginger kick.",
      price: "GHS 15",
      image: "https://images.unsplash.com/photo-1550828520-4cb496926fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      name: "Watermelon Refresher",
      description: "Pure, hydrating watermelon juice with a hint of mint.",
      price: "GHS 15",
      image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const currentItems = activeTab === 'food' ? foodItems : drinkItems;

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of freshly prepared meals and natural juices. Everything is made to order.
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
                  ? 'bg-brand-green text-white shadow-md' 
                  : 'text-gray-600 hover:text-brand-green'
              }`}
            >
              Natural Juices
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
                  className={`w-full h-full ${activeTab === 'drinks' && item.id === 5 ? 'object-contain py-2' : 'object-cover'}`}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <span className={`font-bold ${activeTab === 'food' ? 'text-brand-orange' : 'text-brand-green'}`}>
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">{item.description}</p>
                </div>
                <a 
                  href={`https://wa.me/233550827113?text=I%20want%20to%20order%20${encodeURIComponent(item.name)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block w-full text-center text-white py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'food' ? 'bg-brand-orange hover:bg-orange-600' : 'bg-brand-green hover:bg-green-600'
                  }`}
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
