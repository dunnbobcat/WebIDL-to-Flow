type XRHandJoint =
  | 'wrist'
  | 'thumb-metacarpal'
  | 'thumb-phalanx-proximal'
  | 'thumb-phalanx-distal'
  | 'thumb-tip'
  | 'index-finger-metacarpal'
  | 'index-finger-phalanx-proximal'
  | 'index-finger-phalanx-intermediate'
  | 'index-finger-phalanx-distal'
  | 'index-finger-tip'
  | 'middle-finger-metacarpal'
  | 'middle-finger-phalanx-proximal'
  | 'middle-finger-phalanx-intermediate'
  | 'middle-finger-phalanx-distal'
  | 'middle-finger-tip'
  | 'ring-finger-metacarpal'
  | 'ring-finger-phalanx-proximal'
  | 'ring-finger-phalanx-intermediate'
  | 'ring-finger-phalanx-distal'
  | 'ring-finger-tip'
  | 'pinky-finger-metacarpal'
  | 'pinky-finger-phalanx-proximal'
  | 'pinky-finger-phalanx-intermediate'
  | 'pinky-finger-phalanx-distal'
  | 'pinky-finger-tip';

/* partial */ declare class XRFrame {
  fillJointRadii(
    jointSpaces: Array<XRJointSpace>,
    radii: Float32Array,
  ): boolean;
  fillPoses(
    spaces: Array<XRSpace>,
    baseSpace: XRSpace,
    transforms: Float32Array,
  ): boolean;
  getJointPose(joint: XRJointSpace, baseSpace: XRSpace): XRJointPose | null;
}

declare class XRHand {
  +size: number;

  @@iterator(): Iterator<XRHandJoint, XRJointSpace>;

  get(key: XRHandJoint): XRJointSpace;
}

/* partial */ declare class XRInputSource {
  +hand: XRHand | null;
}

declare class XRJointPose extends XRPose {
  +radius: number;
}

declare class XRJointSpace extends XRSpace {
  +jointName: XRHandJoint;
}
