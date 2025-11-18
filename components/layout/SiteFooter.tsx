// components/layout/site-footer.tsx
import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-gray-50 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-4 text-sm text-gray-700">
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-2">Công Ty TNHH Ô Tô Gia Khánh</h3>
          <p className="text-gray-600 text-sm">
            Chuyên cung cấp phụ tùng, phụ kiện ô tô chính hãng và dịch vụ sửa
            chữa uy tín, bảo hành rõ ràng.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Liên hệ</h4>
          <p>Địa chỉ: Lô 5-6, Đường số 1, Quốc lộ 1D, Phường Quy Nhơn Nam, Tỉnh Gia Lai</p>
          <p>Hotline: 0973 874 677</p>
          <p>Email: duycong@gamail.com</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Liên kết nhanh</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/ve-chung-toi" className="hover:text-red-600">
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/profile.php?id=61555890410363" className="hover:text-red-600 flex">
                Facebook: Duy Công
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t text-xs text-gray-500">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Công Ty TNHH Ô Tô Gia Khánh.</span>
          <span>Bản quyền thuộc sở hữu của Công Ty TNHH Ô Tô Gia Khánh</span>
        </div>
      </div>
    </footer>
  )
}
