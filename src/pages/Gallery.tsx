export default function Gallery() {
  const images = [
    {
      src: "https://i.pinimg.com/originals/f5/81/68/f581687ef873096f37c1cfddb5c0f5ba.jpg",
      alt: "Classic Assorted Fried Rice",
      category: "food"
    },
    {
      src: "https://i.pinimg.com/originals/f1/57/16/f157168a2488f4e47ff65add90091c74.jpg",
      alt: "Spicy Chicken Fried Rice",
      category: "food"
    },
    {
      src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Beef Fried Rice",
      category: "food"
    },
    {
      src: "https://i.pinimg.com/originals/ef/84/ea/ef84ea9f1e4032197c05167e6497c6a9.jpg",
      alt: "Grilled Chicken Green Sauce Rice",
      category: "food"
    },
    {
      src: "https://i.pinimg.com/originals/b4/62/0e/b4620e0d8925c5e675f845680964277b.jpg",
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
            A glimpse into our kitchen and our delicious, freshly prepared meals.
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
