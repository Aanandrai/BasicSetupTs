declare class ApiResponse<T = any> {
    statusCode: number;
    message: string;
    success: boolean;
    data: T;
    constructor(statusCode: number, data: T, message?: string);
}
export { ApiResponse };
//# sourceMappingURL=ApiResponse.d.ts.map