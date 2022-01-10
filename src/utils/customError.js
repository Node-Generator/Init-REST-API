export const BAD_REQUEST = { status: 400, message: 'Bad Request' };

export default ({ status, message }, customMessage) => {
  const error = new Error(message || customMessage);
  error.status = status;
  throw error;
};

export const errorHandler = (error, req, res, next) => {
  if (error) {
    return res.status(error.status).json({
      message: error.message,
    });
  }
  return next();
};
