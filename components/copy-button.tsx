"use client"

import { Check, Copy } from "lucide-react"
import { forwardRef, useEffect, useState } from "react"
import { Button } from "./ui/button"

const CopyButton = forwardRef<HTMLButtonElement, { children: React.ReactNode; text: string; className?: string }>(
  ({ children, text, className, ...props }, ref) => {
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
      if (clicked) {
        setTimeout(() => {
          setClicked(false)
        }, 2000)
      }
    }, [clicked])

    return (
      <Button
        variant="outline"
        onClickCapture={() => setClicked(true)}
        className={`text-muted-foreground gap-2 ${className}`}
        onClick={() => {
          navigator.clipboard.writeText(text)
        }}
        {...props}
        ref={ref}
      >
        {clicked ? <Check size={16} /> : <Copy size={16} />}
        {children}
      </Button>
    )
  }
)
CopyButton.displayName = "CopyButton"

export default CopyButton
