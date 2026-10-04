# Organização Solidária

Projeto front-end acadêmico de uma ONG fictícia, desenvolvido para praticar HTML5, CSS3, JavaScript, acessibilidade, armazenamento local, modularização, versionamento e preparação para produção.

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis, Grid, Flexbox e media queries
- JavaScript ES6 Modules
- `localStorage`
- RegEx para validação
- Vite para build de produção
- Git e GitHub para versionamento

## Funcionalidades

- Navegação responsiva com menu para telas menores.
- Modo escuro e alto contraste com preferência salva no navegador.
- Projetos gerados dinamicamente com Template Literals.
- Modal de informações dos projetos.
- Formulário com validação em tempo real.
- Máscaras de CPF, telefone e CEP.
- Estados visuais de erro e sucesso.
- Persistência dos dados do formulário com `localStorage`.
- Navegação por teclado e foco visível.
- HTML semântico e atributos WAI-ARIA.
- Imagens em WebP e carregamento `lazy` quando apropriado.

## Estrutura

```text
/
├── index.html
├── projetos.html
├── cadastro.html
├── css/style.css
├── js/
│   ├── main.js
│   ├── navegacao.js
│   ├── projetos.js
│   ├── formulario.js
│   └── storage.js
├── assets/images/
├── package.json
├── vite.config.js
└── README.md
```

## Instalação local

1. Instale o Node.js e o Git.
2. Clone o repositório:
   ```bash
   git clone URL_DO_REPOSITORIO
   ```
3. Entre na pasta:
   ```bash
   cd Organizacao-Solidaria
   ```
4. Instale as dependências:
   ```bash
   npm install
   ```
5. Inicie o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```
6. Abra o endereço informado pelo Vite no navegador.

## Build de produção

```bash
npm run build
```

A versão otimizada é gerada na pasta `dist`.

Para visualizar a build:

```bash
npm run preview
```

## Acessibilidade

A interface utiliza landmarks (`header`, `nav`, `main`, `section` e `footer`), textos alternativos, `label` associados aos campos, `aria-current`, `aria-expanded`, `aria-pressed`, `aria-live`, foco visível e navegação por teclado.

As cores foram organizadas em variáveis CSS para facilitar a manutenção do contraste e dos modos de visualização.

## Versionamento

O projeto pode seguir GitFlow:

- `main`: versão estável.
- `develop`: desenvolvimento.
- `feature/*`: novas funcionalidades.
- `hotfix/*`: correções urgentes.

Exemplos de Conventional Commits:

```text
feat: implementar validação do formulário
feat: adicionar localStorage
feat: adicionar projeto inicial da organizacao solidaria
fix: corrigir navegação responsiva
docs: atualizar README
```

A primeira versão estável pode ser marcada como `v1.0.0`.

## Observação

O formulário deste projeto é demonstrativo e não envia dados para um servidor. Os dados são armazenados apenas no `localStorage` do navegador.
