export default function RegistrationFormSection() {
  return (
    <section
      dir="rtl"
      className=" "
      style={{
        backgroundImage:
          "linear-gradient(180deg, #FFF7EA 0%, #FFFDF8 40%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-center text-[22px] sm:text-2xl lg:text-[26px] font-black leading-snug tracking-tight text-[#111827] mb-10">
          جاهز نبدأ؟{" "}
          <span className="text-[#00A3A3]">سجّل بياناتك ورتّب كل شيء</span>
        </h2>

        <div className="w-full max-w-2xl bg-white/95 rounded-4xl shadow-[0_24px_60px_rgba(15,23,42,0.14)] border border-[#F1EFEA] px-4 sm:px-6 lg:px-8 py-6 sm:py-7 lg:py-8">
          <div className="mb-5 sm:mb-6">
            <h3 className="text-[#111827] text-base sm:text-lg font-bold">
              بيانات ولي الأمر
            </h3>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-[13px] font-medium text-[#111827]">
                  الاسم الكامل <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="h-11 sm:h-12 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#00A3A3]/50 focus:border-[#00A3A3] transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-[13px] font-medium text-[#111827]">
                  رقم الهاتف <span className="text-[#DC2626]">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-2.5 h-11 sm:h-12 min-w-[96px]">
                    <select className="bg-transparent text-xs sm:text-sm text-[#111827] focus:outline-none">
                      <option value="+966">+966</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    placeholder="5X XXX XXXX"
                    className="flex-1 h-11 sm:h-12 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#00A3A3]/50 focus:border-[#00A3A3] transition"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-[13px] font-medium text-[#111827]">
                البريد الإلكتروني <span className="text-[#DC2626]">*</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="h-11 sm:h-12 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#00A3A3]/50 focus:border-[#00A3A3] transition"
              />
            </div>
          </div>

          <div className="h-px bg-[#F3F4F6] my-5 sm:my-6" />

          <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
            <h3 className="text-[#111827] text-base sm:text-lg font-bold">
              بيانات الأطفال
            </h3>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-[#00A3A3] px-3 py-1.5 text-xs sm:text-[13px] font-semibold text-[#00A3A3] bg-[#ECFEFF] hover:bg-[#D5FAFC] transition"
            >
              + إضافة طفل
            </button>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center justify-between text-xs sm:text-[13px] text-[#6B7280]">
              <span>الطفل 1</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-[13px] font-medium text-[#111827]">
                  الاسم *
                </label>
                <input
                  type="text"
                  placeholder="اسم الطفل"
                  className="h-11 sm:h-12 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#00A3A3]/50 focus:border-[#00A3A3] transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-[13px] font-medium text-[#111827]">
                  الجنس
                </label>
                <select className="h-11 sm:h-12 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#00A3A3]/50 focus:border-[#00A3A3] transition">
                  <option value="">اختر الجنس</option>
                  <option value="boy">ولد</option>
                  <option value="girl">بنت</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-[13px] font-medium text-[#111827]">
                  العمر
                </label>
                <select className="h-11 sm:h-12 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#00A3A3]/50 focus:border-[#00A3A3] transition">
                  <option value="">اختر العمر</option>
                  <option>سنة</option>
                  <option>سنتان</option>
                  <option>3 سنوات</option>
                  <option>4 سنوات</option>
                  <option>5 سنوات</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-[13px] font-medium text-[#111827]">
                ملاحظات (اختياري)
              </label>
              <textarea
                rows={3}
                placeholder="اكتب أي ملاحظات خاصة بالطفل"
                className="rounded-xl border border-[#FDEAD5] bg-[#FFF7EA] px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition resize-none"
              />
            </div>
          </div>

          <div className="mt-6 sm:mt-7 space-y-4">
            <label className="flex items-start gap-2 text-xs sm:text-[13px] text-[#4B5563] cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-[#D1D5DB] text-[#00A3A3] focus:ring-[#00A3A3]"
              />
              <span>
                أقرّ بأنني قرأت{" "}
                <button
                  type="button"
                  className="text-[#00A3A3] font-semibold underline underline-offset-2"
                >
                  سياسة الخصوصية وشروط الاستخدام
                </button>
              </span>
            </label>

            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#00A3A3] text-white text-sm sm:text-[15px] font-bold py-3.5 shadow-[0_12px_30px_rgba(0,163,163,0.45)] hover:bg-[#008585] transition"
            >
              إرسال الطلب
              <span className="inline-flex items-center justify-center rounded-full bg-[#009999] w-7 h-7">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M8.00065 12.6663L3.33398 7.99967L8.00065 3.33301"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.0654 8H3.33203"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <p className="mt-1 text-[10px] sm:text-[11px] text-center text-[#9CA3AF] leading-relaxed">
              بياناتك محمية بسياسات الأمان والخصوصية لدينا، متوافقة مع GDPR،
              SOC2، و ISO27001. لن نشارك معلوماتك مع أي طرف ثالث دون إذنك.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

