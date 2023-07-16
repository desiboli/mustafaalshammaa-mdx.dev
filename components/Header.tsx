import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

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
  ];

  return (
    <header className="bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-sm py-4 sticky top-0 drop-shadow-md z-10">
      <nav className="flex flex-row-reverse items-center justify-between container">
        <ModeToggle />
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4">
          {routes.map((route) => {
            return (
              <Link
                key={route.label}
                className="text-accent-foreground/80 hover:text-accent-foreground"
                href={route.href}
              >
                {route.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
