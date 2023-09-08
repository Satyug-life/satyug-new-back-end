import { Auth } from './auth.entity';

export const AuthProviders = [
    {
        provide: "AUTH",
        useValue: Auth,
      },
]