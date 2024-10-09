import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <h1>404</h1>
      <p className="mb-2">Page not found</p>
      <Link href="/" className={buttonVariants()}>
        Go Home
      </Link>
    </main>
  )
}
