import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink, Download, CheckCircle } from "lucide-react";

export const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issueDate: "2023",
      status: "Valid",
      description: "Demonstrated expertise in designing distributed systems on AWS platform",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
      credentialId: "AWS-SAA-2023-001",
      type: "Professional"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      issueDate: "2023",
      status: "Valid", 
      description: "Proven skills in Kubernetes cluster administration and orchestration",
      skills: ["Kubernetes", "Container Orchestration", "DevOps", "Infrastructure"],
      credentialId: "CKA-2023-001",
      type: "Professional"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      issueDate: "2022",
      status: "Valid",
      description: "Advanced React.js development skills and best practices",
      skills: ["React.js", "JavaScript", "Frontend Development", "Component Architecture"],
      credentialId: "META-REACT-2022",
      type: "Technology"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      issueDate: "2022",
      status: "Valid",
      description: "Database design and development with MongoDB",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation"],
      credentialId: "MONGO-DEV-2022",
      type: "Database"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      issueDate: "2021",
      status: "Valid",
      description: "Containerization and Docker orchestration expertise",
      skills: ["Docker", "Containerization", "DevOps", "Microservices"],
      credentialId: "DOCKER-2021-001",
      type: "DevOps"
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      issueDate: "2021",
      status: "Valid",
      description: "Web analytics and digital marketing insights",
      skills: ["Analytics", "Digital Marketing", "Data Analysis", "SEO"],
      credentialId: "GA-CERT-2021",
      type: "Marketing"
    }
  ];

  const achievements = [
    {
      title: "Top Performer 2023",
      description: "Recognized for outstanding contribution to product development at XIPAT",
      year: "2023"
    },
    {
      title: "Innovation Award",
      description: "Created automated deployment pipeline reducing deployment time by 70%",
      year: "2022"
    },
    {
      title: "Team Lead Recognition",
      description: "Successfully led 3 major projects with 100% on-time delivery",
      year: "2022"
    }
  ];

  const getCertificateTypeColor = (type: string) => {
    const colors = {
      "Professional": "bg-gradient-primary",
      "Technology": "bg-gradient-secondary", 
      "Database": "bg-gradient-accent",
      "DevOps": "bg-gradient-primary",
      "Marketing": "bg-gradient-secondary"
    };
    return colors[type as keyof typeof colors] || "bg-gradient-primary";
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Certificates</span> & Awards
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and recognitions that validate my expertise
          </p>
        </div>

        <div className="space-y-12">
          {/* Certificates Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up">
              Professional Certifications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <Card 
                  key={cert.credentialId}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-primary/30 hover:shadow-glow transition-all duration-300 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-10 h-10 ${getCertificateTypeColor(cert.type)} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <Award className="w-5 h-5 text-white" />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {cert.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl mb-1">{cert.title}</CardTitle>
                        <CardDescription className="font-medium">
                          {cert.issuer}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {cert.issueDate}
                        </Badge>
                        <Badge variant="default" className="flex items-center gap-1 bg-green-500/20 text-green-600 border-green-500/30">
                          <CheckCircle className="w-3 h-3" />
                          {cert.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-sm">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <span className="text-xs text-muted-foreground">
                        ID: {cert.credentialId}
                      </span>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-xs">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up">
              Achievements & Recognition
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={achievement.title}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-primary/30 hover:shadow-glow transition-all duration-300 animate-fade-in-up text-center group"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Award className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <Badge variant="outline">{achievement.year}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '900ms' }}>
            <Card className="bg-gradient-primary/10 border-primary/20 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Want to verify these credentials?</h3>
                <p className="text-muted-foreground mb-6">
                  All certificates can be independently verified through their respective issuing organizations.
                </p>
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Request Verification Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};