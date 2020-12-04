function secretChat(input) {
    let concealedMessage = input.shift();
    actions = {
        ChangeAll(concealedMessage, string, replacement) {
            while (concealedMessage.includes(string)) {
                concealedMessage = concealedMessage.replace(string, replacement);
            }
            console.log(concealedMessage);
            return concealedMessage;
        },
        Reverse(concealedMessage, string) {
            if (!concealedMessage.includes(string)) {
                console.log('error');
                return concealedMessage;
            } else {
                concealedMessage = concealedMessage.replace(string, '')
                string = string.split('').reverse().join('');
                concealedMessage = concealedMessage + string;
                console.log(concealedMessage);
                return concealedMessage;
            }
        },
        InsertSpace(concealedMessage, index) {
            index = Number(index);
            let firstWord = concealedMessage.substring(0, index);
            let secondWord = concealedMessage.substring(index);
            concealedMessage = firstWord + ' ' + secondWord;
            console.log(concealedMessage);
            return concealedMessage;
        }
    };
    let commandLine;
    while ((commandLine = input.shift()) !== 'Reveal') {
        let [command, ...params] = commandLine.split(':|:');
        concealedMessage = actions[command](concealedMessage, ...params);
    }
    console.log(`You have a new text message: ${concealedMessage}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
console.log('---------------------------------------');

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
