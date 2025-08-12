import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  ExternalLink
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and description */}
          <div>
            <h3 className="text-xl font-bold">Portfolio</h3>
            <p className="mt-4 text-muted-foreground">
              Creating beautiful digital experiences with clean code and thoughtful design.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Theme toggle and credits */}
          <div>
            <h4 className="text-lg font-semibold">Settings</h4>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} My Portfolio. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Built with Next.js and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
