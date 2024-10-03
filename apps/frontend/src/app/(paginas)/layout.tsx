import { ReactNode } from 'react';
import Pagina from '@/components/template/Pagina';
import { ProvedorProdutos } from '@/data/contexts/ContextoProdutos';
import { ProvedorCarrinho } from '@/data/contexts/ContextoCarrinho';
import { ProvedorPagamento } from '@/data/contexts/ContextoPagamento';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <ProvedorProdutos>
      <ProvedorCarrinho>
        <ProvedorPagamento>
          <Pagina>{ children }</Pagina>
        </ProvedorPagamento>
      </ProvedorCarrinho>
    </ProvedorProdutos>
  )
}
