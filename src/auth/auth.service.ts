import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
// import { User, Bookmark} from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}
    signin(dto: AuthDto) {
        return { msg: 'I have signed in'};
    }

    signup(dto: AuthDto) {
        return { msg: 'I have signed up'};
    }
}
