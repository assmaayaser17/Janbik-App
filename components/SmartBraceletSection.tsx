import type { ReactNode } from "react";

function CheckCircleIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 10C7.75958 10 10 7.75958 10 5C10 2.24042 7.75958 0 5 0C2.24042 0 0 2.24042 0 5C0 7.75958 2.24042 10 5 10ZM7.20703 4.08203L4.70703 6.58203C4.52344 6.76562 4.22656 6.76562 4.04492 6.58203L2.79492 5.33203C2.61133 5.14844 2.61133 4.85156 2.79492 4.66992C2.97656 4.48633 3.27344 4.48633 3.45703 4.66992L4.375 5.58789L6.54297 3.41797C6.72656 3.23438 7.02344 3.23438 7.20508 3.41797C7.38867 3.60156 7.38867 3.89844 7.20508 4.08008L7.20703 4.08203Z"
        fill="#009999"
      />
    </svg>
  );
}

function ThermometerIcon({ color = "#EF4444", size = 24 }: { color?: string; size?: number }) {
  const w = (size * 14) / 24;
  return (
    <svg width={w} height={size} viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.75 3C5.50781 3 4.5 4.00781 4.5 5.25V12.9609C4.5 13.7719 4.16719 14.4563 3.78281 14.9531C3.29063 15.5906 3 16.3828 3 17.25C3 19.3219 4.67813 21 6.75 21C8.82188 21 10.5 19.3219 10.5 17.25C10.5 16.3828 10.2094 15.5906 9.71719 14.9578C9.33281 14.4609 9 13.7766 9 12.9656V5.25C9 4.00781 7.99219 3 6.75 3ZM1.5 5.25C1.5 2.35313 3.84844 0 6.75 0C9.65156 0 12 2.34844 12 5.25V12.9609C12 12.9656 12.0047 12.975 12.0094 12.9891C12.0188 13.0172 12.0469 13.0641 12.0891 13.1203C12.975 14.2641 13.5 15.6984 13.5 17.25C13.5 20.9766 10.4779 24 6.75 24C3.02208 24 0 20.9766 0 17.25C0 15.6938 0.525 14.2594 1.41094 13.1203C1.45312 13.0641 1.48125 13.0172 1.49063 12.9891C1.49531 12.975 1.5 12.9656 1.5 12.9609V5.25ZM9 17.25C9 18.4922 7.99264 19.5 6.75 19.5C5.50736 19.5 4.5 18.4922 4.5 17.25C4.5 16.2703 5.12813 15.4359 6 15.1266V6.75C6 6.3375 6.33579 6 6.75 6C7.16421 6 7.5 6.28125 7.5 6.75C7.5 7.21875 7.5 15.1266 7.5 15.1266C8.37187 15.4359 9 16.2703 9 17.25Z"
        fill={color}
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 2.96484L9.41406 2.15234C8.4375 0.800781 6.87109 0 5.19922 0C2.32813 0 0 2.32813 0 5.19922V5.30078C0 6.22266 0.242188 7.17578 0.648438 8.125H4.78906C4.91406 8.125 5.02734 8.05078 5.07812 7.93359L6.32031 4.95312C6.46484 4.60938 6.80078 4.38281 7.17188 4.375C7.54297 4.36719 7.88672 4.58594 8.03906 4.92578L10.043 9.375L11.6602 6.14062C11.8203 5.82422 12.1445 5.62109 12.5 5.62109C12.8555 5.62109 13.1797 5.82031 13.3398 6.14062L14.2461 7.94922C14.3008 8.05469 14.4062 8.12109 14.5273 8.12109H19.3555C19.7656 7.17188 20.0039 6.21875 20.0039 5.29688V5.19531C20 2.32812 17.6719 0 14.8008 0C13.1328 0 11.5625 0.800781 10.5859 2.15234L10 2.96094V2.96484ZM18.3438 10H14.5234C13.6953 10 12.9375 9.53125 12.5664 8.78906L12.5 8.65625L10.8398 11.9805C10.6797 12.3047 10.3438 12.5078 9.98047 12.5C9.61719 12.4922 9.29297 12.2773 9.14453 11.9492L7.21875 7.67188L6.80859 8.65625C6.46875 9.47266 5.67188 10.0039 4.78906 10.0039H1.65625C3.5 12.8867 6.46094 15.5391 8.3125 16.9531C8.79688 17.3203 9.39062 17.5039 9.99609 17.5039C10.6016 17.5039 11.1992 17.3242 11.6797 16.9531C13.5391 15.5352 16.5 12.8828 18.3438 10Z"
        fill="#FF6633"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.75 0C8.05859 0 7.5 0.558594 7.5 1.25V1.375C4.64844 1.95312 2.5 4.47656 2.5 7.5V8.34766C2.5 10.2266 1.85938 12.0508 0.6875 13.5195L0.304688 13.9961C0.105469 14.2422 0 14.5469 0 14.8633C0 15.6289 0.621094 16.25 1.38672 16.25H16.1094C16.875 16.25 17.4961 15.6289 17.4961 14.8633C17.4961 14.5469 17.3906 14.2422 17.1914 13.9961L16.8086 13.5195C15.6406 12.0508 15 10.2266 15 8.34766V7.5C15 4.47656 12.8516 1.95312 10 1.375V1.25C10 0.558594 9.44141 0 8.75 0ZM6.32812 18.125C6.60547 19.2031 7.58594 20 8.75 20C9.91406 20 10.8945 19.2031 11.1719 18.125H6.32812Z"
        fill="#AF92FF"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 5V7.5H12V5C12 3.62109 10.6547 2.5 9 2.5C7.34531 2.5 6 3.62109 6 5ZM3 7.5V5C3 2.23828 5.68594 0 9 0C12.3141 0 15 2.23828 15 5V7.5C16.6547 7.5 18 8.62109 18 10V18.75C18 20.1289 16.6547 21.25 15 21.25H3C1.34531 21.25 0 20.1289 0 18.75V10C0 8.62109 1.34531 7.5 3 7.5Z"
        fill="#8FCCFF"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.00001 0C7.12579 0 7.25157 0.0273437 7.36642 0.0792969L12.5152 2.26406C13.1168 2.51836 13.5652 3.11172 13.5625 3.82812C13.5488 6.54063 12.4332 11.5035 7.72189 13.7594C7.26525 13.9781 6.73478 13.9781 6.27814 13.7594C1.56681 11.5035 0.451184 6.54063 0.437512 3.82812C0.434778 3.11172 0.883216 2.51836 1.48478 2.26406L6.63634 0.0792969C6.74845 0.0273437 6.87423 0 7.00001 0ZM7.00001 1.82656V12.1625C10.7734 10.3359 11.7879 6.2918 11.8125 3.86641L7.00001 1.82656Z"
        fill="#009999"
      />
    </svg>
  );
}

