"use client";

import { useState } from "react";
import Link from "next/link";


interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
}

function StatCard({ label, value, icon, iconBg }: StatCardProps) {
  return (
    <div className="flex flex-col items-center gap-1.5 px-2 py-3 border border-neutral-200 rounded-lg sm:flex-row sm:justify-between sm:gap-2 sm:py-2">
      <div
        className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-lg ${iconBg}`}
      >
        {icon}
      </div>
      <div className="flex flex-col items-center gap-0.5 min-w-0 sm:items-end">
        <span className="text-neutral-500 text-[10px] font-normal leading-3 text-center sm:text-right truncate">
          {label}
        </span>
        <span className="text-neutral-800 text-[13px] font-semibold leading-4 text-center sm:text-right">
          {value}
        </span>
      </div>
    </div>
  );
}

 export function StatsOverview() {
  return (
    <div dir="ltr" className="grid grid-cols-2 gap-2 w-full sm:grid-cols-3 lg:grid-cols-5">
      {/* فصل متوافق */}

      <StatCard
        label="فصل متوافق"
        value="3"
        iconBg="bg-[#E6FAF3]"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.385L7.356 1.982C7.153 1.644 6.728 1.522 6.378 1.697L3.672 3.05C3.3 3.235 3.15 3.685 3.334 4.057L5.509 8.404C4.569 9.463 4 10.857 4 12.385C4 15.697 6.688 18.385 10 18.385C13.313 18.385 16 15.697 16 12.385C16 10.857 15.428 9.463 14.491 8.404L16.666 4.057C16.85 3.685 16.7 3.235 16.331 3.05L13.622 1.694C13.272 1.519 12.844 1.644 12.644 1.979L10 6.385ZM10.963 10.838C11.006 10.926 11.088 10.985 11.181 10.997L12.747 11.226C12.988 11.26 13.081 11.554 12.909 11.726L11.775 12.832C11.706 12.901 11.675 12.994 11.691 13.091L11.959 14.651C12 14.888 11.75 15.072 11.534 14.96L10.134 14.222C10.05 14.179 9.947 14.179 9.863 14.222L8.463 14.96C8.247 15.072 7.997 14.891 8.038 14.651L8.306 13.091C8.322 12.997 8.291 12.901 8.222 12.832L7.088 11.726C6.913 11.557 7.009 11.263 7.25 11.226L8.816 10.997C8.909 10.985 8.994 10.922 9.034 10.838L9.734 9.419C9.841 9.201 10.15 9.201 10.259 9.419L10.959 10.838H10.963Z"
              fill="#10B981"
            />
          </svg>
        }
      />

      {/* فصل مكتمل */}
      <StatCard
        label="فصل مكتمل"
        value="6/8"
        iconBg="bg-[#F2EEFF]"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0.75C8 0.334 8.334 0 8.75 0H12.25C12.666 0 13 0.334 13 0.75V2.25C13 2.666 12.666 3 12.25 3H10V3.6L14 6H16C17.103 6 18 6.897 18 8V15C18 16.103 17.103 17 16 17H2C0.897 17 0 16.103 0 15V8C0 6.897 0.897 6 2 6H4L8 3.6V0.75ZM7.5 13V16H10.5V13C10.5 12.172 9.828 11.5 9 11.5C8.172 11.5 7.5 12.172 7.5 13ZM3.5 14C3.775 14 4 13.775 4 13.5V12.5C4 12.225 3.775 12 3.5 12H2.5C2.225 12 2 12.225 2 12.5V13.5C2 13.775 2.225 14 2.5 14H3.5ZM4 9.5V8.5C4 8.225 3.775 8 3.5 8H2.5C2.225 8 2 8.225 2 8.5V9.5C2 9.775 2.225 10 2.5 10H3.5C3.775 10 4 9.775 4 9.5ZM15.5 14C15.775 14 16 13.775 16 13.5V12.5C16 12.225 15.775 12 15.5 12H14.5C14.225 12 14 12.225 14 12.5V13.5C14 13.775 14.225 14 14.5 14H15.5ZM16 9.5V8.5C16 8.225 15.775 8 15.5 8H14.5C14.225 8 14 8.225 14 8.5V9.5C14 9.775 14.225 10 14.5 10H15.5C15.775 10 16 9.775 16 9.5ZM9 9.5C9.53 9.5 10.039 9.289 10.414 8.914C10.789 8.539 11 8.03 11 7.5C11 6.97 10.789 6.461 10.414 6.086C10.039 5.711 9.53 5.5 9 5.5C8.47 5.5 7.961 5.711 7.586 6.086C7.211 6.461 7 6.97 7 7.5C7 8.03 7.211 8.539 7.586 8.914C7.961 9.289 8.47 9.5 9 9.5Z"
              fill="#AF92FF"
            />
          </svg>
        }
      />

      {/* موظف حاضر اليوم */}
      <StatCard
        label="موظف حاضر اليوم"
        value="8/10"
        iconBg="bg-[#EDF7FF]"
        icon={
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 0C5.88 0 7 1.12 7 2.5C7 3.88 5.88 5 4.5 5C3.12 5 2 3.88 2 2.5C2 1.12 3.12 0 4.5 0ZM16 0C17.38 0 18.5 1.12 18.5 2.5C18.5 3.88 17.38 5 16 5C14.62 5 13.5 3.88 13.5 2.5C13.5 1.12 14.62 0 16 0ZM0 9.334C0 7.494 1.494 6 3.334 6H4.669C5.166 6 5.638 6.109 6.063 6.303C6.022 6.528 6.003 6.763 6.003 7C6.003 8.194 6.528 9.266 7.356 10C7.35 10 7.344 10 7.334 10H0.666C0.3 10 0 9.7 0 9.334ZM12.666 10C12.659 10 12.653 10 12.644 10C13.475 9.266 13.997 8.194 13.997 7C13.997 6.763 13.975 6.531 13.938 6.303C14.363 6.106 14.834 6 15.331 6H16.666C18.506 6 20 7.494 20 9.334C20 9.703 19.7 10 19.334 10H12.666ZM7 7C7 5.344 8.344 4 10 4C11.656 4 13 5.344 13 7C13 8.656 11.656 10 10 10C8.344 10 7 8.656 7 7ZM4 15.166C4 12.866 5.866 11 8.166 11H11.834C14.134 11 16 12.866 16 15.166C16 15.625 15.628 16 15.166 16H4.834C4.375 16 4 15.628 4 15.166Z"
              fill="#8FCCFF"
            />
          </svg>
        }
      />

      {/* طفل غائب */}
      <StatCard
        label="طفل غائب"
        value="8"
        iconBg="bg-[#FFF0F0]"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.877 5.5C2.877 3.568 4.445 2 6.377 2C8.309 2 9.877 3.568 9.877 5.5C9.877 7.432 8.309 9 6.377 9C4.445 9 2.877 7.432 2.877 5.5ZM0.252 15.188C0.252 12.494 2.434 10.313 5.127 10.313H7.627C10.32 10.313 12.502 12.494 12.502 15.188C12.502 15.636 12.138 16 11.69 16H1.064C0.616 16 0.252 15.636 0.252 15.188ZM13.131 5.91C13.388 5.653 13.804 5.653 14.058 5.91L15.343 7.195L16.628 5.91C16.885 5.653 17.301 5.653 17.555 5.91C17.812 6.167 17.812 6.582 17.555 6.837L16.27 8.122L17.555 9.407C17.812 9.665 17.812 10.08 17.555 10.334C17.298 10.591 16.882 10.591 16.628 10.334L15.343 9.049L14.058 10.334C13.801 10.591 13.385 10.591 13.131 10.334C12.874 10.077 12.874 9.662 13.131 9.407L14.416 8.122L13.131 6.837C12.874 6.58 12.874 6.165 13.131 5.91Z"
              fill="#E85C5C"
            />
          </svg>
        }
      />
      {/* طفل حاضر */}
      <StatCard
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.249 0.999C4.78 0.999 5.288 1.209 5.663 1.584C6.039 1.96 6.249 2.468 6.249 2.999C6.249 3.529 6.039 4.038 5.663 4.413C5.288 4.788 4.78 4.999 4.249 4.999C3.719 4.999 3.21 4.788 2.835 4.413C2.46 4.038 2.249 3.529 2.249 2.999C2.249 2.468 2.46 1.96 2.835 1.584C3.21 1.209 3.719 0.999 4.249 0.999ZM1.999 15.999V13.499H1.443C1.102 13.499 0.862 13.164 0.968 12.839L1.943 9.92L1.046 11.102C0.711 11.542 0.084 11.627 -0.354 11.295C-0.791 10.964 -0.882 10.333 -0.547 9.895L1.293 7.467C1.993 6.542 3.09 5.999 4.249 5.999C5.409 5.999 6.506 6.542 7.206 7.467L9.046 9.895C9.381 10.336 9.293 10.964 8.852 11.295C8.412 11.627 7.784 11.542 7.452 11.102L6.556 9.92L7.527 12.839C7.637 13.164 7.393 13.499 7.052 13.499H6.496V15.999C6.496 16.552 6.049 16.999 5.496 16.999C4.943 16.999 4.496 16.552 4.496 15.999V13.499H3.996V15.999C3.996 16.552 3.549 16.999 2.996 16.999C2.443 16.999 1.996 16.552 1.996 15.999H1.999ZM14.249 0.999C14.78 0.999 15.288 1.209 15.663 1.584C16.039 1.96 16.249 2.468 16.249 2.999C16.249 3.529 16.039 4.038 15.663 4.413C15.288 4.788 14.78 4.999 14.249 4.999C13.719 4.999 13.21 4.788 12.835 4.413C12.46 4.038 12.249 3.529 12.249 2.999C12.249 2.468 12.46 1.96 12.835 1.584C13.21 1.209 13.719 0.999 14.249 0.999ZM13.999 12.999V15.999C13.999 16.552 13.552 16.999 12.999 16.999C12.446 16.999 11.999 16.552 11.999 15.999V10.389L11.596 11.03C11.302 11.499 10.684 11.636 10.218 11.342C9.752 11.049 9.612 10.43 9.905 9.964L11.521 7.399C12.071 6.527 13.031 5.995 14.059 5.995H14.443C15.474 5.995 16.434 6.524 16.981 7.399L18.596 9.967C18.89 10.436 18.749 11.052 18.284 11.345C17.818 11.639 17.2 11.499 16.905 11.033L16.502 10.392V16.002C16.502 16.555 16.056 17.002 15.502 17.002C14.949 17.002 14.502 16.555 14.502 16.002V13.002H13.999V12.999Z"
              fill="#009999"
            />
          </svg>
        }
        label="طفل حاضر"
        value="52/60"
        iconBg="bg-[#E6F5F5]"
      />
    </div>
  );
}

interface Employee {
  name: string;
  role: string;
  image: string;
  startTime: string;
  endTime: string;
  childCount: number;
}

interface ClassCardProps {
  classId: number;
  className: string;
  ageRange: string;
  status: "compliant" | "needs-improvement";
  coveragePercent: number;
  ratio: string;
  employeeCount: number;
  childrenCount: string;
  employees: Employee[];
  nextActivity: string;
  classIcon: React.ReactNode;
}

function TimelineIndicator() {
  return (
    <div className="flex flex-col items-center self-stretch gap-0 ">
      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
      <div className="w-px flex-1 bg-primary-500 opacity-60" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
    </div>
  );
}

function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <div className="flex items-center gap-2 flex-1 min-w-0 bg-white border border-neutral-200 rounded-lg p-1.5 pl-2">
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <TimelineIndicator />
        <div className="flex flex-col justify-center gap-1 shrink-0">
          <span className="text-neutral-500 text-[8px] font-medium leading-none">
            {employee.startTime}
          </span>
          <span className="text-neutral-500 text-[8px] font-medium leading-none">
            {employee.endTime}
          </span>
        </div>
        <div className="flex items-center gap-1 px-1 py-0.5 bg-primary-500 rounded-full shrink-0">
          <span className="text-white text-[12px] font-semibold leading-none">
            {employee.childCount}
          </span>
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.1239 0C3.45536 0 3.77324 0.13167 4.00761 0.366045C4.24199 0.60042 4.37366 0.9183 4.37366 1.24976C4.37366 1.58121 4.24199 1.89909 4.00761 2.13347C3.77324 2.36784 3.45536 2.49951 3.1239 2.49951C2.79244 2.49951 2.47456 2.36784 2.24019 2.13347C2.00581 1.89909 1.87414 1.58121 1.87414 1.24976C1.87414 0.9183 2.00581 0.60042 2.24019 0.366045C2.47456 0.13167 2.79244 0 3.1239 0ZM1.71792 9.37317V7.81098H1.37034C1.15749 7.81098 1.00713 7.60203 1.07352 7.39895L1.68277 5.57508L1.12234 6.31322C0.913394 6.58856 0.520892 6.64128 0.247508 6.43429C-0.0258761 6.2273 -0.0825057 5.83285 0.126438 5.55946L1.2766 4.04218C1.71402 3.46417 2.39943 3.12439 3.1239 3.12439C3.84837 3.12439 4.53378 3.46417 4.9712 4.04218L6.12136 5.55946C6.3303 5.8348 6.27563 6.2273 6.00029 6.43429C5.72495 6.64128 5.33245 6.58856 5.12546 6.31322L4.56502 5.57508L5.17233 7.39895C5.24067 7.60203 5.08836 7.81098 4.87551 7.81098H4.52792V9.37317C4.52792 9.71881 4.24868 9.99805 3.90304 9.99805C3.55741 9.99805 3.27817 9.71881 3.27817 9.37317V7.81098H2.96573V9.37317C2.96573 9.71881 2.68649 9.99805 2.34085 9.99805C1.99521 9.99805 1.71597 9.71881 1.71597 9.37317H1.71792ZM9.37268 0C9.70413 0 10.022 0.13167 10.2564 0.366045C10.4908 0.60042 10.6224 0.9183 10.6224 1.24976C10.6224 1.58121 10.4908 1.89909 10.2564 2.13347C10.022 2.36784 9.70413 2.49951 9.37268 2.49951C9.04122 2.49951 8.72334 2.36784 8.48897 2.13347C8.25459 1.89909 8.12292 1.58121 8.12292 1.24976C8.12292 0.9183 8.25459 0.60042 8.48897 0.366045C8.72334 0.13167 9.04122 0 9.37268 0ZM9.21646 7.49854V9.37317C9.21646 9.71881 8.93722 9.99805 8.59158 9.99805C8.24595 9.99805 7.9667 9.71881 7.9667 9.37317V5.86799L7.7148 6.26831C7.53124 6.56122 7.1446 6.64714 6.85364 6.46358C6.56268 6.28002 6.47481 5.89338 6.65837 5.60242L7.66793 3.99922C8.01162 3.4544 8.61111 3.12244 9.25356 3.12244H9.49375C10.1382 3.12244 10.7376 3.45245 11.0794 3.99922L12.0889 5.60437C12.2725 5.89729 12.1846 6.28198 11.8937 6.46553C11.6027 6.64909 11.2161 6.56122 11.0325 6.27026L10.7806 5.86995V9.37512C10.7806 9.72076 10.5014 10 10.1557 10C9.81009 10 9.53085 9.72076 9.53085 9.37512V7.50049H9.21841L9.21646 7.49854Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <div className="flex flex-col items-end gap-1">
          <span className="text-neutral-800 text-[10px] font-semibold leading-none text-right">
            {employee.name}
          </span>
          <span className="text-neutral-500 text-[9px] font-medium leading-none text-right">
            {employee.role}
          </span>
        </div>
        <img
          src={employee.image}
          alt={employee.name}
          className="w-7 h-7 rounded-[5px] object-cover shrink-0"
        />
      </div>
    </div>
  );
}

function ClassCard({
  classId,
  className,
  ageRange,
  status,
  coveragePercent,
  ratio,
  employeeCount,
  childrenCount,
  employees,
  nextActivity,
  classIcon,
}: ClassCardProps) {
  const isCompliant = status === "compliant";

  return (
    <div
      dir="ltr"
      className="flex flex-col gap-5 flex-1 min-w-0 bg-white border border-neutral-200 rounded-2xl p-3"
    >
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start w-full">
          {/* Status badge */}
          {isCompliant ? (
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[rgba(11,151,104,0.10)]">
              <span className="text-[#0B9768] text-[10px] font-medium">
                متوافق مع المعايير
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#0B9768]" />
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#FEE2E2]">
              <span className="text-[#DC2626] text-[10px] font-medium">
                يحتاج إلى تحسينات
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            </div>
          )}
          {/* Class name + icon */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end gap-0.5">
              <span className="text-neutral-800 text-sm font-semibold leading-4 text-right">
                {className}
              </span>
              <span className="text-neutral-500 text-[10px] font-normal leading-4 text-right">
                {ageRange}
              </span>
            </div>
            <div className="w-10 h-10 shrink-0">{classIcon}</div>
          </div>
        </div>

        {/* Coverage progress */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-neutral-500 text-[13px] font-semibold">
              {coveragePercent}%
            </span>
            <span className="text-neutral-800 text-[12px] font-medium">
              التغطية اليوم
            </span>
          </div>
          <div
            className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden"
            dir="rtl"
          >
            <div
              className={`h-full rounded-full transition-all ${
                isCompliant ? "bg-[#099]" : "bg-[#F97316]"
              }`}
              style={{ width: `${coveragePercent}%` }}
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="flex gap-2">
          {/* Ratio */}
          <div
            className={`flex flex-col items-end gap-1 flex-1 rounded-lg p-2  ${
              isCompliant ? "bg-[#D1FAE5]" : "bg-[#FEE2E2]"
            }`}
          >
            <span
              className={`text-[12px] font-bold leading-4 ${
                isCompliant ? "text-[#104E24]" : "text-[#4E1010]"
              }`}
            >
              النسبة
            </span>
            <span
              className={`text-[12px] leading-4 flex flex-row-reverse items-center gap-1 ${
                isCompliant ? "text-[#108134]" : "text-[#811010]"
              }`}
            >
              <span className="font-bold">{ratio}</span>
              <span className="font-normal">أطفال لكل موظف</span>
            </span>
          </div>

          {/* Employee count */}
          <div className="flex flex-col items-end  gap-1 flex-1 bg-neutral-100 border border-neutral-200 rounded-lg p-2">
            <div className="flex flex-col items-end w-full">
              <span className="text-black text-[12px] font-normal">
                الموظفون
              </span>
              <span
                className={`text-sm font-semibold leading-4 ${
                  isCompliant ? "text-neutral-800" : "text-[#DC2626]"
                }`}
              >
                {employeeCount}
              </span>
            </div>
            {!isCompliant && (
              <div className="flex justify-between items-center w-full">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.625 1.3125C5.625 0.964 5.487 0.631 5.241 0.384C4.995 0.138 4.661 0 4.313 0C3.964 0 3.631 0.138 3.385 0.384C3.138 0.631 3 0.964 3 1.3125C3 1.661 3.138 1.994 3.385 2.241C3.631 2.487 3.964 2.625 4.313 2.625C4.661 2.625 4.995 2.487 5.241 2.241C5.487 1.994 5.625 1.661 5.625 1.3125ZM6.188 6.298L7.055 7.467C7.355 7.057 7.723 6.701 8.14 6.413L6.823 4.638C6.234 3.844 5.304 3.375 4.313 3.375C3.321 3.375 2.391 3.844 1.8 4.638L0.148 6.865C-0.098 7.198 -0.03 7.666 0.302 7.915C0.635 8.163 1.104 8.093 1.352 7.76L2.438 6.298V12.75C2.438 13.165 2.773 13.5 3.188 13.5C3.602 13.5 3.938 13.165 3.938 12.75V9C3.938 8.794 4.106 8.625 4.313 8.625C4.519 8.625 4.688 8.794 4.688 9V12.75C4.688 13.165 5.023 13.5 5.438 13.5C5.852 13.5 6.188 13.165 6.188 12.75V6.298ZM10.688 13.5C11.583 13.5 12.441 13.144 13.074 12.512C13.707 11.879 14.063 11.02 14.063 10.125C14.063 9.23 13.707 8.371 13.074 7.739C12.441 7.106 11.583 6.75 10.688 6.75C9.792 6.75 8.934 7.106 8.301 7.739C7.668 8.371 7.313 9.23 7.313 10.125C7.313 11.02 7.668 11.879 8.301 12.512C8.934 13.144 9.792 13.5 10.688 13.5ZM10.688 11.156C10.812 11.156 10.931 11.206 11.019 11.294C11.107 11.382 11.156 11.501 11.156 11.625C11.156 11.749 11.107 11.868 11.019 11.956C10.931 12.044 10.812 12.094 10.688 12.094C10.563 12.094 10.444 12.044 10.356 11.956C10.268 11.868 10.219 11.749 10.219 11.625C10.219 11.501 10.268 11.382 10.356 11.294C10.444 11.206 10.563 11.156 10.688 11.156ZM10.688 7.875C10.894 7.875 11.063 8.044 11.063 8.25V10.125C11.063 10.331 10.894 10.5 10.688 10.5C10.481 10.5 10.313 10.331 10.313 10.125V8.25C10.313 8.044 10.481 7.875 10.688 7.875Z"
                    fill="#E85C5C"
                  />
                </svg>
                <span className="text-neutral-500 text-[8px] font-semibold">
                  أضف موظفًا جديدًا لإصلاح هذا الفصل
                </span>
              </div>
            )}
          </div>

          {/* Children count */}
          <div className="flex flex-col items-end gap-1 flex-1 bg-neutral-100 border border-neutral-200 rounded-lg p-2">
            <span className="text-black text-[12px] font-normal">الأطفال</span>
            <span className="text-neutral-800 text-sm font-semibold leading-4">
              {childrenCount}
            </span>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="flex flex-col gap-2 bg-neutral-100 rounded-2xl p-2">
        {/* Team header */}
        <div className="flex justify-end items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-white text-[10px] font-semibold bg-[#DC2626]">
              {employees.length}
            </div>
            <span className="text-neutral-800 text-[12px] font-medium">
              طاقم العمل اليوم
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0C7.464 0 7.909 0.184 8.237 0.513C8.566 0.841 8.75 1.286 8.75 1.75C8.75 2.214 8.566 2.659 8.237 2.987C7.909 3.316 7.464 3.5 7 3.5C6.536 3.5 6.091 3.316 5.763 2.987C5.434 2.659 5.25 2.214 5.25 1.75C5.25 1.286 5.434 0.841 5.763 0.513C6.091 0.184 6.536 0 7 0ZM9.625 8.531C9.625 9.215 9.278 9.816 8.75 10.169V12.688C8.75 13.412 8.162 14 7.438 14H6.563C5.838 14 5.25 13.412 5.25 12.688V10.169C4.722 9.816 4.375 9.215 4.375 8.531V7.438C4.375 5.988 5.551 4.813 7 4.813C8.449 4.813 9.625 5.988 9.625 7.438V8.531ZM2.625 0.875C2.826 0.875 3.025 0.915 3.211 0.992C3.397 1.069 3.566 1.181 3.708 1.323C3.85 1.466 3.963 1.634 4.04 1.82C4.117 2.006 4.156 2.205 4.156 2.406C4.156 2.607 4.117 2.806 4.04 2.992C3.963 3.178 3.85 3.347 3.708 3.489C3.566 3.631 3.397 3.744 3.211 3.821C3.025 3.898 2.826 3.938 2.625 3.938C2.424 3.938 2.225 3.898 2.039 3.821C1.853 3.744 1.684 3.631 1.542 3.489C1.4 3.347 1.287 3.178 1.21 2.992C1.133 2.806 1.094 2.607 1.094 2.406C1.094 2.205 1.133 2.006 1.21 1.82C1.287 1.634 1.4 1.466 1.542 1.323C1.684 1.181 1.853 1.069 2.039 0.992C2.225 0.915 2.424 0.875 2.625 0.875ZM3.063 7.438V8.313C3.063 9.201 3.393 10.011 3.938 10.629V12.688C3.938 12.72 3.938 12.756 3.94 12.789C3.708 12.997 3.402 13.125 3.063 13.125H2.188C1.463 13.125 0.875 12.537 0.875 11.813V10.265C0.353 9.964 0 9.398 0 8.75V7.875C0 6.426 1.176 5.25 2.625 5.25C2.972 5.25 3.303 5.318 3.607 5.439C3.262 6.024 3.063 6.707 3.063 7.438ZM10.063 12.688V10.629C10.607 10.013 10.938 9.201 10.938 8.313V7.438C10.938 6.707 10.738 6.027 10.393 5.439C10.697 5.316 11.028 5.25 11.375 5.25C12.824 5.25 14 6.426 14 7.875V8.75C14 9.398 13.647 9.964 13.125 10.265V11.813C13.125 12.537 12.537 13.125 11.813 13.125H10.938C10.601 13.125 10.292 12.999 10.06 12.789C10.06 12.756 10.063 12.72 10.063 12.688ZM11.375 0.875C11.576 0.875 11.775 0.915 11.961 0.992C12.147 1.069 12.316 1.181 12.458 1.323C12.6 1.466 12.713 1.634 12.79 1.82C12.867 2.006 12.906 2.205 12.906 2.406C12.906 2.607 12.867 2.806 12.79 2.992C12.713 3.178 12.6 3.347 12.458 3.489C12.316 3.631 12.147 3.744 11.961 3.821C11.775 3.898 11.576 3.938 11.375 3.938C11.174 3.938 10.975 3.898 10.789 3.821C10.603 3.744 10.434 3.631 10.292 3.489C10.15 3.347 10.037 3.178 9.96 2.992C9.883 2.806 9.844 2.607 9.844 2.406C9.844 2.205 9.883 2.006 9.96 1.82C10.037 1.634 10.15 1.466 10.292 1.323C10.434 1.181 10.603 1.069 10.789 0.992C10.975 0.915 11.174 0.875 11.375 0.875Z"
                fill="#009999"
              />
            </svg>
          </div>
        </div>

        {/* Employee grid */}
        <div className="flex flex-col gap-2">
          {/* First row - 2 employees */}
          <div className="flex gap-2">
            {employees.slice(0, 2).map((emp, i) => (
              <EmployeeCard key={i} employee={emp} />
            ))}
          </div>
          {/* Second row - remaining employees */}
          {employees.length > 2 && (
            <div className="flex gap-2">
              {employees.slice(2, 4).map((emp, i) => (
                <EmployeeCard key={i + 2} employee={emp} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Next activity */}
      <div className="flex items-center justify-end gap-2 bg-neutral-100 rounded-lg px-2 py-1.5">
        <div className="flex items-center gap-0.5">
          <span className="text-neutral-800 text-[10px] font-normal">
            {nextActivity}
          </span>
          <span className="text-neutral-800 text-[10px] font-semibold">
           : النشاط التالي 
          </span>
        </div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0C9.311 0 12 2.689 12 6C12 9.311 9.311 12 6 12C2.689 12 0 9.311 0 6C0 2.689 2.689 0 6 0ZM5.438 2.813V6C5.438 6.188 5.531 6.363 5.688 6.469L7.938 7.969C8.196 8.142 8.545 8.072 8.719 7.812C8.892 7.552 8.822 7.205 8.562 7.031L6.563 5.7V2.813C6.563 2.501 6.312 2.25 6 2.25C5.688 2.25 5.438 2.501 5.438 2.813Z"
            fill="#009999"
          />
        </svg>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 justify-end">
        {/* View details */}
        <Link
          href={`/parent/classrooms/${classId}`}
          className="flex items-center justify-center gap-2 bg-primary-500 text-white text-sm font-semibold rounded-xl px-3 py-2.5 bg-[#009999] hover:bg-teal-600 transition-colors"
        >
          <span>عرض التفاصيل</span>
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 3.6C8.349 3.6 7.725 3.853 7.264 4.303C6.804 4.753 6.545 5.363 6.545 6C6.545 6.637 6.804 7.247 7.264 7.697C7.725 8.147 8.349 8.4 9 8.4C9.651 8.4 10.275 8.147 10.736 7.697C11.196 7.247 11.455 6.637 11.455 6C11.455 5.363 11.196 4.753 10.736 4.303C10.275 3.853 9.651 3.6 9 3.6ZM9 10C7.915 10 6.874 9.579 6.107 8.828C5.34 8.078 4.909 7.061 4.909 6C4.909 4.939 5.34 3.922 6.107 3.172C6.874 2.421 7.915 2 9 2C10.085 2 11.126 2.421 11.893 3.172C12.66 3.922 13.091 4.939 13.091 6C13.091 7.061 12.66 8.078 11.893 8.828C11.126 9.579 10.085 10 9 10ZM9 0C4.909 0 1.415 2.488 0 6C1.415 9.512 4.909 12 9 12C13.091 12 16.585 9.512 18 6C16.585 2.488 13.091 0 9 0Z"
              fill="white"
            />
          </svg>
        </Link>

        {/* Assign employee */}
        {isCompliant ? (
          <button className="flex items-center justify-center gap-3 bg-neutral-100 border border-neutral-200 text-[#374151] text-sm font-normal rounded-xl px-3 py-2.5 hover:bg-gray-100 transition-colors whitespace-nowrap">
            <span>الابلاغ بتعين موظف</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.714 0.714C5.714 0.525 5.639 0.343 5.505 0.209C5.371 0.075 5.189 0 5 0C4.811 0 4.629 0.075 4.495 0.209C4.361 0.343 4.286 0.525 4.286 0.714V4.286H0.714C0.525 4.286 0.343 4.361 0.209 4.495C0.075 4.629 0 4.811 0 5C0 5.189 0.075 5.371 0.209 5.505C0.343 5.639 0.525 5.714 0.714 5.714H4.286V9.286C4.286 9.475 4.361 9.657 4.495 9.791C4.629 9.925 4.811 10 5 10C5.189 10 5.371 9.925 5.505 9.791C5.639 9.657 5.714 9.475 5.714 9.286V5.714H9.286C9.475 5.714 9.657 5.639 9.791 5.505C9.925 5.371 10 5.189 10 5C10 4.811 9.925 4.629 9.791 4.495C9.657 4.361 9.475 4.286 9.286 4.286H5.714V0.714Z"
                fill="#111827"
              />
            </svg>
          </button>
        ) : (
          <button className="flex items-center justify-center gap-3 bg-[#FFF5F5] border border-[#B83B14] text-[#B83B14] text-sm font-normal rounded-xl px-3 py-2.5 hover:bg-red-50 transition-colors whitespace-nowrap">
            <span>تعيين موظف</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.714 0.714C5.714 0.525 5.639 0.343 5.505 0.209C5.371 0.075 5.189 0 5 0C4.811 0 4.629 0.075 4.495 0.209C4.361 0.343 4.286 0.525 4.286 0.714V4.286H0.714C0.525 4.286 0.343 4.361 0.209 4.495C0.075 4.629 0 4.811 0 5C0 5.189 0.075 5.371 0.209 5.505C0.343 5.639 0.525 5.714 0.714 5.714H4.286V9.286C4.286 9.475 4.361 9.657 4.495 9.791C4.629 9.925 4.811 10 5 10C5.189 10 5.371 9.925 5.505 9.791C5.639 9.657 5.714 9.475 5.714 9.286V5.714H9.286C9.475 5.714 9.657 5.639 9.791 5.505C9.925 5.371 10 5.189 10 5C10 4.811 9.925 4.629 9.791 4.495C9.657 4.361 9.475 4.286 9.286 4.286H5.714V0.714Z"
                fill="#B83B14"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

function InfantsClassIcon() {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-30">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 4.999C13 4.689 12.859 4.399 12.616 4.211C12.372 4.024 12.056 3.955 11.756 4.03L6.134 5.436C5.468 5.602 5 6.202 5 6.889V17.999H4C3.446 17.999 3 18.446 3 19C3 19.553 3.446 20 4 20H13V4.999ZM11 11.999C11 12.552 10.666 12.999 10.25 12.999C9.834 12.999 9.5 12.552 9.5 11.999C9.5 11.447 9.834 10.999 10.25 10.999C10.666 10.999 11 11.447 11 11.999ZM14 7.999H17V19C17 19.553 17.447 20 18 20H20C20.553 20 21 19.553 21 19C21 18.446 20.553 17.999 20 17.999H19V7.999C19 6.896 18.103 5.999 17 5.999H14V7.999Z"
          fill="#009999"
        />
      </svg>
    </div>
  );
}

function ToddlerClassIcon() {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FFF3EF]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 4.999C13 4.689 12.859 4.399 12.616 4.211C12.372 4.024 12.056 3.955 11.756 4.03L6.134 5.436C5.468 5.602 5 6.202 5 6.889V17.999H4C3.446 17.999 3 18.446 3 19C3 19.553 3.446 20 4 20H13V4.999ZM11 11.999C11 12.552 10.666 12.999 10.25 12.999C9.834 12.999 9.5 12.552 9.5 11.999C9.5 11.447 9.834 10.999 10.25 10.999C10.666 10.999 11 11.447 11 11.999ZM14 7.999H17V19C17 19.553 17.447 20 18 20H20C20.553 20 21 19.553 21 19C21 18.446 20.553 17.999 20 17.999H19V7.999C19 6.896 18.103 5.999 17 5.999H14V7.999Z"
          fill="#FF8B64"
        />
      </svg>
    </div>
  );
}

const infantsEmployees: Employee[] = [
  {
    name: "سارة ليليا",
    role: "معلمة رئيسية",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/7ac4425fe93903f6b5d6a8521d386e6e0fb681cd?width=56",
    startTime: "09:00",
    endTime: "16:00",
    childCount: 5,
  },
  {
    name: "فاطمة علي",
    role: "مساعدة",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/68cf976cd4ce1dccb7adf9fedbf87ab299bbbe6f?width=56",
    startTime: "09:00",
    endTime: "16:00",
    childCount: 5,
  },
  {
    name: "سارة محمد",
    role: "معلمة الرياضة",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/e339c5e01038a8d13b7a64b162d7889a04be79cb?width=56",
    startTime: "09:00",
    endTime: "16:00",
    childCount: 5,
  },
  {
    name: "مريم زيد",
    role: "مساعدة تعليمية",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/4ea6f0afd8c22c446180baa128f5ee11e97cb2cf?width=56",
    startTime: "09:00",
    endTime: "16:00",
    childCount: 5,
  },
];

const toddlerEmployees: Employee[] = [
  {
    name: "سارة ليليا",
    role: "معلمة رئيسية",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/7ac4425fe93903f6b5d6a8521d386e6e0fb681cd?width=56",
    startTime: "09:00",
    endTime: "16:00",
    childCount: 5,
  },
  {
    name: "فاطمة علي",
    role: "مساعدة",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/68cf976cd4ce1dccb7adf9fedbf87ab299bbbe6f?width=56",
    startTime: "09:00",
    endTime: "16:00",
    childCount: 5,
  },
  {
    name: "مريم زيد",
    role: "مساعدة تعليمية",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/4ea6f0afd8c22c446180baa128f5ee11e97cb2cf?width=56",
    startTime: "09:00",
    endTime: "16:00",
    childCount: 5,
  },
];

// classes management page for parents - shows list of classes, their status, employees assigned, and next activity. Also has search functionality to filter classes by name or age range.
export default function ParentClassroomsPage() {


  const [search, setSearch] = useState("");

  const allClasses = [
    {
      id: 1,
      className: "فصل الرضع أ",
      ageRange: "رضع (0-12 شهر)",
      status: "compliant" as const,
      coveragePercent: 100,
      ratio: "5",
      employeeCount: 4,
      childrenCount: "20/20",
      employees: infantsEmployees,
      nextActivity: "وقت القيلولة في 13:00",
      classIcon: <InfantsClassIcon />,
    },
    {
      id: 2,
      className: "فصل الصغار ب",
      ageRange: "الصغار (من سنة إلى 3 سنوات)",
      status: "needs-improvement" as const,
      coveragePercent: 75,
      ratio: "5",
      employeeCount: 3,
      childrenCount: "20/20",
      employees: toddlerEmployees,
      nextActivity: "وقت القيلولة في 13:00",
      classIcon: <ToddlerClassIcon />,
    },
  ];

  const filteredClasses = allClasses.filter(
    (cls) => cls.className.includes(search) || cls.ageRange.includes(search),
  );

  return (
    <div
     
      className="min-h-full bg-neutral-50 p-4 md:p-6 -m-4 md:-m-6"
      style={{
        fontFamily:
          "var(--font-cairo), 'Cairo', -apple-system, Roboto, Helvetica, sans-serif",
      }}
    >
      <div className=" mx-auto px-0 md:px-2 py-2 md:py-4 flex flex-col gap-4">
        {/* Page title */}
        <div className="flex ">
          <h1 className="text-neutral-800 text-base font-bold">
           روضة النجوم الصغيرة
          </h1>
        </div>

        {/* Stats overview */}
        <StatsOverview />

        {/* Section header: title + search */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-2">
          <h2 className="text-neutral-800 text-base font-bold">جميع الفصول</h2>
          {/* Search input */}
          <div
            className="flex items-center gap-2 w-full sm:w-auto"
           
           
          >
            <div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-lg px-3 py-1.5 w-full sm:w-64">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M2 6.667C2 7.279 2.121 7.886 2.355 8.453C2.59 9.019 2.933 9.533 3.367 9.967C3.8 10.4 4.315 10.744 4.881 10.978C5.447 11.213 6.054 11.333 6.667 11.333C7.279 11.333 7.886 11.213 8.453 10.978C9.019 10.744 9.533 10.4 9.967 9.967C10.4 9.533 10.744 9.019 10.978 8.453C11.213 7.886 11.333 7.279 11.333 6.667C11.333 6.054 11.213 5.447 10.978 4.881C10.744 4.315 10.4 3.8 9.967 3.367C9.533 2.933 9.019 2.59 8.453 2.355C7.886 2.121 7.279 2 6.667 2C6.054 2 5.447 2.121 4.881 2.355C4.315 2.59 3.8 2.933 3.367 3.367C2.933 3.8 2.59 4.315 2.355 4.881C2.121 5.447 2 6.054 2 6.667Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 14L10 10"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <input
                type="text"
                placeholder="ابحث عن فصل أو بالاسم"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex  text-right text-[12px]   font-medium text-neutral-500 placeholder-neutral-400 bg-transparent outline-none"
                dir="ltr"
              />
            </div>
          </div>
        </div>

        {/* Class cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {filteredClasses.map((cls) => (
            <ClassCard
              key={cls.id}
              classId={cls.id}
              className={cls.className}
              ageRange={cls.ageRange}
              status={cls.status}
              coveragePercent={cls.coveragePercent}
              ratio={cls.ratio}
              employeeCount={cls.employeeCount}
              childrenCount={cls.childrenCount}
              employees={cls.employees}
              nextActivity={cls.nextActivity}
              classIcon={cls.classIcon}
            />
          ))}
          {filteredClasses.length === 0 && (
            <div className="col-span-2 text-center py-10 text-neutral-500 text-sm">
              لا توجد فصول مطابقة للبحث
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
