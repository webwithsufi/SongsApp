let songs = [
  { songName: "Pahle be main", src: "songs/1.mp3", img: "songs/1.jpg" },
  { songName: "Ab tum he ho", src: "songs/2.mp3", img: "songs/2.jpg" },
  { songName: "jale 2", src: "songs/3.mp3", img: "songs/3.jpg" },
  { songName: "Aj pe tum pa ", src: "songs/4.mp3", img: "songs/4.jpg" },
];

let allSong = document.querySelector(".all-song");
let poster = document.querySelector(".left");
let backward = document.querySelector("#backward");
let play = document.querySelector("#play");
let forward = document.querySelector("#forward  ");

let audio = new Audio();
let selectedSong = 0;

function songcard() {
  let clutter = "";
  songs.forEach(function (song, index) {
    clutter += `<div class="song-card" id = '${index}'>
            <div class="part1">
              <img
                src=" ${song.img} "
                alt=""
              />
              <h2>${song.songName}</h2>
            </div>
            <h4>3:56</h4>
          </div>`;
  });

  allSong.innerHTML = clutter;
  audio.src = songs[selectedSong].src;
  poster.style.backgroundImage = `url(${songs[selectedSong].img})`;
}

allSong.addEventListener("click", function (details) {
  selectedSong = details.target.id;
  songcard();
  flag = 1;
  play.innerHTML = `<i class="ri-pause-line"></i>`;
  audio.play();
});

flag = 0;
play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    songcard();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-line"></i>`;
    songcard();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < songs.length) {
    selectedSong++;
    songcard();
    audio.pause();
  } else {
    forward.style.opacity = "0.5";
  }
});

backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong++;
    songcard();
    audio.pause();
  } else {
    backward.style.opacity = "0.5";
  }
});

songcard();
