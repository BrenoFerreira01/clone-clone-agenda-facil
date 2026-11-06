import Link from "next/link";

const navigation = [
  { href: "/", label: "Início", icon: "home" },
  { href: "/schedule-manager", label: "Minha Agenda", icon: "calendar" },
  { href: "/appointments", label: "Agendamentos", icon: "list" },
  { href: "/avisos", label: "Avisos", icon: "notice" },
  { label: "Chat", icon: "chat" },
  { label: "Perfil", icon: "user" },
];

export function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v12h14V9M9 21v-7h6v7" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    list: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 9h8M8 13h8M8 17h5M6 9h.01M6 13h.01M6 17h.01" />
      </>
    ),
    notice: (
      <>
        <path d="M4 14V8a2 2 0 0 1 2-2h3l8-3v16l-8-3H6a2 2 0 0 1-2-2Z" />
        <path d="m9 16 1.5 5h3L12 17M20 9v4" />
      </>
    ),
    chat: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8Z" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21a7 7 0 0 1 14 0" />
      </>
    ),
    logout: (
      <>
        <path d="M10 17l5-5-5-5M15 12H3" />
        <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7" />
      </>
    ),
    calendarCheck: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18M8 15l2 2 5-5" />
      </>
    ),
    clients: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="m8.5 12-1 9 4.5-2.5 4.5 2.5-1-9" />
        <path d="m10 8 1.3 1.3L14 6.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 5 5" />
      </>
    ),
    chevron: <path d="m7 10 5 5 5-5" />,
    edit: (
      <>
        <path d="m14 5 5 5M4 20l4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  };

  return <svg {...common}>{paths[name] || paths.home}</svg>;
}

export function Avatar({ initials = "MS", small = false, className = "" }) {
  const sizeClass = small
    ? "h-[29px] w-[29px] border-0"
    : "h-[30px] w-[30px] border-2";

  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full border-white bg-gradient-to-br from-[#f2d7c8] to-[#c58e76] text-[9px] font-bold tracking-[0.1px] text-white ${sizeClass} ${className}`}
    >
      {initials}
    </span>
  );
}

export default function AgendaLayout({ active, children }) {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <aside className="fixed inset-y-0 left-0 z-10 flex h-screen w-[258px] flex-col bg-[#1d3154] px-4 py-[26px] text-[#dce5f2] max-md:sticky max-md:top-0 max-md:h-auto max-md:w-full max-md:p-3">
        <Link
          href="/"
          className="mb-[39px] ml-[10px] flex items-center gap-[10px] whitespace-nowrap text-[18px] font-bold text-white max-md:mb-3 max-md:ml-[5px]"
          aria-label="AgendaFácil, início"
        >
          <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-[6px] bg-[#f3f7fc] text-[#1d3154]">
            <Icon name="calendarCheck" size={18} />
          </span>
          <span>AgendaFácil</span>
        </Link>

        <nav
          className="flex flex-col gap-2 max-md:flex-row max-md:gap-[5px] max-md:overflow-x-auto"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => {
            const content = (
              <>
                <Icon name={item.icon} size={17} />
                <span className="max-[430px]:hidden">{item.label}</span>
              </>
            );
            const className = `flex min-h-10 items-center gap-[13px] rounded-[7px] px-3 text-[13px] font-medium text-[#c5d0e1] transition-colors hover:bg-[#334a70] hover:text-white max-md:min-h-9 max-md:flex-none max-md:gap-[6px] max-md:px-[9px] max-md:text-[11px] max-[430px]:w-10 max-[430px]:justify-center ${active === item.label ? "bg-[#334a70] text-white" : ""}`;

            return item.href ? (
              <Link
                href={item.href}
                key={item.label}
                className={className}
                aria-current={active === item.label ? "page" : undefined}
              >
                {content}
              </Link>
            ) : (
              <span
                className={`${className} cursor-default hover:bg-transparent hover:text-[#c5d0e1]`}
                key={item.label}
                aria-disabled="true"
              >
                {content}
              </span>
            );
          })}
          <span
            className="ml-0 mt-5 flex min-h-10 cursor-default items-center gap-[13px] rounded-[7px] px-3 text-[13px] font-medium text-[#c5d0e1] max-md:mt-0 max-md:min-h-9 max-md:gap-[6px] max-md:px-[9px] max-md:text-[11px] max-[430px]:ml-auto max-[430px]:w-10 max-[430px]:justify-center"
            aria-disabled="true"
          >
            <Icon name="logout" size={17} />
            <span className="max-[430px]:hidden">Sair</span>
          </span>
        </nav>
      </aside>

      <main className="ml-[258px] min-h-screen px-[50px] pb-16 pt-[47px] max-[1100px]:px-7 max-[1100px]:pb-[52px] max-[1100px]:pt-[38px] max-md:ml-0 max-md:px-[18px] max-md:pb-11 max-md:pt-7">
        {children}
      </main>
    </div>
  );
}
