"use client"

import { Compass, Github, PenTool, Send, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { buttonVariants } from "./ui/button"

export default function Aside() {
  const pathname = usePathname()

  const data = {
    routes: [
      {
        icon: <Compass size={16} />,
        lable: "Explore",
        href: "/",
      },
      {
        icon: <PenTool size={16} />,
        lable: "Projects",
        href: "/projects",
      },
    ],
    contact: [
      {
        icon: <Send size={16} />,
        lable: "Telegram",
        href: "https://t.me/mazhugasergei",
      },
      {
        icon: <Github size={16} />,
        lable: "GitHub",
        href: "https://github.com/mazhugasergei",
      },
      {
        icon: <Twitter size={16} />,
        lable: "Twitter",
        href: "https://twitter.com/mazhugasergei",
      },
    ],
  }

  return (
    <aside className="bg-background-light">
      <div className="sticky top-0 flex flex-col gap-8 border-r p-8">
        <div className="flex items-center gap-2">
          <Image src="/profile.jpeg" alt="" width={40} height={40} className="rounded-full" />
          <div>
            <div className="text-sm font-medium">Sergei Mazhuga</div>
            <div className="text-xs text-muted-foreground">Web Developer</div>
          </div>
        </div>

        {Object.entries(data).map(([categoryName, list]) => (
          <div key={categoryName} className="text-muted-foreground">
            {categoryName !== "routes" && <div className="uppercase text-xs font-bold mb-2">{categoryName}</div>}

            <ul>
              {list.map(({ icon, lable, href }) => (
                <li key={lable} className={href === `/${pathname.split("/")[1]}` ? "text-foreground" : ""}>
                  <Link
                    href={href}
                    className={buttonVariants({ variant: "ghost", className: "w-full !justify-start" })}
                  >
                    <div className="flex items-center gap-4">
                      {icon}
                      <span>{lable}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  )
}
