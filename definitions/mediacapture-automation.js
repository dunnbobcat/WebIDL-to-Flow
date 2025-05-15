type MockCapturePromptResult = 'granted' | 'denied';

type MockCameraConfiguration = {
  defaultFrameRate: number,
  facingMode: string,
};

type MockCaptureDeviceConfiguration = {
  deviceId: string,
  groupId: string,
  label: string,
};

type MockCapturePromptResultConfiguration = {
  getDisplayMedia: MockCapturePromptResult,
  getUserMedia: MockCapturePromptResult,
};

type MockMicrophoneConfiguration = {
  defaultSampleRate: number,
};
