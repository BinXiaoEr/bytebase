/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../google/protobuf/empty";
import { FieldMask } from "../google/protobuf/field_mask";
import { Timestamp } from "../google/protobuf/timestamp";
import { SQLReviewRule } from "./org_policy_service";

export const protobufPackage = "bytebase.v1";

export interface ListReviewConfigsRequest {
  /**
   * The maximum number of sql review to return. The service may return fewer than
   * this value.
   * If unspecified, at most 50 sql review will be returned.
   * The maximum value is 1000; values above 1000 will be coerced to 1000.
   */
  pageSize: number;
  /**
   * A page token, provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListSQLReviews` must match
   * the call that provided the page token.
   */
  pageToken: string;
}

export interface ListReviewConfigsResponse {
  /** The sql review from the specified request. */
  reviewConfigs: ReviewConfig[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
}

export interface CreateReviewConfigRequest {
  /** The sql review to create. */
  reviewConfig: ReviewConfig | undefined;
}

export interface UpdateReviewConfigRequest {
  /**
   * The sql review toupdate.
   *
   * The name field is used to identify the sql review to update.
   */
  reviewConfig:
    | ReviewConfig
    | undefined;
  /** The list of fields to update. */
  updateMask: string[] | undefined;
}

export interface GetReviewConfigRequest {
  /**
   * The name of the sql review to retrieve.
   * Format: reviewConfigs/{uid}
   */
  name: string;
}

export interface DeleteReviewConfigRequest {
  /**
   * The name of the sql review to delete.
   * Format: reviewConfigs/{uid}
   */
  name: string;
}

export interface ReviewConfig {
  /**
   * The name of the sql review to retrieve.
   * Format: reviewConfigs/{uid}
   */
  name: string;
  title: string;
  enabled: boolean;
  /** Format: users/hello@world.com */
  creator: string;
  createTime: Date | undefined;
  updateTime: Date | undefined;
  rules: SQLReviewRule[];
  /**
   * resources using the config.
   * Format: {resurce}/{resource id}, for example, environments/test.
   */
  resources: string[];
}

function createBaseListReviewConfigsRequest(): ListReviewConfigsRequest {
  return { pageSize: 0, pageToken: "" };
}

export const ListReviewConfigsRequest = {
  encode(message: ListReviewConfigsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListReviewConfigsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListReviewConfigsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListReviewConfigsRequest {
    return {
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: ListReviewConfigsRequest): unknown {
    const obj: any = {};
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListReviewConfigsRequest>): ListReviewConfigsRequest {
    return ListReviewConfigsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListReviewConfigsRequest>): ListReviewConfigsRequest {
    const message = createBaseListReviewConfigsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListReviewConfigsResponse(): ListReviewConfigsResponse {
  return { reviewConfigs: [], nextPageToken: "" };
}

export const ListReviewConfigsResponse = {
  encode(message: ListReviewConfigsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reviewConfigs) {
      ReviewConfig.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListReviewConfigsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListReviewConfigsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reviewConfigs.push(ReviewConfig.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListReviewConfigsResponse {
    return {
      reviewConfigs: globalThis.Array.isArray(object?.reviewConfigs)
        ? object.reviewConfigs.map((e: any) => ReviewConfig.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListReviewConfigsResponse): unknown {
    const obj: any = {};
    if (message.reviewConfigs?.length) {
      obj.reviewConfigs = message.reviewConfigs.map((e) => ReviewConfig.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListReviewConfigsResponse>): ListReviewConfigsResponse {
    return ListReviewConfigsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListReviewConfigsResponse>): ListReviewConfigsResponse {
    const message = createBaseListReviewConfigsResponse();
    message.reviewConfigs = object.reviewConfigs?.map((e) => ReviewConfig.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseCreateReviewConfigRequest(): CreateReviewConfigRequest {
  return { reviewConfig: undefined };
}

export const CreateReviewConfigRequest = {
  encode(message: CreateReviewConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reviewConfig !== undefined) {
      ReviewConfig.encode(message.reviewConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateReviewConfigRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateReviewConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reviewConfig = ReviewConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateReviewConfigRequest {
    return { reviewConfig: isSet(object.reviewConfig) ? ReviewConfig.fromJSON(object.reviewConfig) : undefined };
  },

  toJSON(message: CreateReviewConfigRequest): unknown {
    const obj: any = {};
    if (message.reviewConfig !== undefined) {
      obj.reviewConfig = ReviewConfig.toJSON(message.reviewConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateReviewConfigRequest>): CreateReviewConfigRequest {
    return CreateReviewConfigRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateReviewConfigRequest>): CreateReviewConfigRequest {
    const message = createBaseCreateReviewConfigRequest();
    message.reviewConfig = (object.reviewConfig !== undefined && object.reviewConfig !== null)
      ? ReviewConfig.fromPartial(object.reviewConfig)
      : undefined;
    return message;
  },
};

function createBaseUpdateReviewConfigRequest(): UpdateReviewConfigRequest {
  return { reviewConfig: undefined, updateMask: undefined };
}

export const UpdateReviewConfigRequest = {
  encode(message: UpdateReviewConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reviewConfig !== undefined) {
      ReviewConfig.encode(message.reviewConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateReviewConfigRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateReviewConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reviewConfig = ReviewConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateReviewConfigRequest {
    return {
      reviewConfig: isSet(object.reviewConfig) ? ReviewConfig.fromJSON(object.reviewConfig) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateReviewConfigRequest): unknown {
    const obj: any = {};
    if (message.reviewConfig !== undefined) {
      obj.reviewConfig = ReviewConfig.toJSON(message.reviewConfig);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateReviewConfigRequest>): UpdateReviewConfigRequest {
    return UpdateReviewConfigRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateReviewConfigRequest>): UpdateReviewConfigRequest {
    const message = createBaseUpdateReviewConfigRequest();
    message.reviewConfig = (object.reviewConfig !== undefined && object.reviewConfig !== null)
      ? ReviewConfig.fromPartial(object.reviewConfig)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseGetReviewConfigRequest(): GetReviewConfigRequest {
  return { name: "" };
}

export const GetReviewConfigRequest = {
  encode(message: GetReviewConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetReviewConfigRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetReviewConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetReviewConfigRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetReviewConfigRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetReviewConfigRequest>): GetReviewConfigRequest {
    return GetReviewConfigRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetReviewConfigRequest>): GetReviewConfigRequest {
    const message = createBaseGetReviewConfigRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseDeleteReviewConfigRequest(): DeleteReviewConfigRequest {
  return { name: "" };
}

export const DeleteReviewConfigRequest = {
  encode(message: DeleteReviewConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteReviewConfigRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteReviewConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteReviewConfigRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DeleteReviewConfigRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteReviewConfigRequest>): DeleteReviewConfigRequest {
    return DeleteReviewConfigRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteReviewConfigRequest>): DeleteReviewConfigRequest {
    const message = createBaseDeleteReviewConfigRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseReviewConfig(): ReviewConfig {
  return {
    name: "",
    title: "",
    enabled: false,
    creator: "",
    createTime: undefined,
    updateTime: undefined,
    rules: [],
    resources: [],
  };
}

export const ReviewConfig = {
  encode(message: ReviewConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.rules) {
      SQLReviewRule.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.resources) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReviewConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.rules.push(SQLReviewRule.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.resources.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReviewConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      rules: globalThis.Array.isArray(object?.rules) ? object.rules.map((e: any) => SQLReviewRule.fromJSON(e)) : [],
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ReviewConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => SQLReviewRule.toJSON(e));
    }
    if (message.resources?.length) {
      obj.resources = message.resources;
    }
    return obj;
  },

  create(base?: DeepPartial<ReviewConfig>): ReviewConfig {
    return ReviewConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ReviewConfig>): ReviewConfig {
    const message = createBaseReviewConfig();
    message.name = object.name ?? "";
    message.title = object.title ?? "";
    message.enabled = object.enabled ?? false;
    message.creator = object.creator ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.rules = object.rules?.map((e) => SQLReviewRule.fromPartial(e)) || [];
    message.resources = object.resources?.map((e) => e) || [];
    return message;
  },
};

export type ReviewConfigServiceDefinition = typeof ReviewConfigServiceDefinition;
export const ReviewConfigServiceDefinition = {
  name: "ReviewConfigService",
  fullName: "bytebase.v1.ReviewConfigService",
  methods: {
    createReviewConfig: {
      name: "CreateReviewConfig",
      requestType: CreateReviewConfigRequest,
      requestStream: false,
      responseType: ReviewConfig,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([0])],
          578365826: [
            new Uint8Array([
              34,
              58,
              13,
              114,
              101,
              118,
              105,
              101,
              119,
              95,
              99,
              111,
              110,
              102,
              105,
              103,
              34,
              17,
              47,
              118,
              49,
              47,
              114,
              101,
              118,
              105,
              101,
              119,
              67,
              111,
              110,
              102,
              105,
              103,
              115,
            ]),
          ],
        },
      },
    },
    listReviewConfigs: {
      name: "ListReviewConfigs",
      requestType: ListReviewConfigsRequest,
      requestStream: false,
      responseType: ListReviewConfigsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([0])],
          578365826: [
            new Uint8Array([
              19,
              18,
              17,
              47,
              118,
              49,
              47,
              114,
              101,
              118,
              105,
              101,
              119,
              67,
              111,
              110,
              102,
              105,
              103,
              115,
            ]),
          ],
        },
      },
    },
    getReviewConfig: {
      name: "GetReviewConfig",
      requestType: GetReviewConfigRequest,
      requestStream: false,
      responseType: ReviewConfig,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([4, 110, 97, 109, 101])],
          578365826: [
            new Uint8Array([
              28,
              18,
              26,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              114,
              101,
              118,
              105,
              101,
              119,
              67,
              111,
              110,
              102,
              105,
              103,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    updateReviewConfig: {
      name: "UpdateReviewConfig",
      requestType: UpdateReviewConfigRequest,
      requestStream: false,
      responseType: ReviewConfig,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            new Uint8Array([
              25,
              114,
              101,
              118,
              105,
              101,
              119,
              95,
              99,
              111,
              110,
              102,
              105,
              103,
              44,
              117,
              112,
              100,
              97,
              116,
              101,
              95,
              109,
              97,
              115,
              107,
            ]),
          ],
          578365826: [
            new Uint8Array([
              57,
              58,
              13,
              114,
              101,
              118,
              105,
              101,
              119,
              95,
              99,
              111,
              110,
              102,
              105,
              103,
              50,
              40,
              47,
              118,
              49,
              47,
              123,
              114,
              101,
              118,
              105,
              101,
              119,
              95,
              99,
              111,
              110,
              102,
              105,
              103,
              46,
              110,
              97,
              109,
              101,
              61,
              114,
              101,
              118,
              105,
              101,
              119,
              67,
              111,
              110,
              102,
              105,
              103,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    deleteReviewConfig: {
      name: "DeleteReviewConfig",
      requestType: DeleteReviewConfigRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([4, 110, 97, 109, 101])],
          578365826: [
            new Uint8Array([
              28,
              42,
              26,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              114,
              101,
              118,
              105,
              101,
              119,
              67,
              111,
              110,
              102,
              105,
              103,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
  },
} as const;

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
