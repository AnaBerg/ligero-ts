import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class ApiAccessGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const headers: Record<string, string | undefined> = request.headers ?? {};

    const isDev = process.env.NODE_ENV !== 'production';
    const isFrontend = headers['x-backend-auth'] === 'true';

    if (isFrontend || isDev) {
      return true;
    }

    return false;
  }
}
