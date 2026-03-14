"use client";

import {
  Plus,
  Wifi,
  BatteryLow,
  Bell,
  CheckCircle,
  ChevronDown,
  Monitor,
  MoreVertical,
  Video,
  Search,
} from "lucide-react";
import { useState } from "react";

type DeviceStatus = "متصل" | "غير متصل";
type BatteryColor = "green" | "yellow" | "red";

interface DeviceCardProps {
  name: string;
  id: string;
  status: DeviceStatus;
  badge?: string;
  batteryPercent: number;
  batteryColor: BatteryColor;
  hasVideo?: boolean;
}

const batteryColorMap: Record<BatteryColor, string> = {
  green: "bg-[#16A34A]",
  yellow: "bg-[#FACC15]",
  red: "bg-[#DC2626]",
};

function DeviceCard({
  name,
  id,
  status,
  badge,
  batteryPercent,
  batteryColor,
  hasVideo = false,
}: DeviceCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-[#E5E7EB] p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src="/child.png"
          alt={name}
          className="h-12 w-12 rounded-lg object-cover"
        />
        <div className="flex flex-1 flex-col gap-0.5" dir="rtl">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#111827]">{name}</span>
            {badge && (
              <span className="rounded-full bg-[#FEF3C7] px-2 py-0.5 text-[10px] font-semibold text-[#92400E]">
                {badge}
              </span>
            )}
          </div>
          <span className="text-xs text-[#6B7280]">ID : {id}</span>
        </div>
        {/* <div className="flex items-center gap-1.5">
          <span
            className={`h-2 w-2  rounded-full ${
              status === "متصل" ? "bg-[#22C55E]  " : "bg-[#9CA3AF] "
            }`}
          />
          <span className="text-xs text-[#22C55E]">{status}</span>
        </div> */}
        <div className="flex items-center gap-1.5">
  <span
    className={`h-2 w-2 rounded-full ${
      status === "متصل" ? "bg-[#22C55E]" : "bg-[#9CA3AF]"
    }`}
  />

  <span
    className={`text-xs ${
      status === "متصل" ? "text-[#22C55E]" : "text-[#9CA3AF]"
    }`}
  >
    {status}
  </span>
</div>
      </div>

      {/* Battery bar */}
      <div className="flex items-center gap-2">
        {/* {hasVideo ? (
          <Video className="h-4 w-4 text-[#DC2626]" />
        ) : (
          <Monitor className="h-4 w-4 text-[#6B7280]" />
        )} */}
        <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-[#E5E7EB]">
          <div
            className={`absolute inset-y-0 right-0 rounded-full ${batteryColorMap[batteryColor]}`}
            style={{ width: `${batteryPercent}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-[#4B5563]">
          {batteryPercent}%
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2" dir="ltr">
        <button className="p-1 border border-[#E5E7EB]   text-[#6B7280] hover:text-[#111827]">
          <MoreVertical className="h-4 w-4" />
        </button>
        <button className="flex-1 rounded-lg bg-[#00A79E] py-2 text-center text-sm font-semibold text-white">
          عرض التفاصيل
        </button>
        {/* <button className="rounded-lg border border-[#00A79E] p-2 text-[#00A79E] hover:bg-[#ECFEFF]">
          <Monitor className="h-4 w-4" />
        </button> */}
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  value: number;
  label: string;
  sublabel?: string;
  variant?: "default" | "destructive" | "warning" | "success" | "primary";
}
type IconProps = {
  className?: string;
};

function ClassroomIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.58824 0.617647C6.58824 0.275368 6.8636 0 7.20588 0H10.0882C10.4305 0 10.7059 0.275368 10.7059 0.617647V1.85294C10.7059 2.19522 10.4305 2.47059 10.0882 2.47059H8.23529V2.96471L11.5294 4.94118H13.1765C14.0849 4.94118 14.8235 5.67978 14.8235 6.58824V12.3529C14.8235 13.2614 14.0849 14 13.1765 14H1.64706C0.738603 14 0 13.2614 0 12.3529V6.58824C0 5.67978 0.738603 4.94118 1.64706 4.94118H3.29412L6.58824 2.96471V0.617647ZM6.17647 10.7059V12.7647H8.64706V10.7059C8.64706 10.0239 8.09375 9.47059 7.41176 9.47059C6.72978 9.47059 6.17647 10.0239 6.17647 10.7059ZM2.88235 11.5294C3.10882 11.5294 3.29412 11.3441 3.29412 11.1176V10.2941C3.29412 10.0676 3.10882 9.88235 2.88235 9.88235H2.05882C1.83235 9.88235 1.64706 10.0676 1.64706 10.2941V11.1176C1.64706 11.3441 1.83235 11.5294 2.05882 11.5294H2.88235ZM3.29412 7.82353V7C3.29412 6.77353 3.10882 6.58824 2.88235 6.58824H2.05882C1.83235 6.58824 1.64706 6.77353 1.64706 7V7.82353C1.64706 8.05 1.83235 8.23529 2.05882 8.23529H2.88235C3.10882 8.23529 3.29412 8.05 3.29412 7.82353ZM12.7647 11.5294C12.9912 11.5294 13.1765 11.3441 13.1765 11.1176V10.2941C13.1765 10.0676 12.9912 9.88235 12.7647 9.88235H11.9412C11.7147 9.88235 11.5294 10.0676 11.5294 10.2941V11.1176C11.5294 11.3441 11.7147 11.5294 11.9412 11.5294H12.7647ZM13.1765 7.82353V7C13.1765 6.77353 12.9912 6.58824 12.7647 6.58824H11.9412C11.7147 6.58824 11.5294 6.77353 11.5294 7V7.82353C11.5294 8.05 11.7147 8.23529 11.9412 8.23529H12.7647C12.9912 8.23529 13.1765 8.05 13.1765 7.82353ZM7.41176 7.82353C7.57399 7.82353 7.73462 7.79158 7.88449 7.7295C8.03436 7.66742 8.17054 7.57643 8.28525 7.46172C8.39996 7.34701 8.49095 7.21083 8.55303 7.06096C8.61511 6.91109 8.64706 6.75046 8.64706 6.58824C8.64706 6.42601 8.61511 6.26538 8.55303 6.11551C8.49095 5.96564 8.39996 5.82946 8.28525 5.71475C8.17054 5.60004 8.03436 5.50905 7.88449 5.44697C7.73462 5.38489 7.57399 5.35294 7.41176 5.35294C7.24954 5.35294 7.08891 5.38489 6.93904 5.44697C6.78917 5.50905 6.65299 5.60004 6.53828 5.71475C6.42357 5.82946 6.33258 5.96564 6.2705 6.11551C6.20842 6.26538 6.17647 6.42601 6.17647 6.58824C6.17647 6.75046 6.20842 6.91109 6.2705 7.06096C6.33258 7.21083 6.42357 7.34701 6.53828 7.46172C6.65299 7.57643 6.78917 7.66742 6.93904 7.7295C7.08891 7.79158 7.24954 7.82353 7.41176 7.82353Z"
        fill="#FF8B64"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 6L8 10L12 6" stroke="black" strokeWidth="1.5" />
    </svg>
  );
}

const variantStyles: Record<NonNullable<StatCardProps["variant"]>, string> = {
  default: "bg-white text-[#111827]",
  destructive: "bg-white text-[#111827]",
  warning: "bg-white text-[#111827]",
  success: "bg-white text-[#111827]",
  primary: "bg-white text-[#111827]",
};

const iconVariantStyles: Record<NonNullable<StatCardProps["variant"]>, string> =
  {
    default: "text-[#6B7280]",
    destructive: "text-[#DC2626]",
    warning: "text-[#D97706]",
    success: "text-[#16A34A]",
    primary: "text-[#0EA5E9]",
  };

// function StatCard({
//   icon: Icon,
//   value,
//   label,
//   sublabel,
//   variant = "default",
// }: StatCardProps) {
//   return (
//     <div
//       className={`flex items-center gap-3 rounded-xl  border border-[#E5E7EB] px-4 py-3 ${variantStyles[variant]}`}
//       dir="rtl"
//     >
//       <Icon className={`h-5 w-5 shrink-0 ${iconVariantStyles[variant]}`} />
//       <div className="flex flex-col items-start">
//         <span className="text-xs text-[#6B7280]">{label}</span>
//         {sublabel && (
//           <span className="text-[10px] text-[#9CA3AF]">{sublabel}</span>
//         )}
//       </div>
//       <span className="mr-auto text-2xl font-bold text-[#111827]">
//         {value}
//       </span>
//     </div>
//   );
// }
function StatCard({
  icon,
  value,
  label,
  sublabel,
  variant = "default",
}: StatCardProps) {

  const Icon = icon;

  return (
    <div
      className={`flex justify-between items-center gap-3 rounded-xl border border-[#E5E7EB] px-4 py-3 ${variantStyles[variant]}`}
      dir="rtl"
    >
      

      
      <div className="flex flex-col  ">
        <span className="text-xs text-[#6B7280]">{label}</span>
        

         <span className=" text-2xl font-bold  text-[#111827]">
        {value}
      </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#E6F5F5]">

            {typeof icon === "string" ? (
        <img src={icon} className="h-5 w-5 shrink-0" />
      ) : (
        <Icon className={`w-21 h-5 shrink-0 ${iconVariantStyles[variant]}`} />
      )}

        </div>
       
        {sublabel && (
          <span className="text-[10px] text-[#9CA3AF] ">{sublabel}</span>
        )}
       
      </div>

      

     
    </div>
  );
}

type ClassDetails = {
  className: string;
  ageRange: string;
  coveragePercent: number;
  ratio: string;
  staffCount: number;
  childrenCount: string;
  staffMembers: StaffMember[];
};

const CLASS_DETAILS: ClassDetails = {
  className: "فصل الرضع أ",
  ageRange: "1-2",
  coveragePercent: 80,
  ratio: "1:5",
  staffCount: 3,
  childrenCount: "15",
  staffMembers: [],
};

type StaffMember = {
  id: number;
  name: string;
  role: string;
  photo: string;
  startTime: string;
  endTime: string;
  childrenCount: number;
};

const devices: DeviceCardProps[] = [
  {
    name: "نادية فلاح",
    id: "#JW-2024-0001",
    status: "متصل",
    badge: "سوار ذهبي",
    batteryPercent: 99,
    batteryColor: "green",
  },
  {
    name: "نادية فلاح",
    id: "#JW-2024-0001",
    status: "متصل",
    batteryPercent: 28,
    batteryColor: "red",
    hasVideo: true,
  },
  {
    name: "نادية فلاح",
    id: "#JW-2024-0001",
    status: "متصل",
    badge: "سوار ذهبي",
    batteryPercent: 99,
    batteryColor: "green",
  },
  {
    name: "نادية فلاح",
    id: "#JW-2024-0001",
    status: "متصل",
    batteryPercent: 55,
    batteryColor: "yellow",
  },
  {
    name: "نادية فلاح",
    id: "#JW-2024-0001",
    status: "متصل",
    badge: "سوار ذهبي",
    batteryPercent: 99,
    batteryColor: "green",
  },
  {
    name: "نادية فلاح",
    id: "#JW-2024-0001",
    status: "متصل",
    batteryPercent: 99,
    batteryColor: "green",
  },
  {
    name: "نادية فلاح",
    id: "#JW-2024-0001",
    status: "غير متصل",
    batteryPercent: 99,
    batteryColor: "green",
  },
  {
    name: "نادية فلاح",
    id: "#JW-2024-0001",
    status: "غير متصل",
    batteryPercent: 99,
    batteryColor: "green",
  },
];

export default function DevicesPage() {
  const [search, setSearch] = useState("");
  const { className } = CLASS_DETAILS;
 

  const visibleDevices = devices.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-(--font-cairo)" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-[#111827]">
              إدارة الأجهزة
            </h1>
            <p className="text-sm text-[#6B7280]">
              إدارة ساعات جنبك للأطفال
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-[#00A79E] px-5 py-2.5 text-sm font-semibold text-white">
            <Plus className="h-4 w-4" />
            إضافة جهاز
          </button>
        </div>

        {/* Stats Row */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          <StatCard icon='/icons/watch.png' value={30} label="إجمالي الأجهزة" variant="primary" />
          <StatCard
            icon="/icons/greencheck.png"
            value={22}
            label="نشط"
            sublabel="معدّلة"
            variant="success"
          />
          <StatCard
            icon='/icons/check.png'
            value={6}
            label="متاح"
            sublabel="غير مخصص"
            variant="default"
          />
          <StatCard
            icon='/icons/error.png'
            value={2}
            label="بطارية منخفضة"
            sublabel="إجراء مطلوب"
            variant="warning"
          />
          <StatCard
            icon='/icons/alert.png'
            value={3}
            label="تنبيهات"
            sublabel="خلال 48 ساعة"
            variant="destructive"
          />
        </div>

        {/* Search & Filter */}
         <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center" dir="ltr">
          {/* Class selector */}
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="flex items-center gap-3 h-8 px-3 rounded-lg border border-neutral-200 bg-white">
              <ChevronDownIcon />
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="flex items-center justify-center w-6 h-4 rounded-full bg-[#FF8B64] px-1.5 py-0.5">
                    <span className="text-[#511A07] text-[11px] font-semibold leading-none">
                      1
                    </span>
                  </div>
                  <span className="text-black text-[12px] font-semibold leading-5">
                    {className}
                  </span>
                </div>
                <ClassroomIcon />
              </div>
            </div>
          </div>

          {/* Search */}
          <div
            className="flex items-center gap-2 bg-white border border-neutral-200 rounded-lg px-3 py-1.5 w-full sm:w-64"
            dir="rtl"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <path d="M2 6.667C2 7.279 2.121 7.886 2.355 8.453C2.59 9.019 2.933 9.533 3.367 9.967C3.8 10.4 4.315 10.744 4.881 10.978C5.447 11.213 6.054 11.333 6.667 11.333C7.279 11.333 7.886 11.213 8.453 10.978C9.019 10.744 9.533 10.4 9.967 9.967C10.4 9.533 10.744 9.019 10.978 8.453C11.213 7.886 11.333 7.279 11.333 6.667C11.333 6.054 11.213 5.447 10.978 4.881C10.744 4.315 10.4 3.8 9.967 3.367C9.533 2.933 9.019 2.59 8.453 2.355C7.886 2.121 7.279 2 6.667 2C6.054 2 5.447 2.121 4.881 2.355C4.315 2.59 3.8 2.933 3.367 3.367C2.933 3.8 2.59 4.315 2.355 4.881C2.121 5.447 2 6.054 2 6.667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 14L10 10" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs><clipPath id="clip0"><rect width="16" height="16" fill="white"/></clipPath></defs>
            </svg>
            <input
              type="text"
              placeholder="ابحث عن فصل أو بالاسم"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 text-right text-[12px] font-medium text-neutral-500 placeholder-neutral-400 bg-transparent outline-none"
              dir="ltr"
            />
          </div>
        </div>

        {/* Device Grid */}
        <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleDevices.map((device, i) => (
            <DeviceCard key={i} {...device} />
          ))}
        </div>
      </div>
    </div>
  );
}

