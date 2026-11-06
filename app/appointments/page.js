"use client";

import { useMemo, useState } from "react";
import AgendaLayout, { Icon } from "../../components/AgendaLayout";
import AppointmentTable, {
  appointments,
} from "../../components/AppointmentTable";
import PageHeader from "../../components/PageHeader";

export default function AppointmentsPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos os Status");

  const filteredAppointments = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");

    return appointments.filter((appointment) => {
      const matchesQuery = [
        appointment.client,
        appointment.service,
        appointment.date,
      ].some((value) =>
        value.toLocaleLowerCase("pt-BR").includes(normalizedQuery),
      );
      const matchesStatus =
        statusFilter === "Todos os Status" ||
        appointment.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [query, statusFilter]);

  return (
    <AgendaLayout active="Agendamentos">
      <PageHeader
        title="Meus Agendamentos"
        description="Visualize, filtre e gerencie todos os seus agendamentos com clientes."
      />
      <section
        className="mb-6 flex items-center gap-[14px] max-md:items-stretch max-md:flex-col"
        aria-label="Filtros de agendamentos"
      >
        <label className="flex min-h-[42px] flex-1 items-center gap-[9px] rounded-[7px] border border-[#e6e9ef] bg-white px-[13px] text-[#8b96a7]">
          <Icon name="search" size={18} />
          <span className="sr-only">Buscar agendamentos</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar cliente, serviço ou data..."
            className="min-w-0 flex-1 bg-transparent text-xs text-[#354257] outline-none placeholder:text-[#a4adba]"
          />
        </label>
        <label className="relative flex min-h-[42px] min-w-[162px] items-center rounded-[7px] border border-[#e6e9ef] bg-white px-3 text-[#8b96a7] max-md:min-h-10">
          <span className="sr-only">Filtrar por status</span>
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="w-full cursor-pointer appearance-none border-0 bg-transparent pr-5 text-xs text-[#566276] outline-none"
          >
            <option>Todos os Status</option>
            <option>Confirmado</option>
            <option>Pendente</option>
            <option>Cancelado</option>
            <option>Concluído</option>
          </select>
          <span className="pointer-events-none absolute right-[11px]">
            <Icon name="chevron" size={15} />
          </span>
        </label>
      </section>
      <section className="min-h-[230px] rounded-[10px] border border-[#eef0f4] bg-white px-[18px] py-[22px] shadow-[0_2px_7px_rgba(24,44,75,0.035)]">
        <AppointmentTable rows={filteredAppointments} />
        {filteredAppointments.length === 0 && (
          <p className="my-[26px] mx-[10px] text-center text-[13px] text-[#7c8798]">
            Nenhum agendamento encontrado.
          </p>
        )}
      </section>
    </AgendaLayout>
  );
}
