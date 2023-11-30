
var pronomentList = [
  "ich(mein)",
  "du(dein)",
  "er(sein)",
  "sie(ihr)",
  "es(sein)",
  "wir(unser)",
  "ihr(euer)",
  "Sie(Ihr)",
  "sie(plur)(ihr)",
];

var pronomenWords = [
  "das Boat",
  "der Sohn",
  "das Hund",
  "die Kinder",
  "das Haus",
  "der Urlaub",
  "das Handy",
  "die Antwort",
  "die Einladung",
  "die Fahrkarten",
  "die Filme",
  "der Vorname",
  "das Lied",
  "das Problem",
  "die Taschen",
  "der Kopf",
];


var partTwoObj = {
  sport: [
    "das Fahrrad",
    "der Abend",
    "schwim",
    "das Stadion",
    "die Berge",
    "fernsehen",
    "tanzen",
    "der Wettkampf (competition)",
    "die Mannschaft",
    "die Übung",
    "das Tor",
    "trainieren",
    "gewinnen",
    "verlieren",
    "üben (to practice)",
    "laufen",
    "treiben (to do, engage in)",
    "sich bewegen (to move)",
    "absolvieren (to complete)",
    "unterstützen",

  ],
  einkaufen: [
    "der Käse",
    "Pfankuchen",
    "die Verkäuferin",
    "die Kasse",
    "der Ausverkauf",
    "die Bäckerei",
    "das Hemd",
    "die Quittung (receipt)",
    "das Angebot",
    "die Einkaufsliste",
    "die Öffnungszeiten",
    "auswählen (to choose)",
    "probieren (пробовать)",
    "sparen (to save)",
    "suchen (to look for)",
    "anprobieren (to try on попробовать)",
    "einkaufen gehen",
    "sich leisten (to afford)",
    "empfehlen (to recommend)",
  ],
  reise: [
    "die Auskunft",
    "das Flugzeug",
    "der Zug",
    "das Geschenk",
    "der Tisch",
    "das Meer",
    "die Unterkunft (accommodation)",
    "der Reiseplan",
    "die Sehenswürdigkeit (sightseeing attraction)",
    "die Landkarte (map)",
    "das Gepäck",
    "packen",
    "reservieren",
    "besichtigen (to visit, sightsee)",
    "erkunden (to explore)",
    "ankommen (to arrive)",
    "abreisen (to depart)",
    "genießen (to enjoy)",
  ],
  kultur: [
    "die Kunst",
    "die Ausstellung (exhibition)",
    "das Theater",
    "der Film",
    "der Künstler/die Künstlerin",
    "die Geschichte",
    "schätzen (to appreciate)",
    "bewundern (to admire)",
    "vorstellen (to imagine)",
    "aufführen (to perform) исполнять",
    "malen (to paint)",
    "sich interessieren für",
    "teilnehmen",
    "fördern (to promote)",
  ],
  verkehrsmittel: [
    "das Verkehrsmittel",
    "die Fahrkarte",
    "die Haltestelle",
    "aussteigen",
    "umsteigen",
    "ankommen",
    "abfahren",
    "kontrollieren",
    "sich fortbewegen (to move around)",
  ],
  uwmwelt: [
    "der Umweltschutz (environmental protection)",
    "die Nachhaltigkeit (sustainability)",
    "das Recycling (recycling)",
    "die Verschmutzung (pollution)",
    "der Naturschutz",
    "die erneuerbare Energie (renewable energy)",
    "der Umweltverschmutzer (polluter)",
    "die Abfallentsorgung (waste disposal)",
    "der Umweltbewusstsein (environmental awareness)",
    "schützen",
    "sparen",
    "reduzieren (to reduce)",
    "verschmutzen (to pollute)",
    "pflegen (to care for)",
    "sortieren",
    "nutzen",
    "erneuern (to renew)",
  ],
  wohnen: [
    "das Wohnen",
    "das Haus",
    "die Miete",
    "der Vermieter/die Vermieterin",
    "die Möbel",
    "das Schlafzimmer",
    "die Nachbarn",
    "die Einrichtung (interior design)",
    "vermieten",
    "einrichten (to furnish)",
    "renovieren",
    "umziehen",
    "teilen (to share)",
    "ausziehen (to move out)",
    "einziehen (to move in)",
    "gestalten (to design)",
  ],
  gesundheit: [
    "der Arzt/die Ärztin",
    "die Krankheit",
    "die Apotheke",
    "die Gesundheitsvorsorge",
    "die Ernährung (nutrition)",
    "der Termin",
    "sich fühlen",
    "behandeln (to treat)",
    "heilen (to heal)",
    "verschreiben (to prescribe)",
    "sich ausruhen",
    "vorbeugen (to prevent)",
    "impfen (to vaccinate)",
    "entspannen",
  ]

};

function getRandomProperty(obj) {
  const keys = Object.keys(obj);

  return keys[Math.floor(Math.random() * keys.length)];
}

function updateExamThemaWords() {
  
  var topicName = getRandomProperty(partTwoObj);
  var wordLst = partTwoObj[topicName];
  themaLabel.innerHTML = topicName;
  themaWordLabel.innerHTML = wordLst[Math.floor(Math.random()*wordLst.length)];
}


function updatePronomenWords() {
  var pronomen = pronomentList[Math.floor(Math.random()*pronomentList.length)];
  var wort =   pronomenWords[Math.floor(Math.random()*pronomenWords.length)];


  pronomenLabel.innerHTML = pronomen;
  pronomenWordLabel.innerHTML = wort;
}


updateThemaBtn.addEventListener('click', updateExamThemaWords);

updatePronomenBtn.addEventListener('click', updatePronomenWords);
