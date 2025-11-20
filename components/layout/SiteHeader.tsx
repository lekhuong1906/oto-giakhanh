// components/layout/site-header.tsx
import Link from "next/link"
import { useState } from "react"
import { Phone, ShoppingCart, Car, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-700 text-white">
            <Car className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-yellow-700 font-bold text-sm md:text-base">
              Ô Tô Gia Khánh
            </span>
            <span className="text-xs text-gray-700 md:block hidden">
              Dịch vụ ô tô
            </span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Navigation */}
        <nav className={`items-center gap-6 text-sm font-medium ${menuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-white border-b p-4 gap-4' : 'hidden md:flex'}`}>
          {/* <Link href="/san-pham" className="hover:text-red-600">
            Sản phẩm
          </Link> */}
          <Link href="/dich-vu-sua-chua" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>
            Dịch vụ sửa chữa
          </Link>
          <Link href="/ve-chung-toi" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>
            Về Chúng Tôi
          </Link>
          <Link href="/lien-he" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>
            Liên hệ
          </Link>

          {/* Mobile-only items */}
          <a
            href="tel:0973874677"
            className="flex items-center gap-1 text-gray-700 md:hidden hover:text-red-600"
          >
            <Phone className="h-4 w-4 text-red-700" />
            <span>0973 874 677</span>
          </a>

          <Button asChild size="sm" className="md:hidden bg-red-700" onClick={() => setMenuOpen(false)}>
            <Link href="/lien-he">Liên hệ sửa chữa</Link>
          </Button>
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

          <Button asChild size="sm" className="hidden md:inline-flex bg-red-700 hover:bg-red-800">
            <Link href="/lien-he">Liên hệ sửa chữa</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
