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
