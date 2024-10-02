import { Produto } from '@gstore/core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrisma {

  constructor (readonly prisma: PrismaProvider) {}

  async obter(): Promise<Produto[] | null> {
    const produtos = await this.prisma.produto.findMany();
    return produtos as any ?? null;
  }

  async obterPorId(id: number): Promise<Produto | null> {
    const produto = await this.prisma.produto.findUnique({ where: { id } });
    return produto as any ?? null;
  }

  async excluir(id: number) {
    await this.prisma.produto.delete({ where: { id } });

  }

  async salvar(produto: Produto): Promise<void> {
    await this.prisma.produto.upsert({
      where: { id: produto.id ?? -1 },
      update: produto,
      create: produto,
    })
  }
}
