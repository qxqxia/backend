import { Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authServive: AuthService) {}

    @Post('signup')
    signup(@Req() req: Request) {
        console.log(req.body);
        // return 'I am signed up';
        return this.authServive.signup();
    }
    @Post('signin')
    signin() {
        // return 'I am signed in';
        return this.authServive.signin()
    }

}