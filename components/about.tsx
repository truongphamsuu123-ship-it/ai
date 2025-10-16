import { Card } from "@/components/ui/card"
import { User, Target, Award } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Về tôi</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Với hơn 5 năm kinh nghiệm trong lĩnh vực thiết kế và phát triển sản phẩm số
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Chuyên nghiệp</h3>
              <p className="text-muted-foreground leading-relaxed">
                Làm việc với tinh thần trách nhiệm cao và cam kết chất lượng tốt nhất
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Sáng tạo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Luôn tìm kiếm những giải pháp độc đáo và hiệu quả cho mọi dự án
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Uy tín</h3>
              <p className="text-muted-foreground leading-relaxed">
                Được tin tưởng bởi hàng trăm khách hàng và đối tác trên toàn quốc
              </p>
            </Card>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground mb-4">
                Xin chào! Tôi là một chuyên gia trong lĩnh vực thiết kế và phát triển sản phẩm số. Với niềm đam mê sáng
                tạo và công nghệ, tôi đã giúp nhiều doanh nghiệp và cá nhân hiện thực hóa ý tưởng của họ thành những sản
                phẩm chất lượng cao.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Tôi chuyên về thiết kế giao diện người dùng (UI/UX), phát triển website, và tư vấn chiến lược số hóa.
                Mục tiêu của tôi là mang đến những giải pháp không chỉ đẹp mắt mà còn thực sự hiệu quả và dễ sử dụng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
