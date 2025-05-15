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
  name: string,
};

type AesCtrParams = {
  counter: BufferSource,
  length: number,
  name: string,
};

type AesDerivedKeyParams = {
  length: number,
  name: string,
};

type AesGcmParams = {
  additionalData: BufferSource,
  iv: BufferSource,
  name: string,
  tagLength: number,
};

type AesKeyAlgorithm = {
  length: number,
  name: string,
};

type AesKeyGenParams = {
  length: number,
  name: string,
};

type Algorithm = {
  name: string,
};

type CryptoKeyPair = {
  privateKey: CryptoKey,
  publicKey: CryptoKey,
};

type EcdhKeyDeriveParams = {
  name: string,
  public: CryptoKey,
};

type EcdsaParams = {
  hash: HashAlgorithmIdentifier,
  name: string,
};

type EcKeyAlgorithm = {
  name: string,
  namedCurve: NamedCurve,
};

type EcKeyGenParams = {
  name: string,
  namedCurve: NamedCurve,
};

type EcKeyImportParams = {
  name: string,
  namedCurve: NamedCurve,
};

type HkdfParams = {
  hash: HashAlgorithmIdentifier,
  info: BufferSource,
  name: string,
  salt: BufferSource,
};

type HmacImportParams = {
  hash: HashAlgorithmIdentifier,
  length: number,
  name: string,
};

type HmacKeyAlgorithm = {
  hash: KeyAlgorithm,
  length: number,
  name: string,
};

type HmacKeyGenParams = {
  hash: HashAlgorithmIdentifier,
  length: number,
  name: string,
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
  name: string,
  salt: BufferSource,
};

type RsaHashedImportParams = {
  hash: HashAlgorithmIdentifier,
  name: string,
};

type RsaHashedKeyAlgorithm = {
  hash: KeyAlgorithm,
  modulusLength: number,
  name: string,
  publicExponent: BigInteger,
};

type RsaHashedKeyGenParams = {
  hash: HashAlgorithmIdentifier,
  modulusLength: number,
  name: string,
  publicExponent: BigInteger,
};

type RsaKeyAlgorithm = {
  modulusLength: number,
  name: string,
  publicExponent: BigInteger,
};

type RsaKeyGenParams = {
  modulusLength: number,
  name: string,
  publicExponent: BigInteger,
};

type RsaOaepParams = {
  label: BufferSource,
  name: string,
};

type RsaOtherPrimesInfo = {
  d: string,
  r: string,
  t: string,
};

type RsaPssParams = {
  name: string,
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
