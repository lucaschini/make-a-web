import icon from "../../../public/npp.jpg";
import nextImg from "../../../public/next.svg";
import reactImg from "../../../public/react.svg";
import lgpdImg from "../../../public/lgpd.jpg";

import criadores from "./criadores";

const posts = [
  {
    id: 1,
    category: { title: "Marketing", href: "/openPost" },
    title: "Next.Js: Um guia!",
    content: `O desenvolvimento de aplicações web modernas exige uma abordagem eficiente e flexível. É aqui que o Next.js entra em cena, proporcionando uma experiência de desenvolvimento poderosa e simplificada. Neste guia abrangente, vamos explorar os recursos e benefícios do Next.js, além de fornecer insights valiosos para você começar a construir suas próprias aplicações web de alto desempenho.
        O que é o Next.js?
        Uma visão geral do Next.js e como ele se encaixa no ecossistema do React.
        A arquitetura e os princípios por trás do Next.js.
        Como o Next.js simplifica a construção de aplicações web modernas.
        Configuração e Ambiente de Desenvolvimento:
        Configurando um novo projeto Next.js.
        Estrutura de pastas e organização de arquivos.
        Integração com outras bibliotecas e ferramentas populares.
        Roteamento e Navegação:
        Explorando as diferentes opções de roteamento oferecidas pelo Next.js.
        Navegação entre páginas e passagem de parâmetros.
        Otimização de rotas e carregamento prévio (preloading) de páginas.
        Renderização do Lado do Servidor (Server-side Rendering - SSR):
        Aprofundando-se nos benefícios do SSR e como implementá-lo com o Next.js.
        Renderização inicial versus renderização no cliente.
        Otimizações para melhorar o desempenho do SSR.
        Geração de Páginas Estáticas (Static Site Generation - SSG):
        Aprendendo sobre o conceito de geração estática de páginas.
        Como usar o SSG com Next.js para obter páginas estáticas e pré-renderizadas.
        Atualização dinâmica de páginas estáticas com dados em tempo real.
        Estilização e Componentização:
        Opções de estilização e CSS-in-JS com Next.js.
        Melhores práticas para a criação de componentes reutilizáveis.
        Integração com bibliotecas populares de estilos e temas.
        Gerenciamento de Dados:
        Conexão com APIs externas e consumo de dados.
        Uso de bibliotecas de gerenciamento de estado no Next.js.
        Estratégias de cache e otimização para obter um melhor desempenho.
        Conclusão:
        O Next.js se estabeleceu como uma ferramenta poderosa para o desenvolvimento de aplicações web modernas. Com este guia abrangente, você tem todas as informações necessárias para começar a explorar o potencial do Next.js em seus projetos. Aproveite os recursos e a flexibilidade que o Next.js oferece e crie aplicações web rápidas, eficientes e altamente escaláveis.`,
    img: nextImg,
  },
  {
    id: 2,
    category: { title: "Marketing", href: "/openPost" },
    title: "React: por que utilizar?",
    content: ``,
    img: reactImg,
  },
  {
    id: 3,
    category: { title: "Marketing", href: "/openPost" },
    title: "Você conhece a LGPD?",
    content: ``,
    img: lgpdImg,
  },
];

export default posts;
