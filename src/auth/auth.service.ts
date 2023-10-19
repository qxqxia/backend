import { ForbiddenException,
    Injectable,
 } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
// import { User, Bookmark} from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}
    signin(dto: AuthDto) {
        return { msg: 'I have signed in'};
    }

    async signup(dto: AuthDto) {
        // generate the password hash
        const hash = await argon.hash(dto.password);
        // save the new user in the db
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            },
        });
        // return the saved user
        return user;
        // return { msg: 'I have signed up'};
    }
}
