import Link from "next/link";
import AgendaLayout, { Icon } from "../components/AgendaLayout";
import AppointmentTable, { appointments } from "../components/AppointmentTable";
import PageHeader from "../components/PageHeader";

const metrics = [
  {
    label: "Total Agendamentos",
    value: "48",
    note: "+ 12% este mês",
    icon: "calendarCheck",
    iconClass: "bg-[#edf4ff] text-[#5583c0]",
  },
  {
    label: "Novos Clientes",
    value: "12",
    note: "+ 8% esta semana",
    icon: "clients",
    iconClass: "bg-[#f1efff] text-[#7f71cb]",
  },
  {
    label: "Avaliação Média",
    value: "4.9",
    note: "Excelente (14)",
    icon: "award",
    iconClass: "bg-[#fff7e5] text-[#c89d3a]",
  },
  {
    label: "Horários Disponíveis",
    value: "18",
    note: "6 horários hoje",
    icon: "clock",
    iconClass: "bg-[#eaf7f0] text-[#52a77d]",
  },
];

export default function ProviderDashboard() {
  return (
    <AgendaLayout active="Início">
      <PageHeader
        title="Olá, Maria!"
        description="Aqui está um resumo da sua agenda para hoje."
      />
      <section
        className="mb-8 mt-[5px] grid grid-cols-4 gap-[19px] max-[1100px]:gap-3 max-md:grid-cols-2"
        aria-label="Resumo da agenda"
      >
        {metrics.map((metric) => (
          <article
            className="min-h-[148px] rounded-[9px] border border-[#eef0f4] bg-white px-5 pt-[19px] pb-[17px] shadow-[0_2px_7px_rgba(24,44,75,0.035)] max-[1100px]:px-[15px] max-md:min-h-[132px]"
            key={metric.label}
          >
            <div className="flex min-h-6 items-center justify-between whitespace-nowrap text-[12px] text-[#647085] max-[1100px]:items-start max-[1100px]:whitespace-normal">
              <span>{metric.label}</span>
              <span
                className={`inline-flex h-[27px] w-[27px] items-center justify-center rounded-[5px] ${metric.iconClass}`}
              >
                <Icon name={metric.icon} size={17} />
              </span>
            </div>
            <strong className="mt-[11px] mb-[7px] block text-2xl leading-[1.15] font-bold text-[#18273d] max-[430px]:text-[21px]">
              {metric.value}
            </strong>
            <span className="block text-[11px] text-[#55a17b]">
              {metric.note}
            </span>
          </article>
        ))}
      </section>
      <section className="rounded-[10px] border border-[#eef0f4] bg-white px-[26px] pt-6 pb-[13px] shadow-[0_2px_7px_rgba(24,44,75,0.035)] max-md:px-[14px] max-md:pt-[19px]">
        <div className="mb-[15px] flex items-center justify-between">
          <h2 className="m-0 text-base font-semibold text-[#25344c]">
            Próximos Agendamentos
          </h2>
          <Link
            className="text-xs font-semibold text-[#3268b1]"
            href="/appointments"
          >
            Ver todos
          </Link>
        </div>
        <AppointmentTable rows={appointments.slice(0, 3)} compact />
      </section>
    </AgendaLayout>
  );
}
