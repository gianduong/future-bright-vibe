import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, BookOpen, Code2, Database, Cloud, Cpu, Layout, Shield, Zap, Globe } from "lucide-react";

interface KnowledgeItem {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  image?: string;
  tags: string[];
  icon: any;
}

const knowledgeBase: KnowledgeItem[] = [
  // Database Category
  {
    id: "db-1",
    title: "SQL Execution Plans và Database Optimization",
    category: "Database",
    description: "Hiểu về cách database thực thi câu lệnh và tối ưu hóa performance",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    content: `SQL Execution Plans là chiến lược thực thi của câu lệnh trong database. Khi bạn gửi một câu lệnh SQL, database sẽ tạo một execution plan để xác định cách tối ưu nhất để truy xuất dữ liệu.

**Các thành phần chính:**

1. **Parse & Compile**: Database phân tích cú pháp và biên dịch câu lệnh
2. **Optimization**: Tìm cách thực thi hiệu quả nhất
3. **Execution**: Thực thi plan đã được chọn

**Best Practices:**

- Sử dụng EXPLAIN/ANALYZE để xem execution plan
- Tối ưu hóa với indexes phù hợp
- Tránh SELECT * khi không cần thiết
- Sử dụng JOIN thay vì subqueries khi có thể`,
    tags: ["SQL", "Database", "Performance", "Optimization"],
    icon: Database
  },
  {
    id: "db-2",
    title: "Database Indexing Strategies",
    category: "Database",
    description: "Các chiến lược tạo và sử dụng index hiệu quả",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    content: `Database indexes là cấu trúc dữ liệu giúp tăng tốc độ truy vấn.

**Các loại Index:**

1. **B-Tree Index**: Index mặc định, tốt cho range queries
2. **Hash Index**: Tốt cho equality lookups
3. **Full-Text Index**: Cho text search
4. **Composite Index**: Index trên nhiều columns

**Khi nào nên tạo Index:**
- Columns trong WHERE clause
- Foreign keys
- Columns dùng trong JOIN
- Columns dùng trong ORDER BY

**Khi nào KHÔNG nên:**
- Tables nhỏ
- Columns có ít unique values
- Tables có nhiều INSERT/UPDATE/DELETE`,
    tags: ["Database", "Index", "Performance"],
    icon: Database
  },
  {
    id: "db-3",
    title: "Database Transactions và ACID Properties",
    category: "Database",
    description: "Hiểu về transactions và các thuộc tính ACID",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    content: `Transactions đảm bảo tính toàn vẹn của dữ liệu trong database.

**ACID Properties:**

**A - Atomicity**: Tất cả hoặc không có gì
- Transaction thành công hoàn toàn hoặc rollback
- Không có trạng thái trung gian

**C - Consistency**: Dữ liệu luôn ở trạng thái hợp lệ
- Tuân thủ constraints
- Tuân thủ business rules

**I - Isolation**: Các transactions không ảnh hưởng lẫn nhau
- Read Uncommitted
- Read Committed
- Repeatable Read
- Serializable

**D - Durability**: Dữ liệu được lưu vĩnh viễn
- Sau khi commit, dữ liệu không mất
- Ngay cả khi system crash`,
    tags: ["Database", "Transactions", "ACID"],
    icon: Database
  },

  // Frontend Category
  {
    id: "fe-1",
    title: "React Performance Optimization",
    category: "Frontend",
    description: "Các kỹ thuật tối ưu hóa performance cho React applications",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    content: `React cung cấp nhiều công cụ để tối ưu hóa performance của ứng dụng.

**Các kỹ thuật chính:**

1. **useMemo & useCallback**: Tránh re-render không cần thiết
2. **React.memo**: Memoize component
3. **Code Splitting**: Chia nhỏ bundle với lazy loading
4. **Virtualization**: Render danh sách dài hiệu quả

**Example với useMemo:**

\`\`\`jsx
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);
\`\`\`

**Key Points:**
- Chỉ optimize khi cần thiết
- Đo lường performance trước khi optimize
- Sử dụng React DevTools Profiler`,
    tags: ["React", "Performance", "JavaScript", "Frontend"],
    icon: Code2
  },
  {
    id: "fe-2",
    title: "Modern CSS: Grid và Flexbox",
    category: "Frontend",
    description: "Mastering CSS Grid và Flexbox cho responsive layouts",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
    content: `CSS Grid và Flexbox là hai công cụ mạnh mẽ cho layout.

**Flexbox - One Dimensional Layout:**
- Tốt cho layouts một chiều (row hoặc column)
- Phân phối space giữa items
- Alignment dễ dàng

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
\`\`\`

**CSS Grid - Two Dimensional Layout:**
- Tốt cho layouts phức tạp 2 chiều
- Định nghĩa rows và columns
- Items có thể span nhiều cells

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
\`\`\`

**Khi nào dùng gì:**
- Flexbox: Navigation, centering, simple layouts
- Grid: Page layouts, complex grids, magazine-style`,
    tags: ["CSS", "Layout", "Responsive", "Frontend"],
    icon: Layout
  },
  {
    id: "fe-3",
    title: "TypeScript Advanced Types",
    category: "Frontend",
    description: "Các type patterns nâng cao trong TypeScript",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    content: `TypeScript cung cấp type system mạnh mẽ giúp catch bugs sớm.

**Advanced Type Patterns:**

**1. Utility Types:**
\`\`\`typescript
type Partial<T>     // Tất cả properties optional
type Required<T>    // Tất cả properties required
type Readonly<T>    // Tất cả properties readonly
type Pick<T, K>     // Chọn properties
type Omit<T, K>     // Loại bỏ properties
\`\`\`

**2. Conditional Types:**
\`\`\`typescript
type IsString<T> = T extends string ? true : false;
\`\`\`

**3. Mapped Types:**
\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
\`\`\`

**4. Template Literal Types:**
\`\`\`typescript
type Endpoint = \`/api/\${string}\`;
\`\`\`

**Best Practices:**
- Prefer types over interfaces khi có thể
- Sử dụng strict mode
- Avoid any, dùng unknown thay thế`,
    tags: ["TypeScript", "JavaScript", "Types", "Frontend"],
    icon: Code2
  },
  {
    id: "fe-4",
    title: "Web Performance Optimization",
    category: "Frontend",
    description: "Tối ưu hóa tốc độ load và performance của website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    content: `Web performance ảnh hưởng trực tiếp đến user experience và SEO.

**Core Web Vitals:**

**1. LCP (Largest Contentful Paint)** - Tốc độ load content chính
- Mục tiêu: < 2.5s
- Optimize: Image optimization, server response time

**2. FID (First Input Delay)** - Thời gian phản hồi
- Mục tiêu: < 100ms
- Optimize: Giảm JavaScript execution time

**3. CLS (Cumulative Layout Shift)** - Tránh layout shift
- Mục tiêu: < 0.1
- Optimize: Khai báo dimensions cho images/videos

**Optimization Techniques:**

- **Images**: WebP format, lazy loading, responsive images
- **Code**: Code splitting, tree shaking, minification
- **Caching**: Browser cache, CDN, service workers
- **Critical CSS**: Inline critical CSS
- **Preload/Prefetch**: Preload critical resources`,
    tags: ["Performance", "Web", "Optimization", "Frontend"],
    icon: Zap
  },

  // Architecture Category
  {
    id: "arch-1",
    title: "Microservices Architecture Patterns",
    category: "Architecture",
    description: "Các pattern phổ biến trong kiến trúc microservices",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    content: `Microservices là kiến trúc phân tán ứng dụng thành các services nhỏ, độc lập.

**Các patterns quan trọng:**

1. **API Gateway**: Điểm vào duy nhất cho tất cả services
2. **Service Discovery**: Tự động phát hiện và kết nối services
3. **Circuit Breaker**: Xử lý lỗi và fallback
4. **Event-Driven**: Giao tiếp bất đồng bộ qua events

**Ưu điểm:**
- Scalability: Scale từng service riêng biệt
- Flexibility: Sử dụng công nghệ khác nhau cho mỗi service
- Resilience: Một service lỗi không ảnh hưởng toàn bộ hệ thống

**Thách thức:**
- Distributed transactions
- Service communication
- Monitoring và debugging`,
    tags: ["Architecture", "Microservices", "Distributed Systems"],
    icon: Cloud
  },
  {
    id: "arch-2",
    title: "Event-Driven Architecture",
    category: "Architecture",
    description: "Kiến trúc hướng sự kiện cho hệ thống phân tán",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    content: `Event-Driven Architecture (EDA) là pattern giao tiếp qua events.

**Core Concepts:**

**1. Event Producers**: Services tạo events
**2. Event Consumers**: Services xử lý events
**3. Event Bus/Broker**: Message broker (Kafka, RabbitMQ)

**Patterns:**

**Event Notification:**
- Service A notify service B về một sự kiện
- Service B quyết định có xử lý hay không

**Event-Carried State Transfer:**
- Event chứa đầy đủ data
- Consumer không cần query lại

**Event Sourcing:**
- Lưu trữ tất cả changes như events
- Có thể replay để rebuild state

**CQRS (Command Query Responsibility Segregation):**
- Tách read và write models
- Thường kết hợp với Event Sourcing

**Benefits:**
- Loose coupling
- Scalability
- Event history và audit trail`,
    tags: ["Architecture", "Events", "Distributed Systems", "CQRS"],
    icon: Zap
  },
  {
    id: "arch-3",
    title: "Domain-Driven Design (DDD)",
    category: "Architecture",
    description: "Thiết kế hệ thống theo business domain",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    content: `DDD là approach thiết kế software tập trung vào business domain.

**Strategic Design:**

**Bounded Context**: Ranh giới rõ ràng của domain model
- Mỗi context có model riêng
- Communication qua well-defined interfaces

**Ubiquitous Language**: Ngôn ngữ chung giữa devs và domain experts
- Dùng trong code, docs, conversations
- Tránh technical jargon khi nói về business

**Tactical Design:**

**Entities**: Objects với identity
\`\`\`typescript
class User {
  id: UserId;
  email: Email;
  name: string;
}
\`\`\`

**Value Objects**: Objects không có identity
\`\`\`typescript
class Email {
  private readonly value: string;
  // Immutable, equality by value
}
\`\`\`

**Aggregates**: Cluster của entities
- Root entity là entry point
- Đảm bảo consistency

**Domain Events**: Business events đã xảy ra
\`\`\`typescript
class OrderPlaced {
  orderId: OrderId;
  timestamp: Date;
}
\`\`\``,
    tags: ["Architecture", "DDD", "Design", "Domain"],
    icon: Layout
  },

  // DevOps Category
  {
    id: "devops-1",
    title: "Kubernetes Best Practices",
    category: "DevOps",
    description: "Best practices để deploy và quản lý ứng dụng trên Kubernetes",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    content: `Kubernetes là platform orchestration cho containers.

**Core Concepts:**

1. **Pods**: Đơn vị nhỏ nhất, chứa containers
2. **Services**: Expose pods ra bên ngoài
3. **Deployments**: Quản lý việc deploy và update
4. **ConfigMaps & Secrets**: Quản lý configuration

**Best Practices:**

- Sử dụng resource limits và requests
- Health checks với liveness và readiness probes
- Rolling updates để zero-downtime deployment
- Horizontal Pod Autoscaling cho auto-scaling
- Namespaces để tổ chức resources

**Security:**
- RBAC cho access control
- Network policies
- Pod Security Policies
- Secrets management với encryption`,
    tags: ["Kubernetes", "DevOps", "Containers", "Cloud Native"],
    icon: Cloud
  },
  {
    id: "devops-2",
    title: "CI/CD Pipeline Design",
    category: "DevOps",
    description: "Thiết kế pipeline CI/CD hiệu quả và an toàn",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    content: `CI/CD tự động hóa quá trình build, test và deploy.

**Continuous Integration (CI):**

**Pipeline Stages:**
1. **Code Checkout**: Lấy code từ repo
2. **Build**: Compile code
3. **Unit Tests**: Run tests
4. **Code Quality**: Linting, security scan
5. **Artifact Creation**: Build Docker image

**Continuous Deployment (CD):**

**Deployment Strategies:**

**Blue-Green Deployment:**
- Hai môi trường identical
- Switch traffic khi ready
- Rollback dễ dàng

**Canary Deployment:**
- Deploy cho một phần users
- Monitor metrics
- Gradually increase traffic

**Rolling Deployment:**
- Update từng pod một
- Zero downtime
- Slower rollout

**Best Practices:**
- Automated testing ở mọi stage
- Security scanning
- Deployment approval gates
- Monitoring và alerting`,
    tags: ["CI/CD", "DevOps", "Automation", "Deployment"],
    icon: Zap
  },
  {
    id: "devops-3",
    title: "Infrastructure as Code with Terraform",
    category: "DevOps",
    description: "Quản lý infrastructure bằng code với Terraform",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    content: `Infrastructure as Code (IaC) cho phép quản lý infrastructure bằng code.

**Terraform Basics:**

**Resources**: Infrastructure components
\`\`\`hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "WebServer"
  }
}
\`\`\`

**Modules**: Reusable components
\`\`\`hcl
module "vpc" {
  source = "./modules/vpc"
  cidr   = "10.0.0.0/16"
}
\`\`\`

**State Management:**
- Terraform tracks infrastructure state
- Remote state for collaboration
- State locking để tránh conflicts

**Best Practices:**

- Version control cho code
- Remote state storage (S3, Terraform Cloud)
- Separate environments (dev, staging, prod)
- Use modules cho reusability
- Plan before apply
- Use workspaces cho environments`,
    tags: ["Terraform", "IaC", "DevOps", "Infrastructure"],
    icon: Cloud
  },

  // Security Category
  {
    id: "sec-1",
    title: "Web Application Security",
    category: "Security",
    description: "Bảo mật web applications - OWASP Top 10",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    content: `Web security là critical cho mọi application.

**OWASP Top 10 Vulnerabilities:**

**1. Injection** (SQL, NoSQL, Command)
- Validate và sanitize input
- Use prepared statements
- Use ORMs

**2. Broken Authentication**
- Strong password policies
- MFA (Multi-Factor Authentication)
- Secure session management

**3. Sensitive Data Exposure**
- Encrypt data at rest và in transit
- Use HTTPS
- Don't store sensitive data unnecessarily

**4. XML External Entities (XXE)**
- Disable XML external entity processing
- Use JSON instead of XML khi có thể

**5. Broken Access Control**
- Implement proper authorization
- Deny by default
- Test access controls

**6. Security Misconfiguration**
- Remove default credentials
- Disable unnecessary features
- Keep software updated

**7. XSS (Cross-Site Scripting)**
- Sanitize user input
- Use Content Security Policy
- Escape output

**8. Insecure Deserialization**
- Don't accept serialized objects từ untrusted sources
- Implement integrity checks

**9. Using Components with Known Vulnerabilities**
- Keep dependencies updated
- Use security scanners
- Monitor security advisories

**10. Insufficient Logging & Monitoring**
- Log security events
- Set up alerts
- Regular log review`,
    tags: ["Security", "OWASP", "Web Security", "Best Practices"],
    icon: Shield
  },
  {
    id: "sec-2",
    title: "Authentication & Authorization",
    category: "Security",
    description: "Các phương pháp xác thực và phân quyền hiện đại",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
    content: `Authentication và Authorization là nền tảng của security.

**Authentication - "Who are you?"**

**Methods:**

**1. Password-based:**
- Bcrypt/Argon2 cho hashing
- Salt passwords
- Enforce strong passwords

**2. Token-based (JWT):**
\`\`\`javascript
const token = jwt.sign(
  { userId: user.id },
  SECRET_KEY,
  { expiresIn: '1h' }
);
\`\`\`

**3. OAuth 2.0:**
- Delegate authentication
- Access tokens & refresh tokens
- Scopes cho permissions

**4. Multi-Factor Authentication (MFA):**
- Something you know (password)
- Something you have (phone)
- Something you are (biometric)

**Authorization - "What can you do?"**

**Models:**

**RBAC (Role-Based Access Control):**
- Users có roles
- Roles có permissions
- Simple và common

**ABAC (Attribute-Based Access Control):**
- Based on attributes
- More flexible
- Complex policies

**Best Practices:**
- Never trust client-side authorization
- Validate permissions server-side
- Use principle of least privilege
- Regular access reviews`,
    tags: ["Security", "Authentication", "Authorization", "JWT", "OAuth"],
    icon: Shield
  },

  // AI/ML Category  
  {
    id: "ai-1",
    title: "Machine Learning Fundamentals",
    category: "AI/ML",
    description: "Các khái niệm cơ bản về Machine Learning và Deep Learning",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    content: `Machine Learning là nhánh của AI cho phép máy tính học từ dữ liệu.

**Các loại ML:**

1. **Supervised Learning**: Học từ dữ liệu có label
   - Classification
   - Regression

2. **Unsupervised Learning**: Học từ dữ liệu không có label
   - Clustering
   - Dimensionality Reduction

3. **Reinforcement Learning**: Học thông qua thử và sai

**Key Concepts:**

- **Training**: Quá trình học từ dữ liệu
- **Validation**: Đánh giá model trên dữ liệu mới
- **Overfitting**: Model học quá chi tiết, không generalize tốt
- **Feature Engineering**: Tạo features hữu ích từ raw data

**Popular Algorithms:**
- Linear Regression
- Decision Trees
- Neural Networks
- Support Vector Machines`,
    tags: ["AI", "Machine Learning", "Deep Learning", "Data Science"],
    icon: Cpu
  },
  {
    id: "ai-2",
    title: "Large Language Models (LLMs)",
    category: "AI/ML",
    description: "Hiểu về LLMs và cách sử dụng chúng hiệu quả",
    image: "https://images.unsplash.com/photo-1676277791608-ac4240841c0f?w=800&q=80",
    content: `LLMs đã thay đổi cách chúng ta tương tác với AI.

**Kiến trúc Transformer:**

**Key Components:**
- **Self-Attention**: Model có thể "chú ý" đến các phần khác của input
- **Positional Encoding**: Thêm thông tin về vị trí
- **Feed-Forward Networks**: Xử lý representations

**Popular LLMs:**
- GPT (Generative Pre-trained Transformer)
- BERT (Bidirectional Encoder Representations)
- Claude, Gemini, LLaMA

**Prompt Engineering:**

**Techniques:**

**1. Zero-Shot:**
\`\`\`
Classify the sentiment: "I love this product!"
\`\`\`

**2. Few-Shot:**
\`\`\`
Positive: "Amazing!"
Negative: "Terrible"
Classify: "It's okay"
\`\`\`

**3. Chain-of-Thought:**
\`\`\`
Let's think step by step:
1. First, identify...
2. Then, analyze...
\`\`\`

**Best Practices:**
- Be specific và clear
- Provide context
- Use examples
- Iterate và refine`,
    tags: ["AI", "LLM", "GPT", "Prompt Engineering", "NLP"],
    icon: Cpu
  }
];

