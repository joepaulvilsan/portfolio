import React from 'react';
// Import only the icons you need
import { Linkedin, Mail, Shell } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-muted/50 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/joepaul-vilsan"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card/60 backdrop-blur-sm rounded-full border border-border/50 hover:scale-110 transition-transform hover:bg-blue-600 hover:text-white group"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            {/* Dev Community */}
            <a
              href="https://dev.to/joepaulvilsan_7"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card/60 backdrop-blur-sm rounded-full border border-border/50 hover:scale-110 transition-transform hover:bg-blue-600 hover:text-white group"
            >
              <Shell className="h-5 w-5" />
            </a>

            {/* Mail */}
            <a
              href="mailto:joepaulvilsan8@gmail.com"
              className="p-3 bg-card/60 backdrop-blur-sm rounded-full border border-border/50 hover:scale-110 transition-transform hover:bg-blue-600 hover:text-white group"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2025 Joepaul Vilsan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};