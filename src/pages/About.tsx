import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Story</h1>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex flex-col gap-6 justify-center items-stretch">
            {/* MilkANA Kitchen Flyer */}
            <div className="bg-gray-900 rounded-2xl shadow-xl w-full p-8 flex flex-col items-center justify-center text-center border-4 border-yellow-600 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500 to-transparent"></div>
              <h3 className="font-serif text-4xl font-bold text-white mb-2 relative z-10">Milk<span className="text-yellow-500">ANA</span></h3>
              <p className="text-yellow-500 tracking-widest uppercase text-sm font-bold mb-4 relative z-10">— KITCHEN —</p>
              <p className="text-gray-300 italic relative z-10">Premium Fried Rice & Culinary Excellence</p>
            </div>

            {/* Green Vitality Flyer */}
            <div className="bg-green-800 rounded-2xl shadow-xl w-full p-8 flex flex-col items-center justify-center text-center border-4 border-yellow-400 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-300 to-transparent"></div>
              <h3 className="font-serif text-4xl font-bold text-white mb-2 relative z-10">Green <span className="text-yellow-400">Vitality</span></h3>
              <p className="text-yellow-400 tracking-widest uppercase text-sm font-bold mb-4 relative z-10">Probiotic Smoothie Drink</p>
              <p className="text-green-100 italic relative z-10">100% Natural • No Preservatives</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">From Our Kitchen to Your Plate</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              FreshPlate GH started with a simple idea: everyone deserves access to high-quality, delicious, and affordable meals. Based in Kumasi, we noticed a gap for truly fresh, hot fried rice that didn't compromise on ingredients.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We partnered with Green Vitality to bring you the perfect pairing—our savory, hearty fried rice alongside their refreshing, health-boosting natural probiotic smoothies. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we serve hundreds of happy customers, focusing on what matters most: taste, cleanliness, and a smile with every delivery.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Promise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We don't cut corners. When you order from FreshPlate GH, you're guaranteed:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-12 w-12 text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Freshness</h3>
              <p className="text-gray-600">Meals are prepared to order. No stale food, no overnight rice. Just fresh, hot goodness.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-12 w-12 text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Impeccable Cleanliness</h3>
              <p className="text-gray-600">Our kitchen maintains the highest hygiene standards. Your health and safety are our priority.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-12 w-12 text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Ingredients</h3>
              <p className="text-gray-600">From premium rice grains to locally sourced vegetables and 100% natural fruits for our juices.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
