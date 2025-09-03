import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, Code } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Omega Facebook Pixel Ad Report",
      period: "2021 - now",
      customer: "Shopify merchants",
      teamSize: "4 - 14",
      position: "Developer",
      description: "Rise above Facebook Signal Loss with Meta Pixel, Advanced Conversion API & Facebook Product Feed",
      link: "https://apps.shopify.com/facebook-multi-pixels",
      responsibilities: [
        "Analysis and design flow, logic features",
        "Code Front end, backend",
        "Research feature", 
        "Code tracking events",
        "Set up core, source code, config webpack, Supervisor",
        "Create web panel extensions, checkout UI extensions",
        "Review code, setup and build Staging",
        "Optimize SEO UI UX, Performance",
        "Optimize queue",
        "Support"
      ],
      technologies: ["React.js", "PHP", "Laravel", "Node.js", "MongoDB", "Redux", "TypeScript", "React Query", "Webpack"]
    },
    {
      title: "Twoowls - Smart Multi Pixels",
      period: "2024 - now", 
      customer: "Wix merchants",
      teamSize: "1",
      position: "All",
      description: "Track ads: Facebook, Tiktok, Snapchat, X & more",
      link: "https://www.wix.com/app-market/web-solution/omega-multi-facebook-pixels",
      responsibilities: [
        "PO / BA / DevOps / FE / BE"
      ],
      technologies: ["React.js", "PHP", "Laravel", "Node.js", "MongoDB", "Redux", "Webpack"]
    },
    {
      title: "Omega Pixel - Tiktok Pixels", 
      period: "2021 - now",
      customer: "Shopify merchants",
      teamSize: "4 - 14",
      position: "Developer",
      responsibilities: [
        "Analysis and design flow, logic features",
        "Code Front end, backend",
        "Research feature",
        "Code tracking events", 
        "Set up core, source code, config webpack, Supervisor",
        "Create web panel extensions, checkout UI extensions",
        "Review code, setup and build Staging",
        "Optimize SEO UI UX, Performance",
        "Optimize queue",
        "Support"
      ],
      technologies: ["React.js", "PHP", "Laravel", "Node.js", "MongoDB", "Redux", "Webpack"]
    },
    {
      title: "Omega Google Shopping Feed",
      period: "2021 - now",
      customer: "Shopify merchants", 
      teamSize: "4 - 8",
      position: "Developer",
      description: "Optimize your Google Shopping by syncing data-rich product feeds to Google Merchant hourly",
      responsibilities: [
        "Analysis and design flow, logic features",
        "Code Front end, backend", 
        "Research feature",
        "Optimize code",
        "Review code, setup and build Staging",
        "Working with outsource"
      ],
      technologies: ["React.js", "PHP", "Laravel", "Redux"]
    },
    {
      title: "DingDoong: Local Delivery Date",
      period: "2021 - 2022",
      customer: "Shopify merchants",
      teamSize: "4 - 14", 
      position: "Developer",
      description: "Plan your delivery schedule ahead with date picker for shipping, local delivery and store pickup",
      responsibilities: [
        "Setup source code frontend",
        "Code Front end, backend"
      ],
      technologies: ["React.js", "PHP", "Laravel", "Redux"]
    },
    {
      title: "Website Twoowls",
      period: "2021",
      customer: "Shopify merchants",
      teamSize: "4 - 14",
      position: "Developer", 
      description: "Twoowls Brand Marketing",
      responsibilities: [
        "Code front end"
      ],
      technologies: ["React.js", "TypeScript", "Bootstrap5"]
    },
    {
      title: "Website Dingdoong", 
      period: "2021",
      customer: "Shopify merchants",
      teamSize: "4 - 14",
      position: "Developer",
      description: "Dingdoong Brand Marketing", 
      responsibilities: [
        "Code front end"
      ],
      technologies: ["React.js", "TypeScript", "Bootstrap5"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions I've built for Shopify and Wix merchants
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-primary/30 hover:shadow-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                      {project.title}
                      {project.link && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.period}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">Team Size:</span> {project.teamSize}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Code className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">Position:</span> {project.position}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Customer:</span> {project.customer}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                      {project.responsibilities.length > 3 && (
                        <li className="text-xs text-muted-foreground/70">
                          +{project.responsibilities.length - 3} more responsibilities
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};