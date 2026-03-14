"use client";

import {
  MoreVertical,
  Check,
  Save,
  Plus,
  TrendingUp,
  Activity as ActivityIcon,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";

interface Activity {
  id: string;
  name: string;
  icon: string;
  ageGroup: string;
  enabled: boolean;
  important: boolean;
}

const initialActivities: Activity[] = [
  {
    id: "1",
    name: "تسجيل الحضور",
    icon: "/icons/user-check.png",
    ageGroup: "الكل",
    enabled: true,
    important: false,
  },
  {
    id: "2",
    name: "تسجيل نشاط",
    icon: "/icons/art.png",
    ageGroup: "الكل",
    enabled: true,
    important: false,
  },
  {
    id: "3",
    name: "تسجيل الإنجاز",
    icon: "/icons/symbol.png",
    ageGroup: "الكل",
    enabled: false,
    important: false,
  },
  {
    id: "4",
    name: "الوجبة",
    icon: "/icons/food.png",
    ageGroup: "الكل",
    enabled: true,
    important: false,
  },
  {
    id: "5",
    name: "القيلولة",
    icon: "/icons/bed.png",
    ageGroup: "الرضيع (0-2)",
    enabled: true,
    important: false,
  },
  {
    id: "6",
    name: "الحفاض",
    icon: "/icons/dipar.png",
    ageGroup: "الرضيع (0-2)",
    enabled: true,
    important: false,
  },
  {
    id: "7",
    name: "تسجيل الصحة",
    icon: "/icons/heartbreak.png",
    ageGroup: "الكل",
    enabled: true,
    important: false,
  },
  {
    id: "8",
    name: "تسجيل الخروج",
    icon: "/icons/logout.png",
    ageGroup: "الكل",
    enabled: true,
    important: false,
  },
];

interface StatsBarProps {
  total: number;
  enabled: number;
  disabled: number;
  important: number;
}

function StatsBar({ total, enabled, disabled, important }: StatsBarProps) {
  return (
    <div className="mb-8  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* إجمالي الأنشطة */}
      <div className="flex items-center  justify-between rounded-xl  border border-[#E5E7EB]  px-5 py-4">
        <div className="text-right">
          <p className="text-sm text-[#6B7280]">إجمالي الأنشطة</p>
          <p className="mt-1 text-3xl font-bold text-[#111827]">{total}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ECFEFF]">
          <TrendingUp className="h-5 w-5 text-[#0D9488]" />
        </div>
      </div>

      {/* الأنشطة المفعلة */}
      <div className="flex items-center justify-between rounded-xl border border-[#E5E7EB] bg-white px-5 py-4">
        <div className="text-right">
          <p className="text-sm text-[#6B7280]">الأنشطة المفعلة</p>
          <p className="mt-1 text-3xl font-bold text-[#111827]">{enabled}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ECFDF3]">
            <ActivityIcon className="h-5 w-5 text-[#16A34A]" />
          </div>
          <span className="rounded-full bg-[#ECFDF3] px-3 py-0.5 text-xs font-medium text-[#16A34A]">
            محدثة
          </span>
        </div>
      </div>

      {/* الأنشطة غير المفعلة */}
      <div className="flex items-center justify-between rounded-xl border border-[#E5E7EB] bg-white px-5 py-4">
        <div className="text-right">
          <p className="text-sm text-[#6B7280]">الأنشطة الغير المفعلة</p>
          <p className="mt-1 text-3xl font-bold text-[#111827]">{disabled}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF7ED]">
            <XCircle className="h-5 w-5 text-[#EA580C]" />
          </div>
          <span className="rounded-full bg-[#FFF7ED] px-3 py-0.5 text-xs font-medium text-[#EA580C]">
            غير مخصص
          </span>
        </div>
      </div>

      {/* الأنشطة المهمة */}
      <div className="flex items-center justify-between rounded-xl border border-[#E5E7EB] bg-white px-5 py-4">
        <div className="text-right">
          <p className="text-sm text-[#6B7280]">الأنشطة المهمة</p>
          <p className="mt-1 text-3xl font-bold text-[#111827]">{important}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FEF2F2]">
            <AlertTriangle className="h-5 w-5 text-[#DC2626]" />
          </div>
          <span className="rounded-full bg-[#FEF2F2] px-3 py-0.5 text-xs font-medium text-[#DC2626]">
            معلقة
          </span>
        </div>
      </div>
    </div>
  );
}

