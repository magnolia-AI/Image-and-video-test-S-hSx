'use client';

import { Button } from '@/components/ui/button';
import { TypingEffect } from '@/components/typing-effect';
import Image from 'next/image';

export function HeroSection() {
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-abstract.jpg"
          alt="Abstract background"
          fill
          className="object-cover opacity-10"
          priority />

        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-green-500">new-change</span>
            </h1>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold">
              <TypingEffect texts={roles} />
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              I create beautiful, functional digital experiences that solve real-world problems.
              Passionate about clean code, intuitive design, and cutting-edge technology.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <a href="#portfolio">View My Work</a>
              </Button>
            </div>
          </div>
          
          {/* Profile image */}
          <div className="relative flex-1 flex justify-center">
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image
                src="/images/hero-professional.jpg"
                alt="Professional headshot"
                fill
                className="object-cover"
                priority />

            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-secondary/20 blur-xl"></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <div className="w-8 h-12 rounded-full border-2 border-primary flex justify-center p-1">
            <div className="w-2 h-2 rounded-full bg-primary mt-1 animate-scroll"></div>
          </div>
        </div>
      </div>
      
      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </section>);

}


