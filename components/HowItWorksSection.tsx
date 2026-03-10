const steps = [
  {
    number: "1",
    title: "سجّل الآن",
    description: "تعبئة بياناتك الأساسية بسرعة",
  },
  {
    number: "2",
    title: "سيتواصل معك أحد من الفريق",
    description: "لتأكيد التسجيل والإجابة على أي سؤال",
  },
  {
    number: "3",
    title: "أضف تفاصيل طفلك",
    description: "العمر، الحساسية، الصحة، ملاحظات مهمة",
  },
  {
    number: "4",
    title: "تم التسجيل بنجاح",
    description: "حدّد الأشخاص المصرّح لهم باستلام الطفل لضمان الأمان",
  },
];

const ROOM_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets%2F390804c7b5e744488dbce5bba99161e9%2F23da66cb517845769ce8fd6b4f0c5bd3?format=webp&width=800&height=1200";
const FLOWER_IMAGE =
  "https://api.builder.io/api/v1/image/assets/TEMP/184ceee95f276fc3a7443ca573f4ef2a7328321e?width=246";
const PLANE_IMAGE =
  "https://api.builder.io/api/v1/image/assets/TEMP/e84d62a9cae231497a41b4e108de210e293b1239?width=244";

// Shared step gap height so vertical line can be calculated
const STEP_GAP = 32; // gap-8 = 32px
const CIRCLE_SIZE = 64;

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      dir="rtl"
      className="py-14"
      style={{
        background: "rgba(0, 153, 153, 0.05)",
        fontFamily: "'Cairo', sans-serif",
      }}
    >
      <div className="px-6 sm:px-12    lg:px-20 flex flex-col items-center gap-11">
        {/* ─── Title ─── */}
        <h2
          className="text-[#2D3749] text-center text-2xl font-bold "
         
        >
          الانضمام سهل… وخلال دقائق تبدأ الطمأنينة
        </h2>

        {/* ─── Content row: steps + photo ─── */}
        <div className="flex flex-col items-center w-full gap-10">
          <div className="w-full max-w-9xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* ══ RIGHT: Steps ══ */}
            <div className="w-full max-w-3xl relative lg:py-2">
            {/*
              Vertical grey line from center of circle-1 to center of circle-4.
              Top offset = CIRCLE_SIZE/2 = 32px
              Bottom offset = CIRCLE_SIZE/2 = 32px
            */}
            <div
              aria-hidden
              className="absolute bg-[#9CA3AF] pointer-events-none"
              style={{
                right: CIRCLE_SIZE / 2,
                top: CIRCLE_SIZE / 2,
                bottom: CIRCLE_SIZE / 2,
                width: 2,
                zIndex: 0,
              }}
            />

            <div className="flex flex-col" style={{ gap: STEP_GAP }}>
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-center"
                  style={{ gap: 20 }}
                >
                  {/* Circle — first in DOM = rightmost in RTL */}
                  <div
                    className="shrink-0 rounded-full bg-[#009999] flex items-center justify-center"
                    style={{
                      width: CIRCLE_SIZE,
                      height: CIRCLE_SIZE,
                      zIndex: 10,
                      position: "relative",
                    }}
                  >
                    <span
                      className="text-[#F5FFFF] font-bold"
                      style={{ fontSize: 20, lineHeight: "28px" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Text — second in DOM = left of circle in RTL */}
                  <div className="flex flex-col items-end gap-1 flex-1">
                    <h3
                      className="text-[#211F1C] font-bold text-right w-full"
                      style={{ fontSize: 16, lineHeight: "24px" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#5F5954] font-normal text-right w-full"
                      style={{ fontSize: 14, lineHeight: "20px" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </div>

            {/* ══ LEFT: Blob image with flower decorations ══ */}
            <div className="relative flex justify-center">

              {/* Main blob with SVG */}
              <svg
                viewBox="0 0 356 344"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-65 sm:w-77.5 lg:w-89 h-auto drop-shadow-sm"
              >
                <defs>
                  <clipPath id="inner-blob-clip">
                    <path d="M92.8184 64.7725C103.821 37.8157 132.912 22.9875 161.189 29.9219L261.23 54.4541C279.524 58.9402 294.556 71.9277 301.651 89.376L340.508 184.929C344.185 193.971 345.55 203.788 344.48 213.49L335.973 290.666C332.691 320.434 307.539 342.968 277.59 342.968H94.5205C76.0073 342.968 58.5771 334.239 47.4873 319.415L29.4785 295.342C17.1266 278.831 14.3367 257.051 22.1289 237.96L92.8184 64.7725Z" />
                  </clipPath>
                </defs>

                {/* Outer cream fill + dark teal border */}
                <path
                  d="M88.3096 50.1299C99.8991 21.7355 130.541 6.11582 160.327 13.4199L265.615 39.2393C284.885 43.9645 300.719 57.6447 308.192 76.0234L349.087 176.589C352.96 186.113 354.398 196.453 353.271 206.673L344.317 287.896C340.861 319.253 314.366 342.987 282.82 342.987H90.1494C70.6488 342.987 52.2897 333.793 40.6084 318.179L21.6543 292.843C8.6436 275.451 5.70519 252.51 13.9131 232.4L88.3096 50.1299Z"
                  fill="#FAF9F7"
                  stroke="#005C5C"
                  strokeWidth="1.20136"
                />

                {/* Room photo clipped to inner blob shape */}
                <image
                  href={ROOM_IMAGE}
                  x="0"
                  y="0"
                  width="356"
                  height="344"
                  clipPath="url(#inner-blob-clip)"
                  preserveAspectRatio="xMidYMid slice"
                />

                {/* Inner border on top of photo */}
                <path
                  d="M92.8184 64.7725C103.821 37.8157 132.912 22.9875 161.189 29.9219L261.23 54.4541C279.524 58.9402 294.556 71.9277 301.651 89.376L340.508 184.929C344.185 193.971 345.55 203.788 344.48 213.49L335.973 290.666C332.691 320.434 307.539 342.968 277.59 342.968H94.5205C76.0073 342.968 58.5771 334.239 47.4873 319.415L29.4785 295.342C17.1266 278.831 14.3367 257.051 22.1289 237.96L92.8184 64.7725Z"
                  fill="none"
                  stroke="#005C5C"
                  strokeWidth="1.24039"
                />
              </svg>
            </div>
          </div>

          {/* ── CTA Button under row ── */}
          <button
            className="mt-2 bg-[#009999] text-[#F5FFFF] font-bold rounded-full inline-flex items-center justify-center gap-3 transition-colors hover:bg-[#007a7a] active:scale-95"
            style={{
              padding: "12px 24px",
              fontSize: 14,
              lineHeight: "20px",
            }}
          >
            تسجل الآن
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <g clipPath="url(#btn-arrow-clip)">
                <path
                  d="M8.00065 12.6663L3.33398 7.99967L8.00065 3.33301"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0654 8H3.33203"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="btn-arrow-clip">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
