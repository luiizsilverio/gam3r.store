'use client'

import { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import {
  CalcularParcelamento,
  Carrinho,
  ItemCarrinho,
  Parcelamento,
  Produto,
} from '@gstore/core';

export interface ContextoCarrinhoProps {
  itens: ItemCarrinho[];
  qtdItens: number;
  valorTotalCheio: number;
  valorTotal: number;
  parcelamento: Parcelamento;
  adicionarItem: (produto: Produto) => void;
  removerItem: (produto: Produto) => void;
  removerProduto: (produto: Produto) => void;
  limparCarrinho: () => void;
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any);

export function ProvedorCarrinho(props: any) {
  const { salvarItem, obterItem } = useLocalStorage();
  const [carrinho, setCarrinho] = useState<Carrinho>(new Carrinho());

  function adicionarItem(produto: Produto) {
    atualizarCarrinho(carrinho.adicionarItem(produto));
  }

  function removerItem(produto: Produto) {
    atualizarCarrinho(carrinho.removerItem(produto));
  }

  function removerProduto(produto: Produto) {
    atualizarCarrinho(carrinho.removerProduto(produto));
  }

  function limparCarrinho() {
    atualizarCarrinho(carrinho.limpar());
  }

  function atualizarCarrinho(carrinho: Carrinho) {
    salvarItem('gam3r.carrinho', carrinho.itens);
    setCarrinho(carrinho);
  }

  useEffect(() => {
    const itensSalvos: ItemCarrinho[] = obterItem('gam3r.carrinho');
    if (itensSalvos) setCarrinho(new Carrinho(itensSalvos));
  }, [obterItem]);

  return (
    <ContextoCarrinho.Provider
      value={{
        itens: carrinho.itens,
        qtdItens: carrinho.qtdItens,
        valorTotal: carrinho.valorTotal,
        valorTotalCheio: carrinho.valorTotalCheio,
        parcelamento: new CalcularParcelamento().executar(
            carrinho.valorTotal,
        ),
        adicionarItem,
        removerItem,
        removerProduto,
        limparCarrinho,
      }}
    >
      {props.children}
    </ContextoCarrinho.Provider>
  )
}

export default ContextoCarrinho;
