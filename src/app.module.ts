import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';
import { MongooseModule } from "@nestjs/mongoose"

@Module({
  imports: [EmailModule, AppModule
    , MongooseModule.forRoot((process.env.MONGODB_URL || 'mongodb+srv://abarrantes:abarrantes123*@cluster0-36mak.mongodb.net/test?retryWrites=true&w=majority'), { useFindAndModify: true, useUnifiedTopology: true })],
  providers: [],
})
export class AppModule {}
