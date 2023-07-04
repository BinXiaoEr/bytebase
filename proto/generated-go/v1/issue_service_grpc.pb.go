// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: v1/issue_service.proto

package v1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	IssueService_GetIssue_FullMethodName           = "/bytebase.v1.IssueService/GetIssue"
	IssueService_CreateIssue_FullMethodName        = "/bytebase.v1.IssueService/CreateIssue"
	IssueService_ListIssues_FullMethodName         = "/bytebase.v1.IssueService/ListIssues"
	IssueService_UpdateIssue_FullMethodName        = "/bytebase.v1.IssueService/UpdateIssue"
	IssueService_CreateIssueComment_FullMethodName = "/bytebase.v1.IssueService/CreateIssueComment"
	IssueService_UpdateIssueComment_FullMethodName = "/bytebase.v1.IssueService/UpdateIssueComment"
	IssueService_BatchUpdateIssues_FullMethodName  = "/bytebase.v1.IssueService/BatchUpdateIssues"
	IssueService_ApproveIssue_FullMethodName       = "/bytebase.v1.IssueService/ApproveIssue"
	IssueService_RejectIssue_FullMethodName        = "/bytebase.v1.IssueService/RejectIssue"
	IssueService_RequestIssue_FullMethodName       = "/bytebase.v1.IssueService/RequestIssue"
)

// IssueServiceClient is the client API for IssueService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type IssueServiceClient interface {
	GetIssue(ctx context.Context, in *GetIssueRequest, opts ...grpc.CallOption) (*Review, error)
	CreateIssue(ctx context.Context, in *CreateIssueRequest, opts ...grpc.CallOption) (*Review, error)
	ListIssues(ctx context.Context, in *ListIssuesRequest, opts ...grpc.CallOption) (*ListIssuesResponse, error)
	UpdateIssue(ctx context.Context, in *UpdateIssueRequest, opts ...grpc.CallOption) (*Review, error)
	CreateIssueComment(ctx context.Context, in *CreateIssueCommentRequest, opts ...grpc.CallOption) (*IssueComment, error)
	UpdateIssueComment(ctx context.Context, in *UpdateIssueCommentRequest, opts ...grpc.CallOption) (*IssueComment, error)
	BatchUpdateIssues(ctx context.Context, in *BatchUpdateIssuesRequest, opts ...grpc.CallOption) (*BatchUpdateIssuesResponse, error)
	ApproveIssue(ctx context.Context, in *ApproveIssueRequest, opts ...grpc.CallOption) (*Review, error)
	RejectIssue(ctx context.Context, in *RejectIssueRequest, opts ...grpc.CallOption) (*Review, error)
	RequestIssue(ctx context.Context, in *RequestIssueRequest, opts ...grpc.CallOption) (*Review, error)
}

type issueServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewIssueServiceClient(cc grpc.ClientConnInterface) IssueServiceClient {
	return &issueServiceClient{cc}
}

