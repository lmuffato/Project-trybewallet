export const validadeLogin = (client) => {
  const CARACTERE_SENHA_MINIMO = 6;
  const caracteresSpecial = !!(client.user.includes('@') && client.user.includes('.'));
  const validadeEmail = !!(caracteresSpecial && client.user.split('.')[1]);
  const validadeSenha = client.password.length >= CARACTERE_SENHA_MINIMO;

  if (validadeSenha && validadeEmail) {
    return false;
  }

  return true;
};

export const getAPI = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await request.json();
  return Object.keys(data);
};