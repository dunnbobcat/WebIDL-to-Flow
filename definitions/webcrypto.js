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
  iv: BufferSource,
};

type AesCtrParams = {
  counter: BufferSource,
  length: number,
};

type AesDerivedKeyParams = {
  length: number,
};

type AesGcmParams = {
  additionalData: BufferSource,
  iv: BufferSource,
  tagLength: number,
};

type AesKeyAlgorithm = {
  length: number,
};

type AesKeyGenParams = {
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
  public: CryptoKey,
};

type EcdsaParams = {
  hash: HashAlgorithmIdentifier,
};

type EcKeyAlgorithm = {
  namedCurve: NamedCurve,
};

type EcKeyGenParams = {
  namedCurve: NamedCurve,
};

type EcKeyImportParams = {
  namedCurve: NamedCurve,
};

type HkdfParams = {
  hash: HashAlgorithmIdentifier,
  info: BufferSource,
  salt: BufferSource,
};

type HmacImportParams = {
  hash: HashAlgorithmIdentifier,
  length: number,
};

type HmacKeyAlgorithm = {
  hash: KeyAlgorithm,
  length: number,
};

type HmacKeyGenParams = {
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
  hash: HashAlgorithmIdentifier,
  iterations: number,
  salt: BufferSource,
};

type RsaHashedImportParams = {
  hash: HashAlgorithmIdentifier,
};

type RsaHashedKeyAlgorithm = {
  hash: KeyAlgorithm,
};

type RsaHashedKeyGenParams = {
  hash: HashAlgorithmIdentifier,
};

type RsaKeyAlgorithm = {
  modulusLength: number,
  publicExponent: BigInteger,
};

type RsaKeyGenParams = {
  modulusLength: number,
  publicExponent: BigInteger,
};

type RsaOaepParams = {
  label: BufferSource,
};

type RsaOtherPrimesInfo = {
  d: string,
  r: string,
  t: string,
};

type RsaPssParams = {
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
  ): ArrayBuffer;
  deriveBits(
    algorithm: AlgorithmIdentifier,
    baseKey: CryptoKey,
    length?: number | null,
  ): ArrayBuffer;
  deriveKey(
    algorithm: AlgorithmIdentifier,
    baseKey: CryptoKey,
    derivedKeyType: AlgorithmIdentifier,
    extractable: boolean,
    keyUsages: Array<KeyUsage>,
  ): CryptoKey;
  digest(algorithm: AlgorithmIdentifier, data: BufferSource): ArrayBuffer;
  encrypt(
    algorithm: AlgorithmIdentifier,
    key: CryptoKey,
    data: BufferSource,
  ): ArrayBuffer;
  exportKey(format: KeyFormat, key: CryptoKey): ArrayBuffer | JsonWebKey;
  generateKey(
    algorithm: AlgorithmIdentifier,
    extractable: boolean,
    keyUsages: Array<KeyUsage>,
  ): CryptoKey | CryptoKeyPair;
  importKey(
    format: KeyFormat,
    keyData: BufferSource | JsonWebKey,
    algorithm: AlgorithmIdentifier,
    extractable: boolean,
    keyUsages: Array<KeyUsage>,
  ): CryptoKey;
  sign(
    algorithm: AlgorithmIdentifier,
    key: CryptoKey,
    data: BufferSource,
  ): ArrayBuffer;
  unwrapKey(
    format: KeyFormat,
    wrappedKey: BufferSource,
    unwrappingKey: CryptoKey,
    unwrapAlgorithm: AlgorithmIdentifier,
    unwrappedKeyAlgorithm: AlgorithmIdentifier,
    extractable: boolean,
    keyUsages: Array<KeyUsage>,
  ): CryptoKey;
  verify(
    algorithm: AlgorithmIdentifier,
    key: CryptoKey,
    signature: BufferSource,
    data: BufferSource,
  ): boolean;
  wrapKey(
    format: KeyFormat,
    key: CryptoKey,
    wrappingKey: CryptoKey,
    wrapAlgorithm: AlgorithmIdentifier,
  ): ArrayBuffer;
}

/* partial */ declare class mixin$WindowOrWorkerGlobalScope {
  +crypto: Crypto;
}
