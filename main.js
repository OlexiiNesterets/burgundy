'use strict'

document.getElementById('submit').addEventListener('click', function (e) {
    let canBeSame = !document.getElementById('can-be-same').checked;
    console.log({ canBeSame });
    let mapsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const map1 = Math.floor((Math.random() * mapsNumbers.length) + 1);
    mapsNumbers = filterMaps(map1);

    const index2 = Math.floor((Math.random() * mapsNumbers.length));
    const map2 = mapsNumbers[index2];
    mapsNumbers = filterMaps(map2);

    const index3 = Math.floor((Math.random() * mapsNumbers.length));
    const map3 = mapsNumbers[index3];
    mapsNumbers = filterMaps(map3);

    const index4 = Math.floor((Math.random() * mapsNumbers.length));
    const map4 = mapsNumbers[index4];

    document.getElementById('player-1').innerText = map1;
    document.getElementById('player-2').innerText = map2;
    document.getElementById('player-3').innerText = map3;
    document.getElementById('player-4').innerText = map4;

    
    function filterMaps(mapNumber) {
        if ([6, 7].includes(mapNumber)) {
            return mapsNumbers.filter(number => ![6, 7].includes(number));
        } else if ([8, 9].includes(mapNumber)) {
            return mapsNumbers.filter(number => ![8, 9].includes(number));
        } else {
            if (mapNumber !== 1 || canBeSame) {
                console.log('in if');
                return mapsNumbers.filter(number => number !== mapNumber);
            }
            return mapsNumbers;
        }
    }
});