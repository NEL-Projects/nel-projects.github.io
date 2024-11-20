import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Network, Users, Mail, Github, Twitter } from "lucide-react"

export default function LandingComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6" />
          <span className="sr-only">Neural Engineering Lab</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#research">
            Research
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#leader">
            Lab Leader
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#team">
            Team
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  USYD Neural Engineering 
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Advancing the frontiers of neuroscience and engineering to develop innovative brain-computer interfaces and neural therapies.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Learn More</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="research" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Research Areas</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Zap className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">Neuromodulation</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Developing cutting-edge brain-computer interfaces for enhanced human-machine interaction.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Network className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">Epilepsy</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Exploring artificial neural networks inspired by biological systems for advanced AI applications.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Brain className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">Neuroimaging</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Investigating novel techniques for modulating neural activity to treat neurological disorders.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Brain className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">Preclinical Experimentation</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Investigating novel techniques for modulating neural activity to treat neurological disorders.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Brain className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">Computational Modelling</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Investigating novel techniques for modulating neural activity to treat neurological disorders.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Brain className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">AI & ML</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Investigating novel techniques for modulating neural activity to treat neurological disorders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="leader" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Dr. Daria Anderson</h2>
                <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400">Lab Director & Principal Investigator</h3>
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  Dr. Anderson is a pioneering researcher in the field of neural engineering, with over 15 years of experience in developing brain-computer interfaces. Her groundbreaking work has led to significant advancements in neuroprosthetics and neural rehabilitation techniques.
                </p>
                <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                  <li>Ph.D. in Neuroscience from Stanford University</li>
                  <li>Recipient of the Presidential Early Career Award for Scientists and Engineers</li>
                  <li>Published over 50 peer-reviewed articles in top-tier journals</li>
                  <li>Holds 5 patents in neural interface technologies</li>
                </ul>
                <Button variant="outline">Read Full Bio</Button>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Dr. Daria Anderson"
                  className="rounded-full"
                  height="400"
                  src="/placeholder.svg?height=400&width=400"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Team</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <img
                      alt="Team member"
                      className="rounded-full"
                      height="120"
                      src="/placeholder.svg?height=120&width=120"
                      style={{
                        aspectRatio: "120/120",
                        objectFit: "cover",
                      }}
                      width="120"
                    />
                    <h3 className="text-2xl font-bold">Dr. Jane Doe</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                      Lead Researcher in Neural Interfaces
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Us</h2>
            <div className="mx-auto max-w-2xl space-y-4">
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Textarea placeholder="Your Message" />
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Neural Engineering Research Group. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="#">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="#">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}