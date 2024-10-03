import { useContext } from 'react';
import ContextoCarrinho from '../contexts/ContextoCarrinho';

const useCarrinho = () => {
  return useContext(ContextoCarrinho);
}

export default useCarrinho;

