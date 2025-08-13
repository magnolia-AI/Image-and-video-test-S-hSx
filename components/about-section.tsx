'use client'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { 
  Calendar, 
  Download, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Palette,
  Database,
  Globe
} from 'lucide-react'

const skills = [
  { name: 'React', level: 95, icon: Code },
  { name: 'TypeScript', level: 90, icon: Code },
  { name: 'Next.js', level: 85, icon: Code },
  { name: 'Node.js', level: 80, icon: Code },
  { name: 'UI/UX Design', level: 75, icon: Palette },
  { name: 'MongoDB', level: 70, icon: Database },
  { name: 'Python', level: 65, icon: Code },
  { name: 'AWS', level: 60, icon: Globe }
]

const experience = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2020 - Present',
    description: 'Leading frontend development for enterprise SaaS products, mentoring junior developers, and implementing modern UI/UX practices.'
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    period: '2018 - 2020',
    description: 'Developed and maintained multiple web applications using React, Node.js, and PostgreSQL. Collaborated with design team to implement responsive interfaces.'
  },
  {
    id: 3,
    title: 'Junior Web Developer',
    company: 'WebCraft Studios',
    period: '2016 - 2018',
    description: 'Built client websites using HTML, CSS, JavaScript, and WordPress. Assisted in UI/UX design and implementation.'
  }
]

const education = [
  {
    id: 1,
    degree: 'MSc in Computer Science',
    institution: 'Tech University',
    period: '2014 - 2016',
    description: 'Specialized in Human-Computer Interaction and Web Technologies.'
  },
  {
    id: 2,
    degree: 'BSc in Software Engineering',
    institution: 'State College',
    period: '2010 - 2014',
    description: 'Focused on software development methodologies and database systems.'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal story */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              I'm a passionate full-stack developer with over 8 years of experience creating 
              digital solutions that make a difference. My journey began with a curiosity about 
              how things work, which led me to pursue computer science and eventually specialize 
              in web technologies.
            </p>
            <p className="text-muted-foreground mb-4">
              I thrive at the intersection of design and technology, believing that great products 
              are built when both user experience and technical excellence are prioritized. 
              I'm constantly learning new technologies and methodologies to stay at the forefront 
              of web development.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me hiking, reading tech blogs, or contributing 
              to open-source projects. I believe in continuous growth and giving back to the 
              developer community.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="px-6">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="px-6" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          {/* Skills visualization */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Icon className="h-5 w-5 mr-2 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                )
              })}
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Technologies I Use</h4>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Figma', 'Jest'].map((tech, index) => (
                  <Badge key={index} variant="secondary" className="py-1 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Experience and Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          {/* Experience */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-primary" />
                <h3 className="text-xl font-semibold">Work Experience</h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative pl-8 border-l-2 border-primary/20">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold">{exp.title}</h4>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="mt-2 text-muted-foreground text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Education */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="relative pl-8 border-l-2 border-primary/20">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="mt-2 text-muted-foreground text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
