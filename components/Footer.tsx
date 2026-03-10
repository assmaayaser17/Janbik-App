import Link from "next/link";

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="0.5"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function NdiBadge() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle
        cx="36"
        cy="36"
        r="34"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.5"
      />
      {/* Palm trunk */}
      <rect
        x="34.5"
        y="28"
        width="3"
        height="22"
        rx="1.5"
        fill="rgba(255,255,255,0.85)"
      />
      {/* Palm fronds */}
      <path
        d="M36 28 C30 22 22 20 20 16 C24 18 30 22 36 28Z"
        fill="rgba(255,255,255,0.85)"
      />
      <path
        d="M36 28 C42 22 50 20 52 16 C48 18 42 22 36 28Z"
        fill="rgba(255,255,255,0.85)"
      />
      <path
        d="M36 28 C28 24 20 26 18 22 C22 22 28 24 36 28Z"
        fill="rgba(255,255,255,0.75)"
      />
      <path
        d="M36 28 C44 24 52 26 54 22 C50 22 44 24 36 28Z"
        fill="rgba(255,255,255,0.75)"
      />
      <path
        d="M36 28 C32 20 32 12 28 10 C30 14 32 20 36 28Z"
        fill="rgba(255,255,255,0.7)"
      />
      <path
        d="M36 28 C40 20 40 12 44 10 C42 14 40 20 36 28Z"
        fill="rgba(255,255,255,0.7)"
      />
      {/* Crossed swords */}
      <line
        x1="22"
        y1="54"
        x2="50"
        y2="46"
        stroke="rgba(255,255,255,0.8)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="54"
        x2="22"
        y2="46"
        stroke="rgba(255,255,255,0.8)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Sword hilts */}
      <line
        x1="20"
        y1="54"
        x2="24"
        y2="54"
        stroke="rgba(255,255,255,0.8)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="48"
        y1="54"
        x2="52"
        y2="54"
        stroke="rgba(255,255,255,0.8)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0a6b6b] mt-8 text-white font-cairo" dir="rtl">
      {/* Main footer content */}
      <div className="max-w-500 mx-auto px-6 lg:px-14 pt-14 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column — rightmost in RTL */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2238c1fb15ae50dec4e8f55e851e32a1d8977399?width=227"
                alt="جنبك"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/75 text-sm leading-6">
              رعاية موثوقة في قلب منزلك
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
               <a
                href="#"
                aria-label="تويتر X"
                className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#005C5C] hover:bg-white/25 transition-colors"
              >
                <XIcon />
              </a>
                <a
                href="#"
                aria-label="إنستغرام"
                className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#005C5C] hover:bg-white/25 transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="لينكدإن"
                className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#005C5C] hover:bg-white/25 transition-colors"
              >
                <LinkedInIcon />
              </a>
            
             
            </div>
          </div>

          {/* الشركة */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-base mb-1">الشركة</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "من نحن", href: "/about" },
                { label: "الوظائف", href: "/careers" },
                { label: "الأخبار", href: "/news" },
                { label: "تواصل معنا", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm leading-6 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* الخدمات */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-base mb-1">الخدمات</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "رعاية الأطفال", href: "/services/childcare" },
                { label: "التدريس الخصوصي", href: "/services/tutoring" },
                { label: "الخدمات المنزلية", href: "/services/home" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm leading-6 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* الدعم */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-base mb-1">الدعم</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "مركز المساعدة", href: "/help" },
                { label: "الأمان", href: "/safety" },
                { label: "الأسئلة الشائعة", href: "/faq" },
                { label: "الشروط والأحكام", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm leading-6 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* مقدمو الخدمة */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-base mb-1">
              مقدمو الخدمة
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "انضم كمقدم خدمة", href: "/provider/join" },
                { label: "موارد مقدمي الخدمة", href: "/provider/resources" },
                { label: "قصص النجاح", href: "/provider/stories" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm leading-6 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider + Bottom bar */}
      <div className="border-t border-white/15">
        <div className="max-w-500 mx-auto px-6 lg:px-14 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
             {/* Right side in RTL — NDI badge */}
            <div className="flex items-center gap-4">
              <div className=" flex  justify-center items-center gap-3 text-right">
                 <NdiBadge />
                 <div>
                  <p className="text-white font-bold text-base leading-tight">
                  البنية الوطنية الرقمية
                </p>
                <p className="text-white/55 text-xs tracking-widest mt-0.5">
                  NATIONAL DIGITAL INFRASTRUCTURE
                </p>

                 </div>
                
              </div>
             
            </div>
            {/* Left side in RTL — copyright */}
            <div className="flex flex-col gap-1">
              <p className="text-white/65 text-sm">
                © 2026 جنبك. جميع الحقوق محفوظة.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/privacy"
                  className="text-white/65 hover:text-white text-sm transition-colors"
                >
                  سياسة الخصوصية
                </Link>
                <Link
                  href="/terms"
                  className="text-white/65 hover:text-white text-sm transition-colors"
                >
                  الشروط والأحكام
                </Link>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </footer>
  );
}

