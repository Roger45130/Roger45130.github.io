// Récupération des éléments HTML nécessaires pour la gestion des peintres et du menu burger.
const navLinks = document.querySelectorAll(".nav__link");
const subtitlePaint = document.querySelector(".subtitle__h2_Paint");
const gridTableaux = document.querySelector(".gridTableaux");
const galeryPaint = document.querySelector(".galeryPaint");
const burgerIcon = document.querySelector(".icon__burger");
const primaryList = document.querySelector(".primary__list");

// Création dynamique de l'élément <span class="naissanceDeces">
const NaissanceDeces = document.createElement("span");
const naissanceDeces = document.querySelector(".naissanceDeces");
naissanceDeces.classList.add("naissanceDeces");

// Informations sur les peintres (Nom, dates, chemins des tableaux et étiquettes).
const peintres = {
  Picasso: {
    dates: "(25 Octobre 1881 - 8 Avril 1973)",
    tableaux: [
      { src: "Assets/Images/PabloPicasso/Autoportrait_Picasso.png", label: "Autoportrait à la palette, 1906" },
      { src: "Assets/Images/PabloPicasso/Demoiselles_Avignon.png", label: "Les Demoiselles d'Avignon, 1907" },
      { src: "Assets/Images/PabloPicasso/Femme_qui_pleure.png", label: "Femme qui pleure, 1937" },
      { src: "Assets/Images/PabloPicasso/guernica.png", label: "Guernica, 1937" },
      { src: "Assets/Images/PabloPicasso/Le_Peintre_et_son_Modele.png", label: "Le Peintre et son Modèle, 1963" },
      { src: "Assets/Images/PabloPicasso/Marie_Therese.png", label: "Marie-Thérèse, 1932" },
    ],
  },
  Monet: {
    dates: "(14 Novembre 1840 - 5 Décembre 1926)",
    tableaux: [
      { src: "Assets/Images/ClaudeMonet/Impression_soleil_levant-1872.png", label: "Impression, Soleil Levant, 1872" },
      { src: "Assets/Images/ClaudeMonet/La_Promenade.png", label: "La Promenade, 1875" },
      { src: "Assets/Images/ClaudeMonet/Le_déjeuner-1873.png", label: "Le Déjeuner, 1873" },
      { src: "Assets/Images/ClaudeMonet/Les_Coquelicots.png", label: "Les Coquelicots, 1873" },
      { src: "Assets/Images/ClaudeMonet/Madame_Monet_et_Enfant-1875.png", label: "Madame Monet et Enfant, 1875" },
      { src: "Assets/Images/ClaudeMonet/Nymphéas-1916.png", label: "Nymphéas, 1916" },
    ],
  },
  Caillebotte: {
    dates: "(19 Août 1848 - 21 Février 1894)",
    tableaux: [
      { src: "Assets/Images/GustaveCaillebotte/Autoportrait_Caillebotte.png", label: "Autoportrait (Canotier au haut-de-forme), 1878" },
      { src: "Assets/Images/GustaveCaillebotte/Jour_de_pluie_à_Paris.png", label: "Jour de pluie à Paris, 1877" },
      { src: "Assets/Images/GustaveCaillebotte/Peintres_en_batiment.png", label: "Peintres en bâtiment, 1877" },
      { src: "Assets/Images/GustaveCaillebotte/Perissoires_sur_l_Yerres.png", label: "Périssoires sur l'Yerres, 1893" },
      { src: "Assets/Images/GustaveCaillebotte/Raboteurs_de_parquet.png", label: "Raboteurs de parquet, 1875" },
    ],
  },
  Vermeer: {
    dates: "(31 Octobre 1632 - 15 Décembre 1675)",
    tableaux: [
      { src: "Assets/Images/JohannesVermeer/fille_a_la-perle.png", label: "Fille à la perle, 1665" },
      { src: "Assets/Images/JohannesVermeer/La_Laitière.png", label: "La laitière, 1658" },
      { src: "Assets/Images/JohannesVermeer/La_Liseuse_à_la_fenêtre.png", label: "La liseuse à la fenêtre, 1657" },
    ],
  },
  Van_Gogh: {
    dates: "(30 Mars 1853 - 29 Juillet 1890)",
    tableaux: [
      { src: "Assets/Images/VincentVanGogh/Campagne_Montagneuse-1889.png", label: "Campagne Montagneuse, 1889" },
      { src: "Assets/Images/VincentVanGogh/La_Chambre_de_van_gogh-1889.png", label: "La chambre de Van Gogh, 1889" },
      { src: "Assets/Images/VincentVanGogh/La_nuit_Etoilee-1889.png", label: "La nuit étoilée, 1889" },
      { src: "Assets/Images/VincentVanGogh/La_Sieste.png", label: "La sieste, 1890" },
      { src: "Assets/Images/VincentVanGogh/Les_Iris-1889.png", label: "Les iris, 1889" },
      { src: "Assets/Images/VincentVanGogh/Terrasse_café.png", label: "Terrasse de café, 1888" },
    ],
  },
  Kandinsky: {
    dates: "(16 Décembre 1866 - 13 Décembre 1944)",
    tableaux: [
      { src: "Assets/Images/WassilyKandinsky/Composition-VI-1913.png", label: "Composition VI, 1913" },
      { src: "Assets/Images/WassilyKandinsky/Composition-1939.png", label: "Composition, 1939" },
      { src: "Assets/Images/WassilyKandinsky/Jaune_rouge_bleu.png", label: "Jaune, rouge, bleu, 1925" },
      { src: "Assets/Images/WassilyKandinsky/Moscou-1916.png", label: "Moscou, 1916" },
      { src: "Assets/Images/WassilyKandinsky/Noir-et-violet-1923.png", label: "Noir et violet, 1923" },
      { src: "Assets/Images/WassilyKandinsky/tableau-en-bleu-1925.png", label: "tableau en bleu, 1925" },
    ],
  },
};

