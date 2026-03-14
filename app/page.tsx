export default function HomeDashboardpage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen p-4 sm:p-6 lg:p-8 bg-amber-600 space-y-4 lg:space-y-6"
    >
      {/* Header title */}
      <div className="flex flex-col gap-1">
        <h1 className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#111827]">
          لوحة التحكم
        </h1>
        <p className="text-xs sm:text-sm text-[#6B7280]">
          نظرة شاملة على يوم الأطفال، الموظفين، والتنبيهات في مركزك.
        </p>
      </div>

      {/* Top metrics row */}
      <section className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3 lg:gap-4">
        {/* حضور اليوم */}
        <div className="col-span-1 flex flex-col justify-between rounded-2xl bg-white shadow-sm border border-[#E5E7EB] px-3.5 py-3 min-h-[76px]">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] sm:text-xs font-medium text-[#6B7280]">
              حضور اليوم
            </span>
            <span className="inline-flex items-center justify-center rounded-full bg-[#E5F6FF] px-2 py-0.5 text-[10px] font-semibold text-[#0284C7]">
              بث مباشر
            </span>
          </div>
          <div className="flex items-end justify-between mt-2">
            <span className="text-lg sm:text-xl font-bold text-[#111827]">
              32/40
            </span>
            <span className="text-[11px] text-[#6B7280]">طفلًا حاضرًا</span>
          </div>
        </div>

        {/* موظفين حاضر اليوم */}
        <div className="col-span-1 flex flex-col justify-between rounded-2xl bg-white shadow-sm border border-[#E5E7EB] px-3.5 py-3 min-h-[76px]">
          <span className="text-[11px] sm:text-xs font-medium text-[#6B7280]">
            موظفين حاضر اليوم
          </span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-lg sm:text-xl font-bold text-[#111827]">
              8/12
            </span>
            <span className="text-[11px] text-[#6B7280]">موظفًا</span>
          </div>
        </div>

        {/* إجمالي الإجراءات المنفّذة */}
        <div className="col-span-1 flex flex-col justify-between rounded-2xl bg-white shadow-sm border border-[#E5E7EB] px-3.5 py-3 min-h-[76px]">
          <span className="text-[11px] sm:text-xs font-medium text-[#6B7280]">
            إجمالي الإجراءات المنفّذة
          </span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-lg sm:text-xl font-bold text-[#111827]">
              30
            </span>
            <span className="text-[11px] text-[#6B7280]">إجراء اليوم</span>
          </div>
        </div>

        {/* تنبيهات اليوم */}
        <div className="col-span-1 flex flex-col justify-between rounded-2xl bg-white shadow-sm border border-[#E5E7EB] px-3.5 py-3 min-h-[76px]">
          <span className="text-[11px] sm:text-xs font-medium text-[#6B7280]">
            تنبيهات اليوم
          </span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-lg sm:text-xl font-bold text-[#DC2626]">
              1
            </span>
            <span className="text-[11px] text-[#6B7280]">
              تنبيه يحتاج متابعة
            </span>
          </div>
        </div>

        {/* إعدادات سريعة */}
        <div className="hidden xl:flex flex-col justify-between rounded-2xl bg-white shadow-sm border border-[#E5E7EB] px-3.5 py-3 min-h-[76px]">
          <span className="text-[11px] sm:text-xs font-medium text-[#6B7280]">
            إعدادات سريعة
          </span>
          <div className="flex flex-wrap gap-1.5 mt-2 justify-end">
            <button className="rounded-full bg-[#ECFEFF] px-2.5 py-0.5 text-[10px] font-semibold text-[#0E7490]">
              إضافة نشاط
            </button>
            <button className="rounded-full bg-[#F5F3FF] px-2.5 py-0.5 text-[10px] font-semibold text-[#6D28D9]">
              رسالة لولي الأمر
            </button>
          </div>
        </div>

        {/* إشعارات النظام */}
        <div className="hidden xl:flex flex-col justify-between rounded-2xl bg-white shadow-sm border border-[#E5E7EB] px-3.5 py-3 min-h-[76px]">
          <span className="text-[11px] sm:text-xs font-medium text-[#6B7280]">
            إشعارات النظام
          </span>
          <span className="mt-2 text-[11px] text-[#4B5563]">
            لا توجد إشعارات جديدة الآن.
          </span>
        </div>
      </section>

      {/* Middle grid: alerts + stats + weather */}
      <section className="grid gap-4 lg:gap-5 lg:grid-cols-12">
        {/* تنبيهات */}
        <div className="lg:col-span-4 space-y-3">
          <div className="rounded-2xl bg-white border border-[#E5E7EB] shadow-sm p-3.5">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-[#111827]">تنبيهات</h2>
              <span className="rounded-full bg-[#FEF2F2] px-2 py-0.5 text-[11px] font-medium text-[#B91C1C]">
                حالة صحية
              </span>
            </div>
            <div className="space-y-2.5">
              <div className="rounded-xl bg-[#FFF7ED] px-3 py-2.5">
                <p className="text-xs font-semibold text-[#7C2D12]">
                  تنبيه صحي للطفل: يتواصل حسام
                </p>
                <p className="mt-1 text-[11px] text-[#7C2D12] opacity-80">
                  ارتفاع بسيط في الحرارة، تم الإبلاغ لولي الأمر.
                </p>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#6B7280]">
                <span>موعد الغداء</span>
                <span>بعد ٣٠ دقيقة</span>
              </div>
            </div>
          </div>

          {/* رسائل */}
          <div className="rounded-2xl bg-white border border-[#E5E7EB] shadow-sm p-3.5">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-[#111827]">رسائل</h2>
              <span className="text-[11px] text-[#6B7280]">3 جديدة</span>
            </div>
            <div className="space-y-2.5 text-[11px] text-[#374151]">
              <div className="flex items-center justify-between">
                <span>ولـي أمر: ريم القحطاني</span>
                <span className="text-[#9CA3AF]">منذ 5 دقائق</span>
              </div>
              <p className="line-clamp-2">
                هل يمكن إرسال تقرير عن نوم ريم اليوم؟ أود التأكد من روتينها.
              </p>
            </div>
            <button className="mt-3 w-full rounded-xl bg-[#ECFEFF] py-1.5 text-[12px] font-semibold text-[#0284C7]">
              عرض جميع الرسائل
            </button>
          </div>
        </div>

        {/* الإحصائيات والنمو */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm p-3.5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[#111827]">
              الإحصائيات والنمو
            </h2>
            <span className="text-[11px] text-[#6B7280]">
              آخر تحديث منذ ٢ دقيقة
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "نسبة الحضور", value: 74, color: "#22C55E" },
              { label: "تفاعل الموظفين", value: 92, color: "#0EA5E9" },
              { label: "رضا أولياء الأمور", value: 88, color: "#F97316" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#F9FAFB]">
                  <div
                    className="absolute inset-1 rounded-full border-[6px]"
                    style={{ borderColor: `${stat.color}` }}
                  />
                  <span
                    className="relative text-lg font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}%
                  </span>
                </div>
                <span className="text-[11px] font-medium text-[#4B5563]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* الطقس والحالة الخارجية */}
        <div className="lg:col-span-3 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm p-3.5 flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-[#111827]">
            الطقس والحالة الخارجية
          </h2>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#F97316]">33°</span>
            <span className="text-sm text-[#6B7280]">م</span>
          </div>
          <div className="space-y-1 text-[11px] text-[#4B5563]">
            <div className="flex items-center justify-between">
              <span>الحالة العامة</span>
              <span>مشمس / آمن</span>
            </div>
            <div className="flex items-center justify-between">
              <span>الجلسات الخارجية</span>
              <span>مسموحة</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom activities row */}
      <section className="grid gap-4 lg:gap-5 lg:grid-cols-12">
        {/* الأنشطة المباشرة */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm p-3.5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-[#111827]">
              الأنشطة المباشرة
            </h2>
            <button className="text-[11px] text-[#0284C7] font-semibold">
              إضافة نشاط
            </button>
          </div>
          <div className="space-y-2.5 text-[11px] text-[#374151]">
            <div className="flex items-center justify-between">
              <span>سوبر ماركت رياضي</span>
              <span className="rounded-full bg-[#ECFEFF] px-2 py-0.5 text-[#0284C7]">
                قيد التنفيذ
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>ركن القراءة الهادئة</span>
              <span className="text-[#9CA3AF]">يبـدأ بعد ١٥ دقيقة</span>
            </div>
          </div>
        </div>

        {/* أعلم / ملاحظات الإدارة */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm p-3.5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-[#111827]">أعلم</h2>
            <button className="text-[11px] text-[#0284C7] font-semibold">
              إنشاء ملاحظة
            </button>
          </div>
          <ul className="space-y-1.5 text-[11px] text-[#374151]">
            <li>اجتماع الفريق الأسبوعي اليوم بعد انتهاء الدوام.</li>
            <li>تحديث قائمة الحساسية الغذائية للأطفال يوم الأحد.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
