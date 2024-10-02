import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProdutosModule } from './produtos/produtos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [ProdutosModule, PedidosModule, DbModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
