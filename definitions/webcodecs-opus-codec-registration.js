type OpusApplication = 'voip' | 'audio' | 'lowdelay';

type OpusBitstreamFormat = 'opus' | 'ogg';

type OpusSignal = 'auto' | 'music' | 'voice';

/* partial */ type AudioEncoderConfig = {
  opus: OpusEncoderConfig,
};

type OpusEncoderConfig = {
  application: OpusApplication,
  complexity: number,
  format: OpusBitstreamFormat,
  frameDuration: number,
  packetlossperc: number,
  signal: OpusSignal,
  usedtx: boolean,
  useinbandfec: boolean,
};
