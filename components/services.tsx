import { Card } from "@/components/ui/card"
import { Palette, Code, Megaphone, Lightbulb, Smartphone, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Thiết kế UI/UX",
    description: "Tạo ra những giao diện đẹp mắt, trực quan và tối ưu trải nghiệm người dùng",
  },
  {
    icon: Code,
    title: "Phát triển Website",
    description: "Xây dựng website chuyên nghiệp, tốc độ cao và tương thích mọi thiết bị",
  },
  {
    icon: Megaphone,
    title: "Marketing số",
    description: "Chiến lược marketing hiệu quả giúp tăng trưởng doanh số và nhận diện thương hiệu",
  },
  {
    icon: Lightbulb,
    title: "Tư vấn chiến lược",
    description: "Định hướng và lập kế hoạch số hóa phù hợp với mục tiêu kinh doanh",
  },
  {
    icon: Smartphone,
    title: "Ứng dụng di động",
    description: "Phát triển ứng dụng mobile hiện đại cho iOS và Android",
  },
  {
    icon: TrendingUp,
    title: "Tối ưu SEO",
    description: "Cải thiện thứ hạng tìm kiếm và tăng lưu lượng truy cập tự nhiên",
  },
]

export function Services() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Dịch vụ của tôi</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Cung cấp giải pháp toàn diện cho mọi nhu cầu số hóa của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 bg-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
