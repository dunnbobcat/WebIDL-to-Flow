type HevcBitstreamFormat = 'annexb' | 'hevc';

type HevcEncoderConfig = {
  format: HevcBitstreamFormat,
};

/* partial */ type VideoEncoderConfig = {
  hevc: HevcEncoderConfig,
};

/* partial */ type VideoEncoderEncodeOptions = {
  hevc: VideoEncoderEncodeOptionsForHevc,
};

type VideoEncoderEncodeOptionsForHevc = {
  quantizer: number | null,
};
