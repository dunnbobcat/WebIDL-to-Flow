type MockCapturePromptResult = 'granted' | 'denied';

type MockCameraConfiguration = {
  defaultFrameRate: number,
  deviceId: string,
  facingMode: string,
  groupId: string,
  label: string,
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
  deviceId: string,
  groupId: string,
  label: string,
};
