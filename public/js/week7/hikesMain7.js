import Hikes from './hikes7.js';

const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
    myHikes.showHikeList();
});

myHikes.hikeList;