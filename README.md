# Widget Notification

Este é um projeto que utiliza o pattern de Next.js com Tailwind CSS, React e o padrão de composição para criar um widget de notificação. O projeto está hospedado em [https://widget-notification.vercel.app/](https://widget-notification.vercel.app/) e pode ser acessado para visualizar o widget em ação.

## Funcionalidades

O widget de notificação implementado neste projeto possui as seguintes funcionalidades:

- Exibe notificações em tempo real para os usuários.
- As notificações são exibidas em um canto fixo da tela e podem ser fechadas pelo usuário.
- As notificações podem ter diferentes tipos e níveis de importância.
- As notificações são armazenadas em um estado global gerenciado pelo React Context API.

## Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e bibliotecas:

- Next.js: um framework React para criação de aplicativos web.
- Tailwind CSS: uma biblioteca de utilitários CSS altamente configurável e de baixo nível.
- React: uma biblioteca JavaScript para construir interfaces de usuário.
- React Context API: uma API do React que permite compartilhar estado entre componentes sem a necessidade de passar props manualmente.
- Socket.IO: uma biblioteca que permite a comunicação bidirecional em tempo real entre o servidor e o cliente.

## Instalação e Execução

Para executar o projeto localmente, siga as etapas abaixo:

1. Certifique-se de ter o Node.js e o npm (ou yarn) instalados em seu sistema.
2. Clone este repositório para o seu ambiente de desenvolvimento.
3. Navegue até o diretório raiz do projeto.
4. Execute o seguinte comando para instalar as dependências do projeto:

   ```bash
   npm install
   ```

   ou, se estiver usando o yarn:

   ```bash
   yarn
   ```

5. Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   ou, com yarn:

   ```bash
   yarn dev
   ```

6. O servidor de desenvolvimento será iniciado e você poderá acessar o widget de notificação em seu navegador em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

A estrutura de diretórios do projeto é organizada da seguinte maneira:

- A pasta `components` contém os componentes React reutilizáveis que compõem o widget de notificação.
- A pasta `pages` contém as páginas do Next.js que são renderizadas no servidor ou no cliente.
- A pasta `public` contém os arquivos estáticos, como a folha de estilo do Tailwind CSS.
- O arquivo `next.config.js` é usado para configurações específicas do Next.js.
- O arquivo `package.json` lista as dependências do projeto e contém comandos úteis para execução do projeto.
- O arquivo `README.md` é o arquivo que você está lendo atualmente.

## Contribuição

Se você quiser contribuir para o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. Será um prazer receber suas sugestões e melhorias.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
