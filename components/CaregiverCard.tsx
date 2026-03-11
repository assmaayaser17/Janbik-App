import type { ReactNode } from "react";

interface Tag {
  label: string;
  icon: ReactNode;
  bg: string;
  color: string;
}

export interface CaregiverCardProps {
  name: string;
  title: string;
  image: string;
  tags: Tag[];
  imageBg: string;
}

export default function CaregiverCard({
  name,
  title,
  image,
  tags,
  imageBg,
}: CaregiverCardProps) {
  return (
    <div className="flex flex-col flex-1 min-w-0  rounded-xl border border-[#E8E6E3] bg-white shadow-sm overflow-hidden" >
      <div className="p-3 overflow-hidden" style={{ background: imageBg }}>
        <img
          src={image}
          alt={name}
          className="w-full rounded-xl object-cover aspect-172/187"
        />
      </div>
      <div className="flex flex-col gap-4 px-4 pb-4 pt-1">
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-[#211F1C] text-xl font-bold leading-6">{name}</h3>
          <p className="text-[#5F5954] text-xs font-normal leading-4">
            {title}
          </p>
        </div>
        <div className="flex  justify-center items-center gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="flex items-center gap-1 h-5.25 px-2 rounded-full text-[10px] font-bold leading-3.75"
              style={{ background: tag.bg, color: tag.color }}
            >
              <span>{tag.label}</span>
              <span className="shrink-0">{tag.icon}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

