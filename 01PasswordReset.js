function PassWordReset(input) {
    let password = input.shift();
    let commands = input.shift()
    while (commands !== 'Done') {
        let [a, b, c] = commands.split(' ');
        switch (a) {
            case 'TakeOdd':
                let temp = [];
                password.split('');
                for (i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        temp.push(password[i]);
                    }
                }
                password = temp.join('');
                console.log(password);
                break;
            case 'Cut':
                let cut = password.substr(b, c);
                password = password.replace(cut, '');
                console.log(password);
                break;
            case 'Substitute':
                if (!password.includes(b)) {
                    console.log('Nothing to replace!')
                } else {
                    while (password.includes(b)) {
                        password = password.replace(b, c);
                    }
                    console.log(password);
                }
                break;
        }
        commands = input.shift();
    }
    console.log(`Your password is: ${password}`)
}
PassWordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
])