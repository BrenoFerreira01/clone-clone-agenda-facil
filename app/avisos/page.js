"use client";

import { useState } from "react";
import AgendaLayout, { Icon } from "../../components/AgendaLayout";
import PageHeader from "../../components/PageHeader";
import {
  iconButtonClass,
  primaryButtonClass,
  secondaryButtonClass,
} from "../../components/buttonClasses";

const initialNotices = [
  {
    id: 1,
    title: "Horário alterado na próxima semana",
    description:
      "Informamos clientes que, excepcionalmente, na terça-feira, 03 de fevereiro, estaremos atendendo no período da tarde em razão de um compromisso de capacitação.",
    date: "Criado em 20 Fev, 2026",
    tone: "blue",
  },
  {
    id: 2,
    title: "Feriado - Sem atendimento",
    description:
      "Informamos que não haverá expediente durante o feriado. Retomaremos os atendimentos no próximo dia útil e os agendamentos serão mantidos.",
    date: "Criado em 20 Fev, 2026",
    tone: "orange",
  },
];

export default function NoticesPage() {
  const [notices, setNotices] = useState(initialNotices);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function resetForm() {
    setIsFormOpen(false);
    setEditingId(null);
    setTitle("");
    setDescription("");
  }

  function toggleNewNoticeForm() {
    if (isFormOpen) {
      resetForm();
      return;
    }

    setEditingId(null);
    setTitle("");
    setDescription("");
    setIsFormOpen(true);
  }

  function saveNotice(event) {
    event.preventDefault();
    const cleanTitle = title.trim();
    const cleanDescription = description.trim();
    if (!cleanTitle || !cleanDescription) return;

    if (editingId !== null) {
      setNotices((current) =>
        current.map((notice) =>
          notice.id === editingId
            ? { ...notice, title: cleanTitle, description: cleanDescription }
            : notice,
        ),
      );
    } else {
      setNotices((current) => [
        {
          id: Date.now(),
          title: cleanTitle,
          description: cleanDescription,
          date: "Criado agora",
          tone: "blue",
        },
        ...current,
      ]);
    }
    resetForm();
  }

  function editNotice(notice) {
    setEditingId(notice.id);
    setTitle(notice.title);
    setDescription(notice.description);
    setIsFormOpen(true);
  }

  return (
    <AgendaLayout active="Avisos">
      <PageHeader
        title="Quadro de Avisos"
        description="Comunique alterações e avisos importantes aos seus clientes."
        action={
          <button
            className={primaryButtonClass}
            type="button"
            onClick={toggleNewNoticeForm}
          >
            <Icon name="plus" size={17} />
            Novo Aviso
          </button>
        }
      />
      {isFormOpen && (
        <form
          className="mb-[22px] rounded-[10px] border border-[#eef0f4] bg-white p-[22px] shadow-[0_2px_7px_rgba(24,44,75,0.035)]"
          onSubmit={saveNotice}
        >
          <div className="mb-[14px] flex items-center justify-between">
            <h2 className="m-0 text-base font-semibold text-[#25344c]">
              {editingId === null ? "Novo aviso" : "Editar aviso"}
            </h2>
            <button
              className={iconButtonClass}
              type="button"
              aria-label="Fechar formulário"
              onClick={resetForm}
            >
              <Icon name="close" size={18} />
            </button>
          </div>
          <label className="mt-3 block text-xs font-semibold text-[#526075]">
            Título
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              maxLength={90}
              className="mt-[7px] block w-full rounded-[6px] border border-[#e1e6ed] px-3 py-[10px] text-[13px] text-[#344157] outline-none focus:border-[#7696c3] focus:ring-[3px] focus:ring-[#547eb71f]"
            />
          </label>
          <label className="mt-3 block text-xs font-semibold text-[#526075]">
            Mensagem
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
              rows={3}
              maxLength={400}
              className="mt-[7px] block w-full resize-y rounded-[6px] border border-[#e1e6ed] px-3 py-[10px] text-[13px] text-[#344157] outline-none focus:border-[#7696c3] focus:ring-[3px] focus:ring-[#547eb71f]"
            />
          </label>
          <div className="mt-[15px] flex justify-end gap-[9px]">
            <button
              className={secondaryButtonClass}
              type="button"
              onClick={resetForm}
            >
              Cancelar
            </button>
            <button className={primaryButtonClass} type="submit">
              {editingId === null ? "Publicar aviso" : "Salvar alterações"}
            </button>
          </div>
        </form>
      )}
      <section
        className="grid grid-cols-2 gap-[22px] max-md:grid-cols-1"
        aria-label="Avisos publicados"
      >
        {notices.map((notice) => {
          const noticeTone =
            notice.tone === "orange"
              ? "border-l-[#d79a66]"
              : "border-l-[#7da2d5]";
          const iconTone =
            notice.tone === "orange"
              ? "bg-[#fff4e9] text-[#bd8754]"
              : "bg-[#edf4ff] text-[#6284b0]";

          return (
            <article
              className={`min-h-[187px] rounded-[9px] border border-[#edf0f4] border-l-4 bg-white px-[22px] pt-5 pb-4 shadow-[0_2px_7px_rgba(24,44,75,0.035)] ${noticeTone}`}
              key={notice.id}
            >
              <div className="mb-[13px] flex items-center justify-between">
                <div
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-[5px] ${iconTone}`}
                >
                  <Icon name="notice" size={18} />
                </div>
                <button
                  className={iconButtonClass}
                  type="button"
                  aria-label={`Editar aviso: ${notice.title}`}
                  onClick={() => editNotice(notice)}
                >
                  <Icon name="edit" size={17} />
                </button>
              </div>
              <h2 className="mb-[7px] mt-0 text-sm font-semibold text-[#27364d]">
                {notice.title}
              </h2>
              <p className="mb-3 mt-0 text-[11px] leading-[1.55] text-[#748093]">
                {notice.description}
              </p>
              <span className="block text-[10px] text-[#a1a9b5]">
                {notice.date}
              </span>
            </article>
          );
        })}
      </section>
    </AgendaLayout>
  );
}
