'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter 
} from 'lucide-react'

export function ContactForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Contact form */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com" 
                required 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <Input 
              id="subject" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this regarding?" 
              required 
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..." 
              rows={5} 
              required 
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
      
      {/* Contact information */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-muted-foreground">hello@example.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-6 w-6 text-primary mt-1 mr-4" />
            <div>
              <h4 className="font-medium">Phone</h4>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-primary mt-1 mr-4" />
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground">San Francisco, CA</p>
              <p className="text-muted-foreground">Open to remote opportunities worldwide</p>
            </div>
          </div>
        </div>
        
        {/* Social links */}
        <div className="mt-10">
          <h4 className="font-medium mb-4">Connect with me</h4>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a href="#" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-10 p-6 bg-muted rounded-lg">
          <h4 className="font-medium mb-2">Working Hours</h4>
          <p className="text-muted-foreground text-sm">
            Monday - Friday: 9:00 AM - 6:00 PM (PST)
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Responses typically within 24 hours
          </p>
        </div>
      </div>
    </div>
  )
} 
