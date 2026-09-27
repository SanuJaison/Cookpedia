import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (sessionStorage.getItem('user') && sessionStorage.getItem('token')) {
    const user = JSON.parse(sessionStorage.getItem('user') || '');
    if (user.role == 'user') {
      return true;
    } else {
      alert('Unauthorized access');
      return false;
    }
  } else {
    alert('Unauthorized access pls login');
    router.navigateByUrl('/login');
    return false;
  }
};
