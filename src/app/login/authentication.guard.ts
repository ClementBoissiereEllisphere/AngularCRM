import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "./authentication.service";

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authentService = inject(AuthenticationService);
  const router = inject(Router)
  if (authentService.authenticated)
    return true;
  router.navigateByUrl('/login');
  return false;

};
