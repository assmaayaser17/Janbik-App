"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlertTriangle,
  StickyNote,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: string; // path to icon image in /public
  href: string;
  badge?: number;
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "لوحة التحكم", href: "/dashboard", icon: "/icons/home.png" },
  { id: "classes", label: "إدارة الفصول", href: "/dashboard/classes", icon: "/icons/manage.png" },
  { id: "all", label: "ادارة الكل", href: "/dashboard/all", icon: "/icons/people-group.png" },
  { id: "devices", label: "إدارة الأجهزة", href: "/dashboard/devices", icon: "/icons/heart.png" },
  { id: "activities", label: "مكتبة الأنشطة", href: "/dashboard/activities", icon: "/icons/pulse.png" },
  { id: "reports", label: "إدارة التقارير", href: "/dashboard/reports", icon: "/icons/report.png" },
  { id: "messages", label: "الرسائل", href: "/dashboard/messages", icon: "/icons/messages.png", badge: 3 },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* Desktop / Tablet sidebar (right side) */}
      <aside
        dir="rtl"
        className={`min-h-screen inset-y-0 right-0 z-40 hidden  flex-col border-l bg-white shadow-sm transition-all duration-300 ease-in-out lg:flex ${
          collapsed ? "w-18" : "w-65"
        }`}
      >
        {/* Header - Logo & Collapse */}
        <div className="flex items-center justify-between px-4 pt-5 pb-3">
          {!collapsed && (
            <img
              src="/icons/logo.png"
              alt="جنبك - Janbik"
              className="h-10 w-auto object-contain"
            />
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex h-8 w-8 items-center justify-center rounded-md text-[#6B7280] transition-colors hover:bg-[#F3F4F6] hover:text-[#111827]"
            aria-label={collapsed ? "توسيع القائمة" : "طي القائمة"}
          >
            {collapsed ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col px-3 pt-2">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-semibold transition-all duration-150 ${
                      active
                        ? "bg-[#00A79E] text-white shadow-sm"
                        : "text-[#111827] hover:bg-[#F3F4F6]"
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className={`h-4 w-4 shrink-0 transition-all ${
                        active
                          ? "brightness-0 invert"
                          : "opacity-70 group-hover:opacity-100"
                      }`}
                    />
                    {!collapsed && (
                      <span className="flex-1 text-right">{item.label}</span>
                    )}
                    {!collapsed && item.badge != null && (
                      <span
                        className={`flex h-5 min-w-5 items-center justify-center rounded-full text-[11px] font-bold ${
                          active
                            ? "bg-white/20 text-white"
                            : "bg-[#00A79E] text-white"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Alert Card */}
        {!collapsed && (
          <div className="mx-3 mb-3">
            <div className="overflow-hidden rounded-xl border border-[#FED7D7] bg-[#FFF5F5]">
              <div className="flex items-center gap-2 px-3 py-2">
                <AlertTriangle
                  className="h-4 w-4 text-[#E53E3E]"
                  strokeWidth={2.5}
                />
                <span className="text-xs font-bold text-[#E53E3E]">
                  إجراء عاجل
                </span>
              </div>
              <div className="bg-[#00A79E] px-3 py-3 text-white">
                <p className="text-sm font-bold leading-relaxed">
                  حادثة عاجلة تحتاج اهتمام
                </p>
                <p className="mt-0.5 text-xs font-medium opacity-80">
                  حادثة: فيصل الغامدي
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Notes */}
        <div className="border-t px-3 py-3">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-semibold text-[#111827] transition-colors hover:bg-[#F3F4F6]">
            <StickyNote
              className="h-4 w-4 shrink-0 text-[#6B7280]"
              strokeWidth={2}
            />
            {!collapsed && <span>ملحوظاتي</span>}
          </button>
        </div>
      </aside>

      {/* Mobile / Tablet bottom navigation bar */}
      <nav className="fixed bottom-0 inset-x-0 z-40 flex items-stretch justify-between border-t border-[#E5E7EB] bg-white/95 px-1 py-1.5 backdrop-blur lg:hidden">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-[11px] font-medium ${
                active ? "bg-[#00A79E] text-white" : "text-[#6B7280]"
              }`}
            >
              <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#F3F4F6]">
                <img
                  src={item.icon}
                  alt=""
                  className={`h-4 w-4 ${active ? "brightness-0 invert" : ""}`}
                />
                {item.badge != null && (
                  <span className="absolute -top-1.5 -left-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#EF4444] px-0.5 text-[9px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