func (c *issueServiceClient) GetIssue(ctx context.Context, in *GetIssueRequest, opts ...grpc.CallOption) (*Review, error) {
	out := new(Review)
	err := c.cc.Invoke(ctx, IssueService_GetIssue_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *issueServiceClient) CreateIssue(ctx context.Context, in *CreateIssueRequest, opts ...grpc.CallOption) (*Review, error) {
	out := new(Review)
	err := c.cc.Invoke(ctx, IssueService_CreateIssue_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *issueServiceClient) ListIssues(ctx context.Context, in *ListIssuesRequest, opts ...grpc.CallOption) (*ListIssuesResponse, error) {
	out := new(ListIssuesResponse)
	err := c.cc.Invoke(ctx, IssueService_ListIssues_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *issueServiceClient) UpdateIssue(ctx context.Context, in *UpdateIssueRequest, opts ...grpc.CallOption) (*Review, error) {
	out := new(Review)
	err := c.cc.Invoke(ctx, IssueService_UpdateIssue_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *issueServiceClient) CreateIssueComment(ctx context.Context, in *CreateIssueCommentRequest, opts ...grpc.CallOption) (*IssueComment, error) {
	out := new(IssueComment)
	err := c.cc.Invoke(ctx, IssueService_CreateIssueComment_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *issueServiceClient) UpdateIssueComment(ctx context.Context, in *UpdateIssueCommentRequest, opts ...grpc.CallOption) (*IssueComment, error) {
	out := new(IssueComment)
	err := c.cc.Invoke(ctx, IssueService_UpdateIssueComment_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *issueServiceClient) BatchUpdateIssues(ctx context.Context, in *BatchUpdateIssuesRequest, opts ...grpc.CallOption) (*BatchUpdateIssuesResponse, error) {
	out := new(BatchUpdateIssuesResponse)
	err := c.cc.Invoke(ctx, IssueService_BatchUpdateIssues_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *issueServiceClient) ApproveIssue(ctx context.Context, in *ApproveIssueRequest, opts ...grpc.CallOption) (*Review, error) {
	out := new(Review)
	err := c.cc.Invoke(ctx, IssueService_ApproveIssue_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *issueServiceClient) RejectIssue(ctx context.Context, in *RejectIssueRequest, opts ...grpc.CallOption) (*Review, error) {
	out := new(Review)
	err := c.cc.Invoke(ctx, IssueService_RejectIssue_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *issueServiceClient) RequestIssue(ctx context.Context, in *RequestIssueRequest, opts ...grpc.CallOption) (*Review, error) {
	out := new(Review)
	err := c.cc.Invoke(ctx, IssueService_RequestIssue_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// IssueServiceServer is the server API for IssueService service.
// All implementations must embed UnimplementedIssueServiceServer
// for forward compatibility
type IssueServiceServer interface {
	GetIssue(context.Context, *GetIssueRequest) (*Review, error)
	CreateIssue(context.Context, *CreateIssueRequest) (*Review, error)
	ListIssues(context.Context, *ListIssuesRequest) (*ListIssuesResponse, error)
	UpdateIssue(context.Context, *UpdateIssueRequest) (*Review, error)
	CreateIssueComment(context.Context, *CreateIssueCommentRequest) (*IssueComment, error)
	UpdateIssueComment(context.Context, *UpdateIssueCommentRequest) (*IssueComment, error)
	BatchUpdateIssues(context.Context, *BatchUpdateIssuesRequest) (*BatchUpdateIssuesResponse, error)
	ApproveIssue(context.Context, *ApproveIssueRequest) (*Review, error)
	RejectIssue(context.Context, *RejectIssueRequest) (*Review, error)
	RequestIssue(context.Context, *RequestIssueRequest) (*Review, error)
	mustEmbedUnimplementedIssueServiceServer()
}

// UnimplementedIssueServiceServer must be embedded to have forward compatible implementations.
type UnimplementedIssueServiceServer struct {
}

func (UnimplementedIssueServiceServer) GetIssue(context.Context, *GetIssueRequest) (*Review, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetIssue not implemented")
}
func (UnimplementedIssueServiceServer) CreateIssue(context.Context, *CreateIssueRequest) (*Review, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateIssue not implemented")
}
func (UnimplementedIssueServiceServer) ListIssues(context.Context, *ListIssuesRequest) (*ListIssuesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListIssues not implemented")
}
func (UnimplementedIssueServiceServer) UpdateIssue(context.Context, *UpdateIssueRequest) (*Review, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateIssue not implemented")
}
func (UnimplementedIssueServiceServer) CreateIssueComment(context.Context, *CreateIssueCommentRequest) (*IssueComment, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateIssueComment not implemented")
}
func (UnimplementedIssueServiceServer) UpdateIssueComment(context.Context, *UpdateIssueCommentRequest) (*IssueComment, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateIssueComment not implemented")
}
func (UnimplementedIssueServiceServer) BatchUpdateIssues(context.Context, *BatchUpdateIssuesRequest) (*BatchUpdateIssuesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BatchUpdateIssues not implemented")
}
func (UnimplementedIssueServiceServer) ApproveIssue(context.Context, *ApproveIssueRequest) (*Review, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ApproveIssue not implemented")
}
func (UnimplementedIssueServiceServer) RejectIssue(context.Context, *RejectIssueRequest) (*Review, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RejectIssue not implemented")
}
func (UnimplementedIssueServiceServer) RequestIssue(context.Context, *RequestIssueRequest) (*Review, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RequestIssue not implemented")
}
func (UnimplementedIssueServiceServer) mustEmbedUnimplementedIssueServiceServer() {}

// UnsafeIssueServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to IssueServiceServer will
// result in compilation errors.
type UnsafeIssueServiceServer interface {
	mustEmbedUnimplementedIssueServiceServer()
}

func RegisterIssueServiceServer(s grpc.ServiceRegistrar, srv IssueServiceServer) {
	s.RegisterService(&IssueService_ServiceDesc, srv)
}

func _IssueService_GetIssue_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetIssueRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IssueServiceServer).GetIssue(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: IssueService_GetIssue_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IssueServiceServer).GetIssue(ctx, req.(*GetIssueRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IssueService_CreateIssue_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateIssueRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IssueServiceServer).CreateIssue(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: IssueService_CreateIssue_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IssueServiceServer).CreateIssue(ctx, req.(*CreateIssueRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IssueService_ListIssues_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListIssuesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IssueServiceServer).ListIssues(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: IssueService_ListIssues_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IssueServiceServer).ListIssues(ctx, req.(*ListIssuesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IssueService_UpdateIssue_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateIssueRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IssueServiceServer).UpdateIssue(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: IssueService_UpdateIssue_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IssueServiceServer).UpdateIssue(ctx, req.(*UpdateIssueRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IssueService_CreateIssueComment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateIssueCommentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IssueServiceServer).CreateIssueComment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: IssueService_CreateIssueComment_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IssueServiceServer).CreateIssueComment(ctx, req.(*CreateIssueCommentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IssueService_UpdateIssueComment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateIssueCommentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IssueServiceServer).UpdateIssueComment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: IssueService_UpdateIssueComment_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IssueServiceServer).UpdateIssueComment(ctx, req.(*UpdateIssueCommentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IssueService_BatchUpdateIssues_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BatchUpdateIssuesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IssueServiceServer).BatchUpdateIssues(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: IssueService_BatchUpdateIssues_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IssueServiceServer).BatchUpdateIssues(ctx, req.(*BatchUpdateIssuesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IssueService_ApproveIssue_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ApproveIssueRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IssueServiceServer).ApproveIssue(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: IssueService_ApproveIssue_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IssueServiceServer).ApproveIssue(ctx, req.(*ApproveIssueRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IssueService_RejectIssue_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RejectIssueRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IssueServiceServer).RejectIssue(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: IssueService_RejectIssue_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IssueServiceServer).RejectIssue(ctx, req.(*RejectIssueRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _IssueService_RequestIssue_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RequestIssueRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IssueServiceServer).RequestIssue(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: IssueService_RequestIssue_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IssueServiceServer).RequestIssue(ctx, req.(*RequestIssueRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// IssueService_ServiceDesc is the grpc.ServiceDesc for IssueService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var IssueService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "bytebase.v1.IssueService",
	HandlerType: (*IssueServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetIssue",
			Handler:    _IssueService_GetIssue_Handler,
		},
		{
			MethodName: "CreateIssue",
			Handler:    _IssueService_CreateIssue_Handler,
		},
		{
			MethodName: "ListIssues",
			Handler:    _IssueService_ListIssues_Handler,
		},
		{
			MethodName: "UpdateIssue",
			Handler:    _IssueService_UpdateIssue_Handler,
		},
		{
			MethodName: "CreateIssueComment",
			Handler:    _IssueService_CreateIssueComment_Handler,
		},
		{
			MethodName: "UpdateIssueComment",
			Handler:    _IssueService_UpdateIssueComment_Handler,
		},
		{
			MethodName: "BatchUpdateIssues",
			Handler:    _IssueService_BatchUpdateIssues_Handler,
		},
		{
			MethodName: "ApproveIssue",
			Handler:    _IssueService_ApproveIssue_Handler,
		},
		{
			MethodName: "RejectIssue",
			Handler:    _IssueService_RejectIssue_Handler,
		},
		{
			MethodName: "RequestIssue",
			Handler:    _IssueService_RequestIssue_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "v1/issue_service.proto",
}
