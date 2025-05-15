type AlgorithmIdentifier = Object | string;

type BigInteger = Uint8Array;

type HashAlgorithmIdentifier = AlgorithmIdentifier;

type NamedCurve = string;

type KeyFormat = 'raw' | 'spki' | 'pkcs8' | 'jwk';

type KeyType = 'public' | 'private' | 'secret';

type KeyUsage =
  | 'encrypt'
  | 'decrypt'
  | 'sign'
  | 'verify'
  | 'deriveKey'
  | 'deriveBits'
  | 'wrapKey'
  | 'unwrapKey';

type AesCbcParams = {
  ...Algorithm,
  iv: BufferSource,
};

type AesCtrParams = {
  ...Algorithm,
  counter: BufferSource,
  length: number,
};

type AesDerivedKeyParams = {
  ...Algorithm,
  length: number,
};

type AesGcmParams = {
  ...Algorithm,
  additionalData: BufferSource,
  iv: BufferSource,
  tagLength: number,
};

type AesKeyAlgorithm = {
  ...KeyAlgorithm,
  length: number,
};

type AesKeyGenParams = {
  ...Algorithm,
  length: number,
};

type Algorithm = {
  name: string,
};

type CryptoKeyPair = {
  privateKey: CryptoKey,
  publicKey: CryptoKey,
};

type EcdhKeyDeriveParams = {
  ...Algorithm,
  public: CryptoKey,
};

type EcdsaParams = {
  ...Algorithm,
  hash: HashAlgorithmIdentifier,
};

type EcKeyAlgorithm = {
  ...KeyAlgorithm,
  namedCurve: NamedCurve,
};

type EcKeyGenParams = {
  ...Algorithm,
  namedCurve: NamedCurve,
};

type EcKeyImportParams = {
  ...Algorithm,
  namedCurve: NamedCurve,
};

type HkdfParams = {
  ...Algorithm,
  hash: HashAlgorithmIdentifier,
  info: BufferSource,
  salt: BufferSource,
};

type HmacImportParams = {
  ...Algorithm,
  hash: HashAlgorithmIdentifier,
  length: number,
};

type HmacKeyAlgorithm = {
  ...KeyAlgorithm,
  hash: KeyAlgorithm,
  length: number,
};

type HmacKeyGenParams = {
  ...Algorithm,
  hash: HashAlgorithmIdentifier,
  length: number,
};

type JsonWebKey = {
  alg: string,
  crv: string,
  d: string,
  dp: string,
  dq: string,
  e: string,
  ext: boolean,
  k: string,
  key_ops: Array<string>,
  kty: string,
  n: string,
  oth: Array<RsaOtherPrimesInfo>,
  p: string,
  q: string,
  qi: string,
  use: string,
  x: string,
  y: string,
};

type KeyAlgorithm = {
  name: string,
};

type Pbkdf2Params = {
  ...Algorithm,
  hash: HashAlgorithmIdentifier,
  iterations: number,
  salt: BufferSource,
};

type RsaHashedImportParams = {
  ...Algorithm,
  hash: HashAlgorithmIdentifier,
};

type RsaHashedKeyAlgorithm = {
  ...RsaKeyAlgorithm,
  hash: KeyAlgorithm,
};

type RsaHashedKeyGenParams = {
  ...RsaKeyGenParams,
  hash: HashAlgorithmIdentifier,
};

type RsaKeyAlgorithm = {
  ...KeyAlgorithm,
  modulusLength: number,
  publicExponent: BigInteger,
};

type RsaKeyGenParams = {
  ...Algorithm,
  modulusLength: number,
  publicExponent: BigInteger,
};

type RsaOaepParams = {
  ...Algorithm,
  label: BufferSource,
};

type RsaOtherPrimesInfo = {
  d: string,
  r: string,
  t: string,
};

type RsaPssParams = {
  ...Algorithm,
  saltLength: number,
};

declare class Crypto {
  +subtle: SubtleCrypto;

  getRandomValues(array: ArrayBufferView): ArrayBufferView;
  randomUUID(): string;
}

declare class CryptoKey {
  +algorithm: Object;
  +extractable: boolean;
  +type: KeyType;
  +usages: Object;
}

declare class SubtleCrypto {
  decrypt(
    algorithm: AlgorithmIdentifier,
    key: CryptoKey,
    data: BufferSource,
  ): Promise<ArrayBuffer>;
  deriveBits(
    algorithm: AlgorithmIdentifier,
    baseKey: CryptoKey,
    length?: number | null,
  ): Promise<ArrayBuffer>;
  deriveKey(
    algorithm: AlgorithmIdentifier,
    baseKey: CryptoKey,
    derivedKeyType: AlgorithmIdentifier,
    extractable: boolean,
    keyUsages: Array<KeyUsage>,
  ): Promise<CryptoKey>;
  digest(
    algorithm: AlgorithmIdentifier,
    data: BufferSource,
  ): Promise<ArrayBuffer>;
  encrypt(
    algorithm: AlgorithmIdentifier,
    key: CryptoKey,
    data: BufferSource,
  ): Promise<ArrayBuffer>;
  exportKey(
    format: KeyFormat,
    key: CryptoKey,
  ): Promise<ArrayBuffer | JsonWebKey>;
  generateKey(
    algorithm: AlgorithmIdentifier,
    extractable: boolean,
    keyUsages: Array<KeyUsage>,
  ): Promise<CryptoKey | CryptoKeyPair>;
  importKey(
    format: KeyFormat,
    keyData: BufferSource | JsonWebKey,
    algorithm: AlgorithmIdentifier,
    extractable: boolean,
    keyUsages: Array<KeyUsage>,
  ): Promise<CryptoKey>;
  sign(
    algorithm: AlgorithmIdentifier,
    key: CryptoKey,
    data: BufferSource,
  ): Promise<ArrayBuffer>;
  unwrapKey(
    format: KeyFormat,
    wrappedKey: BufferSource,
    unwrappingKey: CryptoKey,
    unwrapAlgorithm: AlgorithmIdentifier,
    unwrappedKeyAlgorithm: AlgorithmIdentifier,
    extractable: boolean,
    keyUsages: Array<KeyUsage>,
  ): Promise<CryptoKey>;
  verify(
    algorithm: AlgorithmIdentifier,
    key: CryptoKey,
    signature: BufferSource,
    data: BufferSource,
  ): Promise<boolean>;
  wrapKey(
    format: KeyFormat,
    key: CryptoKey,
    wrappingKey: CryptoKey,
    wrapAlgorithm: AlgorithmIdentifier,
  ): Promise<ArrayBuffer>;
}

/* partial */ declare class mixin$WindowOrWorkerGlobalScope {
  +crypto: Crypto;
}
