'use strict'

let canBeSame = false;

document.getElementById('submit').addEventListener('click', function (e) {
    let mapsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const map1 = Math.floor((Math.random() * mapsNumbers.length) + 1);
    if ([6, 7].includes(map1)) {
        mapsNumbers = mapsNumbers.filter(number => ![6, 7].includes(number));
    } else if ([8, 9].includes(map1)) {
        mapsNumbers = mapsNumbers.filter(number => ![8, 9].includes(number));
    } else {
        if (map1 !== 1) {
            mapsNumbers = mapsNumbers.filter(number => number !== map1);
        }
    }
    const index2 = Math.floor((Math.random() * mapsNumbers.length));
    const map2 = mapsNumbers[index2];

    document.getElementById('player-1').innerText = map1;
    document.getElementById('player-2').innerText = map2;
});

if (!canBeSame) {

}