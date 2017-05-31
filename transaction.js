Web3 = require("web3")
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

console.log('Está conectado : ' + web3.isConnected());
console.log('Provedor atual : ' + web3.currentProvider.host);
console.log('Versão da API : ' + web3.version.api);


var transaction = web3.eth.sendTransaction({
        from: '0x0030f70e9bF83b4d6cE69476501f4E024D449f6A',
        to: '0x009761303A662654c87e3F9eca3Fe34cB851f662',
        value: '2000000000000000'
});

var receipt = web3.eth.getTransactionReceipt(transaction);
console.log(receipt);

/*
.on('transactionHash', function(hash){
    console.log('Hash Generated ' + hash);
})
.on('receipt', function(receipt){
    console.log('Received ' + receipt);
})
.on('confirmation', function(confirmationNumber, receipt){
    console.log('Confirmation Number is ' + confirmationNumber);
    console.log('Receipt is ' + receipt);
})
.on('error', console.error)
;
*/