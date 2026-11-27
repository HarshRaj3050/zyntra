"use client";
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/landing/ui/resizable-navbar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { useState } from "react";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information about an element when it receives keyboard focus or the mouse hovers over it.",
  },
];

const navItems = [
  { name: "Components", link: "/docs/primitives/alert-dialog" },
  { name: "With Icon", link: "/docs" },
  { name: "Docs", link: "/docs" },
];

const modeItems = [
  {
    title: "Creators Mode",
    href: "/",
    description: "Showcasing the features and offerings of the platform.",
  },
  {
    title: "User Mode",
    href: "/user",
    description: "Explore & interact with the platform functionalities.",
  },
  {
    title: "Brand Mode",
    href: "/brand",
    description: "Brand managers and marketers to showcase their brand identity and messaging.",
  },
];

export default function LandingNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const activeMode = modeItems.find(
    (item) =>
      pathname === item.href ||
      (item.href !== "/" && pathname.startsWith(`${item.href}/`)),
  );
  const activeModeTitle = activeMode?.title ?? modeItems[0].title;

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavigationMenu
            viewport={false}
            className="absolute left-1/2 hidden -translate-x-1/2 lg:flex"
          >
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger>{activeModeTitle}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-96">
                    {modeItems.map((item) => (
                      <ListItem
                        key={item.title}
                        href={item.href}
                        title={item.title}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:flex">
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-50">
                    <li>
                      <NavigationMenuLink
                        href="#"
                        className="flex-row items-center gap-2"
                      >
                        <CircleAlertIcon />
                        Backlog
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="#"
                        className="flex-row items-center gap-2"
                      >
                        <CircleDashedIcon />
                        To Do
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="#"
                        className="flex-row items-center gap-2"
                      >
                        <CircleCheckIcon />
                        Done
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <NavbarButton href="/auth/login" variant="secondary">Login</NavbarButton>
            <NavbarButton href="/auth/signup" variant="primary">Signup</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex w-full flex-col gap-3 border border-white p-5 rounded-2xl">
              <p className="text-sm font-semibold text-neutral-500">Switch mode</p>
              {modeItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  aria-current={activeMode?.title === item.title ? "page" : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={
                    activeMode?.title === item.title
                      ? "relative font-semibold text-black dark:text-white"
                      : "relative text-neutral-600 dark:text-neutral-300"
                  }
                >
                  <span className="block">{item.title}</span>
                </a>
              ))}
            </div>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                href="/auth/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Signup
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { title: string; href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink href={href}>
        <div className="flex flex-col gap-1 text-sm">
          <div className="font-medium leading-none">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div>
      </NavigationMenuLink>
    </li>
  );
}
