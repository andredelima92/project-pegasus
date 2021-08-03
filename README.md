# Parlador Ideal

## Descrição do Projeto
<p align="center">Neste app as pessoas poderão se cadastrar e compartilhar novas ideias, documentar processos dentro da empresa, e deixar suas opniões.</p>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Laravel](https://laravel.com/)


# 👉 Configurações

# Clone este repositório
$ git clone <https://github.com/andredelima92/project-pegasus>

# Acesse a pasta do projeto no terminal/cmd
# Vá para a pasta server
$ cd server

# Renomear o arquivo .env.example para .env e configurar os seguintes campos para acesso ao banco de dados
$ DB_CONNECTION=mysql
$ DB_HOST=127.0.0.1
$ DB_PORT=3306
$ DB_DATABASE=data_base_name
$ DB_USERNAME=data_base_username
$ DB_PASSWORD=data_base_password

# Rode as migrations e os seeds para criar as tabelas e popular o banco
$ php artisan migrate --seed

# Vá para a pasta mobile
$ cd mobile

# Instale as dependências
$ npm install

# Configure o arquivo .env com o caminho da api
$ API_URL=http://192.168.3.36/parlador-ideal/server/public/api

# Execute a aplicação em modo de desenvolvimento
$ npm run start
$ npm run android