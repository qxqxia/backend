import { ForbiddenException,
    Injectable,
 } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { User, Bookmark} from '@prisma/client';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

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
       try {const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            },
            // select: {
            //     id: true,
            //     email: true,
            //     createAt: true,
            // },
        });
        delete user.hash;      
        // return the saved user
        return user;
        } catch (error){
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002'){
                    throw new ForbiddenException(
                        'Credentials taken',
                    );
                }
            }
            throw error;
        }     
    }
}
