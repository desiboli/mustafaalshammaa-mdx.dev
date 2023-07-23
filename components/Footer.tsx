import React from "react"
import Link from "next/link"

const Footer = () => {
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
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Notes",
      href: "/notes",
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

  const socials = [
    {
      label: "Github",
      href: "/",
    },
    {
      label: "LinkedIn",
      href: "/",
    },
    {
      label: "Facebook",
      href: "/",
    },
    {
      label: "Twitter",
      href: "/",
    },
    {
      label: "Instagram",
      href: "/",
    },
    {
      label: "Soundcloud",
      href: "/",
    },
  ]

  return (
    <footer className="container bg-background">
      <div className="flex flex-col gap-10 border-t py-20">
        <ul className="mt-4 flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {routes.map((route) => {
            return (
              <li key={route.label} className="mr-4">
                <Link
                  className="text-accent-foreground/80 hover:text-accent-foreground"
                  href={route.href}
                >
                  {route.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400">
          {socials.map((social) => {
            return (
              <li key={social.label} className="mr-4">
                <Link
                  className="text-accent-foreground/80 hover:text-accent-foreground"
                  href={social.href}
                >
                  {social.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <span className="text-center text-xs text-gray-500 dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Mustafa Alshammaa
          </a>
          . All Rights Reserved.
        </span>

        {/* <div className="md:flex md:items-center md:justify-between">
         
         
        </div>
        <div>
         
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
