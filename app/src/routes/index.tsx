import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Risata | Pizza, Burger & Fries" },
      { name: "description", content: "Pizza, burger, fries e dolci. La Risata: street food artigianale, da gustare in sala o da portare via." },
      { property: "og:title", content: "La Risata | Pizza, Burger & Fries" },
      { property: "og:description", content: "Pizza, burger, fries e dolci. Il gusto dello street food fatto bene." },
      { property: "og:image", content: "/assets/hero-food.svg" },
    ],
  }),
  component: Index,
});

const friedImages = [
  "https://d2ol7oe51mr4n9.cloudfront.net/user_3L1VPC1OfuQ0Br7fzp3PiVmmGmM/6f5d672b-e44f-43b8-9c61-4c9d625973f0.png",
  "https://d2ol7oe51mr4n9.cloudfront.net/user_3L1VPC1OfuQ0Br7fzp3PiVmmGmM/073af21a-3cb4-4033-a507-6c9bc3b18621.png",
  "https://d2ol7oe51mr4n9.cloudfront.net/user_3L1VPC1OfuQ0Br7fzp3PiVmmGmM/8c3583b4-41f4-4e09-b7f5-a3e6a03f46e5.png",
  "https://d2ol7oe51mr4n9.cloudfront.net/user_3L1VPC1OfuQ0Br7fzp3PiVmmGmM/5d3e8f75-1114-4e3b-9fdb-aa2e614c394d.png",
  "https://d2ol7oe51mr4n9.cloudfront.net/user_3L1VPC1OfuQ0Br7fzp3PiVmmGmM/7b7defae-1955-40b8-a319-6e89828ce579.png",
  "https://d2ol7oe51mr4n9.cloudfront.net/user_3L1VPC1OfuQ0Br7fzp3PiVmmGmM/fbb8b4af-5c36-4a51-afa8-ab114b3f7047.png",
  "https://d2ol7oe51mr4n9.cloudfront.net/user_3L1VPC1OfuQ0Br7fzp3PiVmmGmM/1cf6b39c-eb96-43ac-a750-a57bfe1de9aa.png",
  "https://d2ol7oe51mr4n9.cloudfront.net/user_3L1VPC1OfuQ0Br7fzp3PiVmmGmM/be17082d-2e3e-47cb-8cab-abcd425139bf.png",
  "https://d2ol7oe51mr4n9.cloudfront.net/user_3L1VPC1OfuQ0Br7fzp3PiVmmGmM/b2117666-ebd0-46ff-93aa-57f1154f6164.png",
  "https://d2ol7oe51mr4n9.cloudfront.net/user_3L1VPC1OfuQ0Br7fzp3PiVmmGmM/85fde917-464b-47a6-aa08-e1cb9ef7628c.png",
];

const categories = [
  { n: "01", title: "Pizza", desc: "Impasti curati, ingredienti scelti e abbinamenti che lasciano il segno. La nostra pizza è fatta per essere gustata fino all'ultimo morso.", tag: "PIZZA", image: "/assets/pizzas/pizza-01.png" },
  { n: "02", title: "Burger", desc: "200 grammi di carattere, smash croccanti e chicken irresistibile. Qui il morso si fa serio. Il gusto, ancora di più.", tag: "BURGER", image: "/assets/burgers/burger-01.png" },
  { n: "03", title: "Fries", desc: "Dorati, croccanti e pieni di gusto. I nostri fritti sono la tentazione perfetta da condividere, da affiancare a una pizza o da abbinare al tuo burger preferito. Perché ogni sfizio merita il suo spazio.", tag: "FRIES", image: friedImages[0] },
  { n: "04", title: "Dolci", desc: "Dessert al bicchiere, una nota golosa per chiudere in bellezza.", tag: "DESSERT", image: "/assets/desserts/tiramisu.png" },
];

