// Dropdown Menu
const dropdownButtons = document.querySelectorAll('.dropdown-button');
const dropdownContents = document.querySelectorAll('.dropdown-content');
dropdownButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    dropdownContents[index].style.display = 'block';
  });
});
// Close dropdown menus by clicking outside
window.addEventListener('click', (event) => {
  dropdownContents.forEach(content => {
    if (!content.contains(event.target) && !event.target.classList.contains('dropdown-button')) {
      content.style.display = 'none';
    }
  });
});
// Modal Pop-up
const openModalButton = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
// Close modal by clicking outside
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
// Change Background Color
const changeBgButton = document.getElementById('change-bg-color');
let bgColors = ['#f0f0f0', '#e0ffff', '#f5f5dc']; // Array of background colors
let currentBgIndex = 0;
changeBgButton.addEventListener('click', () => {
  currentBgIndex = (currentBgIndex + 1) % bgColors.length; // Cycle through colors
  document.body.style.backgroundColor = bgColors[currentBgIndex];
});
// Character Counter for Textarea
const messageTextarea = document.getElementById('message');
const charCount = document.getElementById('char-count');
const maxChars = 200;
messageTextarea.addEventListener('input', () => {
  const charsLeft = maxChars - messageTextarea.value.length;
  charCount.textContent = `Characters left: ${charsLeft}`;
});
// Interactive Image Gallery
const thumbnails = document.querySelectorAll('.thumbnails img');
const largeImage = document.getElementById('large-image');
function showLargeImage(thumbnail) {
  const largeImagePath = thumbnail.dataset.largeImage;
  largeImage.innerHTML = `<img src="${largeImagePath}" alt="Large Image">`; 
}