import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/Infraestructure/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/trainit'),
    UserModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
