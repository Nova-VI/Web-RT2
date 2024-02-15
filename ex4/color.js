const listeItems = document.querySelectorAll('#maListe li');

listeItems.forEach(item => {
  item.addEventListener('click', () => {
    const randomColor = getRandomColor();
    item.style.color = randomColor;
  });
});

 /**
     * the function is used to generate a random hexadecimal string that descripe a color
     * @returns{string }
     */
function getRandomColor() {
   
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}