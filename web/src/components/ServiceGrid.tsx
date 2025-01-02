import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Shield, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that engage and convert"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Cybersecurity",
    description: "Protect your digital assets with our security solutions"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment services"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance",
    description: "Optimization and speed improvements for your applications"
  }
];

export function ServiceGrid() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-6 rounded-lg backdrop-blur-lg bg-white/[0.02] border border-white/10 
            hover:bg-white/[0.05] hover:border-primary/50 transform transition-transform duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
