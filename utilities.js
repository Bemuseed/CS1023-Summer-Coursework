function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRndElement(list) {
    return list[getRndInteger(0, list.length-1)];
}