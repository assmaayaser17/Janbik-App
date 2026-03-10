const StarRating = () => (
  <div className="flex items-center gap-1">
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

interface ReviewCardProps {
  name: string;
  role: string;
  quote: string;
  avatarSrc: string;
  ringColor: string;
}

function ReviewCard({
  name,
  role,
  quote,
  avatarSrc,
  ringColor,
}: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-3 p-3  rounded-xl border border-[#E8E6E3] bg-white shadow-sm flex-1 min-w-0">
      <div className="flex items-start justify-between">
        <StarRating />
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[#211F1C] text-sm font-bold">{name}</span>
            <span className="text-[#5F5954] text-xs">{role}</span>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: `0 0 0 1px #F6F5F4, 0 0 0 3px ${ringColor}`,
              }}
            />
            <img
              src={avatarSrc}
              alt={name}
              className="w-11 h-11 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <p className="text-[#6B7280] text-sm font-medium text-right leading-5">
        {quote}
      </p>
    </div>
  );
}

const reviews = [
  {
    name: "نورة",
    role: "أم لطفلين",
    quote:
      "كنت أحس بالذنب لأني مشغولة. جنبك خفّف القلق… وصرت أتابع التفاصيل بدون ما أقطع يومي.",
    avatarSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/43312fc59a0c5c13f412b86e2b928ac7f904a444?width=88",
    ringColor: "#BDAD99",
  },
  {
    name: "أحمد",
    role: "أب لثلاثة أطفال",
    quote:
      "وأنا في العمل... أصبحت أرى يوم ابني بوضوح. أكثر شيء أراحني ملخص النوم والأكل.",
    avatarSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/4b4ad168a3a0e82732eec3492f2d624205e4dbbb?width=88",
    ringColor: "#BDE2B2",
  },
  {
    name: "فاطمة",
    role: "حاضنة تعتني بالأطفال",
    quote:
      "التطبيق ساعدني أوثق يوم الطفل بسرعة… والأهل صاروا أهدى لأن كل شيء واضح.",
    avatarSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/a8b7efc481835da20a003f25ca965cba8826a1f7?width=88",
    ringColor: "#DDCCFF",
  },
  {
    name: "ندى",
    role: "طفلة",
    quote: "أنا أحب الحضانة… نلعب ونرسم! وبابا يشوف صوري.",
    avatarSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/db89470e328db086c5dd10aa7fe2e2e2a483cc33?width=88",
    ringColor: "#F8C6DC",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-14" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          <span className="text-[#111827]">
            هل ندم الأشخاص الذين انضمّوا إلى جنبك؟{" "}
          </span>
          <span className="text-[#009999]">لا أحد.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}

