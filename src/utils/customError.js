export default (errorString, code = 500) => {
  const error = new Error(errorString);
  error.code = code;
  throw error;
};

export const errorHandler = (error, req, res, next) => {
  if (error) {
    return res.status(error.code).json({
      message: error.message,
    });
  }
  return next();
};