import { Avatar } from "./AgendaLayout";

export const appointments = [
  {
    client: "Roberto Alves",
    initials: "RA",
    service: "Consultoria de Negócios",
    date: "24 Fev, 2026 — 14:00",
    status: "Confirmado",
  },
  {
    client: "Fernanda Lima",
    initials: "FL",
    service: "Mentoria de Planejamento",
    date: "24 Fev, 2026 — 16:30",
    status: "Pendente",
  },
  {
    client: "Carlos Henrique",
    initials: "CH",
    service: "Diagnóstico Organizacional",
    date: "25 Fev, 2026 — 09:00",
    status: "Confirmado",
  },
  {
    client: "Juliana Barbosa",
    initials: "JB",
    service: "Sessão de Alinhamento",
    date: "26 Fev, 2026 — 10:30",
    status: "Cancelado",
  },
  {
    client: "Marcos Paulo",
    initials: "MP",
    service: "Auditoria Inicial",
    date: "22 Fev, 2026 — 15:00",
    status: "Concluído",
  },
];

export function StatusBadge({ status }) {
  const statusClass =
    {
      Confirmado: "bg-[#e4f6ec] text-[#31865b]",
      Pendente: "bg-[#fff4d9] text-[#a97b15]",
      Cancelado: "bg-[#fde9ea] text-[#b75159]",
      Concluído: "bg-[#e8efff] text-[#4d6fae]",
    }[status] || "bg-[#fff4d9] text-[#a97b15]";

  return (
    <span
      className={`inline-block rounded-full px-[9px] py-[5px] text-[10px] leading-none font-semibold ${statusClass}`}
    >
      {status}
    </span>
  );
}

export default function AppointmentTable({ rows, compact = false }) {
  const headingPadding = compact ? "pb-[10px]" : "pb-3";
  const cellPadding = compact ? "py-[9px]" : "py-[11px]";

  return (
    <div className="w-full overflow-x-auto">
      <table
        className={`w-full border-collapse text-left ${compact ? "min-w-[620px]" : "min-w-[690px]"}`}
      >
        <thead>
          <tr className="text-[11px] font-medium text-[#798496]">
            <th
              className={`border-b border-[#edf0f4] px-[11px] ${headingPadding} whitespace-nowrap`}
            >
              Cliente
            </th>
            <th
              className={`border-b border-[#edf0f4] px-[11px] ${headingPadding} whitespace-nowrap`}
            >
              Serviço
            </th>
            <th
              className={`border-b border-[#edf0f4] px-[11px] ${headingPadding} whitespace-nowrap`}
            >
              Data e Horário
            </th>
            <th
              className={`border-b border-[#edf0f4] px-[11px] ${headingPadding} whitespace-nowrap`}
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((appointment) => (
            <tr key={`${appointment.client}-${appointment.date}`}>
              <td
                className={`border-b border-[#f0f2f5] px-[11px] ${cellPadding} text-[12px] whitespace-nowrap text-[#526075]`}
              >
                <span className="inline-flex items-center gap-[9px] font-medium text-[#344157]">
                  <Avatar initials={appointment.initials} small />
                  <span>{appointment.client}</span>
                </span>
              </td>
              <td
                className={`border-b border-[#f0f2f5] px-[11px] ${cellPadding} text-[12px] whitespace-nowrap text-[#526075]`}
              >
                {appointment.service}
              </td>
              <td
                className={`border-b border-[#f0f2f5] px-[11px] ${cellPadding} text-[12px] whitespace-nowrap text-[#526075]`}
              >
                {appointment.date}
              </td>
              <td
                className={`border-b border-[#f0f2f5] px-[11px] ${cellPadding} text-[12px] whitespace-nowrap text-[#526075]`}
              >
                <StatusBadge status={appointment.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
