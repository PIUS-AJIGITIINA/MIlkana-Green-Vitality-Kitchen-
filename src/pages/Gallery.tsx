export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1645696301019-35adcc18fc21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Classic Assorted Fried Rice",
      category: "food"
    },
    {
      src: "https://images.unsplash.com/photo-1610970881699-44a5587ce578?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Green Vitality Smoothie",
      category: "drinks",
      contain: true
    },
    {
      src: "https://images.unsplash.com/photo-1533745848184-3db07256e163?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Spicy Chicken Fried Rice",
      category: "food"
    },
    {
      src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Beef Fried Rice",
      category: "food"
    },
    {
      src: "https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Our Kitchen",
      category: "kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Vegetarian Fried Rice",
      category: "food"
    }
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Gallery</h1>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into our kitchen, our delicious meals, and the refreshing natural juices we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-square ${img.contain ? 'bg-gray-100' : ''}`}>
              <img 
                src={img.src} 
                alt={img.alt} 
                className={`w-full h-full ${img.contain ? 'object-contain p-4' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <p className="text-white font-medium text-lg">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
