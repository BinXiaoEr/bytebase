// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: v1/instance_role_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "bytebase.v1";

export interface GetInstanceRoleRequest {
  /**
   * The name of the role to retrieve.
   * Format: instances/{instance}/roles/{role name}
   * The role name is the unique name for the role.
   */
  name: string;
}

export interface ListInstanceRolesRequest {
  /**
   * The parent, which owns this collection of roles.
   * Format: instances/{instance}
   */
  parent: string;
  /**
   * The maximum number of roles to return. The service may return fewer than
   * this value.
   * If unspecified, at most 50 roles will be returned.
   * The maximum value is 1000; values above 1000 will be coerced to 1000.
   */
  pageSize: number;
  /**
   * A page token, received from a previous `ListRoles` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListRoles` must match
   * the call that provided the page token.
   */
  pageToken: string;
  /** Refresh will refresh and return the latest data. */
  refresh: boolean;
}

export interface ListInstanceRolesResponse {
  /** The roles from the specified request. */
  roles: InstanceRole[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
}

/** InstanceRole is the API message for instance role. */
export interface InstanceRole {
  /**
   * The name of the role.
   * Format: instances/{instance}/roles/{role}
   * The role name is the unique name for the role.
   */
  name: string;
  /** The role name. It's unique within the instance. */
  roleName: string;
  /** The role password. */
  password?:
    | string
    | undefined;
  /** The connection count limit for this role. */
  connectionLimit?:
    | number
    | undefined;
  /** The expiration for the role's password. */
  validUntil?:
    | string
    | undefined;
  /**
   * The role attribute.
   * For PostgreSQL, it containt super_user, no_inherit, create_role, create_db, can_login, replication and bypass_rls. Docs: https://www.postgresql.org/docs/current/role-attributes.html
   * For MySQL, it's the global privileges as GRANT statements, which means it only contains "GRANT ... ON *.* TO ...". Docs: https://dev.mysql.com/doc/refman/8.0/en/grant.html
   */
  attribute?: string | undefined;
}

function createBaseGetInstanceRoleRequest(): GetInstanceRoleRequest {
  return { name: "" };
}

export const GetInstanceRoleRequest: MessageFns<GetInstanceRoleRequest> = {
  encode(message: GetInstanceRoleRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetInstanceRoleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInstanceRoleRequest();
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
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetInstanceRoleRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetInstanceRoleRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetInstanceRoleRequest>): GetInstanceRoleRequest {
    return GetInstanceRoleRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetInstanceRoleRequest>): GetInstanceRoleRequest {
    const message = createBaseGetInstanceRoleRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListInstanceRolesRequest(): ListInstanceRolesRequest {
  return { parent: "", pageSize: 0, pageToken: "", refresh: false };
}

export const ListInstanceRolesRequest: MessageFns<ListInstanceRolesRequest> = {
  encode(message: ListInstanceRolesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.refresh !== false) {
      writer.uint32(32).bool(message.refresh);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListInstanceRolesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstanceRolesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.refresh = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListInstanceRolesRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      refresh: isSet(object.refresh) ? globalThis.Boolean(object.refresh) : false,
    };
  },

  toJSON(message: ListInstanceRolesRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.refresh !== false) {
      obj.refresh = message.refresh;
    }
    return obj;
  },

  create(base?: DeepPartial<ListInstanceRolesRequest>): ListInstanceRolesRequest {
    return ListInstanceRolesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListInstanceRolesRequest>): ListInstanceRolesRequest {
    const message = createBaseListInstanceRolesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.refresh = object.refresh ?? false;
    return message;
  },
};

function createBaseListInstanceRolesResponse(): ListInstanceRolesResponse {
  return { roles: [], nextPageToken: "" };
}

export const ListInstanceRolesResponse: MessageFns<ListInstanceRolesResponse> = {
  encode(message: ListInstanceRolesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.roles) {
      InstanceRole.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListInstanceRolesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstanceRolesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.roles.push(InstanceRole.decode(reader, reader.uint32()));
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
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListInstanceRolesResponse {
    return {
      roles: globalThis.Array.isArray(object?.roles) ? object.roles.map((e: any) => InstanceRole.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListInstanceRolesResponse): unknown {
    const obj: any = {};
    if (message.roles?.length) {
      obj.roles = message.roles.map((e) => InstanceRole.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListInstanceRolesResponse>): ListInstanceRolesResponse {
    return ListInstanceRolesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListInstanceRolesResponse>): ListInstanceRolesResponse {
    const message = createBaseListInstanceRolesResponse();
    message.roles = object.roles?.map((e) => InstanceRole.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseInstanceRole(): InstanceRole {
  return {
    name: "",
    roleName: "",
    password: undefined,
    connectionLimit: undefined,
    validUntil: undefined,
    attribute: undefined,
  };
}

export const InstanceRole: MessageFns<InstanceRole> = {
  encode(message: InstanceRole, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.roleName !== "") {
      writer.uint32(18).string(message.roleName);
    }
    if (message.password !== undefined) {
      writer.uint32(26).string(message.password);
    }
    if (message.connectionLimit !== undefined) {
      writer.uint32(32).int32(message.connectionLimit);
    }
    if (message.validUntil !== undefined) {
      writer.uint32(42).string(message.validUntil);
    }
    if (message.attribute !== undefined) {
      writer.uint32(50).string(message.attribute);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InstanceRole {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstanceRole();
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

          message.roleName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.connectionLimit = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.validUntil = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.attribute = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstanceRole {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      roleName: isSet(object.roleName) ? globalThis.String(object.roleName) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : undefined,
      connectionLimit: isSet(object.connectionLimit) ? globalThis.Number(object.connectionLimit) : undefined,
      validUntil: isSet(object.validUntil) ? globalThis.String(object.validUntil) : undefined,
      attribute: isSet(object.attribute) ? globalThis.String(object.attribute) : undefined,
    };
  },

  toJSON(message: InstanceRole): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.roleName !== "") {
      obj.roleName = message.roleName;
    }
    if (message.password !== undefined) {
      obj.password = message.password;
    }
    if (message.connectionLimit !== undefined) {
      obj.connectionLimit = Math.round(message.connectionLimit);
    }
    if (message.validUntil !== undefined) {
      obj.validUntil = message.validUntil;
    }
    if (message.attribute !== undefined) {
      obj.attribute = message.attribute;
    }
    return obj;
  },

  create(base?: DeepPartial<InstanceRole>): InstanceRole {
    return InstanceRole.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InstanceRole>): InstanceRole {
    const message = createBaseInstanceRole();
    message.name = object.name ?? "";
    message.roleName = object.roleName ?? "";
    message.password = object.password ?? undefined;
    message.connectionLimit = object.connectionLimit ?? undefined;
    message.validUntil = object.validUntil ?? undefined;
    message.attribute = object.attribute ?? undefined;
    return message;
  },
};

export type InstanceRoleServiceDefinition = typeof InstanceRoleServiceDefinition;
export const InstanceRoleServiceDefinition = {
  name: "InstanceRoleService",
  fullName: "bytebase.v1.InstanceRoleService",
  methods: {
    getInstanceRole: {
      name: "GetInstanceRole",
      requestType: GetInstanceRoleRequest,
      requestStream: false,
      responseType: InstanceRole,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([4, 110, 97, 109, 101])],
          800010: [new Uint8Array([16, 98, 98, 46, 105, 110, 115, 116, 97, 110, 99, 101, 115, 46, 103, 101, 116])],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              32,
              18,
              30,
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
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              47,
              114,
              111,
              108,
              101,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    listInstanceRoles: {
      name: "ListInstanceRoles",
      requestType: ListInstanceRolesRequest,
      requestStream: false,
      responseType: ListInstanceRolesResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([6, 112, 97, 114, 101, 110, 116])],
          800010: [new Uint8Array([16, 98, 98, 46, 105, 110, 115, 116, 97, 110, 99, 101, 115, 46, 103, 101, 116])],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              32,
              18,
              30,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              125,
              47,
              114,
              111,
              108,
              101,
              115,
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