// Fonction pour charger les œuvres par défaut (Picasso).
function loadDefaultPainter() {
  const defaultPainter = "Picasso";
  subtitlePaint.textContent = `Galerie ${defaultPainter}`;
  naissanceDeces.textContent = peintres[defaultPainter].dates;
  updateGallery(peintres[defaultPainter].tableaux);
  applyBounceAnimation();
}

// Fonction pour mettre à jour la galerie.
function updateGallery(tableaux) {
  gridTableaux.innerHTML = ""; // Vide la galerie existante.
  tableaux.forEach((tableau) => {
    const tableauContainer = document.createElement("div");
    tableauContainer.classList.add("tableau");

    const img = document.createElement("img");
    img.src = tableau.src;
    img.alt = tableau.label;
    img.classList.add("galeryImage");

    const label = document.createElement("div");
    label.classList.add("tableLabel");
    label.textContent = tableau.label;

    tableauContainer.appendChild(img);
    tableauContainer.appendChild(label);
    gridTableaux.appendChild(tableauContainer);
  });
}

// Fonction pour appliquer l'animation de rebond.
function applyBounceAnimation() {
  subtitlePaint.classList.add("bounce-fall");
  naissanceDeces.classList.add("bounce-fall");
  gridTableaux.classList.add("bounce-fall");

  setTimeout(() => {
    subtitlePaint.classList.remove("bounce-fall");
    naissanceDeces.classList.remove("bounce-fall");
    gridTableaux.classList.remove("bounce-fall");
  }, 2500); // Durée de l'animation définie dans le CSS.
}

// Gestionnaire d'événements pour les liens du menu.
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const peintreId = link.id;

    if (peintres[peintreId]) {
      subtitlePaint.textContent = `Galerie ${peintreId}`.replace(/_/g, " ");
      naissanceDeces.textContent = peintres[peintreId].dates;
      updateGallery(peintres[peintreId].tableaux);
      applyBounceAnimation();
    }
  });
});

// Gestionnaire pour le menu burger.
function toggleMenu() {
  primaryList.classList.toggle("active");
}
burgerIcon.addEventListener("click", toggleMenu);

// Gestionnaire pour les ajustements de style au redimensionnement.
function handleResize() {
  if (window.innerWidth > 768) {
    burgerIcon.classList.add("hidden");
    burgerIcon.classList.remove("visible");
    primaryList.classList.remove("active");
  } else {
    burgerIcon.classList.add("visible");
    burgerIcon.classList.remove("hidden");
  }
}
window.addEventListener("resize", handleResize);
handleResize();

// Charger le peintre par défaut et lancer l'animation à l'ouverture de la page.
window.addEventListener("load", loadDefaultPainter);