import type { ReactNode } from "react";

interface Step {
  number: string;
  color: string;
  borderColor: string;
  textColor: string;
  bgColor: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const steps: Step[] = [
  {
    number: "1",
    color: "#16B9F2",
    borderColor: "border-[#16B9F2]",
    textColor: "text-[#16B9F2]",
    bgColor: "bg-[#16B9F2]",
    title: "سوار ذكي",
    description:
      "يرتدي طفلك سوارًا مريحًا يساعد فريق الرعاية على متابعة حالته ونشاطه طوال اليوم. هذا يمنحنا تنبيهًا سريعًا عند الحاجة، ويمنحك أنت راحة أكبر.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z"
          stroke="white"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 16.6665V19.9998L21.6667 21.6665"
          stroke="white"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.8829 12.7665L25.5329 6.01646C25.3805 5.24914 24.9631 4.55987 24.3537 4.0693C23.7443 3.57874 22.9818 3.31814 22.1996 3.33313H17.7329C16.9508 3.31814 16.1882 3.57874 15.5789 4.0693C14.9695 4.55987 14.552 5.24914 14.3996 6.01646L13.0996 12.7665"
          stroke="white"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.1328 27.2664L14.4661 33.9331C14.6186 34.7004 15.036 35.3897 15.6454 35.8803C16.2548 36.3708 17.0173 36.6314 17.7995 36.6164H22.3328C23.115 36.6314 23.8775 36.3708 24.4869 35.8803C25.0963 35.3897 25.5137 34.7004 25.6661 33.9331L27.0161 27.1831"
          stroke="white"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "2",
    color: "#C099FF",
    borderColor: "border-[#C099FF]",
    textColor: "text-[#C099FF]",
    bgColor: "bg-[#C099FF]",
    title: "مركز المتابعة الذكي",
    description:
      "تصل المعلومات مباشرة إلى مركز المتابعة، ليكون فريق الرعاية على اطّلاع دائم بكل جديد. بهذه الطريقة، تصبح المتابعة أسرع، ويكون التعامل مع أي ملاحظة أكثر دقة.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.1663 31.6668H14.9996C12.8361 31.6663 10.7153 31.0641 8.87424 29.9276C7.03322 28.7911 5.54448 27.1651 4.5744 25.2312C3.60432 23.2973 3.19111 21.1317 3.38094 18.9765C3.57077 16.8213 4.35616 14.7613 5.64936 13.0268C6.94256 11.2923 8.69261 9.95149 10.704 9.15431C12.7153 8.35713 14.9087 8.13495 17.039 8.5126C19.1694 8.89026 21.1527 9.85286 22.7675 11.2928C24.3823 12.7328 25.5648 14.5935 26.1829 16.6668H29.1663C31.1554 16.6668 33.0631 17.457 34.4696 18.8635C35.8761 20.2701 36.6663 22.1777 36.6663 24.1668C36.6663 26.156 35.8761 28.0636 34.4696 29.4701C33.0631 30.8767 31.1554 31.6668 29.1663 31.6668Z"
          stroke="white"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "3",
    color: "#FF7A45",
    borderColor: "border-[#FF7A45]",
    textColor: "text-[#FF7A45]",
    bgColor: "bg-[#FF7A45]",
    title: "تطبيق الأهل",
    description:
      "يصلك كل جديد عن طفلك بسهولة عبر التطبيق، من التحديثات اليومية إلى التنبيهات المهمة. حتى عندما تكون بعيدًا، تبقى قريبًا ومطمئنًا على تفاصيل يومه.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.334 3.3335H11.6673C9.82637 3.3335 8.33398 4.82588 8.33398 6.66683V33.3335C8.33398 35.1744 9.82637 36.6668 11.6673 36.6668H28.334C30.1749 36.6668 31.6673 35.1744 31.6673 33.3335V6.66683C31.6673 4.82588 30.1749 3.3335 28.334 3.3335Z"
          stroke="white"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 30H20.0167"
          stroke="white"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 bg-transparent"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-janbik-dark tracking-tight mb-4">
           
         كيف يعمل سوارك جنبك الذكي
         ؟
          </h2>

          <p className="text-janbik-gray text-base max-w-xl mx-auto leading-relaxed">
           نتابع يوم طفلك باهتمام،ونبقيك علي اطلاع دايم ،لتشعر بالراحه والطمانينه في كل لحظه
          </p>
        </div>

        <div className="hidden md:block relative">
          

          <div className="grid grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center gap-5 text-center px-4"
              >
                <div className="relative w-20 h-24 shrink-0">
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full border-2 ${step.borderColor} bg-white flex items-center justify-center`}
                  >
                    <span
                      className={`text-sm font-bold ${step.textColor} font-cairo`}
                    >
                      {step.number}
                    </span>
                  </div>

                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-3xl flex items-center justify-center"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-janbik-dark tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-janbik-gray text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
  className="absolute top-14.25 right-[calc(16.67%+40px)] left-[calc(16.67%+40px)] h-1.5 rounded-full"
  
  style={{
    background:
      "linear-gradient(90deg, #FF7A45 0%, #C099FF 50%, #16B9F2 100%)",
  }}
/>
          {/* <div
            className="absolute top-14.25 right-[calc(16.67%+40px)] left-[calc(16.67%+40px)] h-1.5 rounded-full"
            dir="ltr"
            style={{
              background:
                "linear-gradient(270deg, #FF7A45 0%, #C099FF 50%, #16B9F2 100%)",
            }}
          /> */}
        </div>

        <div className="md:hidden flex flex-col gap-10">
          {steps.map((step, idx) => (
            <div key={step.number} className="flex gap-4 items-start">
              <div className="flex flex-col items-center shrink-0">
                <div className="relative w-16 h-20">
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 z-10 w-7 h-7 rounded-full border-2 ${step.borderColor} bg-white flex items-center justify-center`}
                  >
                    <span
                      className={`text-xs font-bold ${step.textColor} font-cairo`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: step.color }}
                  >
                    <div className="scale-75">{step.icon}</div>
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <div
                    className="w-1 flex-1 mt-2 rounded-full min-h-8"
                    style={{ backgroundColor: step.color, opacity: 0.3 }}
                  />
                )}
              </div>

              <div className="flex-1 pt-8 pb-2 text-right">
                <h3 className="text-lg font-bold text-janbik-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-janbik-gray text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
