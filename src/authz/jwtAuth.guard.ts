import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Aquí puedes añadir lógica personalizada antes de llamar a la implementación del AuthGuard
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // Puedes personalizar el manejo de errores aquí
    if (err || !user) {
      throw err || new UnauthorizedException('No estás autorizado para acceder a este recurso');
    }
    return user;
  }
}
