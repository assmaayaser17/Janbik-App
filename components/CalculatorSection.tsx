"use client";

import { useState } from "react";

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}

function Slider({ label, value, min, max, onChange }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="bg-[#E6F5F5] rounded-md px-2 py-0.5">
          <span className="text-[#009999] text-sm font-bold">{value}</span>
        </div>
        <span className="text-[#1A2023] text-sm font-medium">{label}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to left, #009999 ${pct}%, #DDE4E2 ${pct}%)`,
          }}
        />
      </div>
      <div className="flex justify-between">
        <span className="text-[#5C6970] text-xs">{max}</span>
        <span className="text-[#5C6970] text-xs">{min}</span>
      </div>
    </div>
  );
}

export default function CalculatorSection() {
  const [children, setChildren] = useState(30);
  const [employees, setEmployees] = useState(10);
  const [supervisors, setSupervisors] = useState(5);

  const errorReduction = Math.min(Math.round(40 + (children / 200) * 30), 85);
  const hoursSaved = Math.round(
    10 + (children / 200) * 40 + (employees / 50) * 15,
  );
  const satisfaction = Math.min(
    Math.round(70 + (children / 200) * 15),
    95,
  );
  const savingsMin = Math.round(
    (children * 80 + employees * 200) * 0.7,
  );
  const savingsMax = Math.round(
    (children * 80 + employees * 200) * 1.3,
  );

  return (
    <section
      id="calculator"
      className="py-12 px-4 sm:px-8 lg:px-14 bg-transparent"
      dir="ltr"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 border border-[#E8E6E3] shadow-sm">
            <span className="text-[#009999] text-sm font-medium">
              حاسبة التوفير
            </span>
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5625 0C14.2461 0 14.875 0.628906 14.875 1.3125V12.6875C14.875 13.3984 14.2461 14 13.5625 14H3.9375C3.22656 14 2.625 13.3984 2.625 12.6875V1.3125C2.625 0.628906 3.22656 0 3.9375 0H13.5625ZM6.125 11.9219V10.8555C6.125 10.6914 5.93359 10.5 5.76953 10.5H4.70312C4.53906 10.5 4.375 10.6914 4.375 10.8555V11.9219C4.375 12.0859 4.53906 12.25 4.70312 12.25H5.76953C5.93359 12.25 6.125 12.0859 6.125 11.9219ZM9.625 11.9219V10.8555C9.625 10.6914 9.43359 10.5 9.26953 10.5H8.20312C8.03906 10.5 7.875 10.6914 7.875 10.8555V11.9219C7.875 12.0859 8.03906 12.25 8.20312 12.25H9.26953C9.43359 12.25 9.625 12.0859 9.625 11.9219ZM13.125 4.92188V2.10547C13.125 1.94141 12.9336 1.75 12.7695 1.75H4.70312C4.53906 1.75 4.375 1.94141 4.375 2.10547V4.92188C4.375 5.08594 4.53906 5.25 4.70312 5.25H12.7695C12.9336 5.25 13.125 5.08594 13.125 4.92188Z"
                fill="#009999"
              />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2023] text-center">
            كم ستوفّر جنبك على مركزك خلال سنة؟
          </h2>

          <p className="text-[#5C6970] text-lg text-center max-w-xl">
            أدخل أرقام مركزك، وشاهد تقديرًا للتوفير في الوقت والجهد والتكاليف
            التشغيلية.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col gap-4 lg:w-80 xl:w-96 shrink-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-1.5 p-4 rounded-2xl border border-[#E8E6E3] bg-white shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1A9E83]/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2L18 10L10 18M18 10H2"
                      stroke="#009999"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[#5C6970] text-xs text-center">
                  تقليل أخطاء التوثيق
                </span>
                <span className="text-[#009999] text-2xl font-bold">
                  {errorReduction}%
                </span>
                <span className="text-[#5C6970] text-xs">نسبة تقديرية</span>
              </div>

              <div className="flex flex-col items-center gap-1.5 p-4 rounded-2xl border border-[#E8E6E3] bg-white shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1A9E83]/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke="#009999"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 6V10L13 12"
                      stroke="#009999"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[#5C6970] text-xs text-center">
                  وقت إداري موفّر/شهر
                </span>
                <span className="text-[#009999] text-2xl font-bold">
                  {hoursSaved}
                </span>
                <span className="text-[#5C6970] text-xs">ساعة</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-1.5 p-4 rounded-2xl border border-[#E8E6E3] bg-white shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1A9E83]/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.734 1.732C19.422 3.182 19.51 5.837 17.93 7.494L10.98 14.778C10.594 15.194 9.961 15.194 9.574 14.778L2.624 7.494C1.044 5.837 1.132 3.182 2.82 1.732C4.318 0.451 6.612 0.713 7.977 2.148L10.277 4.554L12.577 2.148C13.942 0.713 16.236 0.451 17.734 1.732Z"
                      fill="#009999"
                    />
                  </svg>
                </div>
                <span className="text-[#5C6970] text-xs text-center">
                  رضا أولياء الأمور
                </span>
                <span className="text-[#009999] text-2xl font-bold">
                  {satisfaction}%
                </span>
                <div className="w-full h-2 rounded-full bg-[#DDE4E2] overflow-hidden">
                  <div
                    className="h-full bg-[#009999] rounded-full transition-all"
                    style={{ width: `${satisfaction}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-1.5 p-4 rounded-2xl border border-[#E8E6E3] bg-white shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1A9E83]/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke="#009999"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 6V14M7 8.5C7 7.1 8.3 6 10 6C11.7 6 13 7.1 13 8.5C13 10.5 10 11 10 11M10 13.5V14"
                      stroke="#009999"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-[#5C6970] text-xs text-center">
                  توفير تشغيلي سنوي
                </span>
                <div className="flex items-center gap-0.5 flex-wrap justify-center">
                  <span className="text-[#009999] text-sm font-bold">
                    {savingsMin.toLocaleString()}
                  </span>
                  <span className="text-[#009999] font-bold">-</span>
                  <span className="text-[#009999] text-sm font-bold">
                    {savingsMax.toLocaleString()}
                  </span>
                </div>
                <span className="text-[#5C6970] text-xs">ريال تقريبًا</span>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-2xl border border-[#E8E6E3] shadow-sm p-6">
            <div className="flex flex-col gap-8">
              <Slider
                label="عدد الأطفال"
                value={children}
                min={5}
                max={200}
                onChange={setChildren}
              />
              <Slider
                label="عدد الموظفين"
                value={employees}
                min={1}
                max={50}
                onChange={setEmployees}
              />
              <Slider
                label="عدد المشرفين"
                value={supervisors}
                min={1}
                max={20}
                onChange={setSupervisors}
              />
            </div>

            <p className="text-[#5C6970] text-xs text-center mt-6 leading-relaxed">
              هذه تقديرات مبنية على نمط تشغيل شائع في مراكز مثلك. وختلف الأثر
              بحسب طريقة العمل.
            </p>

            <div className="mt-6 text-center">
              <a
                href="#register"
                className="inline-flex items-center gap-2 bg-[#009999] text-white font-bold text-sm px-8 py-3 rounded-full hover:bg-[#007A7A] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1L15 8L8 15M15 8H1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                احجز عرضًا توضيحيًا لمركزك
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        input[type='range'] {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          border-radius: 9999px;
          outline: none;
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #009999;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 0 1px #009999;
        }
        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #009999;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 0 1px #009999;
        }
      `}</style>
    </section>
  );
}

