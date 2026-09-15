"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems, MUSEUM_ROUTES } from "@/config/navigation";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";

export const GlobalNav = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isMobileMenuOpen) return;
      if (e.key === "Escape") {
        closeMenu();
      }
      if (e.key === "Tab") {
        const focusableElements = overlayRef.current?.querySelectorAll(
          "a[href], button, textarea, input, select, [tabindex]:not([tabindex=\"-1\"])"
        );
        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setTimeout(() => closeButtonRef.current?.focus(), 10);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => menuTriggerRef.current?.focus(), 10);
  };

  const renderNavLinks = (mobile: boolean) => {
    return navigationItems.map((item) => {
      const isActive = pathname === item.href;
      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => mobile && closeMenu()}
          className={cn(
            "relative transition-colors duration-200 focus-ring",
            mobile ? "display-md block w-full py-4 text-center" : "label-metadata py-2",
            isActive ? "text-museum-white" : "text-museum-muted hover:text-museum-white"
          )}
          aria-current={isActive ? "page" : undefined}
        >
          {item.label}
          {isActive && !mobile && (
            <span className="absolute -bottom-1 left-1/2 h-[2px] w-[2px] -translate-x-1/2 rounded-full bg-museum-gold" />
          )}
          {isActive && mobile && (
            <div className="mx-auto mt-2 h-[2px] w-[2px] rounded-full bg-museum-gold" />
          )}
        </Link>
      );
    });
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-museum-black/90 backdrop-blur-sm border-b border-museum-border">
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 md:px-8 lg:px-16" aria-label="Global Navigation">
        <Link
          href={MUSEUM_ROUTES.HOME}
          className="label-caps text-museum-white focus-ring py-2"
        >
          BUNNY / MUSEUM
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {renderNavLinks(false)}
        </div>

        <button
          ref={menuTriggerRef}
          className="md:hidden label-metadata text-museum-white focus-ring p-2 flex items-center gap-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Open mobile menu"
        >
          MENU
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[60] flex flex-col bg-museum-black h-[100dvh] w-full"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-museum-border md:px-8">
            <span className="label-caps text-museum-white py-2">BUNNY / MUSEUM</span>
            <button
              ref={closeButtonRef}
              className="label-metadata text-museum-white focus-ring p-2 flex items-center gap-2"
              onClick={closeMenu}
              aria-label="Close mobile menu"
            >
              CLOSE <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 overflow-y-auto">
            {renderNavLinks(true)}
          </div>
        </div>
      )}
    </header>
  );
};
