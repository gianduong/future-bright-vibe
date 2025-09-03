import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export const Education = () => {
  const education = {
    institution: "Posts and Telecommunications Institute of Technology (PTIT)",
    major: "Information Technology",
    gpa: "2.85",
    location: "Vietnam",
    period: "2018 - 2022",
    description: "Comprehensive program covering software development, database management, network systems, and modern programming paradigms."
  };

  const experiences = [
    {
      company: "XIPAT",
      position: "Dev, PO",
      period: "Oct 2021 - now",
      type: "Current Position",
      responsibilities: [
        "Building apps, website, research Features",
        "PO, DevOps, FE, BE, Database",
        "Achievements and skills gained:",
        "Learn about Vue.js, C#, PostgreSQL",
        "Learn about Git, RESTful API, Swagger", 
        "Learn about teamwork, time management, and soft skills for programmers"
      ]
    },
    {
      company: "MISA",
      position: "Fullstack Web Fresher", 
      period: "June 2021 - 10/2021",
      type: "Internship",
      responsibilities: [
        "Building a website to serve Accounting work for all types of businesses provided by MISA. (MISA AMIS)",
        "FE, BE, Database",
        "Achievements and skills gained:",
        "Learn about Vue.js, C#, PostgreSQL",
        "Learn about Git, RESTful API, Swagger",
        "Learn about teamwork, time management, and soft skills for programmers"
      ]
    }
  ];

  const objectives = [
    "As a web developer with nearly 4 years of experience in web application development, I aim to become a skilled Tech Lead.",
    "I am consistently working to enhance my expertise across a wide range of areas, including UI/UX design (Figma), web development (Frontend, Backend, Database), System Administration, DevOps, and Git management.",
    "My capabilities extend from the ideation phase of a web application to its full development and ongoing maintenance."
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional journey in technology
          </p>
        </div>

        <div className="space-y-8">
          {/* Objective Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-primary/30 hover:shadow-glow transition-all duration-300 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Career Objective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {objective}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-primary/30 hover:shadow-glow transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{education.institution}</h3>
                    <p className="text-lg text-muted-foreground mb-2">Major: {education.major}</p>
                    <p className="text-muted-foreground">GPA: {education.gpa}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {education.period}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {education.location}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {education.description}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Work Experience
            </h2>
            
            {experiences.map((exp, index) => (
              <Card 
                key={exp.company}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-primary/30 hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{exp.company}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">
                        {exp.position}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </Badge>
                      <Badge 
                        variant={exp.type === "Current Position" ? "default" : "outline"}
                        className="text-center"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div>
                    <h4 className="font-medium mb-3">Main Responsibilities & Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};