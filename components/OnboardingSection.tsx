const steps = [
  {
    number: "1",
    title: "سجّل الآن",
    desc: "تعبئة بياناتك الأساسية بسرعة",
  },
  {
    number: "2",
    title: "سيتواصل معك أحد من الفريق",
    desc: "لتأكيد التسجيل والإجابة على أي سؤال",
  },
  {
    number: "3",
    title: "أضف تفاصيل طفلك",
    desc: "العمر، الاحتياجات، الصحة، ملاحظات مهمة",
  },
  {
    number: "4",
    title: "تم التسجيل بنجاح",
    desc: "ستتلقى المصادقة المبدئية لقبول الطفل في أمان الآن",
  },
];

export default function OnboardingSection() {
  return (
    <section
      className="py-16 px-4 sm:px-8 lg:px-14 bg-transparent"
      dir="rtl"
    >
      <div className="max-w-7xl  mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative flex-shrink-0 hidden lg:block">
            <div className="relative w-[320px] h-[340px]">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 356 344"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M88.3096 50.1299C99.8991 21.7355 130.541 6.11582 160.327 13.4199L265.615 39.2393C284.885 43.9645 300.719 57.6447 308.192 76.0234L349.087 176.589C352.96 186.113 354.398 196.453 353.271 206.673L344.317 287.896C340.861 319.253 314.366 342.987 282.82 342.987H90.1494C70.6488 342.987 52.2897 333.793 40.6084 318.179L21.6543 292.843C8.6436 275.451 5.70519 252.51 13.9131 232.4L88.3096 50.1299Z"
                  fill="#FAF9F7"
                  stroke="#005C5C"
                  strokeWidth="1.2"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-2xl bg-[#E6F5F5] flex items-center justify-center overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/a606f28fc564a34e6144e2efaeca91a6a382461a?width=246"
                    alt="Janabk app"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e84d62a9cae231497a41b4e108de210e293b1239?width=244"
                alt="decoration"
                className="absolute -top-8 -left-10 w-24 rotate-45 opacity-80"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <h2 className="text-3xl sm:text-4xl font-black text-[#2D3749] text-center lg:text-right leading-tight">
              الانضمام سهل… وخلال دقائق تبدأ الطمأنينة
            </h2>

            <div className="relative">
              <div className="absolute right-8 top-8 bottom-8 w-0.5 bg-[#9CA3AF] hidden sm:block" />

              <div className="flex flex-col gap-8">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="flex items-start gap-5 justify-end"
                  >
                    <div className="flex flex-col items-end gap-1 flex-1">
                      <h3 className="text-[#211F1C] text-base font-bold text-right">
                        {step.title}
                      </h3>
                      <p className="text-[#5F5954] text-sm text-right">
                        {step.desc}
                      </p>
                    </div>
                    <div className="relative z-10 w-16 h-16 rounded-full bg-[#009999] flex items-center justify-center shrink-0">
                      <span className="text-white text-xl font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end mt-2">
              <a
                id="register"
                href="#register"
                className="inline-flex items-center gap-2 bg-[#009999] text-white font-bold text-sm px-8 py-3.5 rounded-full hover:bg-[#007A7A] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_o)">
                    <path
                      d="M8.00065 12.6663L3.33398 7.99967L8.00065 3.33301"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.0654 8H3.33203"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_o">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                تسجل الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

