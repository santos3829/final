import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, BadgeCheck } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import r1 from '../Photos/r1.jpg';
import r2 from '../Photos/r2.jpg';
import r3 from '../Photos/wr3.jpg';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "REA Digital transformed our online presence completely. Their attention to detail and innovative approach exceeded our expectations. The team's dedication to quality and timely delivery made the entire process smooth and enjoyable.",
    rating: 5,
    image: r1,
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    content: "Working with REA Digital was a game-changer for our business. Their expertise in web development is unmatched. They didn't just build a website; they created a powerful digital platform that drives real results.",
    rating: 5,
    image: r2,
  },
  {
    name: "Emma Williams",
    role: "Marketing Director, InnovateCo",
    content: "The team at REA Digital delivered a website that perfectly captures our brand identity. Their attention to detail and creative solutions helped us stand out in a competitive market. Highly recommended!",
    rating: 5,
    image: r3,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('left');  // Track direction for animation

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const intervalRef = useRef();

  useEffect(() => {
    if (!sectionRef.current) return;

    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 20 },
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

    // Carousel animation
    gsap.fromTo(carouselRef.current,
      { opacity: 0, x: -50 },
      {
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top 70%',
        },
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
      }
    );

    // Start automatic rotation
    intervalRef.current = window.setInterval(() => {
      setDirection('left');
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handlePrevious = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDirection('right');  // Set direction to right when going back
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDirection('left');  // Set direction to left when going forward
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Testimonial slide animation component with an updated ending animation
  const TestimonialSlide = ({ testimonial, direction }) => {
    const slideRef = useRef(null);

    useEffect(() => {
      gsap.fromTo(slideRef.current, {
        x: direction === 'left' ? -100 : 100,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      });

      // Add a slight slide to the right before the next testimonial
      return () => {
        gsap.to(slideRef.current, {
          x: direction === 'left' ? 50 : -50,  // Slide slightly to the right/left
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
        });
      };
    }, [testimonial, direction]);

    return (
      <div ref={slideRef} className="glass-card rounded-xl p-8 md:p-12">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
          {/* Client Image */}
          <div className="mx-auto md:mx-0">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 hover-glow">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1">
                <BadgeCheck className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="text-left">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-lg md:text-xl mb-6 text-foreground/80 italic">
              "{testimonial.content}"
            </p>
            <div>
              <h4 className="font-semibold text-lg relative inline-block">
                {testimonial.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/50" />
              </h4>
              <p className="text-foreground/60">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="section-padding bg-secondary relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div ref={carouselRef} className="max-w-5xl mx-auto relative">
          {/* Testimonial slide component */}
          <TestimonialSlide
            testimonial={testimonials[currentIndex]}
            direction={direction}
          />

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-4' : 'bg-foreground/20'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full border border-foreground/20 hover:bg-foreground/5 transition-colors hover-glow"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-foreground/20 hover:bg-foreground/5 transition-colors hover-glow"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
