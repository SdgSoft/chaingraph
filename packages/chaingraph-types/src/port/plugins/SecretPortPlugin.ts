/*
 * Copyright (c) 2025 BadLabs
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSE.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License, use of this software will be governed by the Apache License, version 2.0.
 */
//
// import type { JSONValue } from '../../utils/json'
// import type { IPortPlugin, SecretPortConfig, SecretPortValue } from '../base'
// import type { SecretType } from '../base/secret'
// import { z } from 'zod'
// import { ExecutionContext } from '../../execution'
// import { basePortConfigSchema, PortError, PortErrorType } from '../base'
// import { deserialize, serialize } from '../base/secret'
//
// /**
//  * Config schema for secret port.
//  */
// const configSchema = basePortConfigSchema.merge(z.object({
//   type: z.literal('secret'),
//   secretType: z.union([
//     z.literal('openai'),
//     z.literal('xAPI'),
//     z.literal('xApp'),
//     z.literal('string'),
//   ]) as z.ZodType<SecretType>,
//   defaultValue: z.undefined(),
// })) as z.ZodType<SecretPortConfig>
//
// /**
//  * Value schema for secret ports.
//  */
// const valueSchema: z.ZodType<SecretPortValue> = z.object({
//   decrypt: z.function().args(z.instanceof(ExecutionContext)).returns(z.promise(z.any())),
//   encrypted: z.instanceof(ArrayBuffer),
//   publicKey: z.instanceof(CryptoKey),
// })
//
// /**
//  * Plugin implementation for secret ports.
//  */
// export const SecretPortPlugin: IPortPlugin<'secret'> = {
//   typeIdentifier: 'secret',
//   configSchema,
//   valueSchema,
//   serializeValue<T extends SecretType>(value: SecretPortValue<T>, config: SecretPortConfig<T>): JSONValue {
//     try {
//       return serialize(config.secretType, value)
//     } catch (e) {
//       throw new PortError(
//         PortErrorType.SerializationError,
//         e instanceof Error ? e.message : 'Unknown error during secret value serialization',
//       )
//     }
//   },
//   deserializeValue<T extends SecretType>(data: JSONValue, config: SecretPortConfig<T>): SecretPortValue<T> {
//     try {
//       return deserialize(config.secretType, data)
//     } catch (e) {
//       throw new PortError(
//         PortErrorType.SerializationError,
//         e instanceof Error ? e.message : 'Unknown error during secret value deserialization',
//       )
//     }
//   },
//   serializeConfig<T extends SecretType>(config: SecretPortConfig<T>): JSONValue {
//     return config
//   },
//   deserializeConfig<T extends SecretType>(data: JSONValue): SecretPortConfig<T> {
//     const result = configSchema.safeParse(data)
//     if (!result.success) {
//       throw new PortError(
//         PortErrorType.SerializationError,
//         'Invalid secret configuration for deserialization',
//         result.error,
//       )
//     }
//
//     return result.data as SecretPortConfig<T>
//   },
//   validateValue<T extends SecretType>(value: SecretPortValue<T>, config: SecretPortConfig<T>): string[] {
//     const result = valueSchema.safeParse(value)
//     if (!result.success) {
//       return result.error.errors.map(issue => issue.message)
//     }
//
//     return []
//   },
//   validateConfig<T extends SecretType>(config: SecretPortConfig<T>): string[] {
//     const result = configSchema.safeParse(config)
//     if (!result.success) {
//       return result.error.errors.map(issue => issue.message)
//     }
//
//     return []
//   },
// } satisfies IPortPlugin<'secret'>
