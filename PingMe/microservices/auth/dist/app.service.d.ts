import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AppService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(credential: AuthDto): Promise<string>;
    validateToken(token: string): Promise<{
        valid: boolean;
        userId: any;
        role: any;
    }>;
}
