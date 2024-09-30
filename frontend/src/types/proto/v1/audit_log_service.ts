// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: v1/audit_log_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Any } from "../google/protobuf/any";
import { Timestamp } from "../google/protobuf/timestamp";
import { Status } from "../google/rpc/status";
import { ExportFormat, exportFormatFromJSON, exportFormatToJSON, exportFormatToNumber } from "./common";
import { PolicyDelta } from "./iam_policy";

export const protobufPackage = "bytebase.v1";

export interface SearchAuditLogsRequest {
  parent: string;
  /**
   * The filter of the log. It should be a valid CEL expression.
   * For example:
   *  - filter = "method == '/bytebase.v1.SQLService/Query'"
   *  - filter = "method == '/bytebase.v1.SQLService/Query' && severity == 'ERROR'"
   *  - filter = "method == '/bytebase.v1.SQLService/Query' && severity == 'ERROR' && user == 'users/bb@bytebase.com'"
   *  - filter = "method == '/bytebase.v1.SQLService/Query' && severity == 'ERROR' && create_time <= '2021-01-01T00:00:00Z' && create_time >= '2020-01-01T00:00:00Z'"
   */
  filter: string;
  /**
   * The order by of the log.
   * Only support order by create_time.
   * For example:
   *  - order_by = "create_time asc"
   *  - order_by = "create_time desc"
   */
  orderBy: string;
  /**
   * The maximum number of logs to return.
   * The service may return fewer than this value.
   * If unspecified, at most 100 log entries will be returned.
   * The maximum value is 1000; values above 1000 will be coerced to 1000.
   */
  pageSize: number;
  /**
   * A page token, received from a previous `SearchLogs` call.
   * Provide this to retrieve the subsequent page.
   */
  pageToken: string;
}

export interface SearchAuditLogsResponse {
  auditLogs: AuditLog[];
  /**
   * A token to retrieve next page of log entities.
   * Pass this value in the page_token field in the subsequent call
   * to retrieve the next page of log entities.
   */
  nextPageToken: string;
}

export interface ExportAuditLogsRequest {
  parent: string;
  /**
   * The filter of the log. It should be a valid CEL expression.
   * For example:
   *  - filter = "method == '/bytebase.v1.SQLService/Query'"
   *  - filter = "method == '/bytebase.v1.SQLService/Query' && severity == 'ERROR'"
   *  - filter = "method == '/bytebase.v1.SQLService/Query' && severity == 'ERROR' && user == 'users/bb@bytebase.com'"
   *  - filter = "method == '/bytebase.v1.SQLService/Query' && severity == 'ERROR' && create_time <= '2021-01-01T00:00:00Z' && create_time >= '2020-01-01T00:00:00Z'"
   */
  filter: string;
  /**
   * The order by of the log.
   * Only support order by create_time.
   * For example:
   *  - order_by = "create_time asc"
   *  - order_by = "create_time desc"
   */
  orderBy: string;
  /** The export format. */
  format: ExportFormat;
}

export interface ExportAuditLogsResponse {
  content: Uint8Array;
}

export interface AuditLog {
  /**
   * The name of the log.
   * Formats:
   * - projects/{project}/auditLogs/{uid}
   * - workspaces/{workspace}/auditLogs/{uid}
   */
  name: string;
  createTime:
    | Date
    | undefined;
  /** Format: users/d@d.com */
  user: string;
  /** e.g. `/bytebase.v1.SQLService/Query`, `bb.project.repository.push` */
  method: string;
  severity: AuditLog_Severity;
  /** The associated resource. */
  resource: string;
  /** JSON-encoded request. */
  request: string;
  /**
   * JSON-encoded response.
   * Some fields are omitted because they are too large or contain sensitive information.
   */
  response: string;
  status:
    | Status
    | undefined;
  /** service-specific data about the request, response, and other activities. */
  serviceData:
    | Any
    | undefined;
  /** Metadata about the operation. */
  requestMetadata: RequestMetadata | undefined;
}

