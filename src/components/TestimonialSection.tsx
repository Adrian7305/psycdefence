
import React, { useState, useRef, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "PSYC's drone technology has the potential to completely transform how we approach elephant tranquilization. The expected improvements in precision and safety could be game-changing.",
    author: "Sourav Mohitra",
    role: "Wild Vision AI"
  },
  {
    quote: "If PSYC's system is successfully deployed, we anticipate a significant reduction in staff injuries and a major decrease in stress levels for the animals during operations.",
    author: "Dr. J L Srinivas",
    role: "Former Veterinary Officer",
  },
  {
    quote: "What PSYC is building aligns perfectly with the principles of sustainable development. It's not just about solving today's problems — it's about creating resilient systems for the future of conservation.",
    author: "Dr. A.Ravindra",
    role: "Center for Sustainable Development"
  }
];
  
const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 20
    },
  });

  const autoplayRef = useRef<NodeJS.Timeout>();
  
  // Autoplay functionality
  useEffect(() => {
    const slider = instanceRef.current;
    
    const autoplay = () => {
      autoplayRef.current = setTimeout(() => {
        if (slider) slider.next();
      }, 5000); // Change slide every 5 seconds
    };
    
    autoplay();
    
    slider?.on("slideChanged", () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
      autoplay();
    });
    
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    };
  }, [instanceRef]);

  const handleArrowClick = (direction: 'left' | 'right') => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    if (direction === 'left') {
      instanceRef.current?.prev();
    } else {
      instanceRef.current?.next();
    }
  };

  return (
    <section className="py-20 md:py-32 bg-[#0F131A] text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,111,0,0.1),transparent_70%)] opacity-30"></div>
      
      <div className="section-container relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="text-gradient">Reactions to Our Vision</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-psyc-orange to-transparent"></div>
          </h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-12">
          <div ref={sliderRef} className="keen-slider min-h-[250px] md:min-h-[200px]">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="keen-slider__slide">
                <div className="glass-card p-8 md:p-10 rounded-xl text-center">
                  <blockquote className="text-lg md:text-xl text-white/90 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="font-bold text-psyc-orange">{testimonial.author}</div>
                  <div className="text-white/70 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
          
          {loaded && instanceRef.current && (
            <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
              <button
                onClick={() => handleArrowClick('left')}
                className="arrow-left bg-black/50 backdrop-blur-sm text-white p-3 rounded-full border border-white/10 hover:border-psyc-orange/50 transition-colors pointer-events-auto"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={() => handleArrowClick('right')}
                className="arrow-right bg-black/50 backdrop-blur-sm text-white p-3 rounded-full border border-white/10 hover:border-psyc-orange/50 transition-colors pointer-events-auto"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          )}
          
          {/* Progress bar instead of dots */}
          {loaded && instanceRef.current && (
            <div className="mt-8 bg-black/30 h-1 rounded-full overflow-hidden">
              <div 
                className="h-full bg-psyc-orange transition-all duration-300"
                style={{ 
                  width: `${(currentSlide + 1) / testimonials.length * 100}%` 
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
