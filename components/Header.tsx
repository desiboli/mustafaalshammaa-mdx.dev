import Link from "next/link"

import { ModeToggle } from "@/components/ModeToggle"

export default function Navbar() {
  const routes = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Notes",
      href: "/notes",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Snippets",
      href: "/snippets",
    },
    {
      label: "Guestbook",
      href: "/guestbook",
    },
  ]

  return (
    <header className="sticky top-0 z-10 bg-background/80 py-4 drop-shadow-sm backdrop-blur-sm">
      <nav className="container flex flex-row-reverse items-center justify-between">
        <ModeToggle />
        <div className="flex flex-row justify-center gap-4 align-middle sm:justify-evenly">
          {routes.map((route) => {
            return (
              <Link
                key={route.label}
                className="text-accent-foreground/80 hover:text-accent-foreground"
                href={route.href}
              >
                {route.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
