const StarRating = () => (
  <div className="flex items-center gap-1 justify-center">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.59762 0.363889C8.48373 0.141667 8.25317 0 8.00317 0C7.75317 0 7.52262 0.141667 7.40873 0.363889L5.36429 4.36944L0.922619 5.075C0.675396 5.11389 0.469841 5.28889 0.392063 5.52778C0.314285 5.76667 0.378174 6.02778 0.553174 6.20556L3.73095 9.38611L3.03095 13.8278C2.99206 14.075 3.09484 14.325 3.29762 14.4722C3.5004 14.6194 3.76706 14.6417 3.99206 14.5278L8.00317 12.4889L12.0115 14.5278C12.2337 14.6417 12.5032 14.6194 12.706 14.4722C12.9087 14.325 13.0115 14.0778 12.9726 13.8278L12.2698 9.38611L15.4476 6.20556C15.6254 6.02778 15.6865 5.76667 15.6087 5.52778C15.531 5.28889 15.3282 5.11389 15.0782 5.075L10.6393 4.36944L8.59762 0.363889Z"
          fill="#FBBF24"
        />
      </svg>
    ))}
  </div>
);

const QuoteIcon = () => (
  <svg
    width="20"
    height="17"
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M17.6071 0C18.5938 0 19.4286 0.834821 19.4286 1.82143V10.9286C19.4286 14.3058 16.6964 17 13.3571 17H13.0536C12.5223 17 12.1429 16.6205 12.1429 16.0893V14.2679C12.1429 13.7746 12.5223 13.3571 13.0536 13.3571H13.3571C14.6853 13.3571 15.7857 12.2946 15.7857 10.9286V8.5H12.75C11.7254 8.5 10.9286 7.70313 10.9286 6.67857V1.82143C10.9286 0.834821 11.7254 0 12.75 0H17.6071ZM6.67857 0C7.66518 0 8.5 0.834821 8.5 1.82143V10.9286C8.5 14.3058 5.76786 17 2.42857 17H2.125C1.59375 17 1.21429 16.6205 1.21429 16.0893V14.2679C1.21429 13.7746 1.59375 13.3571 2.125 13.3571H2.42857C3.7567 13.3571 4.85714 12.2946 4.85714 10.9286V8.5H1.82143C0.796875 8.5 0 7.70313 0 6.67857V1.82143C0 0.834821 0.796875 0 1.82143 0H6.67857Z"
      fill="#009999"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg
    width="9"
    height="12"
    viewBox="0 0 9 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 0C0.672656 0 0 0.672656 0 1.5V10.5C0 11.3273 0.672656 12 1.5 12H7.5C8.32734 12 9 11.3273 9 10.5V1.5C9 0.672656 8.32734 0 7.5 0H1.5ZM4.125 8.25H4.875C5.28984 8.25 5.625 8.58516 5.625 9V10.875H3.375V9C3.375 8.58516 3.71016 8.25 4.125 8.25ZM2.25 2.625C2.25 2.41875 2.41875 2.25 2.625 2.25H3.375C3.58125 2.25 3.75 2.41875 3.75 2.625V3.375C3.75 3.58125 3.58125 3.75 3.375 3.75H2.625C2.41875 3.75 2.25 3.58125 2.25 3.375V2.625ZM5.625 2.25H6.375C6.58125 2.25 6.75 2.41875 6.75 2.625V3.375C6.75 3.58125 6.58125 3.75 6.375 3.75H5.625C5.41875 3.75 5.25 3.58125 5.25 3.375V2.625C5.25 2.41875 5.41875 2.25 5.625 2.25ZM2.25 5.625C2.25 5.41875 2.41875 5.25 2.625 5.25H3.375C3.58125 5.25 3.75 5.41875 3.75 5.625V6.375C3.75 6.58125 3.58125 6.75 3.375 6.75H2.625C2.41875 6.75 2.25 6.58125 2.25 6.375V5.625ZM5.625 5.25H6.375C6.58125 5.25 6.75 5.41875 6.75 5.625V6.375C6.75 6.58125 6.58125 6.75 6.375 6.75H5.625C5.41875 6.75 5.25 6.58125 5.25 6.375V5.625C5.25 5.41875 5.41875 5.25 5.625 5.25Z"
      fill="#009999"
    />
  </svg>
);

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  imageSrc: string;
}

