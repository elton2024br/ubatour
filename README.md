# UbaTour - Plataforma de Reservas de Passeios em Ubatuba

UbaTour é uma plataforma online de reservas de passeios e experiências turísticas exclusiva para Ubatuba. O site destaca as belezas naturais, trilhas, praias, cachoeiras e roteiros de ecoturismo de Ubatuba, oferecendo uma experiência de usuário intuitiva e inspiradora.

## 🌊 Sobre o Projeto

A plataforma foi desenvolvida para turistas nacionais e estrangeiros interessados em explorar Ubatuba – seja para ecoturismo, aventuras, passeios culturais ou lazer em família. O design moderno e responsivo remete ao mar, à Mata Atlântica e à brasilidade, utilizando imagens de alta qualidade que destacam os pontos turísticos de Ubatuba.

## 🚀 Funcionalidades

- Pesquisa e filtragem de passeios por data, tipo de atividade, preço e nível de dificuldade
- Páginas detalhadas para cada passeio, com galerias de imagens, avaliações e informações completas
- Sistema de reservas integrado com carrinho e checkout simples
- Seção de avaliações reais e depoimentos
- Design responsivo para desktop e mobile

## 🛠️ Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/) - Framework React para desenvolvimento web
- [React 19](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Headless UI](https://headlessui.com/) - Componentes UI acessíveis e sem estilo
- [Heroicons](https://heroicons.com/) - Ícones SVG bonitos feitos à mão
- [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca de ícones populares
- [Swiper](https://swiperjs.com/) - Biblioteca de slider/carrossel moderna
- [Zustand](https://zustand-demo.pmnd.rs/) - Gerenciamento de estado minimalista
- [Date-fns](https://date-fns.org/) - Biblioteca de utilitários de data moderna
- [React DatePicker](https://reactdatepicker.com/) - Componente de seleção de data flexível

## 📋 Pré-requisitos

- Node.js 18.0.0 ou superior
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/ubatour.git
cd ubatour
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📦 Estrutura do Projeto

```
ubatour/
├── app/                    # Diretório principal da aplicação Next.js
│   ├── components/         # Componentes reutilizáveis
│   │   ├── home/           # Componentes específicos da página inicial
│   │   ├── layout/         # Componentes de layout (Header, Footer)
│   │   ├── tours/          # Componentes relacionados a passeios
│   │   └── ui/             # Componentes de UI genéricos
│   ├── categorias/         # Páginas de categorias
│   ├── contato/            # Página de contato
│   ├── sobre/              # Página sobre nós
│   ├── tours/              # Páginas de passeios
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal da aplicação
│   └── page.tsx            # Página inicial
├── public/                 # Arquivos estáticos
│   └── images/             # Imagens do site
├── package.json            # Dependências e scripts
└── README.md               # Documentação do projeto
```

## 🌐 Implantação

Para implantar o projeto em produção:

```bash
npm run build
# ou
yarn build
```

Em seguida, inicie o servidor:

```bash
npm run start
# ou
yarn start
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 📞 Contato

Para mais informações, entre em contato através do e-mail: contato@ubatour.com.br
