import { Controller, Post, Body, ParseIntPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authServive: AuthService) {}

    @Post('signup')
    signup(@Body('email') email: string, @Body('password', ParseIntPipe) password: string,) {
        console.log({
            email,
            typeOfEmail: typeof email,
            password,
            typeOfPassword: typeof password,
        });
        return this.authServive.signup();
    }
    @Post('signin')
    signin() {
        // return 'I am signed in';
        return this.authServive.signin()
    }

}