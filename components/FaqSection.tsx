"use client";

import { useState } from "react";

const faqs = [
  { q: "هل يمكنني متابعة طفلي لحظيًا؟" },
  { q: "كيف تضمنون الأمان عند الاستلام؟" },
  { q: "ماذا لو كان طفلي لديه حساسية؟" },
  { q: "هل يوجد ملخص يومي؟" },
  { q: "كيف يعمل سوار جنبك؟" },
  { q: "هل بيانات طفلي آمنة؟" },
  { q: "هل يناسب جنبك مراكز صغيرة؟" },
  { q: "هل يمكن تحديد صلاحيات المشرف والموظف؟" },
];

const answers: Record<string, string> = {
  "هل يمكنني متابعة طفلي لحظيًا؟":
    "نعم، تستطيع متابعة يوم طفلك لحظة بلحظة عبر تطبيق جنبك. ستتلقى إشعارات وتحديثات فورية عن نشاطات طفلك، وجدوله اليومي، وأي ملاحظات من الفريق.",
  "كيف تضمنون الأمان عند الاستلام؟":
    "يستخدم جنبك نظام التحقق من هوية ولي الأمر عند الاستلام، حيث لا يُسمح لأحد غير المخوّلين باستلام الطفل. كما يُسجّل النظام وقت الاستلام والشخص المسؤول.",
  "ماذا لو كان طفلي لديه حساسية؟":
    "يمكنك إدخال جميع المعلومات الصحية والحساسيات الخاصة بطفلك في ملفه. يتلقى الفريق هذه المعلومات ويتم تنبيههم تلقائيًا لضمان سلامة طفلك.",
  "هل يوجد ملخص يومي؟":
    "نعم، يتلقى ولي الأمر ملخصًا يوميًا شاملاً عن يوم طفله يتضمن الأنشطة، الوجبات، نوم القيلولة، والملاحظات الخاصة من الفريق.",
  "كيف يعمل سوار جنبك؟":
    "سوار جنبك يتتبع حضور وتحركات الطفل داخل المركز، ويضمن وجوده في المناطق المحددة وسلامته طوال اليوم.",
  "هل بيانات طفلي آمنة؟":
    "نعم، تتمتع بيانات طفلك وعائلتك بأعلى مستويات الحماية. نستخدم تشفيرًا متطورًا ونلتزم بسياسة صارمة لحماية الخصوصية.",
  "هل يناسب جنبك مراكز صغيرة؟":
    "نعم، صُمّم جنبك ليناسب جميع أحجام مراكز الأطفال، من المراكز الصغيرة إلى الكبيرة. يمكنك البدء بعدد صغير من الأطفال وتوسيع نطاق الاستخدام تدريجيًا.",
  "هل يمكن تحديد صلاحيات المشرف والموظف؟":
    "نعم، يوفر جنبك نظام صلاحيات مرنًا وشاملًا. يمكن لمدير المركز تحديد الصلاحيات الدقيقة لكل دور سواء كان مشرفًا أو موظفًا أو إداريًا.",
};

interface FaqItemProps {
  question: string;
}

function FaqItem({ question }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const answer = answers[question];

  return (
    <div className="border border-[#E5E7EB] bg-[#F9FAFB] rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-right"
        onClick={() => setOpen(!open)}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="#211F1C"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#1A2023] text-sm font-medium flex-1 text-right pr-2">
          {question}
        </span>
      </button>
      {open && answer && (
        <div className="px-4 pb-4">
          <p className="text-[#5C6970] text-sm text-right leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="py-12 px-4 sm:px-8 lg:px-14 bg-transparent"
      dir="ltr"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 flex flex-col gap-3 order-2 lg:order-1">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} />
            ))}
          </div>

          <div className="lg:w-80 xl:w-96 flex flex-col items-end gap-3 order-1 lg:order-2">
            <h2 className="text-[#211F1C] text-3xl font-bold text-right">
              الأسئلة الشائعة
            </h2>
            <p className="text-[#6B7280] text-base text-right">
              كل ما تحتاج لمعرفته: الأسئلة الشائعة حول جنبك
            </p>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c2f333f3a770b09402f2f2589639abe76b3e658b?width=602"
              alt="FAQ illustration"
              className="w-64 h-auto mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

