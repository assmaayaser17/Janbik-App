"use client";

import { useState } from "react";
import { StatsOverview } from "../classes/page";

type Tab = "children" | "staff";

const presencePill =
  "inline-flex items-center gap-1  rounded-full px-2 py-0.5 text-[11px] font-semibold";

export default function AllManagementPage() {
  const [activeTab, setActiveTab] = useState<Tab>("children");

  return (
    <div
      dir="rtl"
      className="min-h-screen p-4  sm:p-6 lg:p-8 space-y-4 lg:space-y-6"
    >
      {/* Header row: title + tabs */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-base sm:text-lg lg:text-xl font-bold text-[#111827]">
            وحدة الإشراف والتحكم
          </h1>
        </div>

        {/* Top tabs */}
        <div className="inline-flex gap-2 rounded-full bg-[#F3F4F6] p-1 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab("children")}
            className={`px-3 py-1.5 rounded-lg flex justify-center items-center gap-1.5 text-[12px] sm:text-[13px] font-semibold transition-colors ${
              activeTab === "children"
                ? "bg-[#009999] text-white shadow-sm"
                : "text-[#6B7280]"
            }`}
          >
            <img src="/human.png" className="h-4 w-4" />
            إدارة الأطفال
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("staff")}
            className={`px-3 py-1.5 flex justify-center items-center gap-1.5 rounded-lg text-[12px] sm:text-[13px] font-semibold transition-colors ${
              activeTab === "staff"
                ? "bg-[#009999] text-white shadow-sm"
                : "text-[#6B7280]"
            }`}
          >
            <img src="/primary.png" className="h-4 w-4" />
            إدارة الموظفين
          </button>
        </div>
      </div>
      <StatsOverview />

      {activeTab === "children" ? <ChildrenView /> : <StaffView />}
    </div>
  );
}

type StaffMember = {
  id: number;
  name: string;
  role: string;
  photo: string;
  startTime: string;
  endTime: string;
  childrenCount: number;
};

type Child = {
  id: number;
  name: string;
  age: string;
  gender: string;
  photo: string;
  status: "present" | "absent";
  temperature: string;
  checkInTime: string;
};

type ChildFilterType = "all" | "present" | "absent";

const CLASS_DETAILS: {
  className: string;
  ageRange: string;
  coveragePercent: number;
  ratio: string;
  staffCount: number;
  childrenCount: string;
  staffMembers: StaffMember[];
} = {
  className: "فصل الرضع أ",
  ageRange: "رضع (0-12 شهر)",
  coveragePercent: 100,
  ratio: "5",
  staffCount: 4,
  childrenCount: "20/20",
  staffMembers: [
    {
      id: 1,
      name: "سارة ليليا",
      role: "معلمة رئيسية",
      photo:
        "https://api.builder.io/api/v1/image/assets/TEMP/7ac4425fe93903f6b5d6a8521d386e6e0fb681cd?width=56",
      startTime: "09:00",
      endTime: "16:00",
      childrenCount: 5,
    },
    {
      id: 2,
      name: "فاطمة علي",
      role: "مساعدة",
      photo:
        "https://api.builder.io/api/v1/image/assets/TEMP/68cf976cd4ce1dccb7adf9fedbf87ab299bbbe6f?width=56",
      startTime: "09:00",
      endTime: "16:00",
      childrenCount: 5,
    },
    {
      id: 3,
      name: "سارة محمد",
      role: "معلمة الرياضة",
      photo:
        "https://api.builder.io/api/v1/image/assets/TEMP/e339c5e01038a8d13b7a64b162d7889a04be79cb?width=56",
      startTime: "09:00",
      endTime: "16:00",
      childrenCount: 5,
    },
    {
      id: 4,
      name: "مريم زيد",
      role: "مساعدة تعليمية",
      photo:
        "https://api.builder.io/api/v1/image/assets/TEMP/4ea6f0afd8c22c446180baa128f5ee11e97cb2cf?width=56",
      startTime: "09:00",
      endTime: "16:00",
      childrenCount: 5,
    },
  ],
};

const defaultChildren: Child[] = [
  {
    id: 1,
    name: "نادية فلاح",
    age: "3 سنوات و 11 شهر",
    gender: "أنثى",
    photo:
      "https://api.builder.io/api/v1/image/assets/TEMP/71168d008c9fba2457f5d483f968ff6b603c63c4?width=80",
    status: "present",
    temperature: "36.6°م",
    checkInTime: "تسجيل الوصول: 8:45 صباحًا",
  },
  {
    id: 2,
    name: "علي النجار",
    age: "3 سنوات و 8 أشهر",
    gender: "أنثى",
    photo:
      "https://api.builder.io/api/v1/image/assets/TEMP/f4de25d61cf4364bdbc92c3c42b15a2373ccc596?width=80",
    status: "present",
    temperature: "36.6°م",
    checkInTime: "تسجيل الوصول: 8:45 صباحًا",
  },
  {
    id: 3,
    name: "فاطمة الزهراء",
    age: "6 سنوات و 1 شهر",
    gender: "ذكر",
    photo:
      "https://api.builder.io/api/v1/image/assets/TEMP/638c661d6591f8c2576e2e8e1f086cb77e328402?width=80",
    status: "present",
    temperature: "36.6°م",
    checkInTime: "تسجيل الوصول: 8:45 صباحًا",
  },
  {
    id: 4,
    name: "يوسف الحسن",
    age: "2 سنوات و 9 أشهر",
    gender: "أنثى",
    photo:
      "https://api.builder.io/api/v1/image/assets/TEMP/909ebc3ed527db9638565a9615576ebaf351cf8e?width=80",
    status: "present",
    temperature: "36.6°م",
    checkInTime: "تسجيل الوصول: 8:45 صباحًا",
  },
  {
    id: 5,
    name: "منى العبدالله",
    age: "4 سنوات و 5 أشهر",
    gender: "ذكر",
    photo:
      "https://api.builder.io/api/v1/image/assets/TEMP/525d37a5e7934e5c4e7f2aa80dfce3f19c640ec7?width=80",
    status: "present",
    temperature: "36.6°م",
    checkInTime: "تسجيل الوصول: 8:45 صباحًا",
  },
  {
    id: 6,
    name: "ليلى القاسم",
    age: "5 سنوات و 3 أشهر",
    gender: "ذكر",
    photo:
      "https://api.builder.io/api/v1/image/assets/TEMP/5fa9c7fd0a6804ec6f5f452ffc5a93f7fd94a8ac?width=80",
    status: "present",
    temperature: "36.5°م",
    checkInTime: "تسجيل الوصول: 10:00 صباحًا",
  },
];

function ChildrenView() {
  const { className } = CLASS_DETAILS;
  const [search, setSearch] = useState("");

  return (
    <div dir="ltr" className="min-h-full">
      <div className="flex flex-col gap-4">
        {/* Top Header Bar */}
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
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

        {/* Main content */}
        <div className="flex flex-col gap-6">
          <ChildrenListSection className={className} />
        </div>
      </div>
    </div>
  );
}

function StaffView() {
  return <ParentEmployeesPage />;
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

function ChildrenListSection({ className }: { className?: string }) {
  const [filter, setFilter] = useState<ChildFilterType>("all");
  const allChildren = defaultChildren;

  const presentCount = allChildren.filter((c) => c.status === "present").length;
  const absentCount = allChildren.filter((c) => c.status === "absent").length;
  const totalCount = allChildren.length;

  const filteredChildren =
    filter === "all"
      ? allChildren
      : allChildren.filter(
          (c) => c.status === (filter === "present" ? "present" : "absent"),
        );

  return (
    <div className="flex flex-col gap-3" dir="rtl">
      {/* Section header */}

      {/* Children grid */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredChildren.map((child) => (
          <article
            key={child.id}
            className="rounded-2xl  border  border-[#E5E7EB] shadow-sm p-3.5 flex flex-col gap-3"
          >
            <div className="flex items-start  gap-3">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#E5F6FF] overflow-hidden">
                  <img
                    src={child.photo}
                    alt={child.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0 space-y-0.5">
                <div className="flex items-center justify-between gap-1">
                  <h3 className="text-sm font-semibold text-[#111827] truncate">
                    {child.name}
                  </h3>
                  <span
                    className={`${presencePill} ${
                      child.status === "present"
                        ? "bg-[#ECFDF3] text-[#166534]"
                        : "bg-[#FEF2F2] text-[#B91C1C]"
                    }`}
                  >
                    {child.status === "present" ? "حاضر" : "غائب"}
                  </span>
                </div>
                <p className="text-[11px] text-[#6B7280] truncate">
                  {child.age} | {child.gender}
                </p>
              </div>
            </div>

            {child.status === "present" && (
              <div className="flex items-center justify-between text-[11px] text-[#6B7280]">
                <span>{child.checkInTime}</span>
                <span>{child.temperature}</span>
              </div>
            )}
            <div className="flex gap-2">
              <button
                type="button"
                className="flex h-8 items-center justify-center gap-2 px-3 py-2 rounded-lg flex-1 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#009CA6" }}
              >
                <span className="text-white text-[12px] sm:text-[13px] font-semibold leading-5 text-center">
                  عرض الملف الشخصي
                </span>
                <EmployeeCardEyeIcon />
              </button>
              <button className="bg-[#F9FAFB] px-2 border border-[#E5E7EB] rounded-lg shrink-0">
                <img src="/edit.png" className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

type Employee = {
  id: number;
  name: string;
  role: string;
  image: string;
  status: "present" | "absent";
  assignment: "assigned" | "available" | null;
  overtime: string | null;
  checkInTime: string | null;
};

type FilterType = "all" | "present" | "absent";

type EditAttendanceEmployee = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  checkIn: string;
  checkOut: string;
  status: "present" | "absent" | "leave";
  room: string;
  notes: string;
};

const employeesData: Employee[] = [
  {
    id: 1,
    name: "ليلى النور",
    role: "معلمة: فصل الصغار A",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/2a322426efaaf69a84e1c5e3617600bdd6e74668?width=80",
    status: "present",
    assignment: "assigned",
    overtime: "2h 10 min",
    checkInTime: "8:00 صباحًا",
  },
  {
    id: 2,
    name: "هالة العلي",
    role: "معلمة: فصل الصغار A",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/2b39df334ded45f53e9a0e68bd77bed4386ccacd?width=80",
    status: "present",
    assignment: "assigned",
    overtime: "2h 10 min",
    checkInTime: "8:00 صباحًا",
  },
  {
    id: 3,
    name: "فاطمة أحمد",
    role: "معلمة: فصل الصغار A",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/983788a0f2228bc202a43a18a2454a37f1318839?width=80",
    status: "present",
    assignment: "assigned",
    overtime: "2h 10 min",
    checkInTime: "8:00 صباحًا",
  },
  {
    id: 4,
    name: "منى الجبالي",
    role: "معلمة: فصل الصغار A",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/fc8952e84ac02d4e249cfd1a86fdfdab8f690cfa?width=80",
    status: "present",
    assignment: "available",
    overtime: null,
    checkInTime: "10:00 صباحًا",
  },
  {
    id: 5,
    name: "سارة القاسم",
    role: "معلمة: فصل الصغار A",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/61510945bb3d546b40db0e659209e437bd248ee3?width=80",
    status: "present",
    assignment: "assigned",
    overtime: "2h 10 min",
    checkInTime: "8:00 صباحًا",
  },
  {
    id: 6,
    name: "نورة الفهد",
    role: "معلمة: فصل الصغار A",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/cb022e8b0c43d0fd637e4066ca4f3b6be450018d?width=80",
    status: "present",
    assignment: "assigned",
    overtime: "2h 10 min",
    checkInTime: "8:00 صباحًا",
  },
  {
    id: 7,
    name: "ليلى السعيد",
    role: "معلمة: فصل الصغار A",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/983788a0f2228bc202a43a18a2454a37f1318839?width=80",
    status: "absent",
    assignment: null,
    overtime: null,
    checkInTime: null,
  },
  {
    id: 8,
    name: "عائشة النور",
    role: "معلمة: فصل الصغار A",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/19637c600b82d32a216f15199bdacde1aa13ff72?width=80",
    status: "absent",
    assignment: null,
    overtime: null,
    checkInTime: null,
  },
  {
    id: 9,
    name: "ليلى السعيد",
    role: "معلمة: فصل الصغار A",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/983788a0f2228bc202a43a18a2454a37f1318839?width=80",
    status: "absent",
    assignment: null,
    overtime: null,
    checkInTime: null,
  },
];

function ParentEmployeesPage() {
  const [filter] = useState<FilterType>("all");
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState<Employee | null>(null);
  const [employeesList, setEmployeesList] = useState<Employee[]>(employeesData);

  const handleViewProfile = (employee: Employee) => {
    setSelectedEmployee(employee);
    setProfileModalOpen(true);
  };

  const handleEdit = (employee: Employee) => {
    setEmployeeToEdit(employee);
    setEditModalOpen(true);
  };

  const employeeToModalEmployee = (emp: Employee): EditAttendanceEmployee => {
    const checkInFromTime = emp.checkInTime
      ? emp.checkInTime.replace(/\s*(صباحًا|مساءً|ص|م).*$/, "").trim()
      : "08:00";
    const match = checkInFromTime.match(/(\d{1,2}):?(\d{2})?/);
    const checkIn = match
      ? `${match[1].padStart(2, "0")}:${(match[2] || "00").padStart(2, "0")}`
      : "08:00";
    return {
      id: emp.id,
      name: emp.name,
      role: emp.role,
      avatar: emp.image,
      checkIn,
      checkOut: "16:00",
      status: emp.status,
      room: "",
      notes: "",
    };
  };

  const handleSaveAttendance = (updated: EditAttendanceEmployee) => {
    if (!employeeToEdit) return;
    setEmployeesList((prev) =>
      prev.map((e) =>
        e.id === updated.id
          ? {
              ...e,
              status: updated.status === "leave" ? "absent" : updated.status,
              checkInTime: `${updated.checkIn.replace(/^0?/, "")} صباحًا`,
            }
          : e,
      ),
    );
    setEditModalOpen(false);
    setEmployeeToEdit(null);
  };

  const presentCount = employeesList.filter(
    (e) => e.status === "present",
  ).length;
  const absentCount = employeesList.filter((e) => e.status === "absent").length;
  const totalCount = employeesList.length;

  const filteredEmployees = employeesList.filter((e) => {
    if (filter === "present") return e.status === "present";
    if (filter === "absent") return e.status === "absent";
    return true;
  });
  const [search, setSearch] = useState("");

  return (
    <>
      <div dir="ltr" className="min-h-full">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
          {/* Class selector */}
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="flex items-center gap-3 h-8 px-3 rounded-lg border border-neutral-200 bg-white">
              <ChevronDownIcon />
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="flex items-center justify-center w-6 h-4 rounded-full bg-[#009999] px-1.5 py-0.5">
                    <span className="text-white text-[11px] font-semibold leading-none">
                      46
                    </span>
                  </div>
                  <span className="text-black text-[12px] font-semibold leading-5">
                    جميع الفصول
                  </span>
                </div>
                <img src="/room.png" className="h-4 w-4" />
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

        {/* قائمة الموظفين + الفلاتر */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredEmployees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
                onViewProfile={handleViewProfile}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </div>
      </div>

      {/* مودال الملف الشخصي */}
      {profileModalOpen && selectedEmployee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-lg lg:max-w-3xl my-4">
            <TeacherProfileModal
              employee={{
                name: selectedEmployee.name,
                role: selectedEmployee.role,
                image: selectedEmployee.image,
                className: selectedEmployee.role.includes(":")
                  ? selectedEmployee.role.split(":")[1]?.trim()
                  : selectedEmployee.role,
              }}
              onClose={() => setProfileModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* مودال تعديل الحضور */}
      {editModalOpen && employeeToEdit && (
        <EditAttendanceModal
          employee={employeeToModalEmployee(employeeToEdit)}
          onClose={() => {
            setEditModalOpen(false);
            setEmployeeToEdit(null);
          }}
          onSave={handleSaveAttendance}
        />
      )}
    </>
  );
}

interface EmployeeCardProps {
  employee: Employee;
  onViewProfile?: (employee: Employee) => void;
  onEdit?: (employee: Employee) => void;
}

function ClockIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0ZM5.4375 2.8125V6C5.4375 6.1875 5.53125 6.36328 5.68828 6.46875L7.93828 7.96875C8.19609 8.14219 8.54531 8.07187 8.71875 7.81172C8.89219 7.55156 8.82187 7.20469 8.56172 7.03125L6.5625 5.7V2.8125C6.5625 2.50078 6.31172 2.25 6 2.25C5.68828 2.25 5.4375 2.50078 5.4375 2.8125Z"
        fill="#6B7280"
      />
    </svg>
  );
}

function HourglassIcon() {
  return (
    <svg
      width="9"
      height="12"
      viewBox="0 0 9 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 0C0.335156 0 0 0.335156 0 0.75C0 1.16484 0.335156 1.5 0.75 1.5V1.75781C0.75 2.75156 1.14609 3.70547 1.84922 4.40859L3.44063 6L1.84922 7.59141C1.14609 8.29453 0.75 9.24844 0.75 10.2422V10.5C0.335156 10.5 0 10.8352 0 11.25C0 11.6648 0.335156 12 0.75 12H8.25C8.66484 12 9 11.6648 9 11.25C9 10.8352 8.66484 10.5 8.25 10.5V10.2422C8.25 9.24844 7.85391 8.29453 7.15078 7.59141L5.55937 6L7.15078 4.40859C7.85391 3.70547 8.25 2.75156 8.25 1.75781V1.5C8.66484 1.5 9 1.16484 9 0.75C9 0.335156 8.66484 0 8.25 0H0.75ZM6.75 10.2422V10.5H2.25V10.2422C2.25 9.64453 2.48672 9.07266 2.90859 8.65078L4.5 7.05938L6.09141 8.65078C6.51328 9.07266 6.75 9.64453 6.75 10.2422Z"
        fill="white"
      />
    </svg>
  );
}

function EmployeeCardEyeIcon() {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.71629 0C5.55201 0 3.81897 0.985714 2.55737 2.15893C1.30379 3.32411 0.465402 4.71429 0.0662946 5.67054C-0.0220982 5.88214 -0.0220982 6.11786 0.0662946 6.32946C0.465402 7.28571 1.30379 8.67857 2.55737 9.84107C3.81897 11.0116 5.55201 12 7.71629 12C9.88058 12 11.6136 11.0143 12.8752 9.84107C14.1288 8.67589 14.9672 7.28571 15.3663 6.32946C15.4547 6.11786 15.4547 5.88214 15.3663 5.67054C14.9672 4.71429 14.1288 3.32143 12.8752 2.15893C11.6136 0.988393 9.88058 0 7.71629 0ZM3.85915 6C3.85915 4.97702 4.26553 3.99594 4.98888 3.27259C5.71224 2.54923 6.69332 2.14286 7.71629 2.14286C8.73927 2.14286 9.72035 2.54923 10.4437 3.27259C11.1671 3.99594 11.5734 4.97702 11.5734 6C11.5734 7.02298 11.1671 8.00406 10.4437 8.72741C9.72035 9.45077 8.73927 9.85714 7.71629 9.85714C6.69332 9.85714 5.71224 9.45077 4.98888 8.72741C4.26553 8.00406 3.85915 7.02298 3.85915 6ZM7.71629 4.28571C7.71629 5.23125 6.94754 6 6.00201 6C5.69397 6 5.40469 5.91964 5.1529 5.775C5.12612 6.06697 5.15022 6.36696 5.23058 6.66429C5.59754 8.03571 7.00915 8.85 8.38058 8.48304C9.75201 8.11607 10.5663 6.70446 10.1993 5.33304C9.87254 4.10893 8.71272 3.32946 7.49129 3.43661C7.63326 3.68571 7.71629 3.975 7.71629 4.28571Z"
        fill="white"
      />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0531 0.508496C10.5398 -0.00478517 9.71016 -0.00478517 9.19687 0.508496L8.625 1.08037L10.9195 3.3749L11.4914 2.80303C12.0047 2.28975 12.0047 1.46006 11.4914 0.946777L11.0531 0.508496ZM4.04062 5.66475C3.89766 5.80771 3.7875 5.9835 3.72422 6.17803L3.03047 8.25928C2.9625 8.46084 3.01641 8.6835 3.16641 8.83584C3.31641 8.98818 3.53906 9.03975 3.74297 8.97178L5.82422 8.27803C6.01641 8.21475 6.19219 8.10459 6.3375 7.96162L10.125 4.16943L7.83047 1.8749L4.04062 5.66475ZM2.25 1.4999C1.00781 1.4999 0 2.50771 0 3.7499V9.7499C0 10.9921 1.00781 11.9999 2.25 11.9999H8.25C9.49219 11.9999 10.5 10.9921 10.5 9.7499V7.4999C10.5 7.08506 10.1648 6.7499 9.75 6.7499C9.33516 6.7499 9 7.08506 9 7.4999V9.7499C9 10.1647 8.66484 10.4999 8.25 10.4999H2.25C1.83516 10.4999 1.5 10.1647 1.5 9.7499V3.7499C1.5 3.33506 1.83516 2.9999 2.25 2.9999H4.5C4.91484 2.9999 5.25 2.66475 5.25 2.2499C5.25 1.83506 4.91484 1.4999 4.5 1.4999H2.25Z"
        fill="black"
      />
    </svg>
  );
}

function EmployeeCard({ employee, onViewProfile, onEdit }: EmployeeCardProps) {
  const isPresent = employee.status === "present";

  return (
    <div className="flex flex-col gap-3 p-3 bg-white mt-3 sm:mt-4 rounded-lg border border-gray-200">
      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-between sm:items-start w-full">
        <div className="flex items-center gap-1 flex-wrap">
          {isPresent ? (
            <div className="flex h-5 items-center gap-1.5 px-2.5 rounded-full border border-green-200 bg-green-50">
              <span className="text-green-700 text-[10px] font-bold leading-4">
                حاضر
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
            </div>
          ) : (
            <div className="flex h-5 items-center gap-1.5 px-2.5 rounded-full border border-red-200 bg-red-50">
              <span className="text-red-600 text-[10px] font-bold leading-4">
                غائب
              </span>
              <svg
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.69189 2.94141C6.93604 2.69727 6.93604 2.30078 6.69189 2.05664C6.44775 1.8125 6.05127 1.8125 5.80713 2.05664L3.75049 4.11523L1.69189 2.05859C1.44775 1.81445 1.05127 1.81445 0.807129 2.05859C0.562988 2.30273 0.562988 2.69922 0.807129 2.94336L2.86572 5L0.809082 7.05859C0.564941 7.30273 0.564941 7.69922 0.809082 7.94336C1.05322 8.1875 1.44971 8.1875 1.69385 7.94336L3.75049 5.88477L5.80908 7.94141C6.05322 8.18555 6.44971 8.18555 6.69385 7.94141C6.93799 7.69727 6.93799 7.30078 6.69385 7.05664L4.63525 5L6.69189 2.94141Z"
                  fill="#DC2626"
                />
              </svg>
            </div>
          )}

          {employee.assignment === "assigned" && (
            <div
              className="flex h-5 items-center gap-1.5 px-2.5 rounded-full border bg-[#F1ECFF]"
              style={{ borderColor: "rgba(106,77,204,0.3)" }}
            >
              <span
                className="text-[10px] font-bold leading-4"
                style={{ color: "#6A4DCC" }}
              >
                مُعين
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "#6A4DCC" }}
              />
            </div>
          )}
          {employee.assignment === "available" && (
            <div
              className="flex h-5 items-center gap-1.5 px-2.5 rounded-full border bg-[#FFF8D6]"
              style={{ borderColor: "rgba(138,106,0,0.3)" }}
            >
              <span
                className="text-[10px] font-bold leading-4"
                style={{ color: "#8A6A00" }}
              >
                متاح
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "#8A6A00" }}
              />
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-gray-900 text-[13px] font-bold leading-6">
              {employee.name}
            </span>
            <div className="flex flex-col items-start">
              <div className="flex h-3 items-center gap-1 px-1 rounded-full bg-black">
                <span className="text-white text-[10px] font-normal leading-3">
                  {employee.role}
                </span>
                <span className="w-1 h-1 rounded-full bg-white shrink-0" />
              </div>
            </div>
          </div>
          <img
            src={employee.image}
            alt={employee.name}
            className="w-10 h-10 rounded-lg object-cover shrink-0"
          />
        </div>
      </div>

      {isPresent && (
        <div className="flex flex-wrap justify-between items-center w-full bg-gray-100 rounded-lg px-2 py-2 gap-2">
          <div className="flex items-center gap-1">
            <div className="flex h-4 items-center gap-2 px-1.5 rounded-full bg-[#FF8B64]">
              <span className="text-white text-[11px] sm:text-[12px] font-semibold leading-2">
                {employee.overtime ?? "-"}
              </span>
              <HourglassIcon />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-[10px] sm:text-[11px] font-normal leading-5">
              تسجيل الوصول: {employee.checkInTime}
            </span>
            <ClockIcon />
          </div>
        </div>
      )}

      <div className="flex items-stretch gap-2 w-full">
        <button
          type="button"
          onClick={() => onEdit?.(employee)}
          className="flex h-8 items-center justify-center gap-2 px-3 sm:px-4 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors shrink-0"
        >
          <span className="text-black text-[11px] sm:text-[12px] font-normal leading-4">
            تعديل
          </span>
          <EditIcon />
        </button>

        <button
          type="button"
          onClick={() => onViewProfile?.(employee)}
          className="flex h-8 items-center justify-center gap-2 px-3 rounded-lg flex-1 hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#009CA6" }}
        >
          <span className="text-white text-[12px] sm:text-[13px] font-semibold leading-5 text-center">
            عرض الملف الشخصي
          </span>
          <EmployeeCardEyeIcon />
        </button>
      </div>
    </div>
  );
}