function FeatureCard({
  label,
  value,
  status,
  title,
  icon,
  badge,
  leftLabel,
  leftIcon,
}: {
  label?: string;
  value?: string;
  status?: string;
  title: string;
  icon: ReactNode;
  badge?: ReactNode;
  leftLabel?: string;
  leftIcon?: ReactNode;
}) {
  return (
    <div className="flex h-14 px-4 items-center justify-between rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]">
      {/* Left side: data or badge */}
      <div className="flex flex-col items-start  shrink-0">
        {badge ? (
          badge
        ) : (
          <>
            {label && (
              <span className="text-[#737373] text-[10px] leading-3 font-normal">
                {label}
              </span>
            )}
            <div className="flex items-center gap-2">
              {status && (
                <div className="flex items-center gap-1">
                  <span className="text-[#009999] text-[10px]">{status}</span>
                  <CheckCircleIcon />
                </div>
              )}
              {value && (
                <span className="text-[#111827] text-base font-semibold">
                  {value}
                </span>
              )}
            </div>
          </>
        )}
        {leftLabel && (
          <div className="flex items-center gap-1.5">
            <span className="text-[#6B7280] text-sm font-normal">{leftLabel}</span>
            {leftIcon}
          </div>
        )}
      </div>

      {/* Right side: title + icon */}
      <div className="flex items-center gap-3" dir="rtl">
         <div className="shrink-0">{icon}</div>
        <span className="text-[#2D3749] text-base font-bold text-right leading-6">
          {title}
        </span>
       
      </div>
    </div>
  );
}

