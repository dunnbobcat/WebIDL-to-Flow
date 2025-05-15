/* partial */ type AudioEncoderConfig = {
  flac: FlacEncoderConfig,
};

type FlacEncoderConfig = {
  blockSize: number,
  compressLevel: number,
};
