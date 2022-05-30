class CustomError extends Error {
    statusCode: Number;
    msg: String;
    constructor(error: any) {
        super(error.msg);
        this.statusCode = error.statusCode;
        this.msg = error.msg;
    }
}
export default CustomError;