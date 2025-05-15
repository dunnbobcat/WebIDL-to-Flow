type AutoplayPolicy = 'allowed' | 'allowed-muted' | 'disallowed';

type AutoplayPolicyMediaType = 'mediaelement' | 'audiocontext';

/* partial */ declare class Navigator {
  getAutoplayPolicy(type: AutoplayPolicyMediaType): AutoplayPolicy;
  getAutoplayPolicy(element: HTMLMediaElement): AutoplayPolicy;
  getAutoplayPolicy(context: AudioContext): AutoplayPolicy;
}
