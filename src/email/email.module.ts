import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { EmailSchema } from './schemas/email.schema';
import { MongooseModule } from "@nestjs/mongoose"

@Module({
    imports: [MongooseModule.forFeature([
        {name: "Email", schema: EmailSchema}
    ])],
    controllers: [EmailController],
    providers: [EmailService]
})
export class EmailModule {}
