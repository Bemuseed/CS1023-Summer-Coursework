const letterScores = {
    "a": 1,
    "b": 3,
    "c": 3,
    "d": 2,
    "e": 1,
    "f": 4,
    "g": 2,
    "h": 4,
    "i": 1,
    "j": 8,
    "k": 5,
    "l": 1,
    "m": 3,
    "n": 1,
    "o": 1,
    "p": 3,
    "q": 10,
    "r": 1,
    "s": 1,
    "t": 1,
    "u": 1,
    "v": 4,
    "w": 4,
    "x": 8,
    "y": 4,
    "z": 10
}

function getScore(word) {
    let score = 0;
    for (let ltr of word) {
        score += letterScores[ltr];
    }
    return score;
}

function getWordScores() {
    let scoreDict = {};
    for (let w of wordAttempts) {
        if (isAWord(w)) {
            scoreDict[w] = getScore(w);
        }
        else {
            scoreDict[w] = -10;
        }
    }
    return scoreDict;
}

function isAWord(word) {
    let listLength = wordList.length;
    let l = 0;
    let r = listLength - 1;
    let m;
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (wordList[m] < word) {
            l = m + 1;
        }
        else if (wordList[m] > word) {
            r = m - 1;
        }
        else {
            return true;
        }
    }
    return false;
}