import Aside from "@/components/aside"
import type { Metadata } from "next"
import { displayFont, mainFont } from "./fonts"
import "./globals.scss"

export const metadata: Metadata = {
  title: {
    template: "%s | Mazhuga Sergei",
    default: "Mazhuga Sergei",
  },
  description: "A web developer with a passion for creating visually stunning and intuitive websites",
  keywords: [
    "Mazhuga",
    "Sergei",
    "mazhuga",
    "sergei",
    "developer",
    "web",
    "front-end",
    "back-end",
    "full-stack",
    "react",
    "next",
    "nextjs",
    "typescript",
    "tailwind",
    "tailwindcss",
    "css",
    "scss",
    "javascript",
    "js",
    "node",
    "npm",
  ],
  authors: [{ name: "Mazhuga Sergei", url: "https://mazhugasergei.github.io" }],
  creator: "Mazhuga Sergei",
  category: "developer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} ${displayFont.className} min-h-screen flex`}>
        <Aside />
        <div className="flex-1 flex flex-col bg-background/90 backdrop-blur-xl">
          <div className="flex-1 xl:p-20">{children}</div>
          <footer className="text-center border-t py-2">
            <span className="text-sm text-muted-foreground">you reached the bottom.</span>
          </footer>
        </div>
      </body>
    </html>
  )
}
