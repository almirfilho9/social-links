# 🔗 Social Links

Perfil de links pessoal com design moderno, animações suaves e suporte a PWA.

![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square&logo=vuedotjs)
![Vite](https://img.shields.io/badge/Vite-8.0-646cff?style=flat-square&logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-No-3178c6?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🎨 Design moderno com glassmorphism
- 🌙 Suporte a tema claro/escuro
- ⚡ Animações suaves com staggered effects
- 📱 PWA - instalável como app
- 🔧 100% configurável via JSON
- ✅ Testes com Vitest
- 🧹 ESLint + Prettier

## 🚀 Quick Start

```bash
# Clone o repositório
git clone https://github.com/almirfilho9/social-links.git

# Entre na pasta
cd social-links

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## ⚙️ Configuração

Edite o arquivo `src/data/profile.json` para personalizar:

```json
{
  "profile": {
    "name": "Seu Nome",
    "avatarUrl": "https://exemplo.com/avatar.jpg",
    "title": "Seu Título",
    "bio": "Sua bio aqui"
  },
  "links": [
    { "id": "github", "title": "GitHub", "url": "https://github.com/seuuser", "icon": "Github" }
  ],
  "socials": [
    { "id": "twitter", "url": "https://twitter.com/seuuser", "icon": "Twitter" }
  ],
  "theme": {
    "colors": {
      "primary": "#4f46e5",
      "background": "#0f172a",
      "text": "#f8fafc",
      "cardBg": "rgba(30, 41, 59, 0.7)"
    }
  }
}
```

### Ícones Disponíveis

Use qualquer ícone do [Lucide Icons](https://lucide.dev/icons) no campo `icon`.

## 🧪 Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm run preview` | Preview do build |
| `npm run lint` | Verifica código com ESLint |
| `npm run lint:fix` | Corrige erros do ESLint |
| `npm run format` | Formata código com Prettier |
| `npm run test` | Executa testes |
| `npm run test:watch` | Executa testes em watch mode |

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── LinkButton.vue      # Botão de link
│   ├── ProfileHeader.vue   # Header do perfil
│   └── SocialIcon.vue      # Ícones sociais
├── data/
│   └── profile.json        # Dados do perfil
├── utils/
│   ├── profileSchema.js    # Schema de validação
│   └── validateProfile.js  # Validador
├── App.vue
├── main.js
└── style.css
```

## 🌐 Deploy

Faça deploy gratuitamente no [Vercel](https://vercel.com) ou [Netlify](https://netlify.com):

```bash
npm run build
```

## 📄 License

MIT © [José Almir](https://github.com/almirfilho9)
