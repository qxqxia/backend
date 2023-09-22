import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authServive: AuthService) {}

    @Post('signup')
    signup() {
        // return 'I am signed up';
        return this.authServive.signup()
    }
    @Post('signin')
    signin() {
        // return 'I am signed in';
        return this.authServive.signin()
    }

}