

// document.createElement on JavaScriptin metodi, joka luo uuden HTML-elementin. 
const ylatunniste = document.createElement("header");
// annetaan ylatunniste-muuttujan luomalle HTML-header-elementille luokka ("class") nimeltä "ylatunniste". 
ylatunniste.className = "ylatunniste";
const otsikko = document.createElement("h1");
const node1 = document.createTextNode("Tämä on artikkelin otsikko");
otsikko.appendChild(node1);
ylatunniste.appendChild(otsikko);

const runko = document.body;
runko.appendChild(ylatunniste);

const kappale1 = document.createElement("p");
const node2 = document.createTextNode("Ensimmäinen kappale! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eveniet beatae impedit in tempora magni eius atque fugit, sit cumque!")
ylatunniste.appendChild(kappale1);
kappale1.appendChild(node2);

const section = document.createElement("section");
runko.append(section);


section.setAttribute('id', 'rinnakkain');
const kappale2 = document.createElement("p");
const node3 = document.createTextNode("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique tenetur natus laudantium sit ducimus magnam labore rerum neque suscipit est dolore, alias ipsum asperiores quisquam quasi fuga architecto fugiat aut?");
kappale2.appendChild(node3)
section.appendChild(kappale2);

const figure = document.createElement("figure");
section.append(figure);
figure.setAttribute('id', 'kuvanpaikka');
const kuva = document.createElement("img");
kuva.src = "./img/animated_gif.gif";
figure.appendChild(kuva);

const alatunniste = document.createElement("footer");
const kappale3 = document.createElement("p");
const node4 = document.createTextNode("\u00A9 2024 Alexei Nikitin");

runko.appendChild(alatunniste);
kappale3.appendChild(node4);
alatunniste.appendChild(kappale3);