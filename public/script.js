import images from './images/*.png';
console.log(images)



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
    date: new Date().toLocaleDateString(),
  }

  sessionList.push(session);
  console.log(sessionList);
  displaySession(session);
}

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

function displaySession(session) {
  let item = document.createElement("ul");
  item.setAttribute("data-id", session.id);
  item.innerHTML =
  `
  <details>
  <summary>${session.purpose} <br> ${'Date added: ' + session.date} </summary>
  <section>
  <h3>Distance</h3>
  <hr>
  <p>${session.distance + ' metres'}</p>
  </section>
  <section>
  <h3>Duration</h3>
  <hr>
  <p>${session.lengthHr + ' hour '} ${session.lengthMin + ' minute session'}</p>
  </section>
  <section>
  <h3>Average time</h3>
  <hr>
  <p>${session.averageMin + ' minute'} ${session.averageSec + ' seconds per lap'}</p>
  </section>


  </details>`
  ;
  item.style.fontStyle="questrial";
  sessionlist.appendChild(item);

  form.reset();

  // Setup delete button DOM elements
let delButton = document.createElement("button");
let delButtonText = document.createTextNode("🗑️");
delButton.appendChild(delButtonText);
item.appendChild(delButton); // Adds a delete button to every task

// Listen for when the delete button is clicked
delButton.addEventListener("click", function(event) {
  
  sessionList.forEach(function(sessionArrayElement, sessionArrayIndex) {
    if (sessionArrayElement.id == item.getAttribute('data-id')) {
      sessionList.splice(sessionArrayIndex, 1)
    }
  })
  
  item.remove(); // Remove the task item from the page when button clicked
  // Because we used 'let' to define the item, this will delete the right element
})




}






