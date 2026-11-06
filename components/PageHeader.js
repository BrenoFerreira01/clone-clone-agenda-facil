import { Avatar, Icon } from "./AgendaLayout";

export default function PageHeader({ title, description, action }) {
  return (
    <header className="mb-8 flex min-h-[62px] items-start justify-between gap-[14px] max-md:mb-6">
      <div>
        <h1 className="m-0 text-[27px] leading-[1.25] font-bold tracking-[-0.45px] text-[#1e2b40] max-md:text-[23px]">
          {title}
        </h1>
        {description && (
          <p className="mt-[5px] mb-0 text-[13px] leading-[1.5] text-[#7c8798]">
            {description}
          </p>
        )}
      </div>
      {action || (
        <div
          className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#e8ebf0] bg-white py-[3px] pr-[10px] pl-1 text-[12px] text-[#475267] max-md:min-h-8 max-md:border-0 max-md:bg-transparent max-md:pr-0"
          role="group"
          aria-label="Perfil de Maria Silva"
        >
          <Avatar />
          <span className="max-md:hidden">Maria Silva</span>
          <span className="max-md:hidden">
            <Icon name="chevron" size={14} />
          </span>
        </div>
      )}
    </header>
  );
}