interface TeacherProfileData {
  name: string;
  role: string;
  image: string;
  className?: string;
}

interface TeacherProfileModalProps {
  onClose?: () => void;
  employee?: TeacherProfileData | null;
}

function CloseIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1357 2.13574C12.624 1.64746 12.624 0.854492 12.1357 0.366211C11.6475 -0.12207 10.8545 -0.12207 10.3662 0.366211L6.25293 4.4834L2.13574 0.370117C1.64746 -0.118164 0.854492 -0.118164 0.366211 0.370117C-0.12207 0.858398 -0.12207 1.65137 0.366211 2.13965L4.4834 6.25293L0.370117 10.3701C-0.118164 10.8584 -0.118164 11.6514 0.370117 12.1396C0.858398 12.6279 1.65137 12.6279 2.13965 12.1396L6.25293 8.02246L10.3701 12.1357C10.8584 12.624 11.6514 12.624 12.1396 12.1357C12.6279 11.6475 12.6279 10.8545 12.1396 10.3662L8.02246 6.25293L12.1357 2.13574Z"
        fill="#9CA3AF"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M12 16H3C1.34375 16 0 14.6562 0 13V3C0 1.34375 1.34375 0 3 0H12.5C13.3281 0 14 0.671875 14 1.5V10.5C14 11.1531 13.5813 11.7094 13 11.9156V14C13.5531 14 14 14.4469 14 15C14 15.5531 13.5531 16 13 16H12ZM3 12C2.44688 12 2 12.4469 2 13C2 13.5531 2.44688 14 3 14H11V12H3ZM4 4.75C4 5.16563 4.33437 5.5 4.75 5.5H10.25C10.6656 5.5 11 5.16563 11 4.75C11 4.33437 10.6656 4 10.25 4H4.75C4.33437 4 4 4.33437 4 4.75ZM4.75 7C4.33437 7 4 7.33437 4 7.75C4 8.16562 4.33437 8.5 4.75 8.5H10.25C10.6656 8.5 11 8.16562 11 7.75C11 7.33437 10.6656 7 10.25 7H4.75Z"
          fill="#14B8A6"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="14" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function AssignmentIcon() {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.23672 0.147656C8.94141 -0.0492188 8.55859 -0.0492188 8.26328 0.147656L4.54727 2.625H1.3125C0.587891 2.625 0 3.21289 0 3.9375V12.6875C0 13.4121 0.587891 14 1.3125 14H16.1875C16.9121 14 17.5 13.4121 17.5 12.6875V3.9375C17.5 3.21289 16.9121 2.625 16.1875 2.625H12.9527L9.23672 0.147656ZM7 11.375C7 10.4098 7.78477 9.625 8.75 9.625C9.71523 9.625 10.5 10.4098 10.5 11.375V14H7V11.375ZM2.625 5.25H3.5C3.74062 5.25 3.9375 5.44688 3.9375 5.6875V7.4375C3.9375 7.67812 3.74062 7.875 3.5 7.875H2.625C2.38438 7.875 2.1875 7.67812 2.1875 7.4375V5.6875C2.1875 5.44688 2.38438 5.25 2.625 5.25ZM13.5625 5.6875C13.5625 5.44688 13.7594 5.25 14 5.25H14.875C15.1156 5.25 15.3125 5.44688 15.3125 5.6875V7.4375C15.3125 7.67812 15.1156 7.875 14.875 7.875H14C13.7594 7.875 13.5625 7.67812 13.5625 7.4375V5.6875ZM2.625 8.75H3.5C3.74062 8.75 3.9375 8.94687 3.9375 9.1875V10.9375C3.9375 11.1781 3.74062 11.375 3.5 11.375H2.625C2.38438 11.375 2.1875 11.1781 2.1875 10.9375V9.1875C2.1875 8.94687 2.38438 8.75 2.625 8.75ZM13.5625 9.1875C13.5625 8.94687 13.7594 8.75 14 8.75H14.875C15.1156 8.75 15.3125 8.94687 15.3125 9.1875V10.9375C15.3125 11.1781 15.1156 11.375 14.875 11.375H14C13.7594 11.375 13.5625 11.1781 13.5625 10.9375V9.1875ZM6.34375 4.8125C6.34375 3.48445 7.42195 2.40625 8.75 2.40625C10.078 2.40625 11.1562 3.48445 11.1562 4.8125C11.1562 6.14055 10.078 7.21875 8.75 7.21875C7.42195 7.21875 6.34375 6.14055 6.34375 4.8125ZM8.75 3.5C8.50937 3.5 8.3125 3.69688 8.3125 3.9375V4.8125C8.3125 5.05312 8.50937 5.25 8.75 5.25H9.625C9.86563 5.25 10.0625 5.05312 10.0625 4.8125C10.0625 3.86563 9.86563 4.375 9.625 4.375H9.1875V3.9375C9.1875 3.69688 8.99063 3.5 8.75 3.5Z"
        fill="#14B8A6"
      />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 0C0.896875 0 0 0.896875 0 2V14C0 15.1031 0.896875 16 2 16H11C12.1031 16 13 15.1031 13 14V2C13 0.896875 12.1031 0 11 0H2ZM5.5 9H7.5C8.88125 9 10 10.1187 10 11.5C10 11.775 9.775 12 9.5 12H3.5C3.225 12 3 11.775 3 11.5C3 10.1187 4.11875 9 5.5 9ZM4.75 6C4.75 5.53587 4.93437 5.09075 5.26256 4.76256C5.59075 4.43437 6.03587 4.25 6.5 4.25C6.96413 4.25 7.40925 4.43437 7.73744 4.76256C8.06563 5.09075 8.25 5.53587 8.25 6C8.25 6.46413 8.06563 6.90925 7.73744 7.23744C7.40925 7.56563 6.96413 7.75 6.5 7.75C6.03587 7.75 5.59075 7.56563 5.26256 7.23744C4.93437 6.90925 4.75 6.46413 4.75 6ZM15 2.5C15 2.225 14.775 2 14.5 2C14.225 2 14 2.225 14 2.5V4.5C14 4.775 14.225 5 14.5 5C14.775 5 15 4.775 15 4.5V2.5ZM15 6.5C15 6.225 14.775 6 14.5 6C14.225 6 14 6.225 14 6.5V8.5C14 8.775 14.225 9 14.5 9C14.775 9 15 8.775 15 8.5V6.5ZM14.5 10C14.225 10 14 10.225 14 10.5V12.5C14 12.775 14.225 13 14.5 13C14.775 13 15 12.775 15 12.5V10.5C15 10.225 14.775 10 14.5 10Z"
        fill="#14B8A6"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#fileClip)">
        <path
          d="M2 0C0.896875 0 0 0.896875 0 2V14C0 15.1031 0.896875 16 2 16H10C11.1031 16 12 15.1031 12 14V5.32812C12 4.79688 11.7906 4.2875 11.4156 3.9125L8.08438 0.584375C7.70938 0.209375 7.20312 0 6.67188 0H2ZM10.1719 5.5H7.25C6.83437 5.5 6.5 5.16563 6.5 4.75V1.82812L10.1719 5.5Z"
          fill="#14B8A6"
        />
      </g>
      <defs>
        <clipPath id="fileClip">
          <rect width="12" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#quoteClip)">
        <path
          d="M0 6.75C0 4.67812 1.67812 3 3.75 3H4C4.55312 3 5 3.44687 5 4C5 4.55313 4.55312 5 4 5H3.75C2.78437 5 2 5.78437 2 6.75V7H4C5.10313 7 6 7.89687 6 9V11C6 12.1031 5.10313 13 4 13H2C0.896875 13 0 12.1031 0 11V6.75ZM8 6.75C8 4.67812 9.67813 3 11.75 3H12C12.5531 3 13 3.44687 13 4C13 4.55313 12.5531 5 12 5H11.75C10.7844 5 10 5.78437 10 6.75V7H12C13.1031 7 14 7.89687 14 9V11C14 12.1031 13.1031 13 12 13H10C8.89688 13 8 12.1031 8 11V6.75Z"
          fill="#009999"
        />
      </g>
      <defs>
        <clipPath id="quoteClip">
          <rect width="14" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function AttachmentEyeIcon() {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99922 0C6.47422 0 4.45234 1.15 2.98047 2.51875C1.51797 3.875 0.539844 5.5 0.0773437 6.61562C-0.0257813 6.8625 -0.0257813 7.1375 0.0773437 7.38438C0.539844 8.5 1.51797 10.125 2.98047 11.4812C4.45234 12.85 6.47422 14 8.99922 14C11.5242 14 13.5461 12.85 15.018 11.4812C16.4805 10.1219 17.4586 8.5 17.9242 7.38438C18.0273 7.1375 18.0273 6.8625 17.9242 6.61562C17.4586 5.5 16.4805 3.875 15.018 2.51875C13.5461 1.15 11.5242 0 8.99922 0ZM4.49922 7C4.49922 4.51638 6.5156 2.5 8.99922 2.5C11.4828 2.5 13.4992 4.51638 13.4992 7C13.4992 9.48362 11.4828 11.5 8.99922 11.5C6.5156 11.5 4.49922 9.48362 4.49922 7ZM8.99922 5C8.99922 6.10313 8.10234 7 6.99922 7C6.77734 7 6.56484 6.9625 6.36484 6.89687C6.19297 6.84062 5.99297 6.94688 5.99922 7.12813C6.00859 7.34375 6.03984 7.55938 6.09922 7.775C6.52734 9.375 8.17422 10.325 9.77422 9.89688C11.3742 9.46875 12.3242 7.82188 11.8961 6.22188C11.5492 4.925 10.4023 4.05312 9.12734 4C8.94609 3.99375 8.83984 4.19062 8.89609 4.36562C8.96172 4.56562 8.99922 4.77812 8.99922 5Z"
        fill="#6B7280"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1C9 0.446875 8.55313 0 8 0C7.44688 0 7 0.446875 7 1V8.58438L4.70625 6.29063C4.31563 5.9 3.68125 5.9 3.29063 6.29063C2.9 6.68125 2.9 7.31563 3.29063 7.70625L7.29063 11.7063C7.68125 12.0969 8.31563 12.0969 8.70625 11.7063L12.7063 7.70625C13.0969 7.31563 13.0969 6.68125 12.7063 6.29063C12.3156 5.9 11.6812 5.9 11.2906 6.29063L9 8.58438V1ZM2 11C0.896875 11 0 11.8969 0 13V14C0 15.1031 0.896875 16 2 16H14C15.1031 16 16 15.1031 16 14V13C16 11.8969 15.1031 11 14 11H10.8281L9.4125 12.4156C8.63125 13.1969 7.36562 13.1969 6.58437 12.4156L5.17188 11H2ZM13.5 12.75C13.9139 12.75 14.25 13.0861 14.25 13.5C14.25 13.9139 13.9139 14.25 13.5 14.25C13.0861 14.25 12.75 13.9139 12.75 13.5C12.75 13.0861 13.0861 12.75 13.5 12.75Z"
        fill="#6B7280"
      />
    </svg>
  );
}

function PdfFileIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 18.125H3.75V20H2.5C1.12109 20 0 18.8789 0 17.5V2.5C0 1.12109 1.12109 0 2.5 0H8.96484C9.62891 0 10.2656 0.261719 10.7344 0.730469L14.2695 4.26562C14.7383 4.73438 15 5.37109 15 6.03516V11.25H13.125V6.25H10C9.30859 6.25 8.75 5.69141 8.75 5V1.875H2.5C2.15625 1.875 1.875 2.15625 1.875 2.5V17.5C1.875 17.8438 2.15625 18.125 2.5 18.125ZM6.875 13.75H8.125C9.33203 13.75 10.3125 14.7305 10.3125 15.9375C10.3125 17.1445 9.33203 18.125 8.125 18.125H7.5V19.375C7.5 19.7188 7.21875 20 6.875 20C6.53125 20 6.25 19.7188 6.25 19.375V17.5V14.375C6.25 14.0312 6.53125 13.75 6.875 13.75ZM8.125 16.875C8.64453 16.875 9.0625 16.457 9.0625 15.9375C9.0625 15.418 8.64453 15 8.125 15H7.5V16.875H8.125ZM11.875 13.75H13.125C14.1602 13.75 15 14.5898 15 15.625V18.125C15 19.1602 14.1602 20 13.125 20H11.875C11.5312 20 11.25 19.7188 11.25 19.375V14.375C11.25 14.0312 11.5312 13.75 11.875 13.75ZM13.125 18.75C13.4688 18.75 13.75 18.4688 13.75 18.125V15.625C13.75 15.2812 13.4688 15 13.125 15H12.5V18.75H13.125ZM16.25 14.375C16.25 14.0312 16.5312 13.75 16.875 13.75H18.75C19.0938 13.75 19.375 14.0312 19.375 14.375C19.375 14.7188 19.0938 15 18.75 15H17.5V16.25H18.75C19.0938 16.25 19.375 16.5312 19.375 16.875C19.375 17.2188 19.0938 17.5 18.75 17.5H17.5V19.375C17.5 19.7188 17.2188 20 16.875 20C16.5312 20 16.25 19.7188 16.25 19.375V16.875V14.375Z"
        fill="#EF4444"
      />
    </svg>
  );
}

