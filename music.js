const image = document.getElementById('cover'),
      title = document.getElementById('music-title'),
      artist = document.getElementById('music-artist'),
      currentTimeEl = document.getElementById('current-time'),
      durationEl = document.getElementById('duration'),
      progress = document.getElementById('progress'),
      playerProgress = document.getElementById('player-progress'),
      prevBtn = document.getElementById('prev'),
      nextBtn = document.getElementById('next'),
      playBtn = document.getElementById('play'),
      background = document.getElementById('background'),
      container = document.getElementById('container');

const music = new Audio();

const songs = [
  {
    path: 'Assests/1.mp3',
    displayName: 'We dont talk anymore',
    cover: 'Assests/1.gif',
    artist: 'Charlie Puth',
    palette: ['#2a9d8f', '#264653']
  },
  {
    path: 'Assests/2.mp3',
    displayName: 'Blinding Lights',
    cover: 'Assests/2.gif',
    artist: 'The Weeknd',
    palette: ['#a663cc', '#3a0ca3']
  },
  {
    path: 'Assests/3.mp3',
    displayName: 'I wanna be yours',
    cover: 'Assests/3.gif',
    artist: 'Arctic Monkeys',
    palette: ['#faedcd', '#780000']
  },
  {
    path: 'Assests/4.mp3',
    displayName: 'Die with a smile',
    cover: 'Assests/4.gif',
    artist: 'Burno Mars',
    palette: ['#8cb369', '#344e41']
  },
  {
    path: 'Assests/5.mp3',
    displayName: 'Preminche Premava',
    cover: 'Assests/5.gif',
    artist: 'Suriya',
    palette: ['#d7f9f1', '#004d40']
  },
  {
    path: 'Assests/6.mp3',
    displayName: 'shinoga e-wa',
    cover: 'Assests/6.gif',
    artist: 'fujikaze',
    palette: ['#e7c6ff', '#240046']
  },
  {
    path: 'Assests/7.mp3',
    displayName: 'Loverboy',
    cover: 'Assests/7.gif',
    artist: 'A-Wall',
    palette: ['#e9c46a', '#e76f51']
  },
  {
    path: 'Assests/8.mp3',
    displayName: 'Blue',
    cover: 'Assests/8.gif',
    artist: 'Yung Kai',
    palette: ['#219ebc', '#023047']
  },
  {
    path: 'Assests/9.mp3',
    displayName: 'Swarna kamalam',
    cover: 'Assests/9.gif',
    artist: 'Telugu',
    palette: ['#ffe0e6', '#c51162']
  },
  {
    path: 'Assests/10.mp3',
    displayName: 'Chemtrails',
    cover: 'Assests/10.gif',
    artist: 'Lana',
    palette: ['#ffeb99', '#f18701']
  },
  {
    path: 'Assests/11.mp3',
    displayName: 'Merry go round',
    cover: 'Assests/11.gif',
    artist: 'Howl Moving Castle',
    palette: ['#ffd6ff', '#03045e']
  },
  {
    path: 'Assests/12.mp3',
    displayName: 'From the start',
    cover: 'Assests/12.gif',
    artist: 'laufey',
    palette: ['#000000', '#14213d']
  }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
  isPlaying ? pauseMusic() : playMusic();
}

function playMusic() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

function pauseMusic() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

function applyPalette([bgColor, containerColor]) {
  background.style.background = bgColor;
  container.style.backgroundColor = containerColor;
}

function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
  applyPalette(song.palette);
}

function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
}

function updateProgressBar() {
  if (music.duration) {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = time => String(Math.floor(time / 60)).padStart(2, '0') + ':' + String(Math.floor(time % 60)).padStart(2, '0');
    durationEl.textContent = formatTime(duration);
    currentTimeEl.textContent = formatTime(currentTime);
  }
}

function setProgressBar(e) {
  const width = playerProgress.clientWidth;
  const clickX = e.offsetX;
  music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);
