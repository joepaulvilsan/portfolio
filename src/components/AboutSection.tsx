
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import myProfilePic from '@/photos/photo-2.jpg';

export const AboutSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo Column */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Outer container for shadow and gradient border */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  {/* Inner container to hold the image, ensure clipping */}
                  <div className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-full overflow-hidden bg-white">
                    <img 
                      src={myProfilePic}
                      alt="Joepaul Vilsan"
                      className="w-full h-full object-cover object-top" // object-top helps position face
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Column */}
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I am a recent B.Tech graduate in Computer Science and Business Systems, passionate about applying my skills to real-world challenges. My professional experience began at Tata Consultancy Services (TCS), where I interned on projects involving machine learning and signal processing. I am now eager to leverage my academic foundation and hands-on experience to contribute to innovative tech solutions.
              </p>
              
              

             <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full hover:scale-105 transition-transform"
                asChild // 1. Add this prop
              >
                {/* 2. Add the <a> tag as the child */}
                <a 
                  href="/Joepaul_Vilsan_Resume.pdf" // 3. Set the path to your file in /public
                  download="Joepaul_Vilsan_Resume.pdf" // 4. This tells the browser to download it
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
