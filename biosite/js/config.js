/* ============================================================
   BIOSITE — ISA D'ELIA ART
   ------------------------------------------------------------
   🔗 Links oficiais dela (isadelia.art):
   • Galeria ………… site do museu (../museu/)
   • Loja ……………… https://loja.isadelia.art
   • Site ……………… https://isadelia.art
   • Instagram ……… @isadelia.art
   • E-mail …………… isadelia@isadelia.art (ela não usa WhatsApp)
   ============================================================ */

const CONFIG = {
  nome: "Isa D'Elia Art",
  nomeMarca: "Isa D'Elia Art",
  handle: "@isadelia.art",
  frase: "Pintura, desenho e luz — galeria, loja e encomendas aqui 👇",

  status: "Aceitando encomendas",   // "" (vazio) para esconder a plaquinha de status

  foto: "artes/foto-isadeli.jpg",   // foto dela (moldura de quadro do MuseuAI)

  /* Ela não tem WhatsApp — o contato principal é o e-mail abaixo */

  /* Ela não tem WhatsApp ainda — zap e e-mail abrem o popup de contato */
  email: "isadelia@isadelia.art",
  mensagemContato: "Olá, Isa! Vim pelo seu biosite e quero conversar sobre uma arte. 🎨",

  /* Galeria (site do museu) — troque pela URL publicada quando subir */
  sitePrincipal: "../museu/index.html",

  links: [
    {
      titulo: "Enviar e-mail",
      subtitulo: "isadelia@isadelia.art",
      url: "EMAIL",                      // abre o popup de contato
      icone: "email"
    },
    {
      titulo: "WhatsApp",
      subtitulo: "Toque para enviar uma mensagem",
      url: "WHATSAPP",                   // sem número → abre o popup de contato
      icone: "whatsapp"
    },
    {
      titulo: "Minha galeria",
      subtitulo: "Obras, séries e exposições",
      url: "../museu/index.html",         // 👈 troque pela URL publicada
      icone: "galeria",
      destaque: true
    },
    {
      titulo: "Instagram",
      subtitulo: "@isadelia.art",
      url: "https://instagram.com/isadelia.art",
      icone: "instagram"
    }
  ]
};
