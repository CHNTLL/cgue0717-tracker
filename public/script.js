const openPopupBtn = document.getElementById('open-popup');
const closePopupBtn = document.getElementById('close-popup');
const popupContainer = document.getElementById('popup-container');
const submitContainer = document.getElementById('submit-container');
const closeSubmitBtn = document.getElementById('close-submit');

openPopupBtn.addEventListener('click', () => {
  popupContainer.style.display = 'flex';
});

closePopupBtn.addEventListener('click', () => {
  popupContainer.style.display = 'none';
  submitContainer.style.display = 'flex';
});

closeSubmitBtn.addEventListener('click', () => {
  submitContainer.style.display = 'none';
});



