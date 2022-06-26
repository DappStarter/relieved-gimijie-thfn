require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remain unfold hope ensure olympic slight'; 
let testAccounts = [
"0x0bea27d835464cb4529e45f29180ba73fc9b514ff2e8bd96aae3b6da37c8cfe3",
"0x2afaba2230e38169887421ecd1bcb76baf0dbb37b56caa7988761cce675435e0",
"0xbe28ab2ba6ceef6db6145b24d9f656fbdca5f5d57fe3fed64636aa38bb452ccd",
"0xdd7890551072b8cd211ee78620a8efddd7f452150d078e4635b8c36bdd9d1b11",
"0xf6d45702fc8380baa553ba381c2edc165b52409ea1741685db42823771e9b816",
"0xb1d756f9cf4eb58e1b08309f1e642b706a673a486f4abfdd554c185d6965b0bd",
"0xea8b14070d34f0abd296564d875d0d5a074ebd697ede844b73c2e9f888b335ca",
"0xab1904aa1dbffd1f8b16d61a620a940c734fa35958bbbd23925bcdf2a7141b87",
"0x8bdafd38b00fec791f7ea9bc3a0ffff0fd6c582bf7cd7d4c893de19da1fed9fb",
"0x406edeebbdc69ed28c5326fcfa34e584d4cc6dbeb478bd8cc934b3ea256a815b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

