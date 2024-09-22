# Crypto Insight

Crypto Insight é um aplicativo que permite aos usuários acompanhar o preço das criptomoedas em tempo real, além de oferecer funcionalidades de autenticação para um uso personalizado.

## Tecnologias Utilizadas

- **React Native**: Para o desenvolvimento do aplicativo móvel.
- **TypeScript**: Para garantir uma experiência de desenvolvimento mais robusta e evitar erros comuns.
- **Django**: Usado como backend para gerenciar a API.
- **Django Rest Framework**: Para facilitar a criação de APIs RESTful.
- **Axios**: Para realizar requisições HTTP ao backend.
- **NativeBase**: Biblioteca de componentes UI para React Native.
- **AsyncStorage**: Para armazenamento local de dados, como tokens de autenticação.
- **Django Allauth**: Para gerenciamento de autenticação de usuários.

## Funcionalidades

- **Registro de Usuários**: Os usuários podem criar uma conta para acessar funcionalidades personalizadas.
- **Login e Logout**: Permite que os usuários façam login e logout de suas contas.
- **Exibição de Preços de Criptomoedas**: Acompanhe os preços de diferentes criptomoedas em tempo real.
- **Interface Amigável**: Design intuitivo e fácil de usar, com suporte para dark mode.

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão >= 14.x)
- Expo CLI
- Python (versão >= 3.6)
- Django (versão >= 3.x)

### Instruções

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/juvxncio/crypto-insight.git
   cd crypto-insight
2. **Instale as dependências do frontend**:

   ```bash
   cd frontend
   npm install
3. **Inicie o servidor Expo**:

   ```bash
   expo start
4. **Instale as dependências do backend**:

   ```bash
   cd backend
   pip install -r requirements.txt
5. **Inicie o servidor Django**:

   ```bash
   python manage.py runserver
6. **Acesse o aplicativo**:
Abra o aplicativo em seu emulador ou dispositivo físico usando o QR Code gerado pelo Expo.
   
