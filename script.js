const playCheckbox = document.getElementById("checkbox");
const loader = document.querySelector(".loader");
const audio = document.querySelector("#live-stream");
loader.style.display = "none";
document.getElementById("checkbox_label").addEventListener("click", function () {
    if (playCheckbox.checked == false) {
        loader.style.display = "flex";
        audio.play();

    } else {
        loader.style.display = "none";
        audio.pause();
        audio.load();

    }
});


// Reload page when visited with browser's "Back" button
window.addEventListener("pageshow", function (event) {
    var historyTraversal = event.persisted ||
        (typeof window.performance != "undefined" &&
            window.performance.navigation.type === 2);
    if (historyTraversal) {
        // Handle page restore.
        window.location.reload();
    }
});

// Specify the API endpoint for user data
apiUrl = 'https://a8.asurahosting.com/api/nowplaying/spirit_radio';

const nowPlaying = document.querySelector(".now-playing");

// Make a GET request using the Fetch API
function get_now_playing() {

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(userData => {
            // Process the retrieved user data
            nowPlaying.textContent = userData.now_playing.song.text;

        })
        .catch(error => {
            console.error('Error:', error);
        });

    setTimeout(() => get_now_playing(), 30000)
}

get_now_playing();

// Schedule Slider

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  setTimeout(showSlides, 4000);
}


