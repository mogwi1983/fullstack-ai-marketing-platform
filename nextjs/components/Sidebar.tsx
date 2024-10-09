"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import SideBarNav from "./SideBarNav";
import SidebarToggle from "./SidebarToggle";

const MOBILE_WINDOW_WIDTH_LIMIT = 1024;

function Sidebar() {
  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      if (isMobile && isOpen) {
        setIsOpen(false);
      }
    }
  };

  //handle resize
  useEffect(() => {
    const handleResize = () => {
      const calculateIsMobile = window.innerWidth < MOBILE_WINDOW_WIDTH_LIMIT;
      setIsMobile(calculateIsMobile);
      if (calculateIsMobile) {
        setIsCollapsed(false);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleOutsideClick]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        if (isMobile && isOpen) {
          setIsOpen(false);
        }
      }
    };
    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobile, isOpen]);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen((prev) => !prev);
    } else {
      setIsCollapsed((prev) => !prev);
    }
  };

  const renderMenuIcon = (isOpen: boolean) => {
    return isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />;
  };

  return (
    <div>
      {/* Mobile X toggle in the left side of screen */}
      {isMobile && (
        <Button
          variant="ghost"
          onClick={toggleSidebar}
          className={cn(
            "fixed top-0 left-4 z-50 bg-transparent hover:bg-gray-100/50 backdrop-blur-sm",
            isOpen && "top-4 left-4"
          )}
        >
          {renderMenuIcon(isOpen)}
        </Button>
      )}

      {/* Store all components in Nav */}
      {(!isMobile || isOpen) && (
        <div
          ref={sidebarRef}
          className={cn(
            "bg-gray-100 flex flex-col h-screen transition-all duration-300 overflow-y-auto",
            //mobile styles
            !isMobile
              ? ""
              : `fixed inset-y-0 z-40 w-64 transform ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`,
            //desktop styles
            isMobile
              ? ""
              : isCollapsed
              ? "w-28 h-screen sticky top-0"
              : "w-64 h-screen sticky top-0"
          )}
        >
          <div
            className={cn(
              "flex flex-col flex-grow p-6",
              isMobile ? "pt-16" : "pt-10"
            )}
          >
            {!isCollapsed && (
              <h1 className="text-4xl font-bold mb-10">
                {" "}
                AI Marketing Platform
              </h1>
            )}
            <SideBarNav isMobile={isMobile} isCollapsed={isCollapsed} />
          </div>

          <div>{/* TODO: user profile from clerk */}</div>
          {!isMobile && (
            <SidebarToggle
              isCollapsed={isCollapsed}
              toggleSidebar={toggleSidebar}
            />
          )}
        </div>
      )}
    </div>
  );
}
export default Sidebar;
