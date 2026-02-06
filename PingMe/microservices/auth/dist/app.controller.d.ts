import { AppService } from './app.service';
import { AuthDto } from './dto/auth.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    login(credential: AuthDto): Promise<string>;
    validateToken(token: string): Promise<{
        valid: boolean;
        userId: any;
        role: any;
    }>;
}
