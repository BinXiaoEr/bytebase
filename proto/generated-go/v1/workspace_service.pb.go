// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.2
// 	protoc        (unknown)
// source: v1/workspace_service.proto

package v1

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_v1_workspace_service_proto protoreflect.FileDescriptor

var file_v1_workspace_service_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x76, 0x31, 0x2f, 0x77, 0x6f, 0x72, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x5f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x62, 0x79,
	0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x76, 0x31, 0x2f, 0x69, 0x61, 0x6d, 0x5f,
	0x70, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32, 0x8d, 0x02, 0x0a,
	0x10, 0x57, 0x6f, 0x72, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x12, 0x7a, 0x0a, 0x0c, 0x47, 0x65, 0x74, 0x49, 0x61, 0x6d, 0x50, 0x6f, 0x6c, 0x69, 0x63,
	0x79, 0x12, 0x20, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e,
	0x47, 0x65, 0x74, 0x49, 0x61, 0x6d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76,
	0x31, 0x2e, 0x49, 0x61, 0x6d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x22, 0x30, 0x82, 0xd3, 0xe4,
	0x93, 0x02, 0x2a, 0x12, 0x28, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72,
	0x63, 0x65, 0x3d, 0x77, 0x6f, 0x72, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x73, 0x2f, 0x2a, 0x7d,
	0x3a, 0x67, 0x65, 0x74, 0x49, 0x61, 0x6d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x12, 0x7d, 0x0a,
	0x0c, 0x53, 0x65, 0x74, 0x49, 0x61, 0x6d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x12, 0x20, 0x2e,
	0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x65, 0x74, 0x49,
	0x61, 0x6d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x16, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x61,
	0x6d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x22, 0x33, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x2d, 0x3a,
	0x01, 0x2a, 0x22, 0x28, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63,
	0x65, 0x3d, 0x77, 0x6f, 0x72, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x73, 0x2f, 0x2a, 0x7d, 0x3a,
	0x73, 0x65, 0x74, 0x49, 0x61, 0x6d, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x42, 0x11, 0x5a, 0x0f,
	0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2d, 0x67, 0x6f, 0x2f, 0x76, 0x31, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_v1_workspace_service_proto_goTypes = []any{
	(*GetIamPolicyRequest)(nil), // 0: bytebase.v1.GetIamPolicyRequest
	(*SetIamPolicyRequest)(nil), // 1: bytebase.v1.SetIamPolicyRequest
	(*IamPolicy)(nil),           // 2: bytebase.v1.IamPolicy
}
var file_v1_workspace_service_proto_depIdxs = []int32{
	0, // 0: bytebase.v1.WorkspaceService.GetIamPolicy:input_type -> bytebase.v1.GetIamPolicyRequest
	1, // 1: bytebase.v1.WorkspaceService.SetIamPolicy:input_type -> bytebase.v1.SetIamPolicyRequest
	2, // 2: bytebase.v1.WorkspaceService.GetIamPolicy:output_type -> bytebase.v1.IamPolicy
	2, // 3: bytebase.v1.WorkspaceService.SetIamPolicy:output_type -> bytebase.v1.IamPolicy
	2, // [2:4] is the sub-list for method output_type
	0, // [0:2] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_v1_workspace_service_proto_init() }
func file_v1_workspace_service_proto_init() {
	if File_v1_workspace_service_proto != nil {
		return
	}
	file_v1_iam_policy_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_workspace_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_v1_workspace_service_proto_goTypes,
		DependencyIndexes: file_v1_workspace_service_proto_depIdxs,
	}.Build()
	File_v1_workspace_service_proto = out.File
	file_v1_workspace_service_proto_rawDesc = nil
	file_v1_workspace_service_proto_goTypes = nil
	file_v1_workspace_service_proto_depIdxs = nil
}
