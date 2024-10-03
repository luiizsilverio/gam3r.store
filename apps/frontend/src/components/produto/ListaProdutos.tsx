'use client'

// import { produtos } from '@gstore/core';
import useProdutos from '@/data/hooks/useProdutos';
import ProdutoItem from './ProdutoItem';
import ProdutoNaoEncontrado from './ProdutoNaoEncontrado';

export default function ListaProdutos() {
  const { produtos } = useProdutos();

  return (
    produtos.length ? (
      <>
        {
          produtos.map((produto) => (
            <ProdutoItem produto={produto} key={produto.id} />
          ))
        }
      </>
    ) : (
      <ProdutoNaoEncontrado semBotaoVoltar />
    )
  )
}
