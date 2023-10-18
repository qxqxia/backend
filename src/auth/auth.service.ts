import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
// import { User, Bookmark} from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}
    signin() {
        return { msg: 'I have signed in'};
    }. jhhguh b.,b/,gulhjkl;'?>,mnbfyuyiuop';mm.mmm

    signup() {
        return { msg: 'I have signed up'};
    }
}
