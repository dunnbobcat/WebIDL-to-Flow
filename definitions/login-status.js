type LoginStatus = 'logged-in' | 'logged-out';

/* partial */ interface Navigator {
  +login: NavigatorLogin;
}

declare class NavigatorLogin {
  setStatus(status: LoginStatus): void;
}
