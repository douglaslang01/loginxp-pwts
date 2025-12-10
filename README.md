# Projeto de Testes de Login com Playwright e TypeScript

Este repositório contém um **projeto de testes automatizados de login** desenvolvido com **Playwright** e **TypeScript**.  
O objetivo é validar o fluxo de autenticação de usuários em aplicações web, garantindo confiabilidade e rapidez nos testes.

---

## ✨ Funcionalidades
- Testes de login com diferentes cenários (sucesso, falha, credenciais inválidas).  
- Estrutura organizada em TypeScript para melhor manutenção e escalabilidade.  
- Uso do Playwright para simulação de interações reais no navegador.  
- Fácil integração em pipelines de CI/CD.  

---

## 🚀 Tecnologias Utilizadas
- [Playwright](https://playwright.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  

---

## 📂 Estrutura do Projeto
```
├── tests/               # Casos de teste
│   └── login.spec.ts    # Testes de login
├── playwright.config.ts # Configuração do Playwright
├── package.json         # Dependências e scripts
└── README.md            # Documentação do projeto
```
---

## 🤖 Como executar

1. Instalar as dependências
```
npm install
```

2. Executar testes em Headless
```
npx playwright test 
```

3. Executar ver o relatório dos testes
```
npx playwright show-report
```
---

## 📄 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
