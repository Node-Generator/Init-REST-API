export const BAD_REQUEST = { status: 400, message: 'Bad Request' };

export default ({ status, message }, customMessage) => {
  const error = new Error(message || customMessage);
  error.status = status;
  throw error;
};
