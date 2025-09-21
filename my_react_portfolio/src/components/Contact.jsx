import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
     <section id="contact" className="py-12 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-purple-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="max-w-2xl mx-auto grid gap-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <Mail size={24} className="text-purple-600" />
          <span>ambikajaiswal59@gmail.com</span>
        </div>

        <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <Phone size={24} className="text-purple-600" />
          <span>7374818371</span>
        </div>

        <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <MapPin size={24} className="text-purple-600" />
          <span>Hauz-Khas, New Delhi, India</span>
        </div>
      </motion.div>
    </section>
  );
}
