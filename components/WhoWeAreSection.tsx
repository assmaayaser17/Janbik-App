import type { ReactNode } from "react";

interface FeatureCardProps {
  iconBg: string;
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ iconBg, icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 flex-1 p-4 rounded-2xl bg-white border border-[#E8E6E3] shadow-sm text-center ">
      <div
        className="w-14 h-14 flex items-center justify-center rounded-2xl shrink-0"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>
      <div className="flex flex-col items-center gap-1">
        <h3 className="text-lg font-bold leading-7 text-[#111827]">
          {title}
        </h3>
        <p className="text-sm font-normal text-[#6B7280] leading-[22.75px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhoWeAreSection() {
  return (
    <section
      dir="ltr"
      className="w-full  mx-auto flex flex-col items-center gap-12 font-cairo py-16 px-4"
    >
      <div className="flex flex-col items-center gap-4 w-full max-w-2xl text-center">
        <h2 className="text-[30px] font-bold leading-[36px] text-center">
          <span className="text-[#211F1C]">من نحن؟ بدأنا جنبك لنقرّب لك يوم طفلك…</span>
          <span className="text-[#009999]"> لحظة بلحظة.</span>
        </h2>
        <p className="text-base font-normal leading-[26px] text-center text-[#5F5954]">
          جَنبِك منصّة تربط بين المركز والوالدين لتجعل متابعة الطفل أكثر وضوحًا وسهولة. نؤمن أن الأهل يحتاجون
          <br className="hidden sm:block" />
          إلى تواصل صادق، وتفاصيل مطمئنة، وتجربة إنسانية يشعرون معها بالقرب من طفلهم في كل وقت.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 w-full">
        <FeatureCard
          iconBg="#FFE9E2"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2969 4.08281L12 5.05313L12.7031 4.08281C13.875 2.46094 15.7594 1.5 17.7609 1.5C21.2062 1.5 24 4.29375 24 7.73906V7.86094C24 13.1203 17.4422 19.2281 14.0203 21.8391C13.4391 22.2797 12.7266 22.5 12 22.5C11.2734 22.5 10.5562 22.2844 9.97969 21.8391C6.55781 19.2281 0 13.1203 0 7.86094V7.73906C0 4.29375 2.79375 1.5 6.23906 1.5C8.24063 1.5 10.125 2.46094 11.2969 4.08281Z" fill="#B83B14"/>
            </svg>
          }
          title="قرب يشعر به الأهل"
          description="كأنك بجانبه دائمًا — تتابع وتطمئن في أي لحظة"
        />
        <FeatureCard
          iconBg="#F1ECFF"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 7.33333C16 11.3833 12.4167 14.6667 8.00001 14.6667C6.88751 14.6667 5.82918 14.4583 4.86668 14.0833L1.46668 15.8833C1.07918 16.0875 0.604177 16.0167 0.291677 15.7083C-0.0208233 15.4 -0.0916567 14.9208 0.116677 14.5333L1.60001 11.7333C0.595843 10.5083 9.99309e-06 8.98333 9.99309e-06 7.33333C9.99309e-06 3.28333 3.58334 0 8.00001 0C12.4167 0 16 3.28333 16 7.33333ZM16 22.6667C12.0792 22.6667 8.81668 20.0792 8.13334 16.6667C13.1333 16.6042 17.4792 13.0458 17.9583 8.22083C21.4292 9.02083 24 11.9 24 15.3333C24 16.9833 23.4042 18.5083 22.4 19.7333L23.8833 22.5333C24.0875 22.9208 24.0167 23.3958 23.7083 23.7083C23.4 24.0208 22.9208 24.0917 22.5333 23.8833L19.1333 22.0833C18.1708 22.4583 17.1125 22.6667 16 22.6667Z" fill="#6A4DCC"/>
            </svg>
          }
          title="تواصل سهل و سلس"
          description="رسائل وتنبيهات بدون تعقيد — كل شيء واضح وسهل"
        />
        <FeatureCard
          iconBg="#EAF4FF"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2042 4.88366L6.34583 10.2837C6.15417 10.4962 6.1625 10.8253 6.36667 11.0295C7.6375 12.3003 9.7 12.3003 10.9708 11.0295L12.2958 9.70449C12.4708 9.52949 12.6917 9.43366 12.9167 9.41699C13.2 9.39199 13.4917 9.48783 13.7083 9.70449L21.0667 17.0003L24 14.667V2.66699L19.3333 5.33366L18.3417 4.67116C17.6833 4.23366 16.9125 4.00033 16.1208 4.00033H13.1875C13.1417 4.00033 13.0917 4.00033 13.0458 4.00449C12.3417 4.04199 11.6792 4.35866 11.2042 4.88366ZM4.85833 8.94616L9.30833 4.00033H7.65833C6.59583 4.00033 5.57917 4.42116 4.82917 5.17116L4.66667 5.33366L0 2.66699V14.667L6.51667 20.0962C7.475 20.8962 8.68333 21.3337 9.92917 21.3337H10.5833L10.2917 21.042C9.9 20.6503 9.9 20.017 10.2917 19.6295C10.6833 19.242 11.3167 19.2378 11.7042 19.6295L13.4125 21.3378H13.7875C14.5833 21.3378 15.3625 21.1587 16.0708 20.8253L14.9583 19.7087C14.5667 19.317 14.5667 18.6837 14.9583 18.2962C15.35 17.9087 15.9833 17.9045 16.3708 18.2962L17.7042 19.6295L18.4333 18.9003C18.8042 18.5295 18.9125 17.992 18.75 17.5212L13.0042 11.8212L12.3833 12.442C10.3292 14.4962 7.00417 14.4962 4.95 12.442C3.99167 11.4837 3.95417 9.94616 4.85833 8.94199V8.94616Z" fill="#2B7BB8"/>
            </svg>
          }
          title="ثقة تُبنى كل يوم"
          description="وضوح + توثيق + متابعة مستمرة لكل تفاصيل يوم طفلك"
        />
      </div>
    </section>
  );
}
