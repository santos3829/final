import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding"
      style={{ background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(100,255,218,0.15) 0%, transparent 80%)' }}
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6 animate-fade-up">
            Welcome to REA Digital
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
            We Build Websites That Build Your Business
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: '400ms' }}>
            Transform your digital presence with our cutting-edge web development solutions
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '600ms' }}>
            <a
              href="/Contacts"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover-glow flex items-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="/Services"
              className="px-8 py-4 border border-foreground/20 rounded-lg font-medium hover:bg-foreground/5 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;