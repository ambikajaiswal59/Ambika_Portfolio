import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-950 text-gray-200 relative overflow-hidden">
      {/* New background pattern: subtle grid */}
      <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><pattern id=\"smallGrid\" width=\"8\" height=\"8\" patternUnits=\"userSpaceOnUse\"><path d=\"M 8 0 L 0 0 0 8\" fill=\"none\" stroke=\"#383838\" stroke-width=\"0.5\"/></pattern><rect width=\"100%\" height=\"100%\" fill=\"url(#smallGrid)\" /></svg>')" }}></div>

      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        {/* Left Side: Contact Form */}
        <motion.div
          className="w-full lg:w-1/2 p-8 bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-white">Send me a message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 px-6 rounded-full text-base font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform-gpu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side: Contact Information */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-6 p-6 bg-gray-900 border border-gray-800 rounded-2xl transition-colors duration-300">
            <Mail size={28} className="text-purple-400 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-100">Email</span>
              <p className="text-sm text-gray-400 mt-1">ambikajaiswal59@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 bg-gray-900 border border-gray-800 rounded-2xl transition-colors duration-300">
            <Phone size={28} className="text-pink-400 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-100">Phone</span>
              <p className="text-sm text-gray-400 mt-1">7374818371</p>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 bg-gray-900 border border-gray-800 rounded-2xl transition-colors duration-300">
            <MapPin size={28} className="text-yellow-400 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-100">Location</span>
              <p className="text-sm text-gray-400 mt-1">Hauz-Khas, New Delhi, India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}