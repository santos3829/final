import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom"; // Import Link from React Router
import { BsWhatsapp } from "react-icons/bs";

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 right-4 z-50 sm:bottom-8 sm:right-8"
    >
      <Link to="https://wa.me/qr/IJJDJ6XFHNJPB1"> {/* WhatsApp link */}
        <Button
          size="lg"
          className="p-3 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow flex items-center justify-center"
        >
          <BsWhatsapp className="mr-2 h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
          <span className="hidden sm:inline">Contact Us</span>
        </Button>
      </Link>
    </motion.div>
  );
}
