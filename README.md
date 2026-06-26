# Hotel Aurora — Landing Page (Portfólio)

Landing page premium para um resort fictício de 5 estrelas, construída em **React + Vite**.

## Stack
- React 19 + Vite
- CSS puro com design tokens (sem framework de UI)
- `react-icons` para iconografia
- IntersectionObserver para animações de scroll (sem libs externas de animação)

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (pasta dist/)
npm run preview  # pré-visualizar o build de produção
```

## Estrutura

```
src/
  components/   # Cada seção da página + componentes utilitários
  data/         # content.js — todo o conteúdo textual e listas de dados
  hooks/        # useReveal (scroll reveal) e useCounter (contadores animados)
  index.css     # Design tokens, tipografia, utilitários globais
  App.jsx       # Composição da página com code-splitting (lazy + Suspense)
```

## Destaques de implementação
- **Code splitting**: seções abaixo da dobra são carregadas via `React.lazy`.
- **Lazy loading de imagens**: atributo `loading="lazy"` em toda imagem fora do hero.
- **Acessibilidade**: navegação por teclado, `aria-label`s, foco visível, hierarquia semântica de headings.
- **SEO**: meta tags, Open Graph, Twitter Cards e dados estruturados (`schema.org/Hotel`) em `index.html`.
- **Responsivo**: mobile-first, sem scroll horizontal, breakpoints em 600/768/900/1024/1280px.
- **Imagens**: placeholders de alta qualidade via Unsplash (uso livre/royalty-free).

## Substituindo conteúdo
Praticamente todo o texto e dados (quartos, comodidades, depoimentos, galeria, estatísticas)
estão centralizados em `src/data/content.js` — edite ali para customizar o site.
