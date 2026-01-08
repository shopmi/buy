import axios from "axios";

import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });
const ask = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
};

(async () => {
  const scope = {
    access_token: null,
  };

  if ("y" == (await ask("Gerar token de acesso? "))) {
    const data = {
      grant_type: "authorization_code",
      client_id: null,
      client_secret: null,
      code: null,
      redirect_uri: null,
    };

    console.log("Acesse a sua aplicação no Mercado Livre");
    console.log("https://developers.mercadolibre.com.br/devcenter");

    data.client_id = await ask("ID do aplicativo: ");
    data.client_secret = await ask("Chave secreta: ");
    data.redirect_uri = await ask("URI de redirect: ");

    console.log("Permitir autenticação:");
    console.log(
      `https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=${data.client_id}`
    );

    data.code = await ask("Código TG-***: ");

    const resp = await axios({
      method: "post",
      url: "https://api.mercadolibre.com/oauth/token",
      headers: { "Content-Type": "application/json" },
      data,
    });

    console.log("Token de acesso:");
    console.log(resp.data.access_token);
    scope.access_token = resp.data.access_token;
  }

  if (!scope.access_token) {
    scope.access_token = await ask("Token de acesso: ");
  }

  const ml_request = async (params) => {
    params.headers = params.headers || {};
    // params.headers.Authorization = `Bearer ${scope.access_token}`;
    return await axios(params);
  };

  const products = [
    { id: "MLB5562426918", affiliate: null },
    // { id: "MLB4448570816", affiliate: null },
  ];

  try {
    const resp = await ml_request({
      method: "get",
      url: "https://api.mercadolibre.com/items",
      params: {
        ids: products.map((p) => p.id).join(","),
        access_token: scope.access_token,
      },
    });

    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
})();
