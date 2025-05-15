type LoginStatus = 'logged-in' | 'logged-out';

/* partial */ declare class Navigator {
  +login: NavigatorLogin;
}

declare class NavigatorLogin {
  setStatus(status: LoginStatus): Promise<void>;
}
