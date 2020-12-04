function mirrorWords(input) {
    let text = input[0];
    let match = [];
    let wordPattern = /(@|#)[A-Za-z]{3,}\1{2}[A-Za-z]{3,}\1/g;
    let pairs = text.match(wordPattern);
    console.log(!pairs ? `No word pairs found!` : `${pairs.length} word pairs found!`);
    pairs ? pairs.forEach(word => {
        let [firstWord, secondWord] = word.slice(1, -1).split('##').join('@@').split('@@');
        firstWord === secondWord.split('').reverse().join('') ? match.push([`${firstWord} <=> ${secondWord}`]) : false;
    }) : false;
    return !match.length ? `No mirror words!` : `The mirror words are:\n${match.join(', ')}`;
}
console.log(mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']));
console.log('----------------------')
console.log(mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']));
console.log('----------------------')
console.log(mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']));

