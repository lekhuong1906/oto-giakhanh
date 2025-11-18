// components/layout/main-layout.tsx
import { ReactNode } from "react"

interface MainLayoutProps {
  children: ReactNode
}

import SiteHeader from "./SiteHeader"
import SiteFooter from "./SiteFooter"

export default function MainLayout({ children } : MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
