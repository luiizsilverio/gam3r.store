import { ReactNode } from 'react';
import Pagina from '@/components/template/Pagina';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Pagina>{ children }</Pagina>
  )
}
