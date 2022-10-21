import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
console.log(player);

player.on('play', function() {
        console.log('played the video!');
    });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });


const onPlay = function(data) {
    console.log(data)
};


player.on('timeupdate', onPlay);