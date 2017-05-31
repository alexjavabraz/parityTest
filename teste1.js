Web3 = require("web3")
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

console.log('Está conectado : ' + web3.isConnected());
console.log('Provedor atual : ' + web3.currentProvider.host);
console.log('Versão da API : ' + web3.version.api);


web3.version.getNode(
    function t(error, result){
        console.log('Versão do Nó : ' + result);
    }
);

web3.version.getNetwork(
    function t(error, result){
        console.log('Rede utilizada : ' + result);
    }
);

console.log('Versão do Ethereum : ' + web3.version.ethereum);

var str = web3.toHex('ethereum');
console.log('Hex : ' + str);
console.log('ASCII : ' + web3.toAscii(str));
var strA = web3.fromAscii('ethereum');
console.log('Hex ' + strA);
console.log('Ascii ' + web3.toAscii(strA));
console.log('Converte Hexa para Decimal : ', web3.toDecimal('0x15'));
console.log('COnverte um numero para Hexa : ', web3.fromDecimal('21'));

console.log(
    'Converte um numero para unidades do Ethereum, são elas: \n'+
    'kwei \n'+
    'mwei \n'+
    'gwei \n'+
    'szabo \n'+
    'finney \n'+
    'ether \n'+
    'kether \n'+
    'mether \n'+
    'gether \n'+
    'tether \n');

console.log('web3.fromWei : ' + web3.fromWei('21000000000000', 'finney'));
console.log('web3.toWei : ' + web3.toWei('21000000000000', 'finney'));
console.log('Ether : ' + web3.toWei('1', 'ether'));
console.log('isAddress : ' + web3.isAddress('0x009761303A662654c87e3F9eca3Fe34cB851f662'));

web3.net.getListening(function f(error, result){
    console.log('isListening assync : ' + result);
});

web3.net.getPeerCount(function f(error, result){
    console.log('PeerCount assync : ' + result);
});

console.log('isListening sync : ' + web3.net.listening);
console.log('PeerCount sync : ' + web3.net.peerCount);

web3.eth.defaultAccount = '0x009761303A662654c87e3F9eca3Fe34cB851f662';

console.log('Default Account : ' + web3.eth.defaultAccount);
var defaultAccount = web3.eth.defaultAccount;
console.log(defaultAccount);

console.log('Balance : ' + web3.eth.getBalance(web3.eth.defaultAccount));

web3.eth.getBlock('latest', function t(error, result){
    console.log('Ultimo Bloco : ' + result.number);
});


// Como parametro voce deve informar o endereco da sua conta
console.log('Balance da account WALLET1 ' + web3.eth.getBalance('0xfAFCBB32d92255a5Caf15B9f72cD01328b4aEA9A').toNumber());
console.log('Balance da account MINHACONTA ' +web3.eth.getBalance('0x0030f70e9bF83b4d6cE69476501f4E024D449f6A').toNumber());
console.log('Balance da account ALEX ' +web3.eth.getBalance('0x009761303A662654c87e3F9eca3Fe34cB851f662').toNumber());

var bloco = web3.eth.getBlock(1807739);
console.log('Número : ' + bloco.number);
console.log('Dificuldade : ' + bloco.totalDifficulty);
console.log('Extra Data : ' + bloco.extraData);
console.log('Size : ' + bloco.size);
console.log('Timestamp : ' + bloco.timestamp);
console.log('Transactions : ' + bloco.transactions);
console.log('Uncles : ' + bloco.uncles);
console.log('Nonce : ' + bloco.nonce);
console.log('GasLimit : ' + bloco.gasLimit);
console.log('GasUsed : ' + bloco.gasUsed);

var number = web3.eth.getBlockTransactionCount(bloco.number);
var number2 = web3.eth.getBlockTransactionCount('latest');

console.log('Total de transações do Bloco : ' + bloco.number + ' ' + number + ' - ' + number2);


