import {Document} from "mongoose"

export interface interfaceEmail extends Document{
    readonly email: string;
    readonly timestamp: number;
    readonly "smtp-id": string;
    readonly event: string;
    readonly category: string;
    readonly "sg_event_id": string;
    readonly "sg_message_id": string;
    readonly "response": string;
}