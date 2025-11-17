// components/layout/site-header.tsx
import Link from "next/link"
import { Phone, ShoppingCart, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white">
            <Car className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm md:text-base">
              Gia Khánh Garage
            </span>
            <span className="text-xs text-gray-500 md:block hidden">
              Phụ tùng & Dịch vụ ô tô
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/san-pham" className="hover:text-red-600">
            Sản phẩm
          </Link>
          <Link href="/dich-vu-sua-chua" className="hover:text-red-600">
            Dịch vụ sửa chữa
          </Link>
          <Link href="/ve-chung-toi" className="hover:text-red-600">
            Về Chúng Tôi
          </Link>
          <Link href="/lien-he" className="hover:text-red-600">
            Liên hệ
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0973874677"
            className="hidden sm:flex items-center gap-1 text-xs md:text-sm text-gray-700"
          >
            <Phone className="h-4 w-4 text-red-600" />
            <span>0973 874 677</span>
          </a>

          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/lien-he">Liên hệ sửa chữa</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
