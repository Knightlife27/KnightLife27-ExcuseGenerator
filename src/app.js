/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function createDomain() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let allDomains = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let completeSentence = `${pronoun[i]}${adj[j]}${noun[k]}.com`;
        allDomains.push(completeSentence);
      }
    }
  }
  return allDomains;
}

const domains = createDomain();

const domainsContainer = document.getElementById("domains");

domains.forEach(domain => {
  const domainElement = document.createElement("p");
  domainElement.textContent = domain;
  domainsContainer.appendChild(domainElement);
});
