import BannerCompra from "@/components/produto/BannerCompra";
import InformacoesProduto from "@/components/produto/InformacoesProduto";
import ProdutoNaoEncontrado from "@/components/produto/ProdutoNaoEncontrado";
import TituloProduto from "@/components/produto/TituloProduto";
import { produtos } from "@/core";

export default function PaginaProduto(props: any) {
  const id = +props.params.id;
  const produto = produtos.find(produto => produto.id === id);

  return (
    produto ? (
      <div className="flex flex-col w-[920px]" style={{maxWidth: "90vw"}}>
        <div className="flex flex-col gap-6">
          <TituloProduto produto={produto} />
          <InformacoesProduto produto={produto} />
          <BannerCompra produto={produto} />
        </div>
      </div>
    ) : (
      <ProdutoNaoEncontrado />
    )
  )
}