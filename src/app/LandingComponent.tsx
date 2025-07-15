"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Network, Users, Mail, Github, Twitter } from "lucide-react"
import labData from "@/data/lab-members.json"

// Icon mapping for research areas
const iconMap = {
  Zap: Zap,
  Brain: Brain,
  Network: Network,
}

export default function LandingComponent() {
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center glass sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6 text-gradient" />
          <span className="sr-only">Neural Engineering Lab</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <button 
            onClick={() => scrollToSection('research')}
            className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer transition-all duration-300 hover:text-blue-600"
          >
            Research
          </button>
          <button 
            onClick={() => scrollToSection('leader')}
            className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer transition-all duration-300 hover:text-blue-600"
          >
            Lab Leader
          </button>
          <button 
            onClick={() => scrollToSection('team')}
            className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer transition-all duration-300 hover:text-blue-600"
          >
            Team
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer transition-all duration-300 hover:text-blue-600"
          >
            Contact
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 particles">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none slide-in stagger-1">
                  <span className="text-gradient">Anderson Neural Engineering Lab</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 slide-in stagger-2">
                  Advancing the frontiers of neuromodulation, epilepsy research, and electrophysiology to develop innovative neural therapies and biomarkers at The University of Sydney.
                </p>
              </div>
              <div className="space-x-4 slide-in stagger-3">
                <Button onClick={() => scrollToSection('research')} className="glow">Learn More</Button>
                <Button variant="outline" onClick={() => scrollToSection('contact')} className="animated-border">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="research" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 slide-in">Our Research Areas</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="card-hover slide-in stagger-1">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="float">
                    <Zap className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-center">Neuromodulation</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Developing advanced neuromodulation algorithms and research methodologies for treating neurological disorders and understanding neural circuits.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover slide-in stagger-2">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="float">
                    <Brain className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-center">Epilepsy</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Investigating novel therapeutic approaches for epilepsy through advanced neuromodulation and electrophysiological techniques.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover slide-in stagger-3">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="float">
                    <Network className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-center">Electrophysiology</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Studying neural activity patterns and electrical properties of brain cells to understand and treat neurological conditions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="leader" className="w-full py-12 md:py-24 lg:py-32 particles">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 slide-in stagger-1">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{labData.labLeader.name}</h2>
                <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400 slide-in stagger-2">{labData.labLeader.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg slide-in stagger-3">
                  {labData.labLeader.description}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 slide-in stagger-4">
                  {labData.labLeader.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
                <Button asChild>
                  <a 
                    href="https://scholar.google.com/citations?user=lEI8nwQAAAAJ&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    See Lab Publications
                  </a>
                </Button>
              </div>
              <div className="flex justify-center slide-in stagger-2">
                <div className="relative">
                  <img
                    alt={labData.labLeader.name}
                    className="rounded-full"
                    height="400"
                    src={labData.labLeader.photo}
                    style={{
                      aspectRatio: "400/400",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 slide-in">Our Team</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {labData.teamMembers.map((member, index) => (
                <Card key={index} className={`card-hover slide-in stagger-${index + 1}`}>
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <div className="relative">
                      <img
                        alt={member.name}
                        className="rounded-full"
                        height="120"
                        src={member.photo}
                        style={{
                          aspectRatio: "120/120",
                          objectFit: "cover",
                        }}
                        width="120"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-center">{member.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center font-semibold">
                      {member.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                      {member.description}
                    </p>
                    {member.researchInterests.length > 0 && (
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.researchInterests.map((interest, interestIndex) => (
                          <span key={interestIndex} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                            {interest}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 particles">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 slide-in">{labData.contact.title}</h2>
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400 slide-in stagger-1">
                {labData.contact.description}
              </p>
              <p className="text-gray-500 dark:text-gray-400 slide-in stagger-2">
                {labData.contact.message}
              </p>
              <div className="flex justify-center slide-in stagger-3">
                <a
                  href={`mailto:${labData.contact.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors duration-200 glow"
                >
                  <Mail className="h-5 w-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t glass">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Neural Engineering Research Group. All rights reserved.</p>
        <div className="sm:ml-auto flex items-center space-x-4">
          <Link href="https://github.com/NEL-Projects" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}