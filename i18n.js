// i18n.js - Module de traduction pour le Planificateur d'Itinéraire IA
const translations = {
    fr: {
        // Titres et en-têtes
        "app_title": "Planificateur d'Itinéraire IA",
        "poi_header": "Points d'intérêt",
        "route_summary_header": "Itinéraire et Résumé",
        "detailed_instructions": "Instructions Détaillées",
        "app_settings": "Paramètres de l'Application",
        "current_weather": "Météo Actuelle",

        // Boutons
        "locate_me": "Me Localiser",
        "find_poi": "1. Trouver POI Pertinents",
        "calculate_route": "2. Calculer Itinéraire via Sélection",
        "show_more": "Afficher plus",
        "export_gpx": "Export GPX",
        "open_settings": "Ouvrir les Paramètres",
        "close": "Fermer",
        "save_settings": "Enregistrer les Paramètres",
        "show_panel": "Afficher le panneau", // Pour le bouton toggle sidebar (non utilisé actuellement)
        "hide_panel": "Masquer le panneau", // Pour le bouton toggle sidebar (non utilisé actuellement)

        // Champs de formulaire & Labels
        "start": "Départ",
        "destination": "Arrivée",
        "interests": "Décrivez vos intérêts pour ce voyage",
        "travel_mode": "Profil de déplacement",
        "route_preference": "Préférence d'itinéraire (si applicable)",
        "multi_day": "Plan sur plusieurs jours",
        "show_poi_on_map": "Afficher POI sur la carte",
        "select_language": "Langue / Language",

        // Options de voyage
        "car": "Voiture",
        "truck": "Camion / Poids Lourd",
        "bike": "Vélo",
        "walk": "Marche",
        "fastest": "Le plus rapide",
        "shortest": "Le plus court",
        "avoid_highways": "Éviter les autoroutes",
        "avoid_tolls": "Éviter les péages",

        // Filtres POI (Labels et Tooltips)
        "views_landscapes": "Vues & Paysages",
        "parks_nature": "Parcs/Nature",
        "local_markets": "Terroir/Marchés",
        "birds_wildlife": "Oiseaux/Faune",
        "history_culture": "Histoire/Culture",
        "water_beaches": "Eau/Plages",
        "villages": "Villages",
        "poi_filter_views_tooltip": "Points de vue, panoramas, paysages",
        "poi_filter_parks_tooltip": "Parcs, jardins, réserves naturelles",
        "poi_filter_markets_tooltip": "Magasins fermiers, marchés, produits locaux, artisanat",
        "poi_filter_wildlife_tooltip": "Observation oiseaux, refuges animaliers, zones naturelles spécifiques",
        "poi_filter_history_tooltip": "Sites historiques, châteaux, ruines, musées, culture",
        "poi_filter_water_tooltip": "Lacs, rivières, plages, cascades, côtes",
        "poi_filter_villages_tooltip": "Villages, lieux pittoresques",

        // Messages & Statuts
        "ready_poi_search": "Prêt à chercher des POI.",
        "ready_route_calc": "Prêt à calculer l'itinéraire.",
        "no_poi_match_filters": "Aucun POI ne correspond aux filtres actifs.",
        "no_poi_to_display": "Aucun POI à afficher.",
        "no_poi_found": "Aucun POI trouvé pour ces critères dans cette zone. Essayez d'élargir vos intérêts ou la zone.",
        "no_interest_warning": "Aucun intérêt spécifié, la recherche de POI risque d'être très large. Vous pouvez affiner avec les filtres.",
        "select_poi_warning": "Veuillez sélectionner au moins un Point d'Intérêt dans la liste pour calculer l'itinéraire.",
        "calculating_search_area": "Calcul de la zone de recherche...",
        "generating_overpass_query": "Génération de la requête Overpass via IA...",
        "searching_poi": "Recherche des Points d'Intérêt via Overpass...",
        "poi_found": "{count} POI potentiels trouvés dans la zone. Filtrez et sélectionnez ci-dessous.",
        "filtering_poi": "Filtrage des POI...",
        "calculating_route": "Calcul de l'itinéraire via les POI sélectionnés...",
        "geocoding_route": "... géocodage départ/arrivée pour routage ...",
        "calling_routing_api": "... appel API routage OpenRouteService ...",
        "no_detailed_instructions": "Aucune instruction détaillée disponible pour cet itinéraire.",
        "no_detailed_steps": "Aucune instruction détaillée trouvée.",
        "weather_loading": "Chargement météo...",
        "weather_unavailable": "Données météo non disponibles.",
        "geolocation_unsupported": "Votre navigateur ne supporte pas la géolocalisation.",
        "geolocation_failed": "Impossible de vous localiser.",
        "geolocation_permission_denied": "Vous avez refusé la permission de géolocalisation.",
        "geolocation_unavailable": "Information de localisation non disponible.",
        "geolocation_timeout": "La demande de géolocalisation a expiré.",
        "start_position_added": "Position actuelle ajoutée au champ 'Départ'.",
        "please_enter_addresses": "Veuillez renseigner au moins Départ et Arrivée.",
        "addresses_required": "Les adresses de Départ et d'Arrivée sont nécessaires pour le calcul final.",

        // Paramètres
        "api_warning": "Les clés API sont stockées localement dans votre navigateur (localStorage). Ne partagez pas cet ordinateur et soyez conscient que cette méthode n'est PAS SÉCURISÉE pour un usage public ou en production.",
        "ors_api_key": "Clé API OpenRouteService",
        "gemini_api_key": "Clé API Google Gemini",
        "weather_api_key": "Clé API OpenWeatherMap",
        "map_center_lat": "Centre Carte Lat Défaut",
        "map_center_lon": "Centre Carte Lon Défaut",
        "map_zoom": "Zoom Carte Défaut",
        "route_color": "Couleur Itinéraire",
        "search_margin": "Marge Zone Recherche (%)",
        "poi_list_limit": "Limite POI par Page (Liste)",
        "overpass_timeout": "Timeout Overpass (secondes)",
        "overpass_endpoint": "Endpoint API Overpass",

        // Placeholders
        "start_placeholder": "Adresse, lieu ou 'lat, lon'",
        "destination_placeholder": "Adresse, lieu ou 'lat, lon'",
        "interests_placeholder": "Ex: Paysages magnifiques, villages pittoresques, éviter les autoroutes, produits locaux, etc.",
        "ors_key_placeholder": "Entrez votre clé ORS",
        "gemini_key_placeholder": "Entrez votre clé Gemini",
        "weather_key_placeholder": "Entrez votre clé OpenWeatherMap",
        "overpass_endpoint_placeholder": "URL de l'instance Overpass",

        // Infos POI
        "opening_hours": "Horaires",
        "website": "Site web",
        "no_name": "[Sans nom]",
        "type": "Type",

        // Export GPX
        "no_route_for_export": "Aucun itinéraire affiché à exporter en GPX.",
        "route_export_error": "Erreur lors de la conversion de l'itinéraire pour l'export GPX.",
        "invalid_route_data": "Les données de l'itinéraire sont incomplètes ou invalides pour l'export GPX.",

        // Autres (Météo, Utils)
        "settings_saved": "Paramètres enregistrés avec succès !",
        "saving_in_progress": "Sauvegarde en cours...",
        "invalid_values": "Valeurs numériques invalides ou endpoint Overpass manquant.",
        "error_prefix": "Erreur",
        "warning_prefix": "Attention",
        "info_prefix": "Info",
        "success_prefix": "Succès",
        "loading_prefix": "Chargement",
        "continue": "Continuer",
        "route_popup_title": "Itinéraire",
        "distance": "Distance",
        "duration": "Durée",
        "min": "min",
        "hours": "h",
        "loading_error": "Erreur critique: Impossible d'initialiser la carte Leaflet.",
        "unknown_location": "Lieu inconnu",
        "unknown_weather": "Météo inconnue",
        "feels_like": "Ressenti",
        "loading_weather_error": "Erreur chargement météo"
    },

    en: {
        // Titles and headers
        "app_title": "AI Route Planner",
        "poi_header": "Points of Interest",
        "route_summary_header": "Route and Summary",
        "detailed_instructions": "Detailed Instructions",
        "app_settings": "Application Settings",
        "current_weather": "Current Weather",

        // Buttons
        "locate_me": "Locate Me",
        "find_poi": "1. Find Relevant POIs",
        "calculate_route": "2. Calculate Route via Selection",
        "show_more": "Show more",
        "export_gpx": "Export GPX",
        "open_settings": "Open Settings",
        "close": "Close",
        "save_settings": "Save Settings",
        "show_panel": "Show panel", // For toggle sidebar button (not currently used)
        "hide_panel": "Hide panel", // For toggle sidebar button (not currently used)

        // Form fields & Labels
        "start": "Start",
        "destination": "Destination",
        "interests": "Describe your interests for this trip",
        "travel_mode": "Travel Mode",
        "route_preference": "Route Preference (if applicable)",
        "multi_day": "Multi-day Plan",
        "show_poi_on_map": "Show POIs on map",
        "select_language": "Langue / Language",

        // Travel options
        "car": "Car",
        "truck": "Truck / Heavy Vehicle",
        "bike": "Bicycle",
        "walk": "Walking",
        "fastest": "Fastest",
        "shortest": "Shortest",
        "avoid_highways": "Avoid Highways",
        "avoid_tolls": "Avoid Tolls",

        // POI filters (Labels and Tooltips)
        "views_landscapes": "Views & Landscapes",
        "parks_nature": "Parks/Nature",
        "local_markets": "Local Products/Markets",
        "birds_wildlife": "Birds/Wildlife",
        "history_culture": "History/Culture",
        "water_beaches": "Water/Beaches",
        "villages": "Villages",
        "poi_filter_views_tooltip": "Viewpoints, panoramas, landscapes",
        "poi_filter_parks_tooltip": "Parks, gardens, nature reserves",
        "poi_filter_markets_tooltip": "Farm shops, markets, local products, crafts",
        "poi_filter_wildlife_tooltip": "Bird watching, wildlife refuges, specific natural areas",
        "poi_filter_history_tooltip": "Historical sites, castles, ruins, museums, culture",
        "poi_filter_water_tooltip": "Lakes, rivers, beaches, waterfalls, coasts",
        "poi_filter_villages_tooltip": "Villages, picturesque places",

        // Messages & Statuses
        "ready_poi_search": "Ready to search for POIs.",
        "ready_route_calc": "Ready to calculate route.",
        "no_poi_match_filters": "No POIs match the active filters.",
        "no_poi_to_display": "No POIs to display.",
        "no_poi_found": "No POIs found for these criteria in this area. Try broadening your interests or the area.",
        "no_interest_warning": "No interests specified, POI search might be very broad. You can refine with filters.",
        "select_poi_warning": "Please select at least one Point of Interest from the list to calculate the route.",
        "calculating_search_area": "Calculating search area...",
        "generating_overpass_query": "Generating Overpass query via AI...",
        "searching_poi": "Searching for Points of Interest via Overpass...",
        "poi_found": "{count} potential POIs found in the area. Filter and select below.",
        "filtering_poi": "Filtering POIs...",
        "calculating_route": "Calculating route via selected POIs...",
        "geocoding_route": "... geocoding start/destination for routing ...",
        "calling_routing_api": "... calling OpenRouteService routing API ...",
        "no_detailed_instructions": "No detailed instructions available for this route.",
        "no_detailed_steps": "No detailed steps found.",
        "weather_loading": "Loading weather...",
        "weather_unavailable": "Weather data not available.",
        "geolocation_unsupported": "Your browser doesn't support geolocation.",
        "geolocation_failed": "Unable to locate you.",
        "geolocation_permission_denied": "You denied the geolocation permission.",
        "geolocation_unavailable": "Location information unavailable.",
        "geolocation_timeout": "The geolocation request timed out.",
        "start_position_added": "Current position added to 'Start' field.",
        "please_enter_addresses": "Please enter at least Start and Destination addresses.",
        "addresses_required": "Start and Destination addresses are required for route calculation.",

        // Settings
        "api_warning": "API keys are stored locally in your browser (localStorage). Do not share this computer and be aware that this method is NOT SECURE for public or production use.",
        "ors_api_key": "OpenRouteService API Key",
        "gemini_api_key": "Google Gemini API Key",
        "weather_api_key": "OpenWeatherMap API Key",
        "map_center_lat": "Default Map Center Lat",
        "map_center_lon": "Default Map Center Lon",
        "map_zoom": "Default Map Zoom",
        "route_color": "Route Color",
        "search_margin": "Search Area Margin (%)",
        "poi_list_limit": "POI Limit per Page (List)",
        "overpass_timeout": "Overpass Timeout (seconds)",
        "overpass_endpoint": "Overpass API Endpoint",

        // Placeholders
        "start_placeholder": "Address, place or 'lat, lon'",
        "destination_placeholder": "Address, place or 'lat, lon'",
        "interests_placeholder": "Ex: Beautiful landscapes, picturesque villages, avoid highways, local products, etc.",
        "ors_key_placeholder": "Enter your ORS key",
        "gemini_key_placeholder": "Enter your Gemini key",
        "weather_key_placeholder": "Enter your OpenWeatherMap key",
        "overpass_endpoint_placeholder": "Overpass instance URL",

        // POI info
        "opening_hours": "Opening hours",
        "website": "Website",
        "no_name": "[Unnamed]",
        "type": "Type",

        // Export GPX
        "no_route_for_export": "No route displayed to export as GPX.",
        "route_export_error": "Error converting the route for GPX export.",
        "invalid_route_data": "The route data is incomplete or invalid for GPX export.",

        // Others (Weather, Utils)
        "settings_saved": "Settings saved successfully!",
        "saving_in_progress": "Saving...",
        "invalid_values": "Invalid numeric values or missing Overpass endpoint.",
        "error_prefix": "Error",
        "warning_prefix": "Warning",
        "info_prefix": "Info",
        "success_prefix": "Success",
        "loading_prefix": "Loading",
        "continue": "Continue",
        "route_popup_title": "Route",
        "distance": "Distance",
        "duration": "Duration",
        "min": "min",
        "hours": "h",
        "loading_error": "Critical error: Unable to initialize Leaflet map.",
        "unknown_location": "Unknown location",
        "unknown_weather": "Unknown weather",
        "feels_like": "Feels like",
        "loading_weather_error": "Weather loading error"
    }
};

// Fonction pour obtenir une traduction
// key: Clé de traduction (ex: "app_title")
// lang: Code langue (ex: "fr", "en"). Si null, utilise la langue courante.
// params: Objet de paramètres pour remplacer les placeholders (ex: { count: 5 })
function __(key, lang = null, params = {}) {
    const currentLang = lang || getCurrentLanguage();
    // Utilise la traduction de la langue actuelle, ou la clé elle-même si non trouvée
    let text = translations[currentLang]?.[key] || key;

    // Remplacer les paramètres {placeholder} si présents
    return text.replace(/{(\w+)}/g, (match, paramKey) => {
        return typeof params[paramKey] !== 'undefined' ? params[paramKey] : match;
    });
}

// Récupère la langue actuelle depuis localStorage, ou utilise 'fr' par défaut
function getCurrentLanguage() {
    return localStorage.getItem('appLanguage') || 'fr';
}

// Change la langue de l'application et la sauvegarde
function setLanguage(lang) {
    if (translations[lang]) { // Vérifie si la langue est supportée
        localStorage.setItem('appLanguage', lang);
        // Mettre à jour l'attribut lang de la balise <html>
        document.documentElement.lang = lang;
        // Appliquer immédiatement les traductions à l'UI
        applyTranslations();
        return true;
    }
    console.warn(`Language "${lang}" not supported.`);
    return false;
}

// Applique les traductions aux éléments de l'interface utilisateur marqués avec data-i18n*
function applyTranslations() {
    const lang = getCurrentLanguage();

    // Titre de la page
    document.title = __('app_title', lang);

    // Éléments avec data-i18n pour le contenu textuel
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
            // Gérer les cas où l'élément contient d'autres nœuds (ex: <span> dans <h4>)
            // On cible le premier nœud texte direct s'il existe, sinon on remplace tout
            const textNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
            if (textNode) {
                textNode.textContent = __(key, lang);
            } else if (element.firstChild && element.firstChild.nodeType === Node.ELEMENT_NODE && element.firstChild.tagName === 'SPAN') {
                // Cas spécifique pour les titres avec span (ex: poi_header)
                 element.firstChild.textContent = __(key, lang);
            }
             else {
                 element.textContent = __(key, lang);
            }
        }
    });

    // Éléments avec data-i18n-placeholder pour l'attribut placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (key) {
            element.placeholder = __(key, lang);
        }
    });

    // Éléments avec data-i18n-title pour l'attribut title (tooltip)
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (key) {
            element.title = __(key, lang);
        }
    });

     // Mettre à jour la langue des options des <select>
     document.querySelectorAll('select > option[data-i18n]').forEach(option => {
         const key = option.getAttribute('data-i18n');
         if (key) {
             option.textContent = __(key, lang);
         }
     });

     // Mettre à jour la langue des labels associés via `for`
     document.querySelectorAll('label[for][data-i18n]').forEach(label => {
         const key = label.getAttribute('data-i18n');
         if(key) {
             // Ajoute les deux points automatiquement si ce n'est pas juste un label simple
             const targetInputId = label.getAttribute('for');
             const isSimpleLabel = ['show_poi_on_map', 'select_language'].includes(key); // Clés pour lesquelles on ne veut pas ':'
             label.textContent = __(key, lang) + (isSimpleLabel ? '' : ' :');
         }
     });

      // Mettre à jour les spans dans les boutons (ex: .button-text)
      document.querySelectorAll('button span[data-i18n]').forEach(span => {
           const key = span.getAttribute('data-i18n');
           if (key) {
               span.textContent = __(key, lang);
           }
       });

       // Mettre à jour les spans dans les filtres POI
       document.querySelectorAll('#poiFilters label > span[data-i18n]').forEach(span => {
           const key = span.getAttribute('data-i18n');
           if (key) {
               span.textContent = __(key, lang);
           }
       });
}

// Liste des langues disponibles
function getAvailableLanguages() {
    return Object.keys(translations);
}

// Exporter les fonctions pour qu'elles soient accessibles globalement (attachées à window)
window.i18n = {
    __,
    getCurrentLanguage,
    setLanguage,
    applyTranslations,
    getAvailableLanguages
};

// Appliquer les traductions une première fois au chargement du script
// (peut être redondant avec l'appel dans DOMContentLoaded, mais assure une application précoce)
document.addEventListener('DOMContentLoaded', () => {
     // Assure que la langue de l'élément HTML est correcte dès le début
     document.documentElement.lang = getCurrentLanguage();
     // L'appel principal des traductions est déjà dans DOMContentLoaded du fichier HTML principal
});