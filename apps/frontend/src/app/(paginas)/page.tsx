import FiltroProduto from "@/components/produto/FiltroProduto";
import ListaProdutos from "@/components/produto/ListaProdutos";

export default function Home() {
  return (
    <>
      <div className="flex-1 flex flex-col container gap-5 pb-10">
        <FiltroProduto />
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10`}>
        <ListaProdutos />
      </div>
    </>
  );
}