function TestimonialCard({
  name,
  role,
  quote,
  imageSrc,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-end items-center flex-1 rounded-xl border border-[#E8E6E3] bg-white shadow-sm min-w-0">
      <div className="p-3 w-full">
        <div className="w-full aspect-264/287 rounded-xl overflow-hidden">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <div className="px-4 pb-4 pt-1 flex flex-col items-start gap-4 w-full">
        <div className="flex flex-col items-center gap-3 w-full">
          <h3 className="text-[#211F1C] text-center text-xl font-bold">
            {name}
          </h3>

          <QuoteIcon />

          <div className="flex items-center gap-1.5 rounded-full bg-[#E6F5F5] px-3 py-1">
            <span className="text-[#009999] text-xs font-medium">{role}</span>
            <BuildingIcon />
          </div>

          <StarRating />
        </div>

        <p className="text-[#5F5954] text-center text-sm font-medium leading-7 w-full whitespace-pre-line">
          {quote}
        </p>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "نورة الشمري",
    role: "مديرة مركز: حضانة زهور الربيع، المدينة المنورة",
    quote: "التقارير اليومية أصبحت عادة ثابتة…\nوهذا انعكس على ثقة الأهالي.",
    imageSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/c00e81747e43d1bc1e49cdfd14a6c3821c901e5e?width=514",
  },
  {
    name: "فهد القحطاني",
    role: "مدير مركز: حضانة رواد المستقبل، الرياض",
    quote: "المشرف يتابع الأداء بالأرقام…\n بدل ما يكون كل شيء كلام.",
    imageSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/9e5c87e6128783679e10dbcf456e0c8486e0ffa4?width=514",
  },
  {
    name: "سارة المالكي",
    role: "مديرة مركز: حضانة نجوم الغد، جدة",
    quote:
      "انخفضت الأخطاء لأن النظام يذكّر ويوثّق…\nقبل ما المشكلة تكبر.",
    imageSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/9beffea9c308887139742894c1396dabdc75ddb6?width=514",
  },
  {
    name: "علي الرفاعي",
    role: "مدير مركز: حضانة أبطال المستقبل، جدة",
    quote:
      "الفرق الحقيقي؟ صرنا نعرف تفاصيل اليوم بدون ما نرهق الفريق أو نزعج أولياء الأمور.",
    imageSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/203b7b109a27d2ec9a5fad1f008894f44e3e3284?width=514",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 px-4 sm:px-8 lg:px-14" dir="ltr">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 border border-[#E8E6E3] shadow-sm">
            <span className="text-[#009999] text-sm font-medium">
              قصص العملاء
            </span>
            <svg
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.625 5.25C1.64062 5.25 0.875 4.48438 0.875 3.5C0.875 2.54297 1.64062 1.75 2.625 1.75C3.58203 1.75 4.375 2.54297 4.375 3.5C4.375 4.48438 3.58203 5.25 2.625 5.25ZM14.875 5.25C13.8906 5.25 13.125 4.48438 13.125 3.5C13.125 2.54297 13.8906 1.75 14.875 1.75C15.832 1.75 16.625 2.54297 16.625 3.5C16.625 4.48438 15.832 5.25 14.875 5.25ZM15.75 6.125C16.707 6.125 17.5 6.91797 17.5 7.875V8.75C17.5 9.24219 17.0898 9.625 16.625 9.625H14.8203C14.6289 8.33984 13.8633 7.24609 12.7422 6.64453C13.0703 6.34375 13.5078 6.125 14 6.125H15.75ZM8.75 6.125C7.05469 6.125 5.6875 4.75781 5.6875 3.0625C5.6875 1.39453 7.05469 0 8.75 0C10.418 0 11.8125 1.39453 11.8125 3.0625C11.8125 4.75781 10.418 6.125 8.75 6.125ZM10.8281 7C12.5781 7 14 8.42188 14 10.1719V10.9375C14 11.6758 13.3984 12.25 12.6875 12.25H4.8125C4.07422 12.25 3.5 11.6758 3.5 10.9375V10.1719C3.5 8.42188 4.89453 7 6.64453 7H6.86328C7.4375 7.27344 8.06641 7.4375 8.75 7.4375C9.40625 7.4375 10.0352 7.27344 10.6094 7H10.8281ZM4.73047 6.64453C3.60938 7.24609 2.84375 8.33984 2.65234 9.625H0.875C0.382812 9.625 0 9.24219 0 8.75V7.875C0 6.91797 0.765625 6.125 1.75 6.125H3.5C3.96484 6.125 4.40234 6.34375 4.73047 6.64453Z"
                fill="#009999"
              />
            </svg>
          </div>

          <div className="text-center">
            <h2 className="text-[#1A2023] text-3xl sm:text-4xl font-bold leading-tight">
              لماذا اختار العملاء &quot;جنبك&quot; ؟{" "}
              <span className="text-[#009999]">
                توثيق لحظي وتقارير جاهزة.
              </span>
            </h2>
          </div>

          <p className="text-center text-[#6B7280] text-base max-w-3xl leading-relaxed">
            إذا كانت هناك نشاطات، حضور، ملاحظات، أو حوادث—فكل دور يعرف
            مسؤوليته، وكل إجراء له أثر موثق—فتقل الأخطاء{" "}
            <span className="text-[#009999] font-bold">=</span>{" "}
            <span className="text-[#009999] font-bold">
              تركيز الفريق وملاحظة الأهل لجودة الخدمة.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

