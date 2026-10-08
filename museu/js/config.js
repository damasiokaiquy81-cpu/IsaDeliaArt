/* ============================================================
   MUSEUAI — CONFIGURAÇÕES DO SITE (Isa D'Elia)
   ------------------------------------------------------------
   Dados tirados do site oficial isadelia.art.
   Contato: ela NÃO usa WhatsApp — os botões abrem e-mail
   (isadelia@isadelia.art) via `contato` abaixo.
   ============================================================ */

const CONFIG = {
  /* --- Nome do site e da artista --- */
  nomeSite: "Isa D'Elia Art",
  nomeArtista: "Isa D'Elia",
  funcao: "Pintora · Desenhista · Artista Visual",
  cidade: "Niterói, RJ",

  /* --- Apresentação (statement dela, versão curta) --- */
  bio: "Investigo a luz em meio às sombras, dando cor e forma a nossos " +
       "estados internos com a tinta a óleo. Meu desejo é que nos " +
       "reconheçamos como protagonistas de nossa própria jornada — mais " +
       "conscientes da luz que está ao nosso alcance para ser percebida, " +
       "acolhida e integrada à nossa existência.",

  fotoArtista: "artes/foto-isadeli.jpg",

  /* --- Contato: ela não tem WhatsApp, usamos e-mail --- */
  contato: {
    tipo: "email",                    // "email" | "whatsapp"
    valor: "isadelia@isadelia.art"
  },
  whatsapp: "",                        // usado só se tipo: "whatsapp"

  /* --- Mensagens automáticas de contato --- */
  mensagemObra: 'Olá! Vim pelo seu site e quero pedir um orçamento da obra "{obra}".',
  mensagemGeral: "Olá! Vim pelo seu site e quero conversar sobre uma obra.",

  email: "isadelia@isadelia.art",      // aparece no rodapé
  instagram: "isadelia.art",           // aparece no rodapé como @isadelia.art

  /* ============================================================
     MODO ONLINE (opcional) — avaliações compartilhadas
     ============================================================ */
  supabase: {
    url: "",
    anonKey: "",
    tabela: "avaliacoes"
  }
};
