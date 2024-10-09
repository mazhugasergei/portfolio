import { LoaderCircle } from "lucide-react"

export default function Loading() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <LoaderCircle className="animate-spin" />
    </div>
  )
}
