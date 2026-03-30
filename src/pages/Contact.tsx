import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Get In Touch</h1>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question, feedback, or want to place a large order? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-orange-50 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone / WhatsApp</h3>
                  <p className="text-gray-600">055 082 7113</p>
                  <a 
                    href="https://wa.me/233550827113" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-green font-medium mt-2 hover:underline"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" /> Chat with us
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-50 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">Kumasi Technical University<br />Kumasi, Ashanti Region<br />Ghana</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-50 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">hello@freshplategh.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-brand-orange hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-brand-orange hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-sm h-[400px] lg:h-auto min-h-[400px]">
            {/* Using a placeholder map since we don't have an exact API key, but in a real app this would be an iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.668748184561!2d-1.621215684714659!3d6.688006995163991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f8c8b4b7b1%3A0x6b8b1b0b0b0b0b0b!2sKumasi%20Technical%20University!5e0!3m2!1sen!2sgh!4v1620000000000!5m2!1sen!2sgh" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}
