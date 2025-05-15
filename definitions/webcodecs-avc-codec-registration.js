type AvcBitstreamFormat = 'annexb' | 'avc';

type AvcEncoderConfig = {
  format: AvcBitstreamFormat,
};

/* partial */ type VideoEncoderConfig = {
  avc: AvcEncoderConfig,
};

/* partial */ type VideoEncoderEncodeOptions = {
  avc: VideoEncoderEncodeOptionsForAvc,
};

type VideoEncoderEncodeOptionsForAvc = {
  quantizer: number | null,
};
