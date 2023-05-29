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

const form = document.getElementById('sessionform');
const sessionlist = document.querySelector('#sessionlist');

form.addEventListener("submit", function(event){
  event.preventDefault();
  //handle the event here

  addSession(
    form.elements.purpose.value,
    form.elements.stroke.value,
    form.elements.distance.value,
    form.elements.lengthHr.value,
    form.elements.lengthMin.value,
    form.elements.averageMin.value,
    form.elements.averageSec.value,
  )

  
})

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
  console.log(sessionList);
}

//above works tested on replit