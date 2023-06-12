import npp from "../../../public/npp.jpg"
import dino from "../../../public/dino.jpg"
import pa from "../../../public/pa.jpeg"
import cat from "../../../public/cat.webp"
import dona from "../../../public/pregs.jpg"
import rafa from "../../../public/rafa.jpg"

const criadores = [
  {
    id: 1,
    category: { title: "Marketing", href: "/creatorPage" },
    author: {
      name: "Nicolas Pereira Paz",
      desc: "Gosto de falar sobre tecnologia e IA 👋",
      bio: "Entusiasta da tecnologia e apaixonado por IA. Compartilhando conhecimento e insights sobre as últimas tendências e avanços em tecnologia e inteligência artificial. Junte-se a mim nessa jornada empolgante para explorar o futuro digital. #Tecnologia #IA #Inovação",
      icon: npp,
    },
  },
  {
    id: 2,
    category: { title: "Marketing", href: "/creatorPage" },
    author: {
      name: "Dino",
      desc: "Gosto de falar sobre como a tecnologia ajuda em outras áreas",
      bio: "Explorando o impacto da tecnologia em diversos setores. Apaixonado por descobrir como a tecnologia está revolucionando áreas como saúde, educação, sustentabilidade e muito mais. Vamos conversar sobre como a inovação está transformando o mundo para melhor. #Tecnologia #Inovação #ImpactoSocial",
      icon: dino,
    },
  },
  {
    id: 3,
    category: { title: "Marketing", href: "/creatorPage" },
    author: {
      name: "Paulo André",
      desc: "Falo sobre PHP e gosto de volêi",
      bio: "Desenvolvedor PHP e entusiasta do vôlei. Compartilhando dicas, truques e últimas tendências em PHP, juntamente com minha paixão pelo vôlei. Junte-se a mim para mergulhar no mundo da programação e do esporte. #PHP #Vôlei #DesenvolvimentoWeb",
      icon: pa,
    },
  },
  {
    id: 4,
    category: { title: "Marketing", href: "/creatorPage" },
    author: {
      name: "Gato Pro",
      desc: "Sempre falando sobre JavaScript, bom dia!!",
      bio: "Apaixonado por JavaScript e todas as suas maravilhas. Comece seu dia com uma dose de código e inspiração matinal. Compartilhando dicas, truques e atualizações sobre o mundo do JavaScript. Vamos tornar nossas manhãs mais brilhantes e nosso código mais eficiente. Bom dia! ☀️🌈 #JavaScript #DesenvolvimentoWeb #BomDia",
      icon: cat,
    },
  },
  {
    id: 5,
    category: { title: "Marketing", href: "/creatorPage" },
    author: {
      name: "Dona Preguiça",
      desc: "London and coding == ❤ ",
      bio: "Londonense apaixonado por programação e pela vibrante cena tech de Londres. Compartilhando insights sobre desenvolvimento, eventos e tendências tecnológicas na capital britânica. Vamos explorar o mundo do código e mergulhar na energia de Londres. 🌆💻 #Londres #Programação #Tech",
      icon: dona,
    },
  },
  {
    id: 6,
    category: { title: "Marketing", href: "/creatorPage" },
    author: {
      name: "Rafael Pellegrini",
      desc: "Designer a mais de 10 anos, deixa com quem sabe!",
      bio: "Designer experiente há mais de 10 anos. Confie seu projeto a quem sabe o que faz! Compartilhando dicas, inspiração e tendências do mundo do design. Vamos criar juntos! 💡🎨 #Design #Criatividade #Experiência",
      icon: rafa,
    },
  },
];

export default criadores;
