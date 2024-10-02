import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos.controller';
import { DbModule } from 'src/db/db.module';
import { ProdutoPrisma } from './produto.prisma.ts';

@Module({
  imports: [DbModule],
  controllers: [ProdutosController],
  providers: [ProdutoPrisma]
})
export class ProdutosModule {}
