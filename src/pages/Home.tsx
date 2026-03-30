import { Link } from 'react-router-dom';
import { Clock, Leaf, ThumbsUp, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1645696301019-35adcc18fc21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Delicious Fried Rice" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
            Fresh. Hot. <span className="text-brand-orange">Affordable.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Experience the best fried rice in Kumasi, paired perfectly with our Green Vitality natural probiotic smoothies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/233550827113" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-green hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg flex items-center justify-center"
            >
              Order Now on WhatsApp
            </a>
            <Link 
              to="/menu" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg flex items-center justify-center"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Why Choose FreshPlate GH?</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-2xl">
              <div className="bg-brand-orange text-white p-4 rounded-full mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Service</h3>
              <p className="text-gray-600">Hot and ready when you need it. We pride ourselves on quick preparation without compromising quality.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-2xl">
              <div className="bg-brand-green text-white p-4 rounded-full mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">From farm-fresh vegetables to 100% natural juices, we use only the best ingredients for your meals.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-2xl">
              <div className="bg-brand-orange text-white p-4 rounded-full mb-4">
                <ThumbsUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Affordable Prices</h3>
              <p className="text-gray-600">Premium taste doesn't have to break the bank. Enjoy generous portions at student-friendly prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900">Popular Favorites</h2>
              <div className="w-24 h-1 bg-brand-green mt-4"></div>
            </div>
            <Link to="/menu" className="hidden sm:block text-brand-orange font-medium hover:underline">See full menu &rarr;</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1645696301019-35adcc18fc21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Classic Assorted Fried Rice" 
                className="w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Classic Assorted Fried Rice</h3>
                  <span className="font-bold text-brand-orange">GHS 45</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Our signature fried rice with chicken, beef, sausage, and fresh vegetables.</p>
                <a 
                  href="https://wa.me/233550827113?text=I%20want%20to%20order%20Classic%20Assorted%20Fried%20Rice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-brand-orange transition-colors"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1533745848184-3db07256e163?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Spicy Chicken Fried Rice" 
                className="w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Spicy Chicken Fried Rice</h3>
                  <span className="font-bold text-brand-orange">GHS 40</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Flavorful fried rice packed with tender chicken chunks and a kick of spice.</p>
                <a 
                  href="https://wa.me/233550827113?text=I%20want%20to%20order%20Spicy%20Chicken%20Fried%20Rice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-brand-orange transition-colors"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1610970881699-44a5587ce578?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Green Vitality Smoothie" 
                  className="w-full h-full object-contain py-2"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Green Vitality Smoothie</h3>
                  <span className="font-bold text-brand-green">GHS 20</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Probiotic drink with yogurt, pineapple, spinach, coconut water, honey, lemon, and chia seeds.</p>
                <a 
                  href="https://wa.me/233550827113?text=I%20want%20to%20order%20Green%20Vitality%20Smoothie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-brand-green transition-colors"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/menu" className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-white mx-auto mt-4 opacity-50"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-800 p-6 rounded-2xl">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="mb-4 italic">"The assorted fried rice is simply the best in Kumasi! Portions are huge and it's always served hot. The Green Vitality juice is the perfect combo."</p>
              <p className="font-bold">— Kwame A.</p>
            </div>
            
            <div className="bg-green-800 p-6 rounded-2xl">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="mb-4 italic">"I order from them at least twice a week. Ordering via WhatsApp is so easy and delivery is always on time. Highly recommended!"</p>
              <p className="font-bold">— Sarah T.</p>
            </div>
            
            <div className="bg-green-800 p-6 rounded-2xl">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="mb-4 italic">"That Green Vitality smoothie is magic. It's so refreshing and you can taste how fresh the ingredients are. Perfect for a hot afternoon."</p>
              <p className="font-bold">— Emmanuel O.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
