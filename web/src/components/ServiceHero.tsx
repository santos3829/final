import { motion } from "framer-motion";

export function ServiceHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTJzMCAyLTQgMi00LTItNC0yLTIgMi00IDItMiAyLTIgNCAyIDQgMiA0LTIgMi00IDItNCAyLTQgMi0yLTItMi00IDItNCA0LTQgNC0yIDQtMiAyIDIgNCAyIDQtMiA0LTIgNC0yIDQtMiA0IDIgNCAyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-5" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
        >
          Our Services, Your Solutions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Empowering You Through Innovation and Expertise
        </motion.p>
      </div>
    </section>
  );
}