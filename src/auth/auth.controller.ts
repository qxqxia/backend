import { Controller, Post, Body, ParseIntPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authServive: AuthService) {}

    @Post('signup')
    signup(@Body() dto: AuthDto) {
        console.log({
            dto,
        });
        return this.authServive.signup(dto);
    }
    @Post('signin')
    signin(@Body() dto: AuthDto) {
        // return 'I am signed in';
        return this.authServive.signin(dto);
    }

}