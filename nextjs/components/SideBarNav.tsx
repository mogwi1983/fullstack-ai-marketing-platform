import { Home, LayoutDashboard, Settings } from "lucide-react";
import Link from "next/link"; // {{ edit_1 }}
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface SideBarNavProps {
  isMobile: boolean;
  isCollapsed: boolean;
}

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isActive: (pathname: string) => boolean;
}

function SideBarNav({ isMobile, isCollapsed }: SideBarNavProps) {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      href: "/projects",
      label: "Projects",
      icon: Home,
      isActive: (pathname) =>
        pathname === "/projects" || pathname.startsWith("/projects/"),
    },
    {
      href: "/templates",
      label: "Templates",
      icon: LayoutDashboard,
      isActive: (pathname) =>
        pathname === "/templates" || pathname.startsWith("/templates/"),
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
      isActive: (pathname) =>
        pathname === "/settings" || pathname.startsWith("/settings/"),
    },
  ];
  return (
    <div className="space-y4 overflow-hidden mb-auto">
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant="ghost"
          className={cn(
            "w-full justify-start hover:text-main hover:bg-gray-200 flex items-center text-lg font-medium",
            !isMobile && isCollapsed && "justify-center p-2",
            item.isActive(pathname) && "bg-gray-200 text-main"
          )}
        >
          <item.icon className="h-[22px] w-[22px]" />
          <Link href={item.href} className="flex-grow">
            {(isMobile || !isCollapsed) && (
              <span className="ml-4">{item.label}</span>
            )}
          </Link>
        </Button>
      ))}
    </div>
  );
}

export default SideBarNav;
