import { Calendar } from "lucide-react";

export default function TopHeader() {
  return (
    <header
      dir="rtl"
      className="sticky top-0 z-30 flex flex-col gap-3 border-b border-[#E5E7EB] bg-white/95 px-3 py-2.5 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-3"
    >
      {/* Right side - User info */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-[#00A79E1A] overflow-hidden flex items-center justify-center">
            <img
              src="/Billing Department.png"
              alt="عبد الإله العمري"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#16A34A] border-2 border-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[#111827] leading-tight">
            عبد الإله العمري
          </span>
          <span className="mt-0.5 inline-flex items-center rounded-full bg-[#E5F6FF] px-2 py-0.5 text-xs font-medium text-[#0369A1]">
            مدير الحضانة
          </span>
        </div>
      </div>

      {/* Left side - Date & Time */}
      <div className="flex items-center justify-start gap-3 text-[#6B7280] sm:justify-end">
        <span className="text-xs sm:text-sm font-medium tabular-nums" dir="ltr">
          09:30 AM
        </span>
        <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
        <div className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          <span className="text-xs sm:text-sm font-medium">
            الخميس، 5 فبراير
          </span>
        </div>
      </div>
    </header>
  );
}

