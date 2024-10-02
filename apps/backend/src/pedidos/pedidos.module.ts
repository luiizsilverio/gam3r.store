import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidoPrisma } from './pedidos.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [PedidosController],
  providers: [PedidoPrisma]
})
export class PedidosModule {}
