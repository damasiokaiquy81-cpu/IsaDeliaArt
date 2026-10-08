/* ============================================================
   MUSEUAI — LÓGICA DO BIOSITE (vanilla JS, sem dependências)
   Renderiza os links do config.js, copia o link da página e
   cuida das mensagens flutuantes.
   ============================================================ */

const $ = (sel) => document.querySelector(sel);

function esc(texto) {
  return String(texto ?? "").replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

/* Aviso flutuante (toast) */
let toastTimer = null;
function toast(mensagem) {
  const el = $("#toast");
  el.textContent = mensagem;
  el.classList.add("mostrar");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("mostrar"), 3200);
}

function linkWhatsapp(mensagem) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/* ---------------- popup de e-mail (zap e e-mail abrem aqui) ---------------- */

function destEmail() {
  return CONFIG.email || "";
}

function atualizarLinksPopupEmail() {
  const dest = destEmail();
  const assunto = $("#popup-email-assunto").value;
  const corpo = $("#popup-email-corpo").value;
  $("#popup-email-gmail").href =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(dest)}&su=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  $("#popup-email-outlook").href =
    `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(dest)}&subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
}

function abrirPopupEmail(assunto, corpo) {
  const pop = $("#popup-email");
  if (!pop) return;
  $("#popup-email-para").textContent = destEmail();
  $("#popup-email-assunto").value = assunto || "Contato pelo biosite";
  $("#popup-email-corpo").value = corpo || CONFIG.mensagemContato || `Olá, ${CONFIG.nome}! Vim pelo seu biosite.`;
  atualizarLinksPopupEmail();
  pop.hidden = false;
  document.body.classList.add("travado");
  setTimeout(() => $("#popup-email-assunto").focus(), 50);
}

function fecharPopupEmail() {
  const pop = $("#popup-email");
  if (!pop || pop.hidden) return;
  pop.hidden = true;
  document.body.classList.remove("travado");
}

function ligarPopupEmail() {
  const pop = $("#popup-email");
  if (!pop) return;
  $("#popup-email-assunto").addEventListener("input", atualizarLinksPopupEmail);
  $("#popup-email-corpo").addEventListener("input", atualizarLinksPopupEmail);
  $("#popup-email-copiar").addEventListener("click", async () => {
    const texto = `Para: ${destEmail()}\nAssunto: ${$("#popup-email-assunto").value}\n\n${$("#popup-email-corpo").value}`;
    const ok = await copiarTexto(texto);
    toast(ok ? "✅ Mensagem copiada!" : "Não consegui copiar 😕");
  });
}

async function copiarTexto(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = texto;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }
}

/* Link desta página (o biosite inteiro) */
function linkDaPagina() {
  return location.href.split("#")[0];
}

/* ---------------- render ---------------- */

function renderTopo() {
  document.title = `${CONFIG.nome} — links e contato`;

  $("#foto").src = CONFIG.foto;
  $("#nome").textContent = CONFIG.nome;
  $("#frase").textContent = CONFIG.frase;
  $("#handle").textContent = CONFIG.handle;

  const status = $("#status");
  if (CONFIG.status) {
    $("#status-texto").textContent = CONFIG.status;
    status.style.display = "";
  } else {
    status.style.display = "none";
  }

  $("#marca").textContent = CONFIG.nomeMarca || "MuseuAI";
  $("#ano").textContent = new Date().getFullYear();
}

function renderLinks() {
  $("#links").innerHTML = CONFIG.links.map((link, i) => {
    /* e-mail e zap (sem número) abrem o popup de contato */
    const ehPopup = link.popup || link.icone === "email" ||
      (link.url === "WHATSAPP" && !CONFIG.whatsapp);
    const url = ehPopup
      ? `mailto:${destEmail()}?subject=${encodeURIComponent("Contato pelo biosite")}`
      : (link.url === "WHATSAPP" ? linkWhatsapp(CONFIG.mensagemWhatsapp || "Olá! Quero pedir um orçamento.") : link.url);
    const icone = ICONE[link.icone] || ICONE.link;
    const classes = ["link"];
    if (link.icone === "whatsapp") classes.push("whatsapp");
    if (link.destaque) classes.push("destaque");
    if (ehPopup) classes.push("js-email");

    return `
    <a class="${classes.join(" ")}" href="${esc(url)}"${ehPopup ? "" : ' target="_blank" rel="noopener"'}
       style="animation-delay:${i * 80}ms">
      <span class="icone">${icone}</span>
      <span class="textos">
        <strong>${esc(link.titulo)}</strong>
        ${link.subtitulo ? `<small>${esc(link.subtitulo)}</small>` : ""}
      </span>
      <span class="seta" aria-hidden="true">→</span>
    </a>`;
  }).join("");
}

/* ---------------- interações ---------------- */

$("#compartilhar").addEventListener("click", async () => {
  const ok = await copiarTexto(linkDaPagina());
  toast(ok ? "✅ Link copiado! Cole na bio, no status ou onde quiser." : "Não consegui copiar 😕");
});

$("#handle").addEventListener("click", async () => {
  const ok = await copiarTexto(linkDaPagina());
  toast(ok ? "✅ Link copiado! Envie para quem quiser." : "Não consegui copiar 😕");
});

/* ---------------- popup de e-mail: cliques ---------------- */

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-fechar-email]")) { fecharPopupEmail(); return; }

  const alvo = e.target.closest(".js-email");
  if (alvo) {
    e.preventDefault();
    abrirPopupEmail(alvo.dataset.assunto, alvo.dataset.corpo);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharPopupEmail();
});

/* ---------------- início ---------------- */

renderTopo();
renderLinks();
ligarPopupEmail();
