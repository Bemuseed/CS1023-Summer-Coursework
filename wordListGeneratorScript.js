const filename = "enable1-wwf-v4.0-wordlist.txt";

function main() {
    const fs = require("fs");
    let contents = fs.readFileSync(filename, "utf8");
    let array = []
    contents.split(/\r?\n/).forEach(line => {
        if (line.length <= 9) {
            array.push(line);
        }
    });
    fs.writeFileSync("wordList.js", JSON.stringify(array));
}

main();