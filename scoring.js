const wordListFilename = "wordlist.txt";

function isAWord(word) {
    if (wordList.includes(word)) {
        return true;
    }
    return false;
}

function getScore(word) {
    let score = 0;
    for (let ltr of word) {
        score++;
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
            scoreDict[w] = 0;
        }
    }
    return scoreDict;
}
