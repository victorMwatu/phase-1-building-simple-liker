// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('#modal');
modal.classList.add('hidden');
const likeHearts = document.querySelectorAll('.like-glyph');
likeHearts.innerHTML = EMPTY_HEART;
likeHearts.forEach((likeHeart) => {
  likeHeart.addEventListener('click', likefunction)
});

function likefunction(e) {
  const heart = e.target
  mimicServerCall()
    .then(() => {
      if(heart.innerHTML === EMPTY_HEART){
        heart.innerHTML = FULL_HEART;
        heart.classList.add('activated-heart');
      }else {
        heart.innerHTML = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
    })
    .catch((error) => {
      modal.classList.remove('hidden');
      modal.innerText = error;
      setTimeout(() => modal.classList.add('hidden'), 3000);

    })
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
