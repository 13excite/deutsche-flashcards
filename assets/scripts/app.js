
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
    "tanzen"
  ],
  einkaufen: [
    "der Käse",
    "Pfankuchen",
    "die Verkäuferin",
    "die Kasse",
    "der Ausverkauf",
    "die Bäckerei",
    "das Hemd"
  ],
  reise: [
    "die Auskunft",
    "das Flugzeug",
    "der Zug",
    "das Geschenk",
    "der Tisch",
    "das Meer"
  ],

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