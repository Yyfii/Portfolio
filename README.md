# Como iniciar o projeto

```bash
> npm start
```

# Deploy no GitHub pages

1- No arquivo `package.json`, adicione a linha homepage e altere o bloco de scripts:

```json
  "homepage": "https://<usuario>.github.io/Portfolio",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy":"npm run build",
    "deploy": "gh-pages -d build"
  },
```

2 - Salve e execute os comandos para deploy:

```bash
npm run build
npm run deploy
```

Então, acesse o link que você colocou como homepage, por exemplo para mim foi:

Link -> https://yyfii.github.io/Portfolio/

![alt text](image.png)
