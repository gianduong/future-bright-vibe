import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, BookOpen, Code2, Database, Cloud, Cpu } from "lucide-react";

interface KnowledgeItem {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  tags: string[];
  icon: any;
}

const knowledgeBase: KnowledgeItem[] = [
  {
    id: "1",
    title: "SQL Execution Plans và Database Optimization",
    category: "Database",
    description: "Hiểu về cách database thực thi câu lệnh và tối ưu hóa performance",
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
    id: "2",
    title: "React Performance Optimization",
    category: "Frontend",
    description: "Các kỹ thuật tối ưu hóa performance cho React applications",
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
    id: "3",
    title: "Microservices Architecture Patterns",
    category: "Architecture",
    description: "Các pattern phổ biến trong kiến trúc microservices",
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
    id: "4",
    title: "Machine Learning Fundamentals",
    category: "AI/ML",
    description: "Các khái niệm cơ bản về Machine Learning và Deep Learning",
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
    id: "5",
    title: "Kubernetes Best Practices",
    category: "DevOps",
    description: "Best practices để deploy và quản lý ứng dụng trên Kubernetes",
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
      <div className="container max-w-7xl mx-auto px-6">
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