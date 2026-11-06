"use client";

import { useState } from "react";
import AgendaLayout from "../../components/AgendaLayout";
import PageHeader from "../../components/PageHeader";
import { primaryButtonClass } from "../../components/buttonClasses";

const days = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];
const timeSlots = [
  "08:00 - 10:00",
  "10:00 - 12:00",
  "14:00 - 16:00",
  "16:00 - 18:00",
  "18:00 - 20:00",
];
const initialAvailability = [
  [true, true, true, true, false],
  [true, true, true, true, false],
  [true, true, false, false, false],
  [true, true, true, true, false],
  [true, true, true, true, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];
export default function ScheduleManagerPage() {
  const [availability, setAvailability] = useState(initialAvailability);
  const [saved, setSaved] = useState(false);

  function toggleSlot(dayIndex, slotIndex) {
    setAvailability((current) =>
      current.map((day, currentDayIndex) => {
        if (currentDayIndex !== dayIndex) return day;
        return day.map((isAvailable, currentSlotIndex) =>
          currentSlotIndex === slotIndex ? !isAvailable : isAvailable,
        );
      }),
    );
    setSaved(false);
  }

  return (
    <AgendaLayout active="Minha Agenda">
      <PageHeader
        title="Gerenciar Disponibilidade"
        description="Selecione os blocos de horários em que você estará ativo para receber agendamentos."
        action={
          <button
            className={primaryButtonClass}
            type="button"
            onClick={() => setSaved(true)}
          >
            {saved && <span className="text-sm">✓</span>}
            {saved ? "Alterações salvas" : "Salvar alterações"}
          </button>
        }
      />
      <section
        className="min-h-[510px] overflow-x-auto rounded-[10px] border border-[#eef0f4] bg-white px-[25px] pt-7 pb-[34px] shadow-[0_2px_7px_rgba(24,44,75,0.035)] max-md:min-h-0 max-md:px-[15px] max-md:py-[19px]"
        aria-label="Disponibilidade semanal"
      >
        <div className="grid grid-cols-[100px_repeat(7,minmax(0,1fr))] gap-x-[9px] gap-y-[11px] max-[1100px]:min-w-[800px] max-[1100px]:grid-cols-[82px_repeat(7,minmax(68px,1fr))] max-[1100px]:gap-x-[6px] max-[1100px]:gap-y-[9px]">
          <div />
          {days.map((day) => (
            <h2
              className="mb-[3px] self-end pb-[7px] text-center text-xs font-semibold text-[#667286]"
              key={day}
            >
              {day}
            </h2>
          ))}
          {timeSlots.map((time, slotIndex) => (
            <div className="contents" key={time}>
              <span className="flex items-center whitespace-nowrap text-[11px] font-medium text-[#6f7b8e]">
                {time}
              </span>
              {days.map((day, dayIndex) => {
                const isAvailable = availability[dayIndex][slotIndex];
                const stateClass = isAvailable
                  ? "border-[#b9cbe7] bg-[#f6f9ff] text-[#466b9e]"
                  : "border-[#eef0f3] bg-[#f6f7f9] text-[#a0a8b4]";

                return (
                  <button
                    className={`flex min-h-[49px] flex-col items-center justify-center gap-[5px] rounded-[6px] border px-[2px] py-1 transition-colors hover:border-[#7398c9] ${stateClass}`}
                    key={`${day}-${time}`}
                    type="button"
                    aria-label={`${day}, ${time}, ${isAvailable ? "disponível" : "indisponível"}`}
                    aria-pressed={isAvailable}
                    onClick={() => toggleSlot(dayIndex, slotIndex)}
                  >
                    <span className="whitespace-nowrap text-[10px] font-semibold">
                      {time}
                    </span>
                    <small
                      className={`whitespace-nowrap text-[9px] ${isAvailable ? "text-[#6387b7]" : ""}`}
                    >
                      {isAvailable ? "Disponível" : "Indisponível"}
                    </small>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </section>
      <p
        className={`mt-3 h-[18px] text-xs text-[#38865f] transition-opacity ${saved ? "opacity-100" : "opacity-0"}`}
        aria-live="polite"
      >
        {saved ? "Sua disponibilidade foi salva." : ""}
      </p>
    </AgendaLayout>
  );
}
