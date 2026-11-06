import "../styles/globals.css";

export const metadata = {
  title: "AgendaFácil",
  description: "Painel de gestão de agenda para profissionais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
