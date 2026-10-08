/* ============================================================
   PROPOSTA COMERCIAL — ISA D'ELIA ART
   ------------------------------------------------------------
   De: Kaiquy Damasio → Para: Isa D'Elia
   Planos: Biosite (R$ 40) · Museu (R$ 97) · Combo (R$ 130)
   Os previews abrem os sites DELA: /museu/ e /biosite/
   ============================================================ */

const CONFIG = {
  /* --- Seus dados (quem vende o serviço) --- */
  nome: "Kaiquy Damasio",
  foto: "artes/kaiquy.jpg",
  whatsapp: "5562996008155",        // seu WhatsApp (só números, com DDI + DDD)
  instagram: "",                    // ex.: "kaiquydamasio" (vazio esconde o botão)

  /* --- Dados do cliente (cabeçalho em formato de carta: "Para:") --- */
  cliente: {
    nome: "Isa D'Elia",
    foto: "artes/cliente-isadeli.jpg"
  },

  mensagemGeral: "Olá! Vi a proposta de sites e quero conversar. 🎨",

  /* ============================================================
     OS PLANOS (valores, mensagens e o preview de cada um)
     ============================================================ */
  planos: [
    {
      id: "biosite",
      nome: "Biosite",
      preco: 40,
      resumo: "Página de links estilo linktree: galeria, loja, redes e e-mail num só lugar bonito.",
      entrega: "Entrega imediata",
      mensagem: "Olá! Quero fechar o Biosite (R$ 40) 🎨",
      previews: [
        { rotulo: "Biosite", url: "../biosite/index.html", largura: 520 }
      ],
      destaque: false
    },
    {
      id: "museu",
      nome: "Museu",
      preco: 97,
      resumo: "Sua galeria em formato de museu: as obras em molduras, fichas técnicas, avaliações e botão de orçamento.",
      entrega: "Entrega imediata",
      mensagem: "Olá! Quero fechar o Museu (R$ 97) 🎨",
      previews: [
        { rotulo: "Museu", url: "../museu/index.html", largura: 0 }
      ],
      destaque: false
    },
    {
      id: "combo",
      nome: "Combo completo",
      preco: 130,
      resumo: "Os dois juntos, com a mesma identidade visual: o museu para mostrar e o biosite para espalhar.",
      entrega: "Entrega imediata",
      mensagem: "Olá! Quero fechar o Combo completo (R$ 130) 🎨✨",
      previews: [
        { rotulo: "Museu", url: "../museu/index.html", largura: 0 },
        { rotulo: "Biosite", url: "../biosite/index.html", largura: 520 }
      ],
      destaque: true
    }
  ]
};
