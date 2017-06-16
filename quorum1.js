Web3 = require("web3")
web3 = new Web3(new Web3.providers.HttpProvider("http://quorum.astar.tech:22001"));

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


web3.net.getListening(function f(error, result){
    console.log('isListening assync : ' + result);
});

web3.net.getPeerCount(function f(error, result){
    console.log('PeerCount assync : ' + result);
});

console.log('isListening sync : ' + web3.net.listening);
console.log('PeerCount sync : ' + web3.net.peerCount);

console.log('Accounts ' + web3.eth.accounts);

var accountObject = web3.eth.accounts.new();
console.log(accountObject.address);
console.log(accountObject.publicKey);
console.log(accountObject.privateKey);