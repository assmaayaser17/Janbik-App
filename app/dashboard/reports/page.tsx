"use client";

import {
  Download,
  FileText,
  BarChart3,
  ClipboardList,
  ShieldCheck,
  ChevronDown,
  Users,
  Eye,
  AlertCircle,
  Star,
  UserCheck,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface StatBarCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  iconBg: string;
}

function StatBarCard({ icon, label, value, iconBg }: StatBarCardProps) {
  return (
    <div className="flex items-center justify-between gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 shadow-sm" dir="rtl">
      
      <div className="text-right">
        <p className="text-sm text-[#6B7280]">{label}</p>
        <p className="text-2xl font-bold text-[#111827]">{value}</p>
      </div>

      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg}`}
      >
        {icon}
      </div>

    </div>
  );
}

function StatsBar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 rounded-lg">
      <StatBarCard
        icon={<img src='/icons/people-group.png' className="h-5 w-5 text-[#0D9488]" />}
        iconBg="bg-[#ECFEFF]"
        label="كفاءة الموظفين"
        value="92.5%"
      />
      <StatBarCard
        icon={<Star className="h-5 w-5 text-[#EA580C]" />}
        iconBg="bg-[#FFF7ED]"
        label="رضا الأهالي"
        value="4.8"
      />
      <StatBarCard
        icon={<AlertCircle className="h-5 w-5 text-[#DC2626]" />}
        iconBg="bg-[#FEF2F2]"
        label="الحوادث"
        value="3"
        // badge={{ text: "إجراء مطلوب", bg: "bg-[#DC2626]", color: "text-white" }}
      />
      <StatBarCard
        icon={<img src='/icons/people.png' className="h-5 w-5 text-[#00A79E]" />}
        iconBg="bg-[#ECFEFF]"
        label="نسبة الحضور"
        value="98.2%"
      />
      <StatBarCard
        icon={<img src='/icons/people-group.png' className="h-5 w-5 text-[#0D9488]" />}
        iconBg="bg-[#ECFEFF]"
        label="التسجيل"
        value="40"
      />
    </div>
  );
}

const reports = [
  {
    title: "التقرير اليومي",
    frequency: "يومي",
    nextDate: "اليوم القادم",
    icon: FileText,
    iconBg: "bg-amber-100",
    iconColor: "text-icon-daily",
  },
  {
    title: "تقرير حضور الأسبوعي",
    frequency: "أسبوعي",
    nextDate: "الاسبوع القادم",
    icon: BarChart3,
    iconBg: "bg-blue-100",
    iconColor: "text-icon-weekly",
  },
  {
    title: "أداء الموظفين",
    frequency: "شهري",
    nextDate: "الشهر القادم",
    icon: ClipboardList,
    iconBg: "bg-pink-100",
    iconColor: "text-icon-monthly",
  },
  {
    title: "تقرير الترخيص",
    frequency: "إلزامي",
    nextDate: "3 اشهر القادم",
    icon: ShieldCheck,
    iconBg: "bg-red-100",
    iconColor: "text-icon-license",
  },
];

function ReportTemplates() {
  return (
    <div className="w-full   h-full p-4 border-black border bg-white rounded-2xl">
      <h2 className="text-lg font-bold text-foreground  mb-4 text-right">قوالب التقارير</h2>
      <div className="">
        {reports.map((report) => {
          const Icon = report.icon;
          return (
            <div
            dir="rtl"
              key={report.title}
              className="flex items-center  w-90.75 h-12.5 p-4 justify-between mb-3 gap-4  rounded-xl   shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.08)]"
            >
              <div className={`flex h-10 w-10  shrink-0 items-center  justify-center rounded-lg ${report.iconBg}`}>
                <Icon className={`h-5 w-5 ${report.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0 ">
                <p className="text-sm font-bold text-foreground">{report.title}</p>
                <p className="text-xs text-muted-foreground">{report.frequency}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{report.nextDate}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const childDistributionData = [
  { label: "فصل الرضع أ", value: 60 },
  { label: "فصل الصغار ب", value: 12 },
  { label: "فصل الروضة ج", value: 28 },
];

function ChildDistribution() {
  return (
    <div dir="rtl" className="w-full rounded-xl bg-card p-6 shadow-sm">
      <h2 className="mb-5  text-sm font-semibold text-foreground">
        توزيع الأطفال حسب الفئة
      </h2>
      <div className="space-y-4">
        {childDistributionData.map((item) => (
          <div key={item.label} className="space-y-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              {item.label}
            </span>
            <div className="flex items-center justify-center gap-2" dir="ltr">
              <div className="h-2.5 flex-1 rounded-full bg-muted" dir="rtl">
                <div
                  className="h-full rounded-full bg-teal transition-all"
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <span className="min-w-8 text-left text-xs font-semibold tabular-nums text-foreground">
                {item.value}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ATTENDANCE_STATS = [
  { label: "غياب", percent: 17, color: "#005C5C" },
  { label: "حضور", percent: 63, color: "#009999" },
  { label: "تأخير", percent: 10, color: "#9CA3AF" },
];

function DonutChart() {
  const size = 140;
  const stroke = 20;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const total = ATTENDANCE_STATS.reduce((s, v) => s + v.percent, 0);
  let offset = 0;
  const gapSize = 4;
  const segments = ATTENDANCE_STATS.map((stat) => {
    const dashLength = (stat.percent / total) * circumference - gapSize;
    const gap = circumference - dashLength;
    const currentOffset = offset;
    offset += dashLength + gapSize;
    return { ...stat, dashLength, gap, offset: currentOffset };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="transform -rotate-90"
    >
      {segments.map((seg, i) => (
        <circle
          key={i}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={seg.color}
          strokeWidth={stroke}
          strokeDasharray={`${seg.dashLength} ${seg.gap}`}
          strokeDashoffset={-seg.offset}
          strokeLinecap="butt"
        />
      ))}
    </svg>
  );
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

type ClassDetails = {
  className: string;
  ageRange: string;
  coveragePercent: number;
  ratio: string;
  staffCount: number;
  childrenCount: string;
  staffMembers: StaffMember[];
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

const CLASS_DETAILS: ClassDetails = {
  className: "فصل الرضع أ",
  ageRange: "1-2",
  coveragePercent: 80,
  ratio: "1:5",
  staffCount: 3,
  childrenCount: "15",
  staffMembers: [],
};

function AttendanceCard() {
  const { className } = CLASS_DETAILS;
  return (
    <div
      dir="ltr"
      className="bg-card rounded-2xl p-6 shadow-sm w-full font-sans"
    >
      <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
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
        <h2 className="text-base font-bold text-card-foreground">
          نسبة الحضور حسب الفصل
        </h2>
       
      </div>

      <div className="flex items-center gap-8 flex-col-reverse sm:flex-row">
        <div className="flex-1 space-y-4 w-full">
          {ATTENDANCE_STATS.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="text-sm font-bold text-card-foreground tabular-nums w-10 text-left">
                {stat.percent}%
              </span>
              <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full   rounded-full"
                  style={{
                    width: `${stat.percent}%`,
                    backgroundColor: stat.color,
                  }}
                />
              </div>
              <div className="flex items-center gap-2 w-16 justify-end">
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
                <span
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: stat.color }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="shrink-0">
          <DonutChart />
        </div>
      </div>
    </div>
  );
}

const enrollmentData = [
  { month: "الشهر 7", boys: 18, girls: 14, referred: 5 },
  { month: "الشهر 6", boys: 22, girls: 18, referred: 8 },
  { month: "الشهر 5", boys: 15, girls: 20, referred: 6 },
  { month: "الشهر 4", boys: 25, girls: 22, referred: 10 },
  { month: "الشهر 3", boys: 20, girls: 16, referred: 7 },
  { month: "الشهر 2", boys: 28, girls: 24, referred: 9 },
  { month: "الشهر 1", boys: 30, girls: 26, referred: 12 },
];

function EnrollmentTrend() {
  return (
    <div className="bg-card rounded-xl p-5  ">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-muted-foreground">آخر 7 أشهر ▽</span>
        <h3 className="text-sm font-semibold text-foreground">
          اتجاه التسجيل (7 أشهر)
        </h3>
      </div>
      <div className="flex items-center gap-4 justify-end mb-3 text-xs">
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-chart-orange" /> الموصفون
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-primary" /> الأولاد
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-chart-teal-dark" />{" "}
          الفتيات
        </span>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={enrollmentData} barGap={2} barSize={14}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="hsl(220, 13%, 91%)"
            />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
            <Bar
              dataKey="referred"
              fill="hsl(30, 90%, 55%)"
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="boys"
              fill="hsl(170, 60%, 42%)"
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="girls"
              fill="hsl(170, 55%, 32%)"
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function ReportsPage() {
  return (
    <div
      className="min-h-screen bg-[#F9FAFB] px-4 py-6 sm:px-6 lg:px-8 font-(--font-cairo)"
      dir="ltr"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg bg-[#00A79E] px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
            <Download className="h-4 w-4" />
            تصدير التقارير
          </button>
        </div>
        <div className="text-right">
          <h1 className="text-xl font-bold text-[#111827]">
            إدارة التقارير والعمليات
          </h1>
          <p className="text-sm text-[#6B7280]">
            رؤية شاملة وتحكم كامل في تواصلك وبياناتك
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <StatsBar />

      {/* Tabs */}
      <div className="mb-6 mt-4 flex flex-wrap items-center gap-2">
        {[
          { label: "نظرة عامة والتحليلات", active: true },
          { label: "ملاحظات أولياء الأمور", active: false },
          { label: "مركز البث الجديد", active: false },
        ].map((tab) => (
          <button
            key={tab.label}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              tab.active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card text-muted-foreground hover:bg-secondary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-auto lg:min-w-70 xl:min-w-[320px]">
            <ReportTemplates />
          </div>

          <div className="flex flex-col gap-4 flex-1 min-w-0">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <ChildDistribution />
              </div>

              <div className="col-span-2">
                <AttendanceCard />
              </div>
            </div>

            <EnrollmentTrend />
          </div>
        </div>
      </div>
    </div>
  );
}
