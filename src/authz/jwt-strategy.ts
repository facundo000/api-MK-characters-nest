import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
        super({
          secretOrKeyProvider: passportJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: `${configService.get('AUTH0_DOMAIN')}.well-known/jwks.json`,
          }),
    
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          audience: configService.get('AUTH0_AUDIENCE'),
          issuer: `${configService.get('AUTH0_DOMAIN')}`,
          algorithms: ['RS256'],
        });
    }
    
    validate(payload: any): unknown {
      return {
          userId: payload.sub,
          username: payload.nickname || payload.name,
          email: payload.email,
          permissions: payload.permissions || [],
        };
    }
}
