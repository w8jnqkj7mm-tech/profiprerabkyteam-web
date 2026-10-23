// Prepínače na budúce funkcie
// Keď je funkcia vypnutá, nesmie sa zobraziť nič nefunkčné ani text „pripravujeme"

export const features = {
  // Online rezervácia termínu – vypnutá, namiesto toho je formulár s preferovaným termínom
  bookingEnabled: false,

  // AI agent / chat – vypnutá, namiesto toho je plávajúce tlačidlo WhatsApp + telefón
  agentEnabled: false,

  // Katalóg produktov – vypnutá, sekcia sa nevykreslí
  catalogEnabled: false,

  // Video v hero – zatiaľ je dočasné umiestnenie v sekcii „Od pôdorysu po kľúč"
  // Keď príde heroVideo bez textu (hero-notext.*), prepni na true
  heroVideo: false,

  // Google recenzie – Widget alebo API
  googleReviewsEnabled: true,

  // Blog – články v Markdown, stav draft/published
  blogEnabled: true,
} as const;