export default function SmartBraceletSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent" dir="ltr">
      <section className="w-full py-16 sm:py-20 px-5 sm:px-10 lg:px-14 overflow-hidden">
        <div className="max-w-292 mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-18">
        {/* ─── Text Content Column ─── */}
        <div className="flex-1 flex flex-col gap-10 order-2 lg:order-1">
          {/* Heading + Description */}
          <div className="flex flex-col gap-6">
            <h2
              className="text-3xl sm:text-[36px] font-black leading-[1.55] tracking-[-0.9px] text-right"
              dir="rtl"
            >
              <span className="text-[#111827]">سوار </span>
              <span className="text-[#009999]">جنبك</span>
              <span className="text-[#111827]"> الذكي :{"\n"}طمأنينة إضافية… </span>
              <span className="text-[#009999]">بلا مبالغة</span>
            </h2>

            <div className="flex flex-col gap-4 text-right" dir="rtl">
              <p className="text-[#65758B] text-base sm:text-[18px] leading-7.25">
                <span className="font-bold">سوار خفيف </span>
                <span>يرتديه طفلك داخل المركز لقياس مؤشرات أساسية مثل</span>
                <span className="font-bold"> الحرارة ومعدل النبض والنشاط</span>
                <span>.</span>
              </p>
              <p className="text-[#65758B] text-base sm:text-[18px] leading-7.25">
                <span>وعند أي تغيّر غير معتاد، </span>
                <span className="font-bold">
                  يصلك إشعار فوري لتكون مطمئنًا على طفلك في نفس اللحظة.
                </span>
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-col gap-4">
            <FeatureCard
              
              label="درجة الحرارة"
              value="98.4°F"
              status="طبيعي"
             
               icon={<ThermometerIcon color="#EF4444" size={24} />}
                title="تنبيه مبكر عند ارتفاع الحرارة"
           
            />

            <FeatureCard
              label="معدل ضربات القلب"
              value="82 bpm"
              status="طبيعي"
              title="مؤشر نبض ونشاط عام للطفل"
              icon={<HeartIcon />}
            />

            <FeatureCard
              badge={
                <div className="flex items-center gap-1.5 bg-[#E85C5C] rounded-full px-3 py-0.5">
                  <span className="text-white text-xs font-semibold leading-4">
                    2 إشعارات جديدة
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              }
              title="إشعارات فورية للأهل داخل التطبيق"
              icon={<BellIcon />}
            />

            <FeatureCard
              leftLabel="بياناتك آمنة"
              leftIcon={<ShieldIcon />}
              title="بيانات الطفل بخصوصية عالية داخل المركز فقط"
              icon={<LockIcon />}
            />
          </div>
        </div>

        {/* ─── Image Column ─── */}
        <div className="relative w-full max-w-130 lg:w-130 lg:shrink-0 order-1 lg:order-2 flex items-center justify-center">
          <div
            className="absolute inset-4 rounded-[42px] bg-[#009999]/10"
            style={{ transform: "rotate(-5.767deg)" }}
          />
          <div
            className="absolute inset-4 rounded-[42px] bg-[#E6C8D4]"
            style={{ transform: "rotate(10.764deg)" }}
          />

          <div className="relative w-full" style={{ transform: "rotate(2.765deg)" }}>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1c6f11c592223fc4d2357336031eb891bbfc5699?width=1166"
              alt="سوار جنبك الذكي"
              className="w-full aspect-square object-cover rounded-[42px] shadow-[0_17px_22px_-4px_rgba(0,0,0,0.10),0_7px_9px_-5px_rgba(0,0,0,0.10)]"
            />
          </div>

        </div>
      </div>
    </section>
    </div>
  );
}
