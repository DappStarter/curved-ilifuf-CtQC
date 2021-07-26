require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift regret random coast install cover army gesture'; 
let testAccounts = [
"0xb74f549a572ede1342fbe76e7920e9a0889e0241dc999fdea352e38fc8fcc5e6",
"0x8ef30844c19097014421e9a8f44b2e07e02753068751f36b282e278d59618912",
"0xce2bb7ef4a92dc5d1e8c9a00fdb432872ad9c58fafc0d1a10eaaa39b5248abd8",
"0x3daa76e75a755bf4619f6c8335f98836ee115919a933c151f6c2d5b4626d86c9",
"0xff50d0e0c7a34f47501286ce822188140aff8d1eadfda7bff54a0b3b3aa3fe60",
"0x5e944c9c2318b061ec0a569d1bd5ea1e429ddaef3ac07ce568af15c0886eb01d",
"0x9be72e87397a67ce7d435768ba9e272b3a0df44094dd305dc6914e433ac49234",
"0x694021c6d4445a043a34dc2eac138ccb6b02a014afa83ed81a19cd7df5c6f13d",
"0x6e646a08d112ca23929e371a75f968b3ad88e22f8f95cef6a3f62f0c10c48acf",
"0x00c9ee0522e950640d374bbfeca1215d92a62238e5e0b61b9df86fbafc0addfb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