function WordFileIcon() {
  return (
    <svg
      width="15"
      height="20"
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.875 17.5V2.5C1.875 2.15625 2.15625 1.875 2.5 1.875H8.75V5C8.75 5.69141 9.30859 6.25 10 6.25H13.125V17.5C13.125 17.8438 12.8438 18.125 12.5 18.125H2.5C2.15625 18.125 1.875 17.8438 1.875 17.5ZM2.5 0C1.12109 0 0 1.12109 0 2.5V17.5C0 18.8789 1.12109 20 2.5 20H12.5C13.8789 20 15 18.8789 15 17.5V6.03516C15 5.37109 14.7383 4.73438 14.2695 4.26562L10.7305 0.730469C10.2617 0.261719 9.62891 0 8.96484 0H2.5ZM4.64844 9.41797C4.5 8.92188 3.97656 8.64062 3.48047 8.78906C2.98438 8.9375 2.70312 9.46094 2.85156 9.95703L4.72656 16.207C4.84375 16.6055 5.21094 16.875 5.625 16.875C6.03906 16.875 6.40234 16.6016 6.52344 16.207L7.5 12.9492L8.47656 16.207C8.59375 16.6055 8.96094 16.875 9.375 16.875C9.78906 16.875 10.1523 16.6016 10.2734 16.207L12.1484 9.95703C12.2969 9.46094 12.0156 8.9375 11.5195 8.78906C11.0234 8.64062 10.5 8.92188 10.3516 9.41797L9.375 12.6758L8.39844 9.41797C8.28125 9.01953 7.91406 8.75 7.5 8.75C7.08594 8.75 6.72266 9.02344 6.60156 9.41797L5.625 12.6758L4.64844 9.41797Z"
        fill="#3B82F6"
      />
    </svg>
  );
}

