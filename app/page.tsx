import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { AboutSection } from '@/components/about-section'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        
        <section id="contact" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? Get in touch and let's create something amazing together.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

