# Instalação do NodeJs

### Instalação do chocolatey
```bash
  Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('<https://community.chocolatey.org/install.ps1>'))
```
### Instalação do NVM
([NVM Windows](https://github.com/coreybutler/nvm-windows/releases))

### Instalação do Node
```bash
  nvm list available                      // lista versões disponíveis
  nvm install numero-versão               // instala uma versão do node
  nvm ls                                  // lista versões do node instaladas na máquina
  nvm use numero-versão                   //seleciona a versão do node
```

# Instalação do Expo CLI
```bash
    npm install -g expo-cli
```

# Criação do primeiro projeto
```bash
    cd "caminho-da-pasta"
    npx create-expo-app nome-projeto --template //Mostra a lista de templates dosponíveis, bem como o workflow

    cd nome-projeto
    npx expo start // Inicia o projeto

    // Para que seja possível usar o Expo no navegador, é necessário usar o seguinte comando
    npx expo install react-native-web react-dom @expo/metro-runtime
```

# Clonando projeto e rodando localmente

```bash
    npm install 
    npx expo start
```