function Index() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="La Risata, torna all'inizio">
          <img className="brand-logo" src="/assets/la-risata-logo-cream.png" alt="La Risata — Since 2011"/>
          <span className="brand-copy"><strong>LA RISATA</strong><small>PIZZA · BURGER & FRIES</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          <a href="#menu">Menu</a><a href="#storia">La nostra idea</a><a href="#sala">In sala</a><a href="#contatti">Contatti</a><a href="#contatti">Dove siamo</a>
        </nav>
        <a className="nav-cta" href="#contatti">Contattaci <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line"/> STREET FOOD, FATTO CON CARATTERE</p>
          <h1>IL GUSTO<br/>NON FA<br/><em>SCENA.</em></h1>
          <img className="hero-inline-logo" src="/assets/la-risata-logo-cream.png" alt="Logo La Risata"/>
          <div className="hero-actions"><a className="text-link" href="#menu">Guarda cosa bolle <span>↓</span></a></div>
        </div>
      </section>

      <section className="brand-film section-pad" aria-label="La Risata in video">
        <div className="brand-film-heading"><p className="eyebrow">DENTRO LA RISATA</p></div>
        <video className="brand-film-video" autoPlay muted loop playsInline preload="auto" aria-label="Video di presentazione de La Risata">
          <source src="https://d2ol7oe51mr4n9.cloudfront.net/user_3L1VPC1OfuQ0Br7fzp3PiVmmGmM/66923420-6aa8-4a7a-9d19-e1dccc6489b3.mp4" type="video/mp4" />
          Il tuo browser non supporta la riproduzione video.
        </video>
      </section>

      <section className="menu-section section-pad" id="menu">
        <div className="section-heading"><p className="eyebrow">IL NOSTRO MENU</p><h2>Quattro buoni<br/><em>motivi.</em></h2><p>La voglia di scegliere bene, mangiare con gusto e tornare per provare il resto.</p></div>
        <div className="menu-list">{categories.map((item) => <article className="menu-row" key={item.n}><div className="menu-row-title"><span className="menu-number">{item.n}</span><h3>{item.tag}</h3></div><img className="menu-row-image" src={item.image} alt={item.title + " La Risata"} loading="lazy"/><p className="menu-row-desc">{item.desc}</p></article>)}</div>
        <div className="full-menu-cta"><div><small>MENU COMPLETO · 2026</small><h3>SCOPRI TUTTO IL MENU.</h3><p>Pizza, burger, fries, dolci, focacce, bevande e specialità: tutti i prodotti e i prezzi aggiornati nel nostro menu.</p></div><a className="button button-primary" href="/menu-2026.pdf" target="_blank" rel="noreferrer">Sfoglia il menu <span>↗</span></a></div>
        <section className="beer-section" aria-label="Le birre de La Risata">
          <div className="beer-heading"><p className="eyebrow">DA BERE, CON GUSTO</p><h3>LE NOSTRE <em>BIRRE.</em></h3><p>Cinque proposte per accompagnare pizza, burger e fries.</p></div>
          <div className="beer-grid">
            <a className="beer-card" href="https://www.hoegaarden.com/beer" target="_blank" rel="noreferrer">
              <div className="beer-logo beer-logo-hoegaarden"><img src="/assets/beers/hoegaarden.png" alt="Logo Hoegaarden"/></div>
              <div><small>BLANCHE BELGA</small><h4>HOEGAARDEN</h4><p>Fresca e delicatamente speziata, con note agrumate e di coriandolo.</p><span>SCOPRI LA BIRRA ↗</span></div>
            </a>
            <a className="beer-card" href="https://www.herrnbrauitalia.it/" target="_blank" rel="noreferrer">
              <div className="beer-logo"><img src="/assets/beers/herrnbrau.jpg" alt="Logo Herrnbräu"/></div>
              <div><small>TRADIZIONE BAVARESE</small><h4>HERRNBRÄU</h4><p>La tradizione birraria di Ingolstadt, con una selezione di specialità bavaresi.</p><span>SCOPRI IL BIRRIFICIO ↗</span></div>
            </a>
            <a className="beer-card" href="https://www.birraov.com/it/" target="_blank" rel="noreferrer">
              <div className="beer-logo"><img src="/assets/beers/ipa-fever.jpeg" alt="Etichetta IPA Fever"/></div>
              <div><small>AMERICAN IPA · 6% VOL.</small><h4>IPA FEVER</h4><p>Double dry hopping con luppoli americani e australiani, profumi di frutta tropicale e finale amaricante.</p><span>SCOPRI ORSO VERDE ↗</span></div>
            </a>
            <a className="beer-card" href="https://www.pepsi.com/" target="_blank" rel="noreferrer">
              <div className="beer-logo"><img src="/assets/beers/pepsi.png" alt="Logo Pepsi"/></div>
              <div><small>SOFT DRINK</small><h4>PEPSI</h4><p>La cola dal gusto inconfondibile, perfetta con pizza, burger e fries.</p><span>SCOPRI PEPSI ↗</span></div>
            </a>
            <a className="beer-card" href="https://www.forst.it/it/" target="_blank" rel="noreferrer">
              <div className="beer-logo"><img src="/assets/beers/forst.svg" alt="Logo Birra Forst"/></div>
              <div><small>BIRRA DALL'ALTO ADIGE</small><h4>FORST</h4><p>La tradizione birraria altoatesina, con le sue specialità dal carattere autentico.</p><span>SCOPRI FORST ↗</span></div>
            </a>
          </div>
        </section>
      </section>

      <section className="manifesto" id="storia">
        <div className="manifesto-mark">LR<span>®</span></div><div className="manifesto-copy"><p className="eyebrow">CHI SIAMO · DAL 2011</p><h2>LA RISATA.<br/><em>UNA STORIA DI GUSTO.</em></h2><p>La Risata nasce a Pescara nel 2011 e cresce con una passione semplice: portare in tavola cose buone, preparate con cura. Siamo una realtà indipendente che unisce pizza, burger e fries in un’unica idea di street food artigianale. Ogni giorno lavoriamo tra impasti, ingredienti scelti e preparazioni espresse, con il desiderio di far sentire tutti a casa. Niente formalità: solo carattere, qualità e voglia di condividere.</p></div>
        <div className="manifesto-side">UNA COSA SEMPLICE:<br/><strong>MANGIARE BENE.</strong></div>
      </section>

      <section className="craft-section section-pad" aria-label="La lavorazione artigianale">
        <div className="craft-heading"><p className="eyebrow">DIETRO LE QUINTE</p><h2>LE MANI IN PASTA.<br/><em>IL FUOCO ACCESO.</em></h2><p>Ogni servizio comincia molto prima di sedersi a tavola: impasti, preparazione e attenzione ai dettagli.</p></div>
        <div className="craft-gallery">
          <figure><img src="/assets/people/pizzaiolo-forno.jpg" alt="Il pizzaiolo al lavoro davanti al forno"/><figcaption>IL FORNO È IL CUORE</figcaption></figure>
          <figure><img src="/assets/people/pizzaiolo-preparazione.png" alt="Preparazione artigianale in cucina"/><figcaption>PASSIONE IN CUCINA</figcaption></figure>
          <figure><img src="/assets/people/lavorazione-impasto.png" alt="Lavorazione dell'impasto per la pizza"/><figcaption>IMPASTI LAVORATI CON CURA</figcaption></figure>
        </div>
      </section>

      <section className="dine-section section-pad" id="sala">
        <div className="dine-photo"><img className="dine-real-photo" src="/assets/locale/sala-1.png" alt="La sala de La Risata, pronta ad accogliere gli ospiti"/><div className="photo-caption">IL TUO POSTO È QUI · PESCARA</div></div>
        <div className="dine-copy"><p className="eyebrow">NON SOLO TAKE AWAY</p><h2>LA SERATA<br/>COMINCIA<br/><em>A TAVOLA.</em></h2><p>Vieni a goderti La Risata in sala. Un tavolo, qualcosa di buono e il tempo per stare insieme.</p><a className="button button-light" href="#contatti">Contattaci <span>↗</span></a></div>
      </section>

      <section className="place-gallery section-pad" id="locale">
        <div className="section-heading"><p className="eyebrow">LA RISATA, DAL VIVO</p><h2>ENTRA.<br/><em>SEI A CASA.</em></h2><p>La sala, il bancone e l'ingresso: ecco dove ci trovi in Via Ortona 8.</p></div>
        <div className="place-grid">
          <img className="place-wide" src="/assets/locale/sala-bancone.png" alt="La sala e il bancone de La Risata"/>
          <img src="/assets/locale/sala-2.png" alt="I tavoli della sala"/>
          <img src="/assets/locale/esterno-1.png" alt="L'esterno de La Risata illuminato la sera"/>
          <img src="/assets/locale/esterno-2.png" alt="La vetrina e l'ingresso de La Risata"/>
          <img src="/assets/locale/sala-3.png" alt="La sala interna de La Risata"/>
        </div>
      </section>

      <section className="contact-section section-pad" id="contatti">
        <div><p className="eyebrow">CI VEDIAMO PRESTO</p><h2>PASSA DA<br/><em>LA RISATA.</em></h2><p className="contact-lead">Per prenotare, ordinare o chiedere informazioni, contattaci direttamente.</p></div>
        <div className="contact-panel"><div className="contact-item"><small>INDIRIZZO</small><strong>Via Ortona 8, Pescara</strong><span>Abruzzo · Italia</span></div><div className="contact-item"><small>ORARI</small><strong>Da martedì a domenica</strong><span>Tutti i giorni: 19:00–22:30<br/>Lunedì chiuso</span></div><div className="contact-item"><small>TELEFONO</small><strong><a href="tel:+390852195262">085 219 5262</a></strong><span><a href="tel:+390852909539">085 2909539</a></span></div><div className="contact-item"><small>CONSEGNE A DOMICILIO</small><strong>Ordina La Risata su Just Eat</strong><span>Pizza, burger, fritti e tanto altro direttamente a casa tua.</span></div><a className="contact-link" href="https://www.justeat.it/restaurants-la-risata-slice-pizza-burger--villa-raspa/menu?utm_campaign=microsites&utm_medium=microsites&utm_source=la-risata-on-fire.it" target="_blank" rel="noreferrer">Ordina su Just Eat <span>↗</span></a><div className="contact-item"><small>PRENOTAZIONI</small><strong>Il tuo tavolo ti aspetta</strong><span>Puoi prenotare tramite TheFork o contattarci direttamente.</span></div><a className="contact-link" href="https://widget.thefork.com/538cdd1f-db59-45cd-b712-4ec420a26652/homepage/7a8b2796-f1e6-4e4a-835b-56302a37ecc2" target="_blank" rel="noreferrer">Prenota con TheFork <span>↗</span></a><a className="contact-link" href="https://wa.me/390852195262?text=Ciao%20La%20Risata%2C%20vorrei%20avere%20informazioni." target="_blank" rel="noreferrer">Scrivici su WhatsApp <span>↗</span></a><a className="contact-link" href="https://www.google.com/maps/search/?api=1&query=Via+Ortona+8%2C+Pescara%2C+Italy" target="_blank" rel="noreferrer">Apri la posizione su Google Maps <span>↗</span></a></div>
      </section>

      <a className="whatsapp-float" href="https://wa.me/390852195262?text=Ciao%20La%20Risata%2C%20vorrei%20avere%20informazioni." target="_blank" rel="noreferrer" aria-label="Scrivi a La Risata su WhatsApp"><span className="whatsapp-symbol">✆</span><span>WHATSAPP</span></a>
      <footer className="footer"><a className="footer-brand" href="#home"><img src="/assets/la-risata-logo-cream.png" alt="La Risata"/></a><p>PIZZA · BURGER & FRIES</p><span>© LA RISATA. FATTO CON GUSTO.</span></footer>
    </main>
  );
}