export const Knowledge = () => {
  const [selectedItem, setSelectedItem] = useState<KnowledgeItem>(knowledgeBase[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(knowledgeBase.map(item => item.category)))];
  
  const filteredItems = selectedCategory === "all" 
    ? knowledgeBase 
    : knowledgeBase.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="w-full px-6">
        <header className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Knowledge Base
          </h1>
          <p className="text-muted-foreground">
            Các kiến thức và kỹ thuật mà tôi đã học và áp dụng
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[calc(100vh-16rem)]">
                  <div className="space-y-1 mb-4">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-primary/10 text-primary font-medium"
                            : "hover:bg-muted text-muted-foreground"
                        }`}
                      >
                        {category === "all" ? "All Topics" : category}
                      </button>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-semibold mb-2 px-3">Topics</h3>
                    <div className="space-y-1">
                      {filteredItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setSelectedItem(item)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-start gap-2 ${
                              selectedItem.id === item.id
                                ? "bg-gradient-primary/10 border border-primary/20"
                                : "hover:bg-muted"
                            }`}
                          >
                            <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-2">{item.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8 xl:col-span-9">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  {selectedItem.icon && (
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <selectedItem.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{selectedItem.category}</Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{selectedItem.title}</CardTitle>
                    <CardDescription>{selectedItem.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {selectedItem.image && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={selectedItem.image} 
                      alt={selectedItem.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}
                
                <div className="prose prose-invert max-w-none">
                  <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                    {selectedItem.content}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t">
                  {selectedItem.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Topics */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Related Topics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {knowledgeBase
                  .filter(item => 
                    item.id !== selectedItem.id && 
                    item.tags.some(tag => selectedItem.tags.includes(tag))
                  )
                  .slice(0, 2)
                  .map((item) => {
                    const Icon = item.icon;
                    return (
                      <Card 
                        key={item.id}
                        className="cursor-pointer hover:border-primary/30 transition-colors"
                        onClick={() => setSelectedItem(item)}
                      >
                        <CardHeader>
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-base line-clamp-2">{item.title}</CardTitle>
                            </div>
                            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          </div>
                        </CardHeader>
                      </Card>
                    );
                  })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};