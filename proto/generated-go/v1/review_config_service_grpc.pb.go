// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.4.0
// - protoc             (unknown)
// source: v1/review_config_service.proto

package v1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.62.0 or later.
const _ = grpc.SupportPackageIsVersion8

const (
	ReviewConfigService_CreateReviewConfig_FullMethodName = "/bytebase.v1.ReviewConfigService/CreateReviewConfig"
	ReviewConfigService_ListReviewConfigs_FullMethodName  = "/bytebase.v1.ReviewConfigService/ListReviewConfigs"
	ReviewConfigService_GetReviewConfig_FullMethodName    = "/bytebase.v1.ReviewConfigService/GetReviewConfig"
	ReviewConfigService_UpdateReviewConfig_FullMethodName = "/bytebase.v1.ReviewConfigService/UpdateReviewConfig"
	ReviewConfigService_DeleteReviewConfig_FullMethodName = "/bytebase.v1.ReviewConfigService/DeleteReviewConfig"
)

// ReviewConfigServiceClient is the client API for ReviewConfigService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ReviewConfigServiceClient interface {
	CreateReviewConfig(ctx context.Context, in *CreateReviewConfigRequest, opts ...grpc.CallOption) (*ReviewConfig, error)
	ListReviewConfigs(ctx context.Context, in *ListReviewConfigsRequest, opts ...grpc.CallOption) (*ListReviewConfigsResponse, error)
	GetReviewConfig(ctx context.Context, in *GetReviewConfigRequest, opts ...grpc.CallOption) (*ReviewConfig, error)
	UpdateReviewConfig(ctx context.Context, in *UpdateReviewConfigRequest, opts ...grpc.CallOption) (*ReviewConfig, error)
	DeleteReviewConfig(ctx context.Context, in *DeleteReviewConfigRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type reviewConfigServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewReviewConfigServiceClient(cc grpc.ClientConnInterface) ReviewConfigServiceClient {
	return &reviewConfigServiceClient{cc}
}

func (c *reviewConfigServiceClient) CreateReviewConfig(ctx context.Context, in *CreateReviewConfigRequest, opts ...grpc.CallOption) (*ReviewConfig, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ReviewConfig)
	err := c.cc.Invoke(ctx, ReviewConfigService_CreateReviewConfig_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *reviewConfigServiceClient) ListReviewConfigs(ctx context.Context, in *ListReviewConfigsRequest, opts ...grpc.CallOption) (*ListReviewConfigsResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ListReviewConfigsResponse)
	err := c.cc.Invoke(ctx, ReviewConfigService_ListReviewConfigs_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *reviewConfigServiceClient) GetReviewConfig(ctx context.Context, in *GetReviewConfigRequest, opts ...grpc.CallOption) (*ReviewConfig, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ReviewConfig)
	err := c.cc.Invoke(ctx, ReviewConfigService_GetReviewConfig_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *reviewConfigServiceClient) UpdateReviewConfig(ctx context.Context, in *UpdateReviewConfigRequest, opts ...grpc.CallOption) (*ReviewConfig, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ReviewConfig)
	err := c.cc.Invoke(ctx, ReviewConfigService_UpdateReviewConfig_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *reviewConfigServiceClient) DeleteReviewConfig(ctx context.Context, in *DeleteReviewConfigRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, ReviewConfigService_DeleteReviewConfig_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ReviewConfigServiceServer is the server API for ReviewConfigService service.
// All implementations must embed UnimplementedReviewConfigServiceServer
// for forward compatibility
type ReviewConfigServiceServer interface {
	CreateReviewConfig(context.Context, *CreateReviewConfigRequest) (*ReviewConfig, error)
	ListReviewConfigs(context.Context, *ListReviewConfigsRequest) (*ListReviewConfigsResponse, error)
	GetReviewConfig(context.Context, *GetReviewConfigRequest) (*ReviewConfig, error)
	UpdateReviewConfig(context.Context, *UpdateReviewConfigRequest) (*ReviewConfig, error)
	DeleteReviewConfig(context.Context, *DeleteReviewConfigRequest) (*emptypb.Empty, error)
	mustEmbedUnimplementedReviewConfigServiceServer()
}

// UnimplementedReviewConfigServiceServer must be embedded to have forward compatible implementations.
type UnimplementedReviewConfigServiceServer struct {
}

func (UnimplementedReviewConfigServiceServer) CreateReviewConfig(context.Context, *CreateReviewConfigRequest) (*ReviewConfig, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateReviewConfig not implemented")
}
func (UnimplementedReviewConfigServiceServer) ListReviewConfigs(context.Context, *ListReviewConfigsRequest) (*ListReviewConfigsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListReviewConfigs not implemented")
}
func (UnimplementedReviewConfigServiceServer) GetReviewConfig(context.Context, *GetReviewConfigRequest) (*ReviewConfig, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetReviewConfig not implemented")
}
func (UnimplementedReviewConfigServiceServer) UpdateReviewConfig(context.Context, *UpdateReviewConfigRequest) (*ReviewConfig, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateReviewConfig not implemented")
}
func (UnimplementedReviewConfigServiceServer) DeleteReviewConfig(context.Context, *DeleteReviewConfigRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteReviewConfig not implemented")
}
func (UnimplementedReviewConfigServiceServer) mustEmbedUnimplementedReviewConfigServiceServer() {}

// UnsafeReviewConfigServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ReviewConfigServiceServer will
// result in compilation errors.
type UnsafeReviewConfigServiceServer interface {
	mustEmbedUnimplementedReviewConfigServiceServer()
}

func RegisterReviewConfigServiceServer(s grpc.ServiceRegistrar, srv ReviewConfigServiceServer) {
	s.RegisterService(&ReviewConfigService_ServiceDesc, srv)
}

func _ReviewConfigService_CreateReviewConfig_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateReviewConfigRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReviewConfigServiceServer).CreateReviewConfig(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ReviewConfigService_CreateReviewConfig_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReviewConfigServiceServer).CreateReviewConfig(ctx, req.(*CreateReviewConfigRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReviewConfigService_ListReviewConfigs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListReviewConfigsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReviewConfigServiceServer).ListReviewConfigs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ReviewConfigService_ListReviewConfigs_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReviewConfigServiceServer).ListReviewConfigs(ctx, req.(*ListReviewConfigsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReviewConfigService_GetReviewConfig_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetReviewConfigRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReviewConfigServiceServer).GetReviewConfig(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ReviewConfigService_GetReviewConfig_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReviewConfigServiceServer).GetReviewConfig(ctx, req.(*GetReviewConfigRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReviewConfigService_UpdateReviewConfig_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateReviewConfigRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReviewConfigServiceServer).UpdateReviewConfig(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ReviewConfigService_UpdateReviewConfig_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReviewConfigServiceServer).UpdateReviewConfig(ctx, req.(*UpdateReviewConfigRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReviewConfigService_DeleteReviewConfig_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteReviewConfigRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReviewConfigServiceServer).DeleteReviewConfig(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ReviewConfigService_DeleteReviewConfig_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReviewConfigServiceServer).DeleteReviewConfig(ctx, req.(*DeleteReviewConfigRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ReviewConfigService_ServiceDesc is the grpc.ServiceDesc for ReviewConfigService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ReviewConfigService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "bytebase.v1.ReviewConfigService",
	HandlerType: (*ReviewConfigServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateReviewConfig",
			Handler:    _ReviewConfigService_CreateReviewConfig_Handler,
		},
		{
			MethodName: "ListReviewConfigs",
			Handler:    _ReviewConfigService_ListReviewConfigs_Handler,
		},
		{
			MethodName: "GetReviewConfig",
			Handler:    _ReviewConfigService_GetReviewConfig_Handler,
		},
		{
			MethodName: "UpdateReviewConfig",
			Handler:    _ReviewConfigService_UpdateReviewConfig_Handler,
		},
		{
			MethodName: "DeleteReviewConfig",
			Handler:    _ReviewConfigService_DeleteReviewConfig_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "v1/review_config_service.proto",
}
