const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Server Error' });
};
export default errorHandler;