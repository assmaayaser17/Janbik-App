"use client";

import {
  Baby,
  Users,
  Heart,
  AlertTriangle,
  Clock as ClockIcon,
  Edit,
  CircleDot,
  FileText,
  DollarSign,
  Wrench,
  Award,
  Settings,
  CheckCircle,
  Sun,
  Monitor,
  CalendarCheck,
  ExternalLink,
  Utensils,
} from "lucide-react";
import { JSX, useMemo, type ElementType } from "react";
import Image from "next/image";

function CircularProgress({
   value,
  label,
  size = 90,
  strokeWidth = 15,
}: {
  value: number;
  label: string;
  size?: number;
  strokeWidth?: number;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const gap = 20; // حجم الفتحة فوق
  const progress = (value / 100) * (circumference - gap);

  return (
     <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          
          {/* الخلفية الرمادي */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#005C5C"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference - gap} ${gap}`}
            strokeLinecap="butt"
          />

          {/* التقدم */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#0D9488"
            strokeWidth={strokeWidth}
            strokeDasharray={`${progress} ${circumference}`}
            strokeLinecap="butt"
          />
        </svg>

        {/* النسبة */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-[#0D9488]">
            {value}%
          </span>
        </div>
      </div>

      <span className="text-center text-xs text-[#6B7280]">{label}</span>
    </div>
    // <div className="flex flex-col items-center gap-2">
    //   <div className="relative" style={{ width: size, height: size }}>
    //     <svg width={size} height={size} className="-rotate-90">
    //       <circle
    //         cx={size / 2}
    //         cy={size / 2}
    //         r={radius}
    //         fill="none"
    //         stroke="#E5E7EB"
    //         strokeWidth={strokeWidth}
    //       />
    //       <circle
    //         cx={size / 2}
    //         cy={size / 2}
    //         r={radius}
    //         fill="none"
    //         stroke="#00A79E"
    //         strokeWidth={strokeWidth}
    //         strokeDasharray={circumference}
    //         strokeDashoffset={offset}
    //         strokeLinecap="round"
    //       />
    //     </svg>
    //     <div className="absolute inset-0 flex items-center justify-center">
    //       <span className="text-lg font-bold text-[#111827]">{value}%</span>
    //     </div>
    //   </div>
    //   <span className="text-center text-[11px] text-[#6B7280]">{label}</span>
    // </div>
  );
}

function MessagesCard() {
  const messages = [
    {
      name: "السيدة نورة",
      text: "كيف حال طفلي؟ هل كل شيء على ما يرام؟",
      time: "منذ 10 دقائق",
      avatar: "👩",
    },
    {
      name: "السيدة ريم",
      text: "ما هو نموذج الرحلة الميدانية؟",
      time: "منذ ساعة",
      avatar: "👩‍🦱",
    },
  ];

  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00A79E] text-[10px] font-bold text-white">
          3
        </span>
        <h3 className="text-sm font-semibold text-[#111827]">رسائل</h3>
      </div>

      <div className="space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className="flex items-start justify-end gap-3 text-right"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#6B7280]">{msg.time}</span>
                <span className="text-xs font-semibold text-[#111827]">
                  {msg.name}
                </span>
              </div>
              <p className="mt-0.5 text-[11px] text-[#6B7280]">{msg.text}</p>
            </div>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ECFEFF] text-sm">
              {msg.avatar}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 w-full rounded-lg bg-[#ECFEFF] py-2 text-xs font-medium text-[#00A79E] hover:bg-[#D1FAE5]">
        عرض جميع الرسائل
      </button>
    </div>
  );
}


 function ActivitiesCard() {
  type ActivityItem = {
    id: number;
    className: string;
    activityType: string;
    iconBg: string;
    dotColor: string;
    icon: string;
  };

  const activities: ActivityItem[] = [
    {
      id: 1,
      className: "فصل الرضع أ",
      activityType: "وجبة طعام",
      icon: "/icons/art.png",
      iconBg: "bg-[#CCFBF1]",
      dotColor: "bg-[#0D9488]",
    },
    {
      id: 2,
      className: "فصل الصغار ب",
      activityType: "وجبة طعام",
      icon: "/icons/food.png",
      iconBg: "bg-[#FFEDD5]",
      dotColor: "bg-[#F97316]",
    },
    {
      id: 3,
      className: "فصل الروضة ج",
      activityType: "وجبة طعام",
      icon: "/icons/bed.png",
      iconBg: "bg-[#E0E7FF]",
      dotColor: "bg-[#6366F1]",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5" dir="rtl">
        <h2 className="text-xl font-bold text-[#111827]">الأنشطة المباشرة</h2>
        <button className="flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] shadow-sm transition hover:bg-[#F3F4F6]">
          <ExternalLink className="w-4 h-4" />
          اعلام
        </button>
      </div>

      {/* Activity Cards */}
      <div className="flex flex-col gap-3" dir="rtl">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm border border-[#E5E7EB]"
          >
            {/* Right side: icon + text */}
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${activity.iconBg}`}
              >
                 <img src={activity.icon} alt="" className="w-5 h-5" />
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#111827] leading-tight">
                  {activity.className}
                </p>
                <p className="text-xs text-[#6B7280] mt-0.5">
                  {activity.activityType}
                </p>
              </div>
            </div>

            {/* Left side: status */}
            <div className="flex items-center gap-2 rounded-full bg-[#F3F4F6] px-4 py-1.5">
                <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full ${activity.dotColor} opacity-40`}
                />
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${activity.dotColor}`}
                />
              </span>
              <span className="text-sm text-[#6B7280] font-semibold">
                جاري الان
              </span>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function AlertsCard() {
  return (
    <div className="h-full rounded-xl border border-[#E5E7EB] bg-white p-5" dir="rtl">
      <div className="mb-4 flex gap-2 items-center ">
        
        <h3 className="text-sm font-semibold text-[#111827]">تنبيهات</h3>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DC2626] text-[10px] font-bold text-white">
          2
        </span>
      </div>

      <div className="space-y-3" dir="ltr">
        {/* Health Alert */}
        <div className="rounded-lg  bg-[#F3F4F6] p-3">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[10px] text-[#6B7280]">10:30 صباحاً</span>
            <span className="text-xs font-semibold ">
              تنبيه صحي للطفل
            </span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <div>
              <p className="text-[11px] font-medium text-[#111827]">
                سارة العلي
              </p>
              <p className="text-[10px] text-[#6B7280]">
                تعاني من حرارة (C38.2)
              </p>
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ECFEFF]">
              <img src="/child.png" className="w-9 h-9" alt="child" />
            </div>
          </div>
        </div>

        {/* Lunch Alert */}
        <div className="rounded-lg  bg-[#F3F4F6] p-3">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[10px] text-[#6B7280]">12:15 ساعة</span>
            <span className="text-xs font-semibold ">
              موعد الغداء
            </span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <p className="text-[10px] text-[#6B7280]">
              موعد الغداء خلال 15 دقيقة
            </p>
            <ClockIcon className="h-3.5 w-3.5 text-[#D97706]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// function AnnouncementsCard() {
//   const announcements = [
//     { text: "جاري الآن", status: "live" },
//     { text: "جاري الآن", status: "live" },
//     { text: "جاري الآن", status: "live" },
//   ];

//   return (
//     <div className="rounded-xl border border-[#E5E7EB] bg-white p-5">
//       <div className="mb-4 flex items-center justify-end gap-2">
//         <h3 className="text-sm font-semibold text-[#111827]">اعلام</h3>
//         <Edit className="h-4 w-4 text-[#00A79E]" />
//       </div>

//       <div className="space-y-3">
//         {announcements.map((item, i) => (
//           <div
//             key={i}
//             className="flex items-center justify-end gap-2 text-right"
//           >
//             <span className="text-xs font-medium text-[#16A34A]">
//               {item.text}
//             </span>
//             <CircleDot className="h-3 w-3 text-[#16A34A]" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

function QuickActions() {
  const actions = [
    { icon: "/icons/document.png", label: "تقرير الحضور", sub: "عرض الحضور" },
    {
      icon: "icons/coins.png",
      label: "الرسوم المتأخرة",
      sub: "متابعة المتأخرات",
    },
    {
      icon: "icons/kit-medical.png",
      label: "السجلات الصحية",
      sub: "متابعة الحالات الصحية",
    },
    { icon: "icons/tool.png", label: "الصيانة والبلاغات", sub: "إدارة أعمال" },
    {
      icon: "icons/newspaper.png",
      label: "تراخيص المركز",
      sub: "متابعة التراخيص",
    },
    {
      icon: "icons/settings.png",
      label: "إعدادات النظام",
      sub: "إدارة الإعدادات",
    },
  ];

  return (
    <div className="mb-6 ">
      <h2 className="mb-3 text-base font-semibold  text-[#111827]">
        إجراءات سريعة
      </h2>
      <div className="grid grid-cols-2 gap-3  sm:grid-cols-3 lg:grid-cols-6">
        {actions.map((action, i) => (
          <button
            key={i}
            className="flex cursor-pointer  items-center gap-2 rounded-lg border border-[#E5E7EB]  p-2 transition-all hover:border-[#00A79E]/30 hover:shadow-sm"
          >
            <div className="rounded-full  bg-[#ECFEFF] p-2">
              <img src={action.icon} className="" alt="" />
            </div>
            <div className="flex flex-col ">
              <span className="text-xs font-medium text-[#111827]">
                {action.label}
              </span>
              <span className="text-[10px] text-[#6B7280]">{action.sub}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function StatsCard() {
  return (
    <div className="h-full rounded-xl border border-[#E5E7EB] bg-white p-5">
      <div className="mb-5 flex items-center gap-2">
        
        <h3 className="text-[14px] font-bold text-[#111827]">
          الإحصائيات والنمو
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-black font-bold sm:flex-row sm:justify-around">
        <CircularProgress value={88} label="حضور اليوم" />
        <CircularProgress value={92} label="تقييم رضا أولياء الأمور" />
        <CircularProgress value={74} label="كفاءة الموظفين" />
      </div>
    </div>
  );
}

function WeatherCard() {
  return (
    <div className="h-full rounded-xl border border-[#E5E7EB] bg-white p-5">
      <h3 className="mb-4 text-[14px] font-semibold text-[#111827]">
        الطقس والأنشطة الخارجية
      </h3>
      <div className="mb-4 flex justify-between items-center ">
        <div className="flex items-center gap-1">
          <Image
            src="/icons/twemoji_sun.svg"
            alt="flower"
            width={32}
            height={32}
          />

          <div className="">
            <span className="text-3xl font-bold text-[#111827]">33°</span>
            <span className="mr-1 text-sm text-[#6B7280]">م</span>
          </div>
        </div>

        <span className="text-xs text-[#6B7280]">غائم جزئياً</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="rounded-lg flex justify-between items-center bg-[#F9FAFB] p-2">
          <p className="mb-1 text-[12px] font-medium ">اللعب الخارجي</p>
          <p className="text-xs font-semibold text-[#9CA3AF]">آمن</p>
        </div>
        <div className="rounded-lg  flex justify-between bg-[#F9FAFB] p-2">
          <p className="mb-1 text-[12px] font-medium  ">مؤشر الأشعة</p>
          <p className="text-xs font-semibold text-[#9CA3AF]">متوسط</p>
        </div>
      </div>
    </div>
  );
}

function StatBox({
  icon: Icon,
  label,
  value,
  sub,
  variant = "default",
}: {
  icon: ElementType;
  label: string;
  value: string | number;
  sub?: string;
  variant?: "default" | "danger";
}) {
  return (
    <div
      className="flex items-center gap-4 rounded-lg border border-[#E5E7EB] px-4 py-3"
      dir="ltr"
    >
      <div
        className={`rounded-lg p-2 ${
          variant === "danger"
            ? "bg-[#FEF2F2] text-[#DC2626]"
            : "bg-[#ECFEFF] text-[#00A79E]"
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 text-center">
        <p className="text-xs text-[#6B7280]">{label}</p>
        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#111827]">
          {value}
        </p>
        {sub && <p className="text-[10px] text-[#6B7280]">{sub}</p>}
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:mb-6">
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#111827]">
        روضة النجوم الصغيرة
      </h1>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatBox
          icon={CalendarCheck}
          label="حضور اليوم"
          value="32/40"
          sub="صباحاً 8:30"
        />
        <StatBox
          icon={AlertTriangle}
          label="تنبيهات اليوم"
          value={1}
          sub="خلال 24 ساعة"
          variant="danger"
        />
        <StatBox
          icon={Monitor}
          label="إجمالي الأجهزة قيد التشغيل"
          value={30}
          sub="معدلة"
        />
        <StatBox
          icon={Users}
          label="موظف حاضر اليوم"
          value="8/12"
          sub="معدلة"
        />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div
      className="min-h-screen bg-[#F9FAFB] p-3 sm:p-4 lg:p-6 xl:p-8"
      dir="rtl"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:gap-6">
        <TopBar />
        <QuickActions />

        {/* Main content grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Weather */}
          <div className="lg:col-span-3">
            <WeatherCard />
          </div>
          {/* Stats */}
          <div className="lg:col-span-5">
            <StatsCard />
          </div>
          {/* Alerts */}
          <div className="lg:col-span-4">
            <AlertsCard />
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Activities */}
          <div className="lg:col-span-8">
            <ActivitiesCard />
          </div>
          {/* Messages */}
          <div className="lg:col-span-4">
            <MessagesCard />
          </div>
        </div>
      </div>
    </div>
  );
}
