const gridContainer = document.getElementById('grid-container');
const newGridButton = document.getElementById('new-grid-button');

// Funktion zum Erstellen eines neuen Gitters
function createGrid(size) {
  // Entferne das alte Gitter
  gridContainer.innerHTML = '';

  // Erstelle das neue Gitter
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
  }

  // Füge Event-Listener hinzu, um die Farbe der Quadrate zu ändern
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
      // Randomisiere die Farbe des Quadrats
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

      // Implementiere den progressiven Verdunklungs-Effekt
      const currentOpacity = item.style.opacity || 0;
      item.style.opacity = Math.min(1, parseFloat(currentOpacity) + 0.1);
    });
  });
}

// Funktion zum Anzeigen des Popups für die Eingabe der Gittergröße
function promptForGridSize() {
  const size = prompt('Bitte geben Sie die Anzahl der Quadrate pro Seite ein (max. 100):');
  if (size !== null && size <= 100 && size > 0) {
    createGrid(size);
  } else {
    alert('Ungültige Eingabe. Bitte geben Sie eine Zahl zwischen 1 und 100 ein.');
  }
}

// Füge Event-Listener hinzu, um die Funktion zum Anzeigen des Popups auszuführen
newGridButton.addEventListener('click', promptForGridSize);

// Erstelle das anfängliche Gitter
createGrid(16);
