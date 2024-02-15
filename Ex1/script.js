
/**
 * 
 * @param {int} min - min random int that can be generated
 * @param {int} max - max random int that can be generated
 * @returns {int} random generated number in [min; max] intervall;
 */
function generateRandomInt(min, max) {
  x = Math.floor(Math.random() * (max - min + 1)) + min;
  return x;
}
function startGame() {
  let badValue;
  let difficulty;
  do {
    badValue = false;
    difficulty = prompt("Choisir la difficulte\n1. Facile\n2. Moyenne\n3. Difficile");
    // On s'assure si l'utilisateur a sélectionné le bouton "Annuler" dans le prompt.
    if (difficulty == null) {
      // On met fin au jeu si l'utilisateur a choisi le bouton "Annuler".
      return false;
    }
    difficulty *= 1;// Conversion en entier
    if (isNaN(difficulty) || difficulty <= 0 || difficulty > 3) {
      badValue = true;
      alert("Veuillez entrer un numero de la liste fournie.");
    }
  } while (badValue);
  const difficultyPerLevel = 5;
  const numAttempts = 4 - difficulty;
  const hiddenNumber = generateRandomInt(0, difficulty * difficultyPerLevel);
  console.log(hiddenNumber);
  let i;
  for (i = 0; i < numAttempts; i++) {
    let attempt = prompt(`Ecrire un numero entre 0 and ${difficulty * 5}\nTentatives restantes: ${numAttempts - i}`);
    // On met fin au jeu si l'utilisateur a choisi le bouton "Annuler" au lieu d'essayer de trouver le numéro.
    if (attempt == null)
      return false;
    attempt *= 1;
    if (attempt === hiddenNumber) {
      alert("Bingo! vous avez gagne!");
      break;
    }
  }
  if (i == numAttempts)
    alert("Malheureusement, vous avez echoue.");
  startAgain = confirm("Souhaitez-vous commencer une nouvelle partie ?");
  if (startAgain) {
    startGame();
  }
  else {
    alert("Merci pour avoir joue!")
  }
}

startGame(); // Le jeu démarre dès le chargement de la page.