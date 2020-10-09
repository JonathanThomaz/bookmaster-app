type book = {
  id: number;
  nome?: string;
  autor?: string;
  paginas?: string;
  generos?: string;
  editoras?: string;
  description?: string;
};

export const books: Array<book> = [
  {
    id: 1,
    nome: 'Código Limpo: Habilidades Práticas do Agile Software',
    autor: 'Robert C. Martin',
    paginas: '355',
    generos: 'Programação, TI, Clean Cod',
    editoras: 'Awesome',
    description:
      '<p> Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. </p><p>Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim. O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo: Habilidades Práticas do Agile Software.</p><p> Martin se reuniu com seus colegas do Mentor Object para destilar suas melhores e mais ágeis práticas de limpar códigos “dinamicamente” em um livro que introduzirá gradualmente dentro de você os valores da habilidade de um profissional de softwares e lhe tornar um programador melhor –mas só se você praticar. Que tipo de trabalho você fará? Você lerá códigos aqui, muitos códigos. E você deverá descobrir o que está correto e errado nos códigos. E, o mais importante, você terá de reavaliar seus valores profissionais e seu comprometimento com o seu ofício. Código limpo está divido em três partes. Na primeira há diversos capítulos que descrevem os princípios, padrões e práticas para criar um código limpo. A segunda parte consiste em diversos casos de estudo de complexidade cada vez maior. Cada um é um exercício para limpar um código – transformar o código base que possui alguns problemas em um melhor e eficiente. A terceira parte é a compensação: um único capítulo com uma lista de heurísticas e “odores” reunidos durante a criação dos estudos de caso. O resultado será um conhecimento base que descreve a forma como pensamos quando criamos, lemos e limpamos um código.</p>'
  },
  {
    id: 2,
    nome: 'Teste nome',
    autor: 'Teste nome',
    paginas: 'Teste nome',
    generos: 'Teste nome',
    editoras: 'Teste nome',
    description: 'Teste nome'
  },
  {
    id: 3,
    nome: 'Teste nome',
    autor: 'Teste nome',
    paginas: 'Teste nome',
    generos: 'Teste nome',
    editoras: 'Teste nome',
    description: 'Teste nome'
  },
  {
    id: 7,
    nome: 'Teste nome',
    autor: 'Teste nome',
    paginas: 'Teste nome',
    generos: 'Teste nome',
    editoras: 'Teste nome',
    description: 'Teste nome'
  },
  {
    id: 4,
    nome: 'Teste nome',
    autor: 'Teste nome',
    paginas: 'Teste nome',
    generos: 'Teste nome',
    editoras: 'Teste nome',
    description: 'Teste nome'
  },
  {
    id: 5,
    nome: 'Teste nome',
    autor: 'Teste nome',
    paginas: 'Teste nome',
    generos: 'Teste nome',
    editoras: 'Teste nome',
    description: 'Teste nome'
  },
  {
    id: 6,
    nome: 'Teste nome',
    autor: 'Teste nome',
    paginas: 'Teste nome',
    generos: 'Teste nome',
    editoras: 'Teste nome',
    description: 'Teste nome'
  }
];
