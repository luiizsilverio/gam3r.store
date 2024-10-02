'use client'

import { IconShoppingCartPlus } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { Moeda, Produto } from '@/core';
import NotaReview from '@/components/NotaReview';

export interface ProdutoItemProps {
    produto: Produto;
}

export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props;

  return (
    <Link
      href={`/produto/${props.produto.id}`}
      className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
    >
      <div className="absolute flex justify-end top-2.5 right-2.5">
        <NotaReview nota={props.produto.nota} />
      </div>

      <div className="w-full h-48 relative">
        <Image
          src={produto.imagem}
          fill
          sizes="100%"
          className="object-contain"
          alt="Imagem do Produto"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-3 p-5 border-t border-white/10">
        <span className="text-lg font-semibold">{produto.nome}</span>
        <div className="self-start text-sm border-b border-dashed">
          <span className='whitespace-nowrap'>{produto.especificacoes.destaque}</span>
        </div>

        {/* <div className="flex-1"></div> */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
              de {Moeda.formatar(produto.precoBase)}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
              por {Moeda.formatar(produto.precoPromo)}
          </span>
          <span className="text-zinc-400 text-xs">
            até 6x de {Moeda.formatar(1.5)}
          </span>
        </div>

        <button
          className={`
            flex justify-center items-center gap-2 h-8 text-xs lg:text-base
            bg-violet-700 hover:border-2 border-emerald-500 rounded-full
          `}
          onClick={(e) => {
            e.preventDefault()
            console.log('Adicionar ao carrinho')
            // adicionarItem(props.produto)
          }}
        >
          <IconShoppingCartPlus size={20} />
          <span className='hidden sm:block'>Adicionar</span>
        </button>
      </div>
    </Link>
  )
}
