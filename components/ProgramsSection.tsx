const programs = [
  {
    id: 1,
    title: "برنامج الرُّضُّع (من 6 إلى 12 شهرًا)",
    description:
      "رعاية متخصصة تُعزّز النمو الحسي والحركي والعاطفي، ضمن بيئة آمنة وحنونة تُلبي احتياجات الطفل في بداياته الأولى.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/fa4684c939af10360c16b7119835773e6fe2cf48?width=576",
    alt: "برنامج الرضع",
  },
  {
    id: 2,
    title: "برنامج الطفولة المبكرة (1 - 3 سنوات)",
    description:
      "نُنمّي حبّ التعلّم منذ الصغر عبر اللعب الموجّه، والأنشطة التفاعلية، والتجارب اليومية التي تُعزّز التواصل والاستكشاف والاستقلالية.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/85f9c013c7327a5ceb9d9527e03b4ab0df60b362?width=576",
    alt: "برنامج الطفولة المبكرة",
  },
  {
    id: 3,
    title: "برنامج التهيئة المدرسية (4 - 5 سنوات)",
    description:
      "نُهيّئ الطفل لمرحلة المدرسة بأسس قوية في اللغة، والتفاعل، والتركيز، والثقة بالنفس، ليبدأ رحلته التعليمية باستعداد وتميّز.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/0845befbd8c19fdc8049f664e5fd9b321e12315a?width=576",
    alt: "برنامج التهيئة المدرسية",
  },
];

function ProgramCard({
  title,
  description,
  image,
  alt,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 p-3 rounded-2xl border border-[#E8E6E3] bg-white shadow-sm flex-1  ">
      <div className="flex flex-col items-center gap-4 pb-4 rounded-2xl bg-[#F9FAFB] w-full">
        <div className="relative w-full">
          <img
            src={image}
            alt={alt}
            className="w-full aspect-square object-cover rounded-2xl"
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center px-3 py-2 rounded-xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.10)] w-[90%]">
            <span className="text-[#111827] text-center text-sm font-bold leading-6 whitespace-nowrap overflow-hidden text-ellipsis">
              {title}
            </span>
          </div>
        </div>
        <div className="h-5" />
      </div>
      <p className="text-[#6B7280] text-center text-[15px] leading-relaxed px-2">
        {description}
      </p>
    </div>
  );
}

export default function ProgramsSection() {
  return (
    <section className="w-full py-16 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        <h2 className="text-[#2D3748] text-center text-4xl font-bold">
          برامجنا
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title}
              description={program.description}
              image={program.image}
              alt={program.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

