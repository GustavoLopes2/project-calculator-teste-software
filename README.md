# Calculator CI Example (Node + Jest + GitHub Actions)

## Como usar localmente
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode os testes:
   ```bash
   npm run test:jest
   ```
3. (Opcional) Execute a demo no console:
   ```bash
   npm start
   ```

## Como habilitar a CI no GitHub
1. Faça o upload deste projeto para um repositório GitHub.
2. Garanta que o arquivo `.github/workflows/ci.yml` está no repositório.
3. Ao fazer `push` para a branch `main` ou abrir um `pull_request`, o pipeline será executado automaticamente:
   - Faz checkout do código
   - Configura Node.js
   - Instala dependências com cache
   - Executa testes com cobertura

## Estrutura
```text
calculator-ci/
├─ .github/workflows/ci.yml
├─ __tests__/calculator.test.js
├─ src/
│  ├─ calculator.js
│  └─ index.js
└─ package.json
```