interface AttachmentItemProps {
  name: string;
  meta: string;
  fileType: "pdf" | "word";
}

function AttachmentItem({ name, meta, fileType }: AttachmentItemProps) {
  return (
    <div
      className="flex items-center justify-between flex-1 min-w-0 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 gap-3"
      dir="rtl"
    >
      <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-white">
        {fileType === "pdf" ? <PdfFileIcon /> : <WordFileIcon />}
      </div>
      <div className="flex flex-col items	end flex-1 min-w-0">
        <p className="text-sm font-medium text-[#111827] text-right leading-5">
          {name}
        </p>
        <p className="text-xs text-[#9CA3AF] text-right leading-4">{meta}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          className="text-[#6B7280] hover:text-[#111827] transition-colors"
        >
          <AttachmentEyeIcon />
        </button>
        <button
          type="button"
          className="text-[#6B7280] hover:text-[#111827] transition-colors"
        >
          <DownloadIcon />
        </button>
      </div>
    </div>
  );
}

function TeacherProfileModal({ onClose, employee }: TeacherProfileModalProps) {
  const name = employee?.name ?? "فاطمة أحمد";
  const className = employee?.className ?? "فصل الرضع أ";
  const role = employee?.role ?? "معلمة رئيسية";
  const image =
    employee?.image ??
    "https://api.builder.io/api/v1/image/assets/TEMP/1df961ea7b8813b65f7a8e68af11877bd6be4064?width=80";
  const [transferModalOpen, setTransferModalOpen] = useState(false);

  return (
    <>
      <div
        dir="ltr"
        className="bg-white rounded-2xl shadow-2xl flex flex-col gap-4 p-3 sm:p-4 w-full max-w-lg lg:max-w-3xl mx-auto relative max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-start">
          <button
            type="button"
            onClick={onClose}
            className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors p-1"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-end items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center px-1 py-0.5 rounded-full bg-[#F3F4F6]">
                    <span className="text-[8px] text-[#6B7280] leading-2.25">
                      {className}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#111827] leading-3">
                    {name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-1 px-1.5 py-1 rounded-full bg-[#FFF3EF]">
                    <span className="text-[9px] font-medium text-[#FF784B] leading-2">
                      تنمية الطفولة المبكرة
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-1.5 py-1 rounded-full bg-[#111827]">
                    <span className="text-[8px] font-semibold text-white leading-2">
                      {role}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-white shrink-0" />
                  </div>
                </div>
              </div>
              <img
                src={image}
                alt={name}
                className="w-10 h-10 rounded-xl object-cover shrink-0"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-bold text-[#2D3748] leading-5" dir="rtl">
            الفصل الدراسي الحالي
          </h2>
          <div className="flex items-center gap-2 justify-end flex-wrap">
            <button
              type="button"
              onClick={() => setTransferModalOpen(true)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg border border-dashed border-[#9CA3AF] bg-[#F9FAFB] hover:bg-gray-100 transition-colors overflow-hidden"
            >
              <span className="text-[13px] font-medium text-[#6B7280]">
                إضافة فصل جديد
              </span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 6H9.5"
                  stroke="#111827"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 2.5V9.5"
                  stroke="#111827"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex items-center justify-between px-3 py-2 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] gap-3 flex-wrap sm:flex-nowrap">
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#009999]"
                  style={{ minWidth: "37px" }}
                >
                  <span className="text-xs font-semibold text-white text-center">
                    5
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#6B7280] leading-4">
                    <span className="font-bold"> فصل الرضع أ </span>
                    <span className="font-medium">(0-12 شهر)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-xl bg-[#F9FAFB] p-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" dir="rtl">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#2D3748] leading-5">
                  التفاصيل المهنية
                </span>
                <ProfileIcon />
              </div>
              <div className="rounded-xl border border-[#E5E7EB] bg-white p-3 flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-[#6B7280] text-right leading-4">
                    رقم التواصل
                  </span>
                  <span className="text-[13px] font-semibold text-[#2D3748]  leading-5 dir-ltr">
                    +966 50 123 4567
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-[#6B7280] text-right leading-4">
                    البريد الإلكتروني
                  </span>
                  <span className="text-[13px] font-semibold text-[#2D3748] text-left leading-5 break-all">
                    Fatima.ahmed@nursery.com
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-[#6B7280] text-right leading-4">
                    تاريخ التعيين
                  </span>
                  <span className="text-[13px] font-semibold text-[#2D3748] text-right leading-5">
                    12 سبتمبر 2026
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#111827] text-right leading-4">
                  التكليف الحالي
                </span>
                <AssignmentIcon />
              </div>
              <div className="rounded-xl border border-[#E5E7EB] bg-white p-3 flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-[#6B7280] text-right leading-4">
                    أيام العمل
                  </span>
                  <span className="text-[13px] font-semibold text-[#2D3748] text-right leading-5">
                    الأحد - الخميس
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-[#6B7280] text-right leading-4">
                    الفئة العمرية والقاعة
                  </span>
                  <span className="text-[13px] font-semibold text-[#2D3748] text-right leading-5">
                    قاعة النجوم (2-3 سنوات)
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-[#6B7280] text-right leading-4">
                    ساعات الدوام
                  </span>
                  <span className="text-[13px] font-semibold text-[#2D3748] text-right leading-5">
                    08:00 - 16:00
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#111827] text-right leading-4">
                  الخبرات والمهارات
                </span>
                <BookIcon />
              </div>
              <div className="rounded-xl border border-[#E5E7EB] bg-white p-3 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-semibold text-[#111827] text-right leading-5">
                    التخصصات والمهارات
                  </span>
                </div>
                <ul className="flex flex-col gap-2 list-disc list-inside">
                  <li className="text-xs font-medium text-[#6B7280] text-right leading-3">
                    منهج منتسوري التعليمي
                  </li>
                  <li className="text-xs font-medium text-[#6B7280] text-right leading-3">
                    التنمية المعرفية للأطفال
                  </li>
                  <li className="text-xs font-medium text-[#6B7280] text-right leading-3">
                    العلاج بالفن للأطفال
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-end gap-2 ">
              <FileIcon />
              <span className="text-sm font-bold text-[#2D3748] leading-5">
                المستندات والوثائق الإدارية
              </span>
            </div>
            <div
              className="rounded-xl border border-[#E5E7EB] bg-white p-3 flex flex-col gap-4"
              dir="ltr"
            >
              <div className="flex flex-col sm:flex-row items-stretch  gap-3">
                <AttachmentItem
                  name="شهادة الإسعافات الأولية"
                  meta="850 KB • أضيف في 10 يناير 2024"
                  fileType="pdf"
                />
                <AttachmentItem
                  name="دبلوم تعليم الطفولة المبكرة"
                  meta="1.2 MB • أضيف في 15 يونيو 2024"
                  fileType="pdf"
                />
              </div>
              <div className="flex justify-end">
                <div className="flex-1 sm:flex-none sm:w-[calc(50%-6px)]">
                  <AttachmentItem
                    name="رخصة التدريس الرسمية"
                    meta="2.1 MB • أضيف في 22 مايو 2023"
                    fileType="word"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#E5E7EB] bg-white p-3 flex flex-col gap-2">
            <div className="flex items-center justify-end gap-2">
              <span className="text-[13px] font-semibold text-[#2D3748] text-right  leading-5">
                فلسفة التدريس
              </span>
              <QuoteIcon />
            </div>
            <p className="text-xs font-medium text-[#6B7280] text-right leading-5">
              &quot;شغوفة بالإبداع ومرافقة الأطفال في خطواتهم الأولى من التعلم
              الاجتماعي والعاطفي.&quot;
            </p>
          </div>
        </div>
      </div>

      {transferModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50">
          <div
            className="absolute inset-0"
            aria-hidden
            onClick={() => setTransferModalOpen(false)}
          />
          <div className="relative z-10 bg-white rounded-2xl p-4 w-full max-w-md">
            <p className="text-sm font-semibold text-[#111827] mb-4 text-right">
              نقل المعلمة إلى فصل جديد
            </p>
            <button
              type="button"
              className="w-full rounded-lg bg-[#009CA6] text-white text-sm font-semibold py-2"
              onClick={() => setTransferModalOpen(false)}
            >
              تأكيد
            </button>
          </div>
        </div>
      )}
    </>
  );
}

interface EditAttendanceModalProps {
  employee: EditAttendanceEmployee;
  onClose: () => void;
  onSave: (updated: EditAttendanceEmployee) => void;
}

function EditAttendanceModal({
  employee,
  onClose,
  onSave,
}: EditAttendanceModalProps) {
  const [checkIn, setCheckIn] = useState(employee.checkIn);
  const [status, setStatus] = useState<EditAttendanceEmployee["status"]>(
    employee.status,
  );

  const handleSubmit = () => {
    onSave({
      ...employee,
      checkIn,
      status,
    });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-2 sm:p-4">
      <div
        className="bg-white rounded-2xl p-4 w-full max-w-sm space-y-4"
        dir="rtl"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-bold text-[#111827]">
            تعديل حضور الموظف
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-[#9CA3AF] hover:text-[#4B5563]"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-[#6B7280]">الموظف</span>
            <span className="font-semibold text-[#111827]">
              {employee.name}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[#6B7280]">الحالة</span>
            <select
              className="h-9 rounded-lg border border-[#E5E7EB] px-2 text-sm"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value as EditAttendanceEmployee["status"])
              }
            >
              <option value="present">حاضر</option>
              <option value="absent">غائب</option>
              <option value="leave">إجازة</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[#6B7280]">وقت تسجيل الوصول</span>
            <input
              type="time"
              className="h-9 rounded-lg border border-[#E5E7EB] px-2 text-sm"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-end">
          <button
            type="button"
            className="h-9 px-4 rounded-lg border border-[#E5E7EB] text-sm text-[#374151]"
            onClick={onClose}
          >
            إلغاء
          </button>
          <button
            type="button"
            className="h-9 px-4 rounded-lg bg-[#009CA6] text-sm font-semibold text-white"
            onClick={handleSubmit}
          >
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
}
