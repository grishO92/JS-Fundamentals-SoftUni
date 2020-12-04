function activationKeys(input) {
    let activationKey = input.shift();
    for (let i = 0; i < input.length; i++) {
        let [a, b, c, d] = input[i].split('>>>');
        switch (a) {
            case 'Contains':
                activationKey.includes(b) ? console.log(`${activationKey} contains ${b}`) : console.log('Substring not found!');
                break;
            case 'Flip':
                if (b === 'Upper') {
                    let temp = activationKey.substring(+c, +d);
                    activationKey = activationKey.replace(temp, temp.toUpperCase());
                    console.log(activationKey)
                    break;
                } else if (b === 'Lower') {
                    let temp = activationKey.substring(+c, +d);
                    activationKey = activationKey.replace(temp, temp.toLowerCase());
                    console.log(activationKey)
                    break;
                }
                break;
            case 'Slice':
                let temp = activationKey.substring(+b, +c);
                activationKey = activationKey.replace(temp, '');
                console.log(activationKey);
                break;
            case 'Generate':
                console.log(`Your activation key is: ${activationKey}`)
                break;
        }
    }
}
activationKeys(['abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate']
);
console.log('-------------------')
activationKeys(['134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
])