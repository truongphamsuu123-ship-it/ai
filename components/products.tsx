import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"

const products = [
  {
    name: "Gói thiết kế cơ bản",
    price: "5.000.000đ",
    image: "/modern-web-design-mockup.jpg",
    rating: 5,
    description: "Thiết kế website cơ bản với 5 trang, responsive và tối ưu SEO",
  },
  {
    name: "Gói thiết kế nâng cao",
    price: "12.000.000đ",
    image: "/premium-website-design.png",
    rating: 5,
    description: "Website chuyên nghiệp với tính năng đầy đủ, tích hợp thanh toán",
  },
  {
    name: "Gói phát triển ứng dụng",
    price: "25.000.000đ",
    image: "/mobile-app-interface.png",
    rating: 5,
    description: "Ứng dụng di động hoàn chỉnh cho iOS và Android",
  },
]

export function Products() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Sản phẩm & Gói dịch vụ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Lựa chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow bg-card">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: product.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Đặt hàng
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
