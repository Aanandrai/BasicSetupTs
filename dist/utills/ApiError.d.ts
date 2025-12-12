declare class ApiError extends Error {
    statusCode: number;
    errors: any[];
    success: boolean;
    data: any;
    constructor(statusCode: number, message?: string, errors?: any[], stack?: string);
}
export { ApiError };
//# sourceMappingURL=ApiError.d.ts.map