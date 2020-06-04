import { Injectable } from '@nestjs/common';
import { EmailDTO } from './dto/email.dto';
import { interfaceEmail } from './interface/email.interface';
import { Model } from "mongoose"
import { InjectModel } from "@nestjs/mongoose"

@Injectable()
export class EmailService {
    constructor(@InjectModel("Email") private emailModel : Model<interfaceEmail>){}

    async saveEmail(email : EmailDTO): Promise<void> {
        const newEmail = new this.emailModel(email);
        await newEmail.save();
    }

    async getEmails() : Promise<interfaceEmail[]> {
        return await this.emailModel.find();
    }
}
