import HomeGridComponent from "../components/home/home.grid";
import HomeNavComponent from "../components/home/home.nav";

export default function HomePage() {
  const atalhos: { id: number; caption: string; route?: string }[] = [
    { id: 1, caption: "Pessoas", route: "/pessoas" },
    { id: 2, caption: "Orçamentos" },
    { id: 3, caption: "Vendas" },
    { id: 4, caption: "Nota Fiscal Eletrôncia" },
    { id: 5, caption: "Títulos a Receber" },
    { id: 6, caption: "Produtos", route: "/products" },
    { id: 8, caption: "Compras", route: "/purchases" },
    { id: 9, caption: "Títulos a Pagar" },
    { id: 10, caption: "Acompanhamento Geral" },
  ];

  return (
    <>
      <div className="flex h-full">
        <main className="md:w-9/12 xl:w-10/12">
          <HomeGridComponent atalhos={atalhos} />
        </main>
      </div>
    </>
  );
}
