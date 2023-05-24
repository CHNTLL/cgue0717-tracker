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



//let session = {
//  purpose: "Endurance",
//  stroke: "Freestyle",
//  distance: 200,
//  lengthHr: 1,
//  lengthMin: 30,
//  averageMin: 1,
//  averageSec: 45,
//  id: Date.now(),
//  date: new Date().toISOString(),
//}

//console.log(session);

var sessionList = [];

function addSession(purpose, stroke, distance, lengthHr, lengthMin, averageMin, averageSec) {
  let session = {
    purpose,
    stroke,
    distance,
    lengthHr,
    lengthMin,
    averageMin,
    averageSec,
    id: Date.now(),
    date: new Date().toISOString(),
  }

  sessionList.push(session);
}

addSession("Endurance", "Freestyle", "200m", 1, 30, 1, 45);

console.log(sessionList);

//above works tested on replit