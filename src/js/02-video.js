import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const STORAGE_KEY = 'videoplayer-current-time'
const timeCode = Number(localStorage.getItem(STORAGE_KEY));


const player = new Player(iframe);
const onPlay = function(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(timeCode).catch(function(error) {
    console.error('Unable to set timecode')
});

