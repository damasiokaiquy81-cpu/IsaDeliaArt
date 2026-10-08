/* ============================================================
   MUSEUAI — OBRAS DE ISA D'ELIA
   ------------------------------------------------------------
   Imagens tiradas do site oficial isadelia.art (séries
   Nuvens, Nashiste, Janelas da Alma, Retratos, Personalidades,
   Tudo é Móvel e Condicional, Fluxo e Sob as Areias do Tempo).
   ============================================================ */

const ARTES = [
  {
    id: "nuvens-1",
    titulo: "Nuvens I",
    arquivo: "artes/nuvens-1.jpg",
    ano: 2025,
    tecnica: "Óleo sobre tela · 80 x 110 cm",
    descricao: "Zonas de sombra, sutis aberturas e campos cromáticos em " +
               "movimento — a luz que atravessa as camadas densas da " +
               "experiência humana.",
    largura: 1500, altura: 2063
  },
  {
    id: "nuvens-2",
    titulo: "Nuvens II",
    arquivo: "artes/nuvens-2.jpg",
    ano: 2025,
    tecnica: "Óleo sobre tela",
    descricao: "A cor ganha forma nos estados internos: profundidade, " +
               "instabilidade e a calma que mora depois da tempestade.",
    largura: 1500, altura: 2062
  },
  {
    id: "nuvens-3",
    titulo: "Nuvens III",
    arquivo: "artes/nuvens-3.jpg",
    ano: 2025,
    tecnica: "Óleo sobre tela · 80 x 110 cm",
    descricao: "A busca por iluminação espiritual pintada em óleo — " +
               "reconhecer a luz que já está ao nosso alcance.",
    largura: 1500, altura: 2062
  },
  {
    id: "nashiste-coruja",
    titulo: "Nashiste — Coruja",
    arquivo: "artes/nashiste-coruja.jpg",
    ano: 2025,
    tecnica: "Arte digital à mão · impressão fine art",
    descricao: "\"Nashiste\" veio em sonho e significa \"lugar\" ou " +
               "\"atitude\": tomar o lugar que você veio ocupar. As " +
               "máscaras foram desenhadas, reproduzidas em tecido e " +
               "costuradas pela artista.",
    largura: 1500, altura: 2100
  },
  {
    id: "nashiste-geracao-1",
    titulo: "Nashiste — 1ª Geração",
    arquivo: "artes/nashiste-geracao-1.jpg",
    ano: 2025,
    tecnica: "Arte digital à mão · impressão fine art",
    descricao: "Uma das 4 gerações da série: seres que, independente de " +
               "tempo ou espaço, ocupam seu lugar e se expressam com toda " +
               "a sua essência e luz.",
    largura: 1500, altura: 2100
  },
  {
    id: "janelas-1",
    titulo: "Janelas da Alma I",
    arquivo: "artes/janelas-1.jpg",
    ano: 2025,
    tecnica: "Pastel a óleo sobre papel Hahnemühle · A4",
    descricao: "Uma obra por dia durante 30 dias: expressões de espíritos " +
               "encarnados imaginados pela artista, em paletas " +
               "monocromáticas divididas em 3 estágios.",
    largura: 1500, altura: 1891
  },
  {
    id: "janelas-2",
    titulo: "Janelas da Alma II",
    arquivo: "artes/janelas-2.jpg",
    ano: 2025,
    tecnica: "Pastel a óleo sobre papel Hahnemühle · A4",
    descricao: "As 30 obras da série podem ser agrupadas ou dispostas lado " +
               "a lado, emolduradas uma a uma em acrílico.",
    largura: 1500, altura: 1891
  },
  {
    id: "retrato-camila",
    titulo: "Retratos — Camila Haack",
    arquivo: "artes/retrato-camila.jpg",
    ano: 2025,
    tecnica: "Arte digital · impressão fine art · 60 x 60 cm",
    descricao: "Mulheres reais do cotidiano da artista — que vivem dramas " +
               "e vitórias e trazem a beleza e a energia que carregam.",
    largura: 1500, altura: 1500
  },
  {
    id: "retrato-renata",
    titulo: "Retratos — Renata Amaral",
    arquivo: "artes/retrato-renata.jpg",
    ano: 2025,
    tecnica: "Arte digital · impressão fine art · 60 x 60 cm",
    descricao: "Cada mulher retratada traz o que de melhor proporciona ao " +
               "mundo — a beleza e a energia que carrega consigo.",
    largura: 1500, altura: 1500
  },
  {
    id: "fernanda-torres",
    titulo: "Personalidades — Fernanda Torres",
    arquivo: "artes/fernanda-torres.jpg",
    ano: 2025,
    tecnica: "Arte digital · impressão fine art · A2",
    descricao: "Não é o que vemos com os olhos, é o que sentimos: captar " +
               "a essência e a luz de quem marca sua passagem.",
    largura: 1500, altura: 2100
  },
  {
    id: "jane-goodall",
    titulo: "Personalidades — Jane Goodall",
    arquivo: "artes/jane-goodall.jpg",
    ano: 2025,
    tecnica: "Arte digital · impressão fine art · A2",
    descricao: "Personalidades admiradas de longe, retratadas na intenção " +
               "de captar algo de sua essência e luz em forma de obra.",
    largura: 1500, altura: 2100
  },
  {
    id: "tudo-movel",
    titulo: "Tudo é Móvel e Condicional",
    arquivo: "artes/tudo-movel.jpg",
    ano: 2025,
    tecnica: "Arte digital · impressão fine art · A1 e A0",
    descricao: "Três rostos sobrepostos em diferentes ângulos: nada é " +
               "permanente, tudo se transforma — a lei do ritmo em " +
               "constante ação.",
    largura: 1500, altura: 1850
  },
  {
    id: "fluxo-1",
    titulo: "Fluxo — Canalizadores I",
    arquivo: "artes/fluxo-1.jpg",
    ano: 2025,
    tecnica: "Arte digital · impressão fine art · A2 e A1",
    descricao: "Energias divinas canalizadas para cura, iluminação e " +
               "evolução: lembrete de nossa capacidade de sermos pontes " +
               "entre a luz e o mundo terreno.",
    largura: 1191, altura: 1684
  },
  {
    id: "fluxo-2",
    titulo: "Fluxo — Canalizadores II",
    arquivo: "artes/fluxo-2.jpg",
    ano: 2025,
    tecnica: "Arte digital · impressão fine art · A2 e A1",
    descricao: "Ao sermos lembrados dessa capacidade, trilhamos nosso " +
               "caminho de alinhamento com as energias mais elevadas.",
    largura: 1191, altura: 1684
  },
  {
    id: "areias-1",
    titulo: "Sob as Areias do Tempo I",
    arquivo: "artes/areias-1.jpg",
    ano: 2025,
    tecnica: "Pastel a óleo e acrílica sobre tela · 60 x 80 cm",
    descricao: "Andarilhos multidimensionais: espíritos que transitam pelo " +
               "tempo e espaço, consciências da luz, sem ego.",
    largura: 1500, altura: 2000
  },
  {
    id: "areias-2",
    titulo: "Sob as Areias do Tempo II",
    arquivo: "artes/areias-2.jpg",
    ano: 2025,
    tecnica: "Pastel a óleo e acrílica sobre tela · 60 x 80 cm",
    descricao: "Seres que nunca interferem no livre-arbítrio: esperam que " +
               "estejamos prontos e, em silêncio, revelam o próximo passo " +
               "do caminho.",
    largura: 1500, altura: 2000
  }
];
