import { Controller, Get, Post, Body, HttpStatus, Logger } from '@nestjs/common';
import { interfaceEmail } from './interface/email.interface'
import { EmailService } from './email.service';
import { EmailDTO } from './dto/email.dto';
import { response } from 'express';


@Controller('email')
export class EmailController {
    private logger: Logger = new Logger();

    constructor(private emailservice: EmailService){}

    @Get("getEmails")
    async getEmails(): Promise<interfaceEmail[]> {
      return await this.emailservice.getEmails();
    }
    

    @Post("saveEmail")
    saveEmail(@Body() emailDTO : any) : any {
       this.logger.log(emailDTO, 'incoming dto');
      this.emailservice.saveEmail(emailDTO);
      return response.status(HttpStatus.OK);
  }

}
