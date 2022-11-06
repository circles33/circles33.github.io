let songs=[
    {
        name:'0',
        src:'assets/songs/0.mp3',
        cover:'./images/song1.png',
        artist:'Translate'
    },
    {
        name:'1',
        src:'assets/songs/1.mp3',
        cover:'./images/song2.png',
        artist:'Translate'
    },
    {
        name:'2',
        src:'assets/songs/2.mp3',
        cover:'./images/song3.jpg',
        artist:'Translate'
    },
    {
        name:'3',
        src:'assets/songs/3.mp3',
        cover:'./images/song4.png',
        artist:'Translate'
    },
    {
        name:'4',
        src:'assets/songs/4.mp3',
        cover:'./images/song5.png',
        artist:'Translate'
    },
    {
        name:'5',
        src:'assets/songs/5.mp3',
        cover:'./images/song6.png',
        artist:'Translate'
    },
    {
        name:'6',
        src:'assets/songs/6.mp3',
        cover:'./images/song7.png',
        artist:'Translate'
    },
    {
        name:'7',
        src:'assets/songs/7.mp3',
        cover:'./images/song8.jpg',
        artist:'Translate'
    },
    {
        name:'8',
        src:'assets/songs/8.mp3',
        cover:'./images/song9.jpg',
        artist:'Translate'
    },
    {
        name:'9',
        src:'assets/songs/9.mp3',
        cover:'./images/song10.jpg',
        artist:'Translate'
    }
];
let artists = [
    {
        name: 'Translate',
        picture: './images/translate.jpg',
    },
    {
        name: 'Translate',
        picture: './images/translate.jpg',
    },
    {
        name: 'Translate',
        picture: './images/translate.jpg',
    },
    {
        name: 'Translate',
        picture: './images/translate.jpg',
    },
    {
        name: 'Translate',
        picture: './images/translate.jpg',
    },
    {
        name: 'Translate',
        picture: './images/translate.jpg',
    },
    {
        name: 'Translate',
        picture: './images/translate.jpg',
    },
    {
        name: 'Translate',
        picture: './images/translate.jpg',
    },
    {
        name: 'Translate',
        picture: './images/translate.jpg',
    },
    {
        name: 'Translate',
        picture: './images/translate.jpg',
    },
];
let albums = [
    {
        name: '番号',
        picture: './images/suji.png',
    },
    {
        name: '番号',
        picture: './images/suji.png',
    },
    {
        name: '番号',
        picture: './images/suji.png',
    },
    {
        name: '番号',
        picture: './images/suji.png',
    },
    {
        name: '番号',
        picture: './images/suji.png',
    },
    {
        name: '番号',
        picture: './images/suji.png',
    },
    {
        name: '番号',
        picture: './images/suji.png',
    },
    {
        name: '番号',
        picture: './images/suji.png',
    },
    {
        name: '番号',
        picture: './images/suji.png',
    },
    {
        name: '番号',
        picture: './images/suji.png',
    },
];

function numformatter(num){
    return num>=10?num.toString():'0'+num.toString();
}

$(document).ready(function () {
    songs.map((song, i) => {
        var template =
            '<div class="song" data-id="' +
            i +
            '"> <img src="./images/equalizer.gif" class="equalizer_gif" alt="" /> <div class="song_num">' + numformatter(i+1) + '</div> <div style="position: relative"> <img src="' +
            song.cover +
            '" class="song_img" alt="" /> <img src="./images/play.png" class="play_hover" alt="" /> </div> <div class="song_info"> <div class="song_name">' +
            song.name +
            '</div> <div class="song_artist">' +
            song.artist +
            '</div> </div> </div>';
        $('.left_songs_list').append(template);
    });
    artists.map(function (artist) {
        var template =
            '<div class="pop"><img src="' +
            artist.picture +
            '" class="artist_img"><div class="pop_text">' +
            artist.name +
            '</div></div>';
        $('#artists_list').append(template);
    });
    albums.map(function (album) {
        var template =
            '<div class="pop"><img src="' +
            album.picture +
            '" class="album_cover"><div class="pop_text">' +
            album.name +
            '</div></div>';
        $('#albums_list').append(template);
    });
    $('.right').css(
        'background-image',
        'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(' +
            songs[0].cover +
            ')'
    );
    $('.right_song_img').attr('src', songs[0].cover);
    $('.right_song_name').text(songs[0].name);
    $('.right_song_artist').text(songs[0].artist);
    // $('.bottom .song_img').attr('src', songs[0].cover);
    // $('.bottom .song_name').text(songs[0].name);
    // $('.bottom .song_artist').text(songs[0].artist);
});

$(document).on('keyup', '#search_input', function () {
    var searchTerm = $(this).val();
    console.log(searchTerm);
    if (searchTerm === '') {
        songs.map((song, i) => {
            var template =
                '<div class="song" data-id="' +
                i +
                '"> <img src="assets/images/equalizer.gif" class="equalizer_gif" alt="" /> <div class="song_num">' +
                numformatter(i + 1) +
                '</div> <div style="position: relative"> <img src="' +
                song.cover +
                '" class="song_img" alt="" /> <img src="assets/images/play.png" class="play_hover" alt="" /> </div> <div class="song_info"> <div class="song_name">' +
                song.name +
                '</div> <div class="song_artist">' +
                song.artist +
                '</div> </div> </div>';
            $('.left_songs_list').append(template);
        });
    } else {
        var results = songs
            .map(function (song) {
                var { name, artist } = song;
                if (
                    name.toLowerCase().includes(searchTerm) == true ||
                    artist.toLowerCase().includes(searchTerm) == true
                ) {
                    return song;
                }
            })
            .filter(Boolean);

        if (results.length > 0) {
            results.map((song, i) => {
                $('.left_songs_list').html('');
                var template =
                    '<div class="song" data-id="' +
                    i +
                    '"> <img src="assets/images/equalizer.gif" class="equalizer_gif" alt="" /> <div class="song_num">' +
                    numformatter(i + 1) +
                    '</div> <div style="position: relative"> <img src="' +
                    song.cover +
                    '" class="song_img" alt="" /> <img src="assets/images/play.png" class="play_hover" alt="" /> </div> <div class="song_info"> <div class="song_name">' +
                    song.name +
                    '</div> <div class="song_artist">' +
                    song.artist +
                    '</div> </div> </div>';
                $('.left_songs_list').append(template);
            });
        }
    }
});
 
const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const album = document.getElementById("album-art");

//song titles
// const songs = ["Breaking The Habit", "Crawling", "Numb", "What I ve Done"];

//keep track of song
let songIndex = 3;

//initially load song details into DOM
loadSong(songs[songIndex].name);

//Update song details
function loadSong(song) {
  audio.src = `songs/${song}.mp3`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


//Event Listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

shuffleBtn.addEventListener("click", () => {
  const a = getRandomInt(songs.length);
  songIndex = a;
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
    loadSong(songs[songIndex].name);
    playSong();
  } else {
    loadSong(songs[songIndex].name);
    playSong();
  }
});

nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
    loadSong(songs[songIndex].name);
    playSong();
  } else {
    loadSong(songs[songIndex].name);
    playSong();
  }
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
    loadSong(songs[songIndex].name);
    playSong();
  } else {
    loadSong(songs[songIndex].name);
    playSong();
  }
});

