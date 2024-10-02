import Image from 'next/image';
import { Produto } from '@gstore/core';
import Especificacoes from './Especificacoes';

export interface InformacoesProdutoProps {
  produto: Produto;
}

export default function InformacoesProduto({ produto }: InformacoesProdutoProps) {
  return produto ? (
    <div className="flex flex-col md:flex-row items-center bg-violet-dark rounded-xl p-5">
      <div className="flex-1 relative flex justify-center h-96">
        <Image
          src={produto.imagem!}
          fill
          sizes="100%"
          className="object-cover p-4"
          alt="Imagem do Produto"
        />
      </div>
      <Especificacoes produto={produto!} />
    </div>
  ) : null
}
