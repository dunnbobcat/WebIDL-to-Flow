type AacBitstreamFormat = 'aac' | 'adts';

type AacEncoderConfig = {
  format: AacBitstreamFormat,
};

/* partial */ type AudioEncoderConfig = {
  aac: AacEncoderConfig,
};
