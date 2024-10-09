import CopyButton from "@/components/copy-button"
import Link from "next/link"
import { displayFont } from "./fonts"

export default function Page() {
  return (
    <main className="space-y-8">
      <div>
        <h1 className={`${displayFont.className} flex flex-col text-6xl leading-snug`}>
          <span>Hey, I'm Sergei.</span>
          <span>
            I code <span className="text-foreground/60">websites.</span>
          </span>
        </h1>

        <p className="max-w-[60%] text-balance text-lg text-muted-foreground mt-2">
          A web developer with a passion for creating visually stunning and intuitive websites. Currently working at
          Molotov Group in Vladivostok.
        </p>

        <CopyButton text="ghbdtnghbdtn8@gmail.com" className="mt-4">
          Email
        </CopyButton>
      </div>

      <section>
        <h2 className="mb-4">New Drops</h2>

        <ul className="grid grid-cols-2 gap-4 md:gap-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <li key={i}>
              <Link href="/" className="block overflow-hidden border rounded-md">
                <div className="bg-secondary aspect-[16/9]" />
                <div className="bg-background-light p-4">
                  <div className="font-bold">Lorem Ipsum</div>
                  <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
