import React, { useState } from 'react';
import { MapPin, Clock, Truck } from 'lucide-react';

export default function Order() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    items: '',
    quantity: '1',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*New Order from Website*%0A%0A*Name:* ${formData.name}%0A*Location:* ${formData.location}%0A*Items:* ${formData.items}%0A*Quantity:* ${formData.quantity}%0A*Notes:* ${formData.notes || 'None'}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/233550827113?text=${message}`, '_blank');
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Place Your Order</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we'll send it directly to our WhatsApp to confirm your order and delivery details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Order Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Order Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-shadow"
                    placeholder="Kwame Mensah"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Delivery Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-shadow"
                    placeholder="e.g. KNUST Campus, Tech Junction"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="items" className="block text-sm font-medium text-gray-700 mb-2">What would you like to order?</label>
                <textarea
                  id="items"
                  name="items"
                  required
                  rows={3}
                  value={formData.items}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-shadow"
                  placeholder="e.g. 1 Classic Assorted Fried Rice, 1 Green Vitality Smoothie"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Total Number of Packs/Bottles</label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-shadow"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">Special Instructions (Optional)</label>
                  <input
                    type="text"
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-shadow"
                    placeholder="e.g. Extra spicy, no onions"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-green hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-colors shadow-md text-lg mt-8"
              >
                Send Order via WhatsApp
              </button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-8">
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-brand-orange mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Operating Hours</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Saturday & Sunday:</span> <span className="font-medium">10:00 AM - 9:00 PM</span></li>
                <li className="flex justify-between text-red-500"><span>Monday - Friday:</span> <span className="font-medium">Closed</span></li>
              </ul>
              <p className="mt-4 text-sm text-gray-500 italic">Orders placed outside these hours will be processed the next working day.</p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-center mb-4">
                <Truck className="h-6 w-6 text-brand-green mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Delivery Info</h3>
              </div>
              <p className="text-gray-700 mb-4">We deliver across Kumasi. Delivery fees vary based on your location.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start"><MapPin className="h-4 w-4 mr-2 mt-0.5 text-brand-green flex-shrink-0" /> <span>KNUST Campus & Environs: GHS 10 - 15</span></li>
                <li className="flex items-start"><MapPin className="h-4 w-4 mr-2 mt-0.5 text-brand-green flex-shrink-0" /> <span>Adum & Central Kumasi: GHS 15 - 20</span></li>
                <li className="flex items-start"><MapPin className="h-4 w-4 mr-2 mt-0.5 text-brand-green flex-shrink-0" /> <span>Other Areas: Calculated upon order confirmation</span></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