export enum AuditLog_Severity {
  DEFAULT = "DEFAULT",
  DEBUG = "DEBUG",
  INFO = "INFO",
  NOTICE = "NOTICE",
  WARNING = "WARNING",
  ERROR = "ERROR",
  CRITICAL = "CRITICAL",
  ALERT = "ALERT",
  EMERGENCY = "EMERGENCY",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function auditLog_SeverityFromJSON(object: any): AuditLog_Severity {
  switch (object) {
    case 0:
    case "DEFAULT":
      return AuditLog_Severity.DEFAULT;
    case 1:
    case "DEBUG":
      return AuditLog_Severity.DEBUG;
    case 2:
    case "INFO":
      return AuditLog_Severity.INFO;
    case 3:
    case "NOTICE":
      return AuditLog_Severity.NOTICE;
    case 4:
    case "WARNING":
      return AuditLog_Severity.WARNING;
    case 5:
    case "ERROR":
      return AuditLog_Severity.ERROR;
    case 6:
    case "CRITICAL":
      return AuditLog_Severity.CRITICAL;
    case 7:
    case "ALERT":
      return AuditLog_Severity.ALERT;
    case 8:
    case "EMERGENCY":
      return AuditLog_Severity.EMERGENCY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuditLog_Severity.UNRECOGNIZED;
  }
}

export function auditLog_SeverityToJSON(object: AuditLog_Severity): string {
  switch (object) {
    case AuditLog_Severity.DEFAULT:
      return "DEFAULT";
    case AuditLog_Severity.DEBUG:
      return "DEBUG";
    case AuditLog_Severity.INFO:
      return "INFO";
    case AuditLog_Severity.NOTICE:
      return "NOTICE";
    case AuditLog_Severity.WARNING:
      return "WARNING";
    case AuditLog_Severity.ERROR:
      return "ERROR";
    case AuditLog_Severity.CRITICAL:
      return "CRITICAL";
    case AuditLog_Severity.ALERT:
      return "ALERT";
    case AuditLog_Severity.EMERGENCY:
      return "EMERGENCY";
    case AuditLog_Severity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function auditLog_SeverityToNumber(object: AuditLog_Severity): number {
  switch (object) {
    case AuditLog_Severity.DEFAULT:
      return 0;
    case AuditLog_Severity.DEBUG:
      return 1;
    case AuditLog_Severity.INFO:
      return 2;
    case AuditLog_Severity.NOTICE:
      return 3;
    case AuditLog_Severity.WARNING:
      return 4;
    case AuditLog_Severity.ERROR:
      return 5;
    case AuditLog_Severity.CRITICAL:
      return 6;
    case AuditLog_Severity.ALERT:
      return 7;
    case AuditLog_Severity.EMERGENCY:
      return 8;
    case AuditLog_Severity.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface AuditData {
  policyDelta: PolicyDelta | undefined;
}

/** Metadata about the request. */
export interface RequestMetadata {
  /** The IP address of the caller. */
  callerIp: string;
  /**
   * The user agent of the caller.
   * This information is not authenticated and should be treated accordingly.
   */
  callerSuppliedUserAgent: string;
}

function createBaseSearchAuditLogsRequest(): SearchAuditLogsRequest {
  return { parent: "", filter: "", orderBy: "", pageSize: 0, pageToken: "" };
}

export const SearchAuditLogsRequest: MessageFns<SearchAuditLogsRequest> = {
  encode(message: SearchAuditLogsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(42).string(message.parent);
    }
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    if (message.orderBy !== "") {
      writer.uint32(18).string(message.orderBy);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SearchAuditLogsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchAuditLogsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag !== 42) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.orderBy = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchAuditLogsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
    };
  },

  toJSON(message: SearchAuditLogsRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<SearchAuditLogsRequest>): SearchAuditLogsRequest {
    return SearchAuditLogsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchAuditLogsRequest>): SearchAuditLogsRequest {
    const message = createBaseSearchAuditLogsRequest();
    message.parent = object.parent ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseSearchAuditLogsResponse(): SearchAuditLogsResponse {
  return { auditLogs: [], nextPageToken: "" };
}

export const SearchAuditLogsResponse: MessageFns<SearchAuditLogsResponse> = {
  encode(message: SearchAuditLogsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.auditLogs) {
      AuditLog.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SearchAuditLogsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchAuditLogsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.auditLogs.push(AuditLog.decode(reader, reader.uint32()));
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

  fromJSON(object: any): SearchAuditLogsResponse {
    return {
      auditLogs: globalThis.Array.isArray(object?.auditLogs)
        ? object.auditLogs.map((e: any) => AuditLog.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: SearchAuditLogsResponse): unknown {
    const obj: any = {};
    if (message.auditLogs?.length) {
      obj.auditLogs = message.auditLogs.map((e) => AuditLog.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<SearchAuditLogsResponse>): SearchAuditLogsResponse {
    return SearchAuditLogsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchAuditLogsResponse>): SearchAuditLogsResponse {
    const message = createBaseSearchAuditLogsResponse();
    message.auditLogs = object.auditLogs?.map((e) => AuditLog.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseExportAuditLogsRequest(): ExportAuditLogsRequest {
  return { parent: "", filter: "", orderBy: "", format: ExportFormat.FORMAT_UNSPECIFIED };
}

export const ExportAuditLogsRequest: MessageFns<ExportAuditLogsRequest> = {
  encode(message: ExportAuditLogsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(34).string(message.parent);
    }
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    if (message.orderBy !== "") {
      writer.uint32(18).string(message.orderBy);
    }
    if (message.format !== ExportFormat.FORMAT_UNSPECIFIED) {
      writer.uint32(24).int32(exportFormatToNumber(message.format));
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExportAuditLogsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportAuditLogsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.orderBy = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.format = exportFormatFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportAuditLogsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? globalThis.String(object.orderBy) : "",
      format: isSet(object.format) ? exportFormatFromJSON(object.format) : ExportFormat.FORMAT_UNSPECIFIED,
    };
  },

  toJSON(message: ExportAuditLogsRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.orderBy !== "") {
      obj.orderBy = message.orderBy;
    }
    if (message.format !== ExportFormat.FORMAT_UNSPECIFIED) {
      obj.format = exportFormatToJSON(message.format);
    }
    return obj;
  },

  create(base?: DeepPartial<ExportAuditLogsRequest>): ExportAuditLogsRequest {
    return ExportAuditLogsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExportAuditLogsRequest>): ExportAuditLogsRequest {
    const message = createBaseExportAuditLogsRequest();
    message.parent = object.parent ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    message.format = object.format ?? ExportFormat.FORMAT_UNSPECIFIED;
    return message;
  },
};

function createBaseExportAuditLogsResponse(): ExportAuditLogsResponse {
  return { content: new Uint8Array(0) };
}

export const ExportAuditLogsResponse: MessageFns<ExportAuditLogsResponse> = {
  encode(message: ExportAuditLogsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.content.length !== 0) {
      writer.uint32(10).bytes(message.content);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExportAuditLogsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportAuditLogsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportAuditLogsResponse {
    return { content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array(0) };
  },

  toJSON(message: ExportAuditLogsResponse): unknown {
    const obj: any = {};
    if (message.content.length !== 0) {
      obj.content = base64FromBytes(message.content);
    }
    return obj;
  },

  create(base?: DeepPartial<ExportAuditLogsResponse>): ExportAuditLogsResponse {
    return ExportAuditLogsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExportAuditLogsResponse>): ExportAuditLogsResponse {
    const message = createBaseExportAuditLogsResponse();
    message.content = object.content ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAuditLog(): AuditLog {
  return {
    name: "",
    createTime: undefined,
    user: "",
    method: "",
    severity: AuditLog_Severity.DEFAULT,
    resource: "",
    request: "",
    response: "",
    status: undefined,
    serviceData: undefined,
    requestMetadata: undefined,
  };
}

export const AuditLog: MessageFns<AuditLog> = {
  encode(message: AuditLog, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(18).fork()).join();
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    if (message.method !== "") {
      writer.uint32(34).string(message.method);
    }
    if (message.severity !== AuditLog_Severity.DEFAULT) {
      writer.uint32(40).int32(auditLog_SeverityToNumber(message.severity));
    }
    if (message.resource !== "") {
      writer.uint32(50).string(message.resource);
    }
    if (message.request !== "") {
      writer.uint32(58).string(message.request);
    }
    if (message.response !== "") {
      writer.uint32(66).string(message.response);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(74).fork()).join();
    }
    if (message.serviceData !== undefined) {
      Any.encode(message.serviceData, writer.uint32(82).fork()).join();
    }
    if (message.requestMetadata !== undefined) {
      RequestMetadata.encode(message.requestMetadata, writer.uint32(90).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AuditLog {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditLog();
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

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.user = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.method = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.severity = auditLog_SeverityFromJSON(reader.int32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.resource = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.request = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.response = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.serviceData = Any.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.requestMetadata = RequestMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuditLog {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      method: isSet(object.method) ? globalThis.String(object.method) : "",
      severity: isSet(object.severity) ? auditLog_SeverityFromJSON(object.severity) : AuditLog_Severity.DEFAULT,
      resource: isSet(object.resource) ? globalThis.String(object.resource) : "",
      request: isSet(object.request) ? globalThis.String(object.request) : "",
      response: isSet(object.response) ? globalThis.String(object.response) : "",
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
      serviceData: isSet(object.serviceData) ? Any.fromJSON(object.serviceData) : undefined,
      requestMetadata: isSet(object.requestMetadata) ? RequestMetadata.fromJSON(object.requestMetadata) : undefined,
    };
  },

  toJSON(message: AuditLog): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.method !== "") {
      obj.method = message.method;
    }
    if (message.severity !== AuditLog_Severity.DEFAULT) {
      obj.severity = auditLog_SeverityToJSON(message.severity);
    }
    if (message.resource !== "") {
      obj.resource = message.resource;
    }
    if (message.request !== "") {
      obj.request = message.request;
    }
    if (message.response !== "") {
      obj.response = message.response;
    }
    if (message.status !== undefined) {
      obj.status = Status.toJSON(message.status);
    }
    if (message.serviceData !== undefined) {
      obj.serviceData = Any.toJSON(message.serviceData);
    }
    if (message.requestMetadata !== undefined) {
      obj.requestMetadata = RequestMetadata.toJSON(message.requestMetadata);
    }
    return obj;
  },

  create(base?: DeepPartial<AuditLog>): AuditLog {
    return AuditLog.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuditLog>): AuditLog {
    const message = createBaseAuditLog();
    message.name = object.name ?? "";
    message.createTime = object.createTime ?? undefined;
    message.user = object.user ?? "";
    message.method = object.method ?? "";
    message.severity = object.severity ?? AuditLog_Severity.DEFAULT;
    message.resource = object.resource ?? "";
    message.request = object.request ?? "";
    message.response = object.response ?? "";
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    message.serviceData = (object.serviceData !== undefined && object.serviceData !== null)
      ? Any.fromPartial(object.serviceData)
      : undefined;
    message.requestMetadata = (object.requestMetadata !== undefined && object.requestMetadata !== null)
      ? RequestMetadata.fromPartial(object.requestMetadata)
      : undefined;
    return message;
  },
};

function createBaseAuditData(): AuditData {
  return { policyDelta: undefined };
}

export const AuditData: MessageFns<AuditData> = {
  encode(message: AuditData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.policyDelta !== undefined) {
      PolicyDelta.encode(message.policyDelta, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AuditData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.policyDelta = PolicyDelta.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuditData {
    return { policyDelta: isSet(object.policyDelta) ? PolicyDelta.fromJSON(object.policyDelta) : undefined };
  },

  toJSON(message: AuditData): unknown {
    const obj: any = {};
    if (message.policyDelta !== undefined) {
      obj.policyDelta = PolicyDelta.toJSON(message.policyDelta);
    }
    return obj;
  },

  create(base?: DeepPartial<AuditData>): AuditData {
    return AuditData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuditData>): AuditData {
    const message = createBaseAuditData();
    message.policyDelta = (object.policyDelta !== undefined && object.policyDelta !== null)
      ? PolicyDelta.fromPartial(object.policyDelta)
      : undefined;
    return message;
  },
};

function createBaseRequestMetadata(): RequestMetadata {
  return { callerIp: "", callerSuppliedUserAgent: "" };
}

export const RequestMetadata: MessageFns<RequestMetadata> = {
  encode(message: RequestMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.callerIp !== "") {
      writer.uint32(10).string(message.callerIp);
    }
    if (message.callerSuppliedUserAgent !== "") {
      writer.uint32(18).string(message.callerSuppliedUserAgent);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RequestMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.callerIp = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.callerSuppliedUserAgent = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RequestMetadata {
    return {
      callerIp: isSet(object.callerIp) ? globalThis.String(object.callerIp) : "",
      callerSuppliedUserAgent: isSet(object.callerSuppliedUserAgent)
        ? globalThis.String(object.callerSuppliedUserAgent)
        : "",
    };
  },

  toJSON(message: RequestMetadata): unknown {
    const obj: any = {};
    if (message.callerIp !== "") {
      obj.callerIp = message.callerIp;
    }
    if (message.callerSuppliedUserAgent !== "") {
      obj.callerSuppliedUserAgent = message.callerSuppliedUserAgent;
    }
    return obj;
  },

  create(base?: DeepPartial<RequestMetadata>): RequestMetadata {
    return RequestMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RequestMetadata>): RequestMetadata {
    const message = createBaseRequestMetadata();
    message.callerIp = object.callerIp ?? "";
    message.callerSuppliedUserAgent = object.callerSuppliedUserAgent ?? "";
    return message;
  },
};

export type AuditLogServiceDefinition = typeof AuditLogServiceDefinition;
export const AuditLogServiceDefinition = {
  name: "AuditLogService",
  fullName: "bytebase.v1.AuditLogService",
  methods: {
    searchAuditLogs: {
      name: "SearchAuditLogs",
      requestType: SearchAuditLogsRequest,
      requestStream: false,
      responseType: SearchAuditLogsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          800010: [
            new Uint8Array([19, 98, 98, 46, 97, 117, 100, 105, 116, 76, 111, 103, 115, 46, 115, 101, 97, 114, 99, 104]),
          ],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              72,
              58,
              1,
              42,
              90,
              25,
              58,
              1,
              42,
              34,
              20,
              47,
              118,
              49,
              47,
              97,
              117,
              100,
              105,
              116,
              76,
              111,
              103,
              115,
              58,
              115,
              101,
              97,
              114,
              99,
              104,
              34,
              40,
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
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              125,
              47,
              97,
              117,
              100,
              105,
              116,
              76,
              111,
              103,
              115,
              58,
              115,
              101,
              97,
              114,
              99,
              104,
            ]),
          ],
        },
      },
    },
    exportAuditLogs: {
      name: "ExportAuditLogs",
      requestType: ExportAuditLogsRequest,
      requestStream: false,
      responseType: ExportAuditLogsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          800010: [
            new Uint8Array([
              19,
              98,
              98,
              46,
              97,
              117,
              100,
              105,
              116,
              76,
              111,
              103,
              115,
              46,
              101,
              120,
              112,
              111,
              114,
              116,
            ]),
          ],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              72,
              58,
              1,
              42,
              90,
              25,
              58,
              1,
              42,
              34,
              20,
              47,
              118,
              49,
              47,
              97,
              117,
              100,
              105,
              116,
              76,
              111,
              103,
              115,
              58,
              101,
              120,
              112,
              111,
              114,
              116,
              34,
              40,
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
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              125,
              47,
              97,
              117,
              100,
              105,
              116,
              76,
              111,
              103,
              115,
              58,
              101,
              120,
              112,
              111,
              114,
              116,
            ]),
          ],
        },
      },
    },
  },
} as const;

function bytesFromBase64(b64: string): Uint8Array {
  const bin = globalThis.atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(globalThis.String.fromCharCode(byte));
  });
  return globalThis.btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
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