const iconConfig: Record<string, { emoji: string; bg: string }> = {
  "📋": { emoji: "📋", bg: "bg-[#EFF6FF]" },
  "🎯": { emoji: "🎯", bg: "bg-[#ECFDF3]" },
  "🏆": { emoji: "🏆", bg: "bg-[#FEFCE8]" },
  "🍽️": { emoji: "🍽️", bg: "bg-[#FEF2F2]" },
  "🛏️": { emoji: "🛏️", bg: "bg-[#F5F3FF]" },
  "👶": { emoji: "👶", bg: "bg-[#ECFEFF]" },
  "❤️": { emoji: "❤️", bg: "bg-[#FFF1F2]" },
  "🚪": { emoji: "🚪", bg: "bg-[#FFF7ED]" },
};

interface ActivityCardProps {
  activity: Activity;
  onToggle: () => void;
}

function ActivityCard({ activity, onToggle }: ActivityCardProps) {
  const config = iconConfig[activity.icon] || {
    emoji: activity.icon,
    bg: "bg-[#F3F4F6]",
  };

  return (
    <div className="flex items-center justify-between rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 transition-shadow hover:shadow-sm">
      {/* Center: name + age group */}
      <div
        className="flex flex-1 items-center justify-end gap-3 px-3"
        dir="ltr"
      >
        <div className="text-right">
          <p className="text-sm font-semibold text-[#111827]">
            {activity.name}
          </p>
          <p className="text-xs text-[#6B7280]">{activity.ageGroup}</p>
        </div>
        {/* Icon */}
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg text-lg ${config.bg}`}
        >
          {config.emoji.startsWith("/") ? (
            <img src={config.emoji} className="h-5 w-5" />
          ) : (
            config.emoji
          )}
        </div>
        <button
          onClick={onToggle}
          className={`flex h-6 w-6 items-center justify-center rounded-md transition-colors ${
            activity.enabled
              ? "bg-[#00A79E] text-white"
              : "border border-[#E5E7EB] bg-white text-[#6B7280]"
          }`}
        >
          {activity.enabled && <Check className="h-4 w-4" />}
        </button>
      </div>

      {/* Left side: toggle */}
      {/* Right side: menu icon */}
      <button className="text-[#6B7280] hover:text-[#111827]">
        <MoreVertical className="h-4 w-4" />
      </button>
    </div>
  );
}

interface ActivityGridProps {
  activities: Activity[];
  onToggle: (id: string) => void;
}

function ActivityGrid({ activities, onToggle }: ActivityGridProps) {
  return (
    <div className="rounded-xl border border-dashed border-[#00A79E]/40 bg-white p-6">
      <button className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-[#E5E7EB] py-3 text-sm text-[#6B7280] transition-colors hover:border-[#00A79E] hover:text-[#00A79E]">
        <Plus className="h-4 w-4" />
        إضافة نشاط جديد
      </button>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onToggle={() => onToggle(activity.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>(initialActivities);

  const totalActivities = activities.length;
  const enabledActivities = activities.filter((a) => a.enabled).length;
  const disabledActivities = activities.filter((a) => !a.enabled).length;
  const importantActivities = activities.filter((a) => a.important).length;

  const toggleActivity = (id: string) => {
    setActivities((prev) =>
      prev.map((a) => (a.id === id ? { ...a, enabled: !a.enabled } : a)),
    );
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#F9FAFB] font-(--font-cairo)">
      <div className="mx-auto  px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-start justify-between gap-3">
          <div className="text-right">
            <h1 className="text-2xl font-bold text-[#111827]">
              إضافة نشاط جديد للنظام
            </h1>
            <p className="mt-1 text-sm text-[#6B7280]">
              اختر الأنواع المتاحة للموظفين عند تسجيل الأنشطة اليومية
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-lg border bg-[#009999] border-[#00A79E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#ECFEFF]">
            <img src="/icons/save.png" className="h-4 w-4" />
            حفظ البيانات
          </button>
        </div>

        {/* Stats */}
        <StatsBar
          total={totalActivities}
          enabled={enabledActivities}
          disabled={disabledActivities}
          important={importantActivities}
        />

        {/* Activity Grid */}
        <ActivityGrid activities={activities} onToggle={toggleActivity} />
      </div>
    </div>
  );
}
