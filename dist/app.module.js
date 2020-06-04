"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const email_module_1 = require("./email/email.module");
const mongoose_1 = require("@nestjs/mongoose");
let AppModule = (() => {
    var AppModule_1;
    let AppModule = AppModule_1 = class AppModule {
    };
    AppModule = AppModule_1 = __decorate([
        common_1.Module({
            imports: [email_module_1.EmailModule, AppModule_1,
                mongoose_1.MongooseModule.forRoot((process.env.MONGODB_URL || 'mongodb+srv://abarrantes:abarrantes123*@cluster0-36mak.mongodb.net/test?retryWrites=true&w=majority'), { useFindAndModify: true, useUnifiedTopology: true })],
            providers: [],
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map