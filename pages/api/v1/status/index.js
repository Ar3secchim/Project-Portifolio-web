function status(req, res, next) {
  res.status(200).json({body: "Aqui está todo status de serviços da aplicação"});
}

export default status;
