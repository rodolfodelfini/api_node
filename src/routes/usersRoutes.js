module.exports = (app) => {
  const { UsersController } = app.src.controllers;

  /**
   * Lista tipos de ocorrência.
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  const getUsers = async (req, res) => {
    try {
      // const { headers } = req;
      // const options = {};

      // if (Object.prototype.hasOwnProperty.call(headers, 'search')) {
      //   options.search = headers.search;
      // }

      // if (Object.prototype.hasOwnProperty.call(headers, 'limit')) {
      //   const limit = parseInt(headers.limit, 10);
      //   if (Number.isNaN(limit) || limit === 0) {
      //     //return responses.error([], 'Valor inválido para o campo [limit].');
      //     return 'Valor inválido para o campo [limit].';
      //   }

      //   options.limit = limit;
      // }

      // if (Object.prototype.hasOwnProperty.call(headers, 'page')) {
      //   const page = parseInt(headers.page, 10);
      //   if (Number.isNaN(page)) {
      //     //return responses.error([], 'Valor inválido para o campo [page].');
      //     return 'Valor inválido para o campo [page].';
      //   }

      //   options.page = page;
      // }

      // if (Object.prototype.hasOwnProperty.call(headers, 'order')) {
      //   options.order = headers.order;
      // }

      // if (Object.prototype.hasOwnProperty.call(headers, 'order_field')) {
      //   options.orderField = headers.order_field;
      // }

      // options.idCliente = req.user.selectedClient.id_cliente;
      return res.json(await UsersController.list(req, res));
    } catch (error) {
      //return res.status(500).json(responses.error([], error.message, error));
      //return res.status(500).json(error.message, error);
      console.log(error)
    }
  };

  /**
   * Cria tipo de ocorrência.
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  const postRegister = async (req, res) => {
    try {
      //const { body } = req;
      //const params = {};

      // if (!Object.prototype.hasOwnProperty.call(body, 'descricao')) {
      //   //return res.json(responses.error({}, 'A propriedade [descricao] é obrigatória.'));
      //   return 'A propriedade [descricao] é obrigatória.';
      // }

      // if (!Object.prototype.hasOwnProperty.call(body, 'form_solicitante')) {
      //   //return res.json(responses.error({}, 'A propriedade [form_solicitante] é obrigatória.'));
      //   return 'A propriedade [form_solicitante] é obrigatória.';
      // }

      // if (!Object.prototype.hasOwnProperty.call(body, 'id_tipo_protocolo')) {
      //   //return res.json(responses.error({}, 'A propriedade [id_tipo_protocolo] é obrigatória.'));
      //   return 'A propriedade [id_tipo_protocolo] é obrigatória.';
      // }

      // if (!Object.prototype.hasOwnProperty.call(body, 'url_detalhe')) {
      //   //return res.json(responses.error({}, 'A propriedade [url_detalhe] é obrigatória.'));
      //   return 'A propriedade [url_detalhe] é obrigatória.';
      // }

      // const idTipoProtcolo = parseInt(body.id_tipo_protocolo, 10);
      // if (Number.isNaN(idTipoProtcolo)) {
      //   //return res.json(responses.error({}, 'Valor inválido para a propriedade [id_tipo_protocolo].'));
      //   return 'Valor inválido para a propriedade [id_tipo_protocolo].';
      // }

      // params.descricao = body.descricao;
      // params.form_solicitante = body.form_solicitante;
      // params.id_tipo_protocolo = idTipoProtcolo;
      // params.id_cliente = req.user.selectedClient.id_cliente;
      // params.url_detalhe = body.url_detalhe;

      // if (Object.prototype.hasOwnProperty.call(body, 'prazo_vencimento_sla')) {
      //   const prazoVencimentoSla = parseInt(body.prazo_vencimento_sla, 10);
      //   if (!Number.isNaN(prazoVencimentoSla)) {
      //     params.prazo_vencimento_sla = prazoVencimentoSla;
      //   } else {
      //     //return res.json(responses.error({}, 'Valor inválido para a propriedade [prazo_vencimento_sla].'));
      //     return 'Valor inválido para a propriedade [prazo_vencimento_sla].';
      //   }
      // }

      // if (Object.prototype.hasOwnProperty.call(body, 'header_detalhe')) {
      //   params.header_detalhe = body.header_detalhe;
      // }

      return res.json(await UsersController.store(req, res));
    } catch (error) {
      //return res.status(500).json(responses.error({}, error.message, error));
      //return error.message;
      console.log(error)
    }
  };

  const postLogin = async (req, res) => {
    try {
      return res.json(await UsersController.login(req, res));
    } catch (error) {
      console.log(error)
    }
  };
  /**
   * Carrega um tipo de ocorrência.
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  const loadTipoOcorrencia = async (req, res) => {
    try {
      return res.json(await MockupController.load(
        req.user.selectedClient.id_cliente,
        req.params.idTipoOcorrencia,
      ));
    } catch (error) {
      //return res.status(500).json(responses.error({}, error.message, error));
      return error.message;
    }
  };

  /**
   * Atualiza um tipo de ocorrência.
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  const putTipoOcorrencia = async (req, res) => {
    try {
      const params = {};
      const { body } = req;

      if (Object.prototype.hasOwnProperty.call(body, 'descricao')) {
        params.descricao = body.descricao;
      }

      if (Object.prototype.hasOwnProperty.call(body, 'prazo_vencimento_sla')) {
        params.prazo_vencimento_sla = body.prazo_vencimento_sla;
      }

      if (Object.prototype.hasOwnProperty.call(body, 'form_solicitante')) {
        params.form_solicitante = body.form_solicitante;
      }

      if (Object.prototype.hasOwnProperty.call(body, 'url_detalhe')) {
        params.url_detalhe = body.url_detalhe;
      }

      if (Object.prototype.hasOwnProperty.call(body, 'header_detalhe')) {
        params.header_detalhe = body.header_detalhe;
      }

      if (Object.prototype.hasOwnProperty.call(body, 'id_tipo_protocolo')) {
        params.id_tipo_protocolo = body.id_tipo_protocolo;
      }

      return res.json(await MockupController.update(
        req.user.selectedClient.id_cliente,
        req.params.idTipoOcorrencia,
        params,
      ));
    } catch (error) {
      //return res.status(500).json(responses.error({}, error.message, error));
      return error.message;
    }
  };

  /**
   * Remove um tipo de ocorrência.
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  const deleteTipoOcorrencia = async (req, res) => {
    try {
      return res.json(await MockupController.remove(
        req.user.selectedClient.id_cliente,
        req.params.idTipoOcorrencia,
      ));
    } catch (error) {
      //return res.status(500).json(responses.error({}, error.message, error));
      return error.message;
    }
  };

app.route('/user').get(getUsers); //list
app.route('/user/register').post(postRegister); //register
app.route('/user/login').post(postLogin); //login

};
