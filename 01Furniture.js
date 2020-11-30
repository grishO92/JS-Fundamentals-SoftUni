function furniture(input) {
    let itemsCost = [];
    let pattern = />{2}(?<item>[A-Za-z]+)<{2}(?<price>[0-9.]+)!(?<quantity>[0-9]+)/g;
    for (const line of input) {
        if (line === 'Purchase') {
            console.log('Bought furniture:');
            break;
        }
    }
    while ((result = pattern.exec(input)) !== null) {
        let item = result.groups['item'];
        let price = result.groups['price'];
        let quantity = result.groups['quantity'];
        itemsCost.push(price * quantity)
        console.log(item);
    }
    console.log(`Total money spend: ${itemsCost.reduce((a, b) => a + b, 0).toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])