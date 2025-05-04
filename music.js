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
  },
  {
    path: 'Assests/13.mp3',
    displayName: 'West Coast',
    cover: 'Assests/13.gif',
    artist: 'Laufey',
    palette: ['#c9ada7', '#081c15']
  },
  {
    path: 'Assests/14.mp3',
    displayName: 'Sunflower',
    cover: 'Assests/14.gif',
    artist: 'Post Malone',
    palette: ['#ee9b00', '#bb3e03']
  },
  {
    path: 'Assests/15.mp3',
    displayName: 'God of light',
    cover: 'Assests/15.gif',
    artist: 'SVT <3',
    palette: ['#ffecd1', '#001524']
  },
  {
    path: 'Assests/16.mp3',
    displayName: 'Your Name',
    cover: 'Assests/16.gif',
    artist: 'Your Name',
    palette: ['#eae2b7', '#1e6091']
  },
  {
    path: 'Assests/17.mp3',
    displayName: 'Energetic',
    cover: 'Assests/17.gif',
    artist: 'Wanna One',
    palette: ['#001219', '#005f73']
  },
  {
    path: 'Assests/18.mp3',
    displayName: 'All The Stars',
    cover: 'Assests/18.gif',
    artist: 'Black Panther',
    palette: ['#e7c6ff', '#3c096c']
  },
  {
    path: 'Assests/19.mp3',
    displayName: 'Star Boy',
    cover: 'Assests/19.gif',
    artist: 'Weeknd',
    palette: ['#000000', '#748cab']
  },
  {
    path: 'Assests/20.mp3',
    displayName: 'Honey',
    cover: 'Assests/20.gif',
    artist: 'pie',
    palette: ['#f7ede2', '#14213d']
  },
  {
    path: 'Assests/21.mp3',
    displayName: 'To You',
    cover: 'Assests/21.gif',
    artist: 'from future',
    palette: ['#dad7cd', '#023047']
  },
  {
    path: 'Assests/22.mp3',
    displayName: 'Run Away Magic',
    cover: 'Assests/22.gif',
    artist: 'TXT',
    palette: ['#c6ac8f', '#16425b']
  },
  {
    path: 'Assests/23.mp3',
    displayName: 'Pied Piper',
    cover: 'Assests/23.gif',
    artist: 'BTS',
    palette: ['#f7ede2', '#5f0f40']
  },
  {
    path: 'Assests/24.mp3',
    displayName: 'ouran high school',
    cover: 'Assests/24.gif',
    artist: 'Host club',
    palette: ['#000000', '#0d1321']
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
