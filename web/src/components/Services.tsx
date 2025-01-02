import { useEffect, useRef } from 'react';
import { Code, Smartphone, ShoppingCart, Wrench } from 'lucide-react';
import { Button } from './ui/button';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code,
    title: 'Custom Website Design',
    description: 'We craft stunning and tailored websites that align with your vision.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Development',
    description: 'Ensuring seamless performance on all devices and screen sizes.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Empowering your online store with secure, user-friendly platforms.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Keeping your website updated and running smoothly.',
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    // Title animation with immediate visibility
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -20 },
      {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }
    );

    // Cards staggered animation with maintained visibility
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 70%',
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-screen bg-secondary py-16 px-6 sm:py-20 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/20 rounded-full blur-3xl -top-24 sm:-top-48 -left-24 sm:-left-48 animate-pulse" />
        <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/20 rounded-full blur-3xl -bottom-24 sm:-bottom-48 -right-24 sm:-right-48 animate-pulse" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-16 sm:mb-20">
          <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-primary to-blue-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-xl mx-auto">
            Transforming ideas into powerful digital experiences
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={(el) => {
            cardsRef.current = el;
            inViewRef(el);
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                relative group p-6 sm:p-8 
                rounded-xl
                backdrop-blur-lg bg-white/[0.02] border border-white/10
                hover:bg-white/[0.05] hover:border-primary/50
                transform hover:scale-105 hover:-translate-y-2
                transition-all duration-300 ease-out
              "
              style={{
                boxShadow: '0 0 30px rgba(100,255,218,0.1)',
              }}
            >
              {/* Icon Container */}
              <div className="w-12 sm:w-16 h-12 sm:h-16 mb-4 sm:mb-6 rounded-lg bg-primary/10 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <service.icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90">
                {service.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 -z-10 bg-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
        <Button
  size="lg"
  className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
  onClick={() => window.location.href = '/Services'}
>
  Get Started Today
  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
