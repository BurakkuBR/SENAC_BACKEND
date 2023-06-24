# Verificar versão do node instalado

node -v ou node

# Criar pacote JSON

npm init -y

# Instalação do Typescript

npm i -g typescript

# Transpilar o código TS

npx tsc (filename.ts)

# Criar arquivo JS

npm i -g typescript

# Mostar o conteudo do console.log

node filename.ts

# Criar arquivo de configuração typescript

npx tsc --init

# Configuracões no arquivo tsconfig.json

"target":"ES6"
"module": "commonjs",
"sourceMap": true,
"outDir": "/.build"
"rootDir": "./src"
"removeComments": true,
"noImplicity": true,

# Configuração do pacote JSON

"scripts": {
"start": "npx tsc && node ./build/(filename.js)"

# Starta o pacote JSON

npm start
