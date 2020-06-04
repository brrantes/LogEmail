import { Schema } from "mongoose";

export const EmailSchema = new Schema({
    email: String,
    timestamp: Number,
    "smtp-id": String,
    event: String,
    category: String,
    "sg_event_id": String,
    "sg_message_id": String,
    "response": String
});