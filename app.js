const translations = {
  fr: {
    skip: "Aller au contenu",
    brandRole: "Ingénierie · Recherche",
    navFocus: "Axes",
    navWork: "Projets",
    navResearch: "Recherche",
    navPath: "Parcours",
    navToolbox: "Compétences",
    navContact: "Contact",
    availability: "Disponible oct.–nov. 2026 · Mobilité internationale",
    heroLine1: "Concevoir des",
    heroAccent: "systèmes complexes",
    heroLine2: "du signal à la machine intelligente.",
    heroIntro: "Je suis Williams Maikol Bouzid, étudiant en dernière année de Master et stagiaire de recherche, à l’interface de la biomécanique, OpenSim, SCONE, du traitement du signal, de la vision, de l’estimation, de l’automatique et des systèmes embarqués, avec un axe académique marqué en radar et sonar.",
    exploreWork: "Découvrir les projets",
    downloadCv: "Télécharger le CV",
    heroLocation: "France · Italie · Ouvert à l’international",
    scroll: "Explorer le profil",
    profileKicker: "Profil / 01",
    profileTitle: "Une démarche de recherche ancrée dans la pratique de l’ingénierie.",
    profileLead: "J’étudie comment observer, modéliser et commander des systèmes complexes — et comment transformer les méthodes mathématiques en outils d’ingénierie fiables.",
    profileBody: "Mon parcours relie ingénierie de l’information, mathématiques appliquées et expérimentation. J’aime passer de la théorie à l’implémentation : estimation robuste, détection, acquisition embarquée, simulation musculosquelettique et validation. Mes travaux actuels incluent la biomécanique, OpenSim, SCONE et la stabilité humaine en environnement maritime, en parallèle du traitement du signal radar et sonar.",
    metricM1: "Master 1 · 1/19",
    metricM2: "Master 2, semestre 1 · 1/17",
    metricVision: "Vision par ordinateur",
    metricGrad: "Obtention du Master prévue",
    focusKicker: "Axe radar & sonar / 02",
    focusStatus: "Orientation académique · expertise en construction",
    focusTitle: "Le radar et le sonar comme problèmes d’estimation, de détection et de décision.",
    focusIntro: "Mon intérêt repose sur des enseignements validés et un travail personnel soutenu. Je construis, à partir d’une base analytique solide, une orientation vers la R&D appliquée en détection, traitement statistique du signal et systèmes multicapteurs.",
    focusRadarLabel: "Traitement du signal radar",
    focusRadarTitle: "Une base solide, reconnue par un travail régulier.",
    focusRadarBody: "Module de radar de niveau Master enseigné par Jean-Marc Lopez, docteur-ingénieur à la Direction générale de l’armement. Classé 3e sur 25 étudiants et soutenu par une recommandation académique.",
    focusRecommended: "Recommandé",
    focusSonarLabel: "Systèmes sonar",
    focusSonarTitle: "La perception acoustique reliée à la détection statistique.",
    focusSonarBody: "L’enseignement en systèmes sonar, complété par les modules de détection et de traitement des signaux aléatoires, a construit une vision cohérente allant de la mesure à la décision.",
    focusAcoustics: "Acoustique",
    focusDetection: "Détection",
    focusFilterLabel: "Filtrage optimal",
    focusFilterTitle: "Évaluer les performances en présence d’incertitude et de bruit.",
    focusFilterBody: "Filtrage de Wiener et de Kalman, modélisation de covariance, courbes ROC et évaluations de Monte-Carlo constituent le pont méthodologique entre radar, sonar et autres problèmes de perception.",
    focusDirectionLabel: "Orientation de recherche",
    focusDirectionBody: "Je recherche un poste d’ingénieur junior, un doctorat financé ou un doctorat industriel permettant d’approfondir ces bases par la modélisation, la simulation, l’expérimentation et la validation.",
    workKicker: "Projets sélectionnés / 03",
    workTitle: "Des projets fondés sur les preuves, pas sur les mots-clés.",
    workIntro: "Une sélection raisonnée de projets académiques. Chacun met en avant la question, la méthode et la logique de validation, sans prétendre à une maturité industrielle.",
    filterAll: "Tous", filterPerception: "Perception", filterControl: "Commande", filterRadar: "Radar & sonar", filterSignals: "Signaux", filterEmbedded: "Embarqué",
    tagPerception: "Perception", tagControl: "Commande + embarqué", tagControlOnly: "Automatique", tagRadar: "Radar · sonar · détection", tagImaging: "Traitement d’images", tagEmbedded: "Systèmes embarqués", tagMultisensor: "Traitement multicapteurs",
    method: "Méthode", evidence: "Éléments académiques",
    p1Title: "Vision géométrique & reconstruction 3D", p1Desc: "Étalonnage de caméra et reconstruction de scène par DLT normalisée, décomposition SVD, estimation robuste de la matrice fondamentale par RANSAC et triangulation.",
    p2Title: "Autonomie, estimation & commande d’un quadricoptère", p2Desc: "Une étude modulaire couvrant l’estimation d’attitude par IMU, l’intégration Raspberry Pi–MultiWii, la communication avec une station au sol et des missions virtuelles par points de passage.",
    p3Title: "Commande d’un procédé multivariable", p3Desc: "Modélisation couplée niveau–température à partir des bilans de masse et d’énergie, puis linéarisation, synthèse LQR et analyse de stabilité.",
    p4Title: "Radar, sonar & détection statistique", p4Desc: "Un axe académique associant traitement du signal radar, systèmes sonar, détection de Neyman–Pearson, estimation de covariance et filtrage optimal. Les performances sont évaluées par courbes ROC et expériences de Monte-Carlo.",
    p5Title: "Vision multispectrale & industrielle", p5Desc: "Chaînes d’analyse pour le comptage, la classification et l’interprétation spectrale à partir de descripteurs géométriques, colorimétriques et d’histogrammes.",
    p6Title: "Séparation aveugle de sources par AMUSE", p6Desc: "Reconstruction de signaux latents à partir d’observations capteurs mélangées, par matrices de covariance décalées, décomposition généralisée en valeurs propres et vérifications spectrales, puis tests sous bruit gaussien.",
    p7Title: "Instrumentation & interfaces embarquées", p7Desc: "Travaux pratiques reliant le conditionnement de capteurs en pont et la modélisation de la conversion aux expériences sur microcontrôleur, Linux embarqué, bus numériques et capteurs inertiels.",
    researchKicker: "Recherche actuelle / 04", internshipLabel: "Stage de recherche Erasmus+ · DITEN, Université de Gênes",
    researchTitle: "Modélisation appliquée et validation à l’interface du mouvement humain et de l’environnement maritime.",
    researchBody: "Mon stage de fin d’études étudie les Motion Induced Interruptions et la stabilité posturale en environnement maritime. Le travail associe modélisation musculosquelettique OpenSim, simulations SCONE, traitement de données biomécaniques, cinématique inverse, dynamique inverse, optimisation statique et validation critique.",
    principle1Title: "Hypothèses traçables", principle1Body: "Documenter ce que le modèle connaît, ce qu’il ignore et pourquoi.", principle2Title: "Valider avant d’affirmer", principle2Body: "Comparer comportements analytiques, numériques et observés.", principle3Title: "Interprétation critique", principle3Body: "Traiter les limites comme une partie du résultat d’ingénierie.",
    pathKicker: "Parcours académique / 05", pathTitle: "Un parcours international entre sciences et ingénierie.", pathIntro: "Construit entre l’Italie et la France, prolongé par la recherche à Gênes.", typeResearch: "Expérience de recherche", timeline1Title: "Stagiaire de recherche Erasmus+ · Université de Gênes, DITEN", timeline1Body: "Biomécanique, OpenSim, SCONE, stabilité posturale, calcul scientifique et validation dans un contexte de recherche maritime pluridisciplinaire.", typeMaster: "Diplôme de Master", timeline2Title: "Master Ingénierie des Systèmes Complexes · VISTA", timeline2Body: "Vision, traitement du signal, tracking, estimation, automatique et systèmes embarqués à l’Université de Toulon.", rankTag: "Classé premier", typeBachelor: "Diplôme de Licence", timeline3Title: "Licence Sciences pour l’ingénieur", timeline3Body: "Fondements en électronique, électromagnétisme, signaux, automatique, technologies numériques et Linux embarqué.", typeSchool: "Formation scientifique", timeline4Title: "Baccalauréat scientifique", timeline4Body: "Études secondaires scientifiques terminées à Parme, en Italie.",
    toolboxKicker: "Compétences / 06", toolboxTitle: "Des méthodes et des outils reliés à leurs usages.", toolboxIntro: "Un portrait réaliste d’un profil en début de carrière : bases analytiques solides et profondeur d’implémentation en progression.", toolsMethods: "Méthodes", toolsSoftware: "Logiciels", toolsSystems: "Systèmes", toolsLanguages: "Langues", native: "Langue maternelle",
    contactKicker: "Contact / 07", contactTitle: "Échangeons autour d’un problème qui mérite d’être modélisé.", contactBody: "Ouvert aux postes d’ingénieur junior, à la R&D appliquée et aux doctorats financés ou industriels à partir d’octobre–novembre 2026, notamment en biomécanique, modélisation, radar, sonar, traitement statistique du signal et systèmes multicapteurs.", writeEmail: "Écrire un e-mail", connectLinkedin: "Échanger sur LinkedIn", downloadProfile: "Télécharger le profil complet", footerRole: "Ingénierie des systèmes complexes · Recherche", footerNote: "Portfolio fondé sur des éléments vérifiables. Détails du stage volontairement limités pendant le projet.", backTop: "Retour en haut ↑"
  }
};
const defaults = {};
document.querySelectorAll("[data-i18n]").forEach((node) => { defaults[node.dataset.i18n] = node.textContent.trim(); });
const languageButton = document.querySelector(".language-toggle");
const languageOptions = document.querySelectorAll("[data-lang-option]");
function setLanguage(language) {
  const dictionary = language === "fr" ? translations.fr : defaults;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => { const key = node.dataset.i18n; if (dictionary[key]) node.textContent = dictionary[key]; });
  languageOptions.forEach((option) => option.classList.toggle("active", option.dataset.langOption === language));
  document.title = language === "fr" ? "Williams Maikol Bouzid | Systèmes complexes, biomécanique & signal" : "Williams Maikol Bouzid | Complex Systems, Biomechanics & Signal Processing";
  try { localStorage.setItem("portfolio-language", language); } catch (_) {}
}
languageButton?.addEventListener("click", () => { setLanguage(document.documentElement.lang === "fr" ? "en" : "fr"); });
try { const preferredLanguage = localStorage.getItem("portfolio-language"); if (preferredLanguage === "fr") setLanguage("fr"); } catch (_) {}
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
function closeMenu() { menuToggle?.setAttribute("aria-expanded", "false"); navPanel?.classList.remove("open"); document.body.classList.remove("menu-open"); }
menuToggle?.addEventListener("click", () => { const expanded = menuToggle.getAttribute("aria-expanded") === "true"; menuToggle.setAttribute("aria-expanded", String(!expanded)); navPanel?.classList.toggle("open", !expanded); document.body.classList.toggle("menu-open", !expanded); });
document.querySelectorAll(".nav-panel a").forEach((link) => link.addEventListener("click", closeMenu));
const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach((button) => { button.addEventListener("click", () => { const filter = button.dataset.filter; filterButtons.forEach((candidate) => candidate.classList.toggle("active", candidate === button)); projectCards.forEach((card) => { const categories = card.dataset.category.split(" "); card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter)); }); }); });
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }); }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
  revealItems.forEach((item) => observer.observe(item));
} else { revealItems.forEach((item) => item.classList.add("is-visible")); }
const navLinks = document.querySelector('.nav-links');
if (navLinks && !navLinks.querySelector('[data-research-hub]')) {
  const hub = document.createElement('a');
  hub.href = 'research.html';
  hub.textContent = 'Research hub';
  hub.dataset.researchHub = 'true';
  hub.setAttribute('aria-label', 'Open the detailed research profile');
  navLinks.appendChild(hub);
}
const profileLinks = document.querySelector('.profile-links');
if (profileLinks && !profileLinks.querySelector('[data-detailed-pages]')) {
  const detailed = document.createElement('a');
  detailed.href = 'research.html';
  detailed.dataset.detailedPages = 'true';
  detailed.innerHTML = 'Detailed research profile <span>↗</span>';
  profileLinks.appendChild(detailed);
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();