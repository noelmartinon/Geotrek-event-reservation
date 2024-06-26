declare let CONFIGURATION: {
  // URL de l'application Backend résa
  URL_APPLICATION: string,
  // URL GeoTrek Admin
  URL_GTA: string,
  // URL GeoTrek public
  URL_GTR: string,
  // utilisateur peut ou non annuler lui même une réservation
  USER_CAN_CANCEL: boolean,
  // Donnée utilisée pour savoir si une réservation d'animation est ouverte
  // 
  // Deux possibilités : 
  // * nombre de jours avant la date de l'anim (DAY_BEFORE_RESA)
  // * date fixe pour tous les événements
  // 
  // Attention, si le nombre de jours est précisé,
  // la date fixe ne sera pas utilisée.

  // Nombre de jours avant date de début de l'animation
  // ou l'inscription est encore possible
  // (si -1 aucune limitation de date)
  DAY_BEFORE_RESA: number | null,
  // Date à partir de laquelle les réservations sont ouvertes (PNG)
  RESA_BEGINNING_DATE: Date | null,

  // Nombre de participants surnuméraire accepté
  // en plus du nombre de participants spécifiés dans GeoTrek
  RESA_NB_DELTA: number

  // Label du parc utilisant l'outil
  PARK_LABEL: string

  // Ensemble des lieux d'origine à afficher à l'utilisateur
  ORIGINS: { value: string | number, label: string }[]

}