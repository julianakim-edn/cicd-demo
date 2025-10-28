exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda CI/CD - versão 1.0!'),
  };
  return response;
};
