import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { Auth } from './decorators/auth.decorator';
import { AuthType } from './enums/auth-type.enum';
import { RefreshTokenDTO } from './dto/refresh-token.dto';

@Auth(AuthType.none)
@Controller('authentication')
export class AuthenticationController {

    constructor(private readonly authenticationService: AuthenticationService) {}

    @Post('sign-up')
    signUp(@Body() signUpDto: SignUpDto) {
        return this.authenticationService.signUp(signUpDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('sign-in')
    signIn(@Body() signInDto: SignInDto) {
        return this.authenticationService.signIn(signInDto);
    }


    @HttpCode(HttpStatus.OK)
    @Post('refresh-token')
    refreshToken(@Body() refreshToken: RefreshTokenDTO) {
        return this.authenticationService.refreshTokens(refreshToken);
    }


    /*
    @HttpCode(HttpStatus.OK)
    @Post('sign-in')
    async signIn(@Res({passthrough:true}) response:Response, @Body() signInDto: SignInDto) {
        const accessToken = await this.authenticationService.signIn(signInDto);

        response.cookie('accessToken', accessToken, {
            secure: true,
            httpOnly: true,
            sameSite: true,
          });
        
        }
    */
}
