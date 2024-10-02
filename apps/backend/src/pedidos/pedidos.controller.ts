import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PedidoPrisma } from './pedidos.prisma';
import { Pedido } from '@gstore/core';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly repo: PedidoPrisma) {}

  @Post()
  async salvar(@Body() pedido: Pedido) {
    return this.repo.salvar(pedido);
  }

  @Get()
  async obterPedidos() {
    return this.repo.obter();
  }

  @Get(':id')
  async obterPedidoPorId(@Param('id') id: string) {
    return this.repo.obterPorId(+id);
  }

  @Delete(':id')
  async excluirPedido(@Param('id') id: string) {
    return this.repo.excluir(+id);
  }
}
