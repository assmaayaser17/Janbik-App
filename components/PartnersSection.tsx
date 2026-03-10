import type { ReactNode } from "react";

const partners = [
  {
    name: "أكاديمية الطفل السعودي",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/f8da0f6d7cd349f8be2da2e4146be7a1cec729a6?width=112",
  },
  {
    name: "مركز الأمان للرعاية",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/7166655484af9e54d34a14f9c061c23af98fd2fd?width=112",
  },
  {
    name: "حضانة نجوم الغد",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          fill="#009999"
          opacity="0.8"
        />
      </svg>
    ),
  },
  {
    name: "مركز براعم المستقبل",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C8 2 5 5.5 5 9c0 5 7 13 7 13s7-8 7-13c0-3.5-3-7-7-7z"
          fill="#009999"
          opacity="0.8"
        />
        <circle cx="12" cy="9" r="2.5" fill="white" />
      </svg>
    ),
  },
  {
    name: "زهور الربيع",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" fill="#009999" opacity="0.9" />
        <ellipse cx="12" cy="6" rx="2.5" ry="4" fill="#009999" opacity="0.6" />
        <ellipse cx="12" cy="18" rx="2.5" ry="4" fill="#009999" opacity="0.6" />
        <ellipse cx="6" cy="12" rx="4" ry="2.5" fill="#009999" opacity="0.6" />
        <ellipse cx="18" cy="12" rx="4" ry="2.5" fill="#009999" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "مركز الإبداع للأطفال",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
          fill="#009999"
          opacity="0.8"
        />
      </svg>
    ),
  },
  {
    name: "روضة الفرح",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="#009999"
          opacity="0.8"
        />
      </svg>
    ),
  },
  {
    name: "مركز الرعاية المتكاملة",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#009999" strokeWidth="2" opacity="0.8" />
        <path d="M8 12h8M12 8v8" stroke="#009999" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      </svg>
    ),
  },
];

function HandshakeIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.8672 0C12.1133 0 12.332 0.109375 12.4961 0.273438L13.9727 1.75V7.05469C13.918 6.97266 13.8359 6.91797 13.7812 6.83594L9.78906 3.60938L10.5 2.95312C10.6914 2.78906 10.6914 2.51562 10.5273 2.35156C10.3633 2.16016 10.0898 2.16016 9.89844 2.32422L7.73828 4.32031C7.71094 4.32031 7.71094 4.32031 7.71094 4.32031C7.24609 4.73047 6.53516 4.62109 6.17969 4.23828C5.79688 3.82812 5.79688 3.14453 6.23438 2.70703L8.94141 0.246094C9.10547 0.0820312 9.29688 0 9.51562 0H11.8672ZM14.875 1.77734H17.5V8.77734H15.75C15.2578 8.77734 14.875 8.36719 14.875 7.90234V1.77734ZM16.1875 7.90234C16.4062 7.90234 16.625 7.68359 16.625 7.46484C16.625 7.21875 16.4062 7.02734 16.1875 7.02734C15.9414 7.02734 15.75 7.21875 15.75 7.46484C15.75 7.68359 15.9414 7.90234 16.1875 7.90234ZM0 8.75V1.77734H2.625V7.875C2.625 8.36719 2.21484 8.75 1.75 8.75H0ZM1.3125 7.02734C1.06641 7.02734 0.875 7.21875 0.875 7.46484C0.875 7.68359 1.06641 7.90234 1.3125 7.90234C1.53125 7.90234 1.75 7.68359 1.75 7.46484C1.75 7.21875 1.53125 7.02734 1.3125 7.02734ZM13.207 7.51953C13.5898 7.82031 13.6445 8.36719 13.3438 8.75L13.0977 9.07812C12.7695 9.46094 12.2227 9.51562 11.8672 9.21484L11.7031 9.07812L10.8555 10.1445C10.5 10.582 9.84375 10.6367 9.40625 10.2812L8.94141 9.87109H8.91406C8.3125 10.6094 7.21875 10.7461 6.45312 10.1172L3.99219 7.875H3.5V1.75L4.97656 0.273438C5.14062 0.109375 5.35938 0 5.60547 0H7.90234L5.66016 2.05078C4.86719 2.78906 4.8125 4.04688 5.52344 4.83984C6.26172 5.63281 7.49219 5.71484 8.3125 4.94922L9.13281 4.21094L13.207 7.51953Z"
        fill="#009999"
      />
    </svg>
  );
}

interface Partner {
  name: string;
  image?: string;
  icon?: ReactNode;
}

export default function PartnersSection() {
  return (
    <section
      dir="rtl"
      className="w-full bg-transparent py-10 flex flex-col items-start gap-10 font-cairo"
    >
      {/* Header content */}
      <div className="w-full px-6 md:px-14 flex flex-col items-center gap-6">
        {/* Badge + Heading */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex items-center gap-2 bg-white border border-gray-100 shadow-sm rounded-full px-4 py-1.5">
            <span className="text-janbik-teal text-sm font-medium leading-5">
              شركاؤنا في النجاح
            </span>
            <HandshakeIcon />
          </div>

          <h2 className="text-[#111827] text-center text-3xl md:text-4xl font-bold leading-tight">
            علامات سعودية تثق بجنبك
          </h2>
        </div>

        {/* Description */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-[#6B7280] text-center text-base md:text-lg font-normal leading-7 max-w-2xl">
            مراكز رائدة في المملكة العربية السعودية اختارت جنبك لإدارة
            عملياتها اليومية بكفاءة وطمأنينة.
          </p>
          <p className="text-[#6B7280] text-center text-base md:text-lg font-normal leading-5">
            أكثر من{" "}
            <span className="text-janbik-teal font-bold">70+ مركزًا</span>{" "}
            في أنحاء المملكة يعتمدون على جنبك يوميًا.
          </p>
        </div>
      </div>

      {/* Scrollable partner cards */}
      <div className="w-full px-6 overflow-x-auto scrollbar-hide">
        <div className="flex items-stretch gap-4" style={{ width: "max-content" }}>
          {partners.map((partner: Partner, index: number) => (
            <div
              key={index}
              className="flex w-56 md:w-64 flex-shrink-0 flex-col items-center justify-end gap-1 rounded-2xl border border-[#E8E6E3] bg-white p-4 shadow-sm"
            >
              <div className="flex w-24 h-24 items-center justify-center rounded-full bg-[rgba(227,232,230,0.5)] overflow-hidden mb-1">
                {partner.image ? (
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-14 h-14 rounded-full object-contain opacity-70"
                  />
                ) : (
                  <div className="opacity-80">{partner.icon}</div>
                )}
              </div>
              <p className="text-[#5C6970] text-center text-sm font-medium leading-5">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
