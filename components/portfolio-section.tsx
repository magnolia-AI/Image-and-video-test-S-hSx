'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for managing online store operations with real-time analytics.',
    image: '/images/project-ecommerce-dashboard.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    longDescription: 'This e-commerce dashboard provides merchants with a powerful tool to manage their online stores. It features real-time analytics, inventory management, order processing, and customer insights. The intuitive interface allows users to quickly access key metrics and make data-driven decisions.',
    features: [
      'Real-time sales analytics and reporting',
      'Inventory management with low stock alerts',
      'Order processing and fulfillment tracking',
      'Customer behavior analysis and segmentation',
      'Multi-store management capabilities',
      'Customizable dashboard widgets'
    ]
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for teams to collaborate on projects and track progress.',
    image: '/images/project-task-management.jpg',
    technologies: ['Next.js', 'Firebase', 'Material UI', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
    longDescription: 'This task management application streamlines team collaboration with an intuitive interface and powerful features. Users can create projects, assign tasks, set deadlines, and track progress in real-time. The app includes notifications, file sharing, and integration with popular productivity tools.',
    features: [
      'Project and task creation with due dates',
      'Team collaboration and commenting',
      'File attachments and sharing',
      'Progress tracking with visual indicators',
      'Customizable workflows and statuses',
      'Mobile-responsive design'
    ]
  },
  {
    id: 3,
    title: 'Health & Fitness Tracker',
    description: 'A comprehensive health tracking application with workout plans and nutrition logging.',
    image: '/images/project-health-fitness.jpg',
    technologies: ['React Native', 'Express', 'PostgreSQL', 'GraphQL'],
    liveUrl: '#',
    githubUrl: '#',
    longDescription: 'This health and fitness tracker helps users achieve their wellness goals through personalized workout plans, nutrition logging, and progress tracking. The app integrates with wearable devices and provides detailed analytics to help users understand their health trends.',
    features: [
      'Personalized workout plans and routines',
      'Nutrition logging with calorie tracking',
      'Integration with fitness wearables',
      'Progress photos and body measurements',
      'Community challenges and social features',
      'Health insights and trend analysis'
    ]
  },
  {
    id: 4,
    title: 'Travel Planning Platform',
    description: 'An all-in-one travel planning solution with itinerary management and booking features.',
    image: '/images/project-travel-planner.jpg',
    technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    longDescription: 'This travel planning platform simplifies trip organization by combining itinerary planning, booking management, and travel documentation in one place. Users can create detailed itineraries, book flights and accommodations, and access important travel information offline.',
    features: [
      'Interactive itinerary planning',
      'Flight and accommodation booking',
      'Offline access to travel documents',
      'Local recommendations and maps',
      'Expense tracking and budgeting',
      'Travel sharing with friends and family'
    ]
  },
  {
    id: 5,
    title: 'Financial Dashboard',
    description: 'A personal finance management tool with investment tracking and expense categorization.',
    image: '/images/project-finance-dashboard.jpg',
    technologies: ['Angular', 'NestJS', 'MongoDB', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    longDescription: 'This financial dashboard provides users with a comprehensive view of their financial health. It aggregates data from various accounts, tracks investments, categorizes expenses, and provides actionable insights to improve financial well-being.',
    features: [
      'Account aggregation from multiple institutions',
      'Investment portfolio tracking and performance',
      'Automated expense categorization',
      'Budget creation and tracking',
      'Financial goal setting and progress',
      'Customizable reports and analytics'
    ]
  },
  {
    id: 6,
    title: 'Learning Management System',
    description: 'An educational platform for creating and delivering online courses with interactive content.',
    image: '/images/project-learning-platform.jpg',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'WebRTC'],
    liveUrl: '#',
    githubUrl: '#',
    longDescription: 'This learning management system enables educators to create engaging online courses with interactive content, assessments, and real-time communication tools. Students can access courses on any device and track their progress through personalized learning paths.',
    features: [
      'Course creation with multimedia content',
      'Interactive quizzes and assessments',
      'Real-time video conferencing',
      'Progress tracking and certificates',
      'Discussion forums and peer interaction',
      'Mobile-responsive learning experience'
    ]
  }
]

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Apps' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'ui', name: 'UI/UX Design' }
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  // In a real app, you would filter projects based on category
  const filteredProjects = projects

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">My Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my passion for creating 
            meaningful digital experiences.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex justify-center mb-12">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-5 gap-2">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-4 py-2"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

