import type { ReactNode } from "react";

function FloatingBadge({
  text,
  icon,
  rotate,
}: {
  text: string;
  icon: ReactNode;
  rotate: string;
}) {
  return (
    <div
      className={`flex flex-row-reverse items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-md ${rotate}`}
    >
      <span className="text-[10px] font-black text-black whitespace-nowrap">
        {text}
      </span>
      {icon}
    </div>
  );
}

export default function HeroSection() {
  return (
    <div
      dir="rtl"
      className="bg-transparent font-cairo flex items-center justify-center px-4 sm:px-8 py-12"
    >
      <div className=" ">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-8 ">
          {/* Image side */}
          <div className="hidden lg:block relative shrink-0 w-full max-w-135 mx-auto lg:mx-0">
            <div className="aspect-square  rounded-4xl border-8 border-white shadow-2xl overflow-hidden w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6426e16777481b3d3102dcd992157e769ca86405?width=1556"
                alt="أم تستخدم تطبيق جنبك"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute top-5 right-5 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
              <span className="text-[#009999] text-base leading-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="5" r="3" fill="#009999" />
                  <path
                    d="M6 20v-5a6 6 0 0 1 12 0v5"
                    stroke="#009999"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-sm font-bold text-[#2D3749] whitespace-nowrap">
                لا تدع العمل يسرق طفولة طفلك
              </span>
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[260px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9f87d39d5ddeeab31e579b9c7bbb37200ebe6944?width=512"
                alt="تحديث فوري"
                className="w-full h-10 rounded-full object-cover shadow-md"
              />
            </div>
          </div>

          {/* Text side */}
          <div className="flex flex-col items-end gap-10 flex-1 w-full " dir="ltr">
            <div className="flex flex-col items-end gap-6 w-full">
              <div className="flex items-center gap-2 bg-[rgba(0,153,153,0.10)] px-3 py-1 rounded-full">
                <span className="text-sm font-medium  text-[#009999]" >
                  تحديثات مباشرة و تجربة مريحة للأهل
                </span>
                <div className="w-2 h-2 rounded-full bg-[#009999] shrink-0" />
              </div>

              <div className="flex flex-col items-end gap-2 w-full">
                <h1 className="text-[clamp(28px,4.2vw,48px)] font-black text-[#2D3749] text-right leading-[1.35] tracking-[-0.03em] w-full">
                  ليس لديك وقت كافٍ للاعتناء بطفلك بسبب العمل؟
                </h1>

                <div className="relative inline-block self-end">
                  <h2 className="text-[clamp(24px,3.5vw,40px)] font-black text-[#009999] text-right leading-[1.8] tracking-[-0.03em]">
                    جنبك هو الحلّ المثالي.
                  </h2>
                  <svg
                    className="absolute -bottom-1 right-0 w-full max-w-[297px]"
                    viewBox="0 0 297 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 0C91.8846 75.6231 83.1584 -23.7594 198.143 27.7286C198.143 27.7286 243.104 45.3684 296.072 11.4755"
                      stroke="#FFDFB3"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-10 w-full">
              <p className="text-right text-[#6B7280] text-[clamp(16px,1.6vw,20px)] leading-[1.65] w-full">
                <span>جنبك </span>
                <strong className="font-bold">
                  تعتني بطفلك طوال النهار
                </strong>
                <span>
                  {" "}
                  داخل المركز، وتبقيك على اطلاع لحظي على يومه: نوم مريح، وجبة
                  صحية، لعب ممتع، وأنشطة تنمّي ذكاء طفلك الجميل —{" "}
                </span>
                <strong className="font-bold">
                  وكأنك بجانبه دائمًا.
                </strong>
              </p>

              <div className="flex flex-wrap justify-end items-center gap-4 w-full">
                <button className="flex items-center gap-3 h-12 px-4 rounded-full border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <span className="text-base sm:text-lg font-bold text-[#2D3749]">
                    شاهد كيف نتابع طفلك ونعتني به
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#111827"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 8L16 12L10 16V8Z"
                      fill="#111827"
                    />
                  </svg>
                </button>

                <button className="flex items-center gap-2 h-12 pl-8 pr-4 rounded-full bg-[#009999] text-white hover:bg-[#007a7a] transition-colors cursor-pointer shadow-lg shadow-[#009999]/30">
                  <span className="text-base sm:text-lg font-bold">
                    سجّل الآن
                  </span>
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <path
                      d="M17.4545 0L5.45455 12L0 6.54545"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}