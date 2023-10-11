import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountantEntity } from './accountant/entities/accountant.entity';
import { ExchangeEntity } from './exchange/entities/exchange.entity';
import { AuditorEntity } from './auditor/entities/auditor.entity';
import { AgencyEntity } from './agency/entities/agency.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // You need to get these values ​​from .env, but it's not really necessary in this case :/
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'pass',
      database: 'db',
      autoLoadEntities: true,
      entities: [AccountantEntity, ExchangeEntity, AuditorEntity, AgencyEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
