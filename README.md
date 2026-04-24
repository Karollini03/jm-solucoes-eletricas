# ⚡ JM Soluções Elétricas

Site institucional para a empresa **JM Soluções Elétricas**, com foco em serviços elétricos residenciais, comerciais e industriais na região de Porto Alegre, RS.

---

## 📁 Estrutura do Projeto

```
jm-eletrica/
├── assets/             # Fotos e imagens (não versionado)
├── css/
│   └── styles.css      # Estilos do site
├── js/
│   ├── config.js       # Dados sensíveis — NÃO versionado (ver abaixo)
│   ├── config.example.js # Modelo de configuração
│   └── main.js         # Scripts do site
├── index.html          # Página principal
├── .gitignore
└── README.md
```

---

## ⚙️ Configuração

O arquivo `js/config.js` contém informações sensíveis (telefone, redes sociais) e **não está no repositório**.

Para rodar o projeto localmente:

1. Copie o arquivo de exemplo:
```bash
cp js/config.example.js js/config.js
```

2. Edite `js/config.js` com os dados reais:
```javascript
const CONFIG = {
  whatsapp: "5551999999999",
  instagram: "https://instagram.com/seu_usuario",
  facebook: "https://facebook.com/sua_pagina",
  telefone: "tel:+5551999999999",
  telefoneExibido: "(51) 99999-9999",
  cidade: "Porto Alegre, RS"
};
```

3. Adicione as fotos dos trabalhos na pasta `assets/`

---

## 🚀 Como rodar

Por ser um site HTML/CSS/JS puro, basta abrir o `index.html` no navegador ou usar uma extensão como **Live Server** no VS Code.

> ⚠️ Sem o `js/config.js` configurado, os links de contato não vão funcionar corretamente.

---

## 🛠️ Tecnologias

- HTML5
- CSS3 (variáveis CSS, Grid, Flexbox, animações)
- JavaScript puro (Vanilla JS)
- Fonte: [Montserrat](https://fonts.google.com/specimen/Montserrat) via Google Fonts

---

## 📋 Seções do Site

- **Início** — Hero com chamada para ação
- **Serviços** — Instalação residencial, manutenção industrial, quadros de força, reparos, placas solares e automação
- **Galeria** — Portfólio de trabalhos realizados
- **Contato** — WhatsApp, telefone e redes sociais

---

## 🌐 Deploy

A hospedagem será definida futuramente. Ao realizar o deploy, lembre-se de:

- Configurar o `js/config.js` no servidor com os dados reais
- Fazer o upload das imagens na pasta `assets/`

---

## 📄 Licença

Projeto privado. Todos os direitos reservados © 2025 JM Soluções Elétricas.