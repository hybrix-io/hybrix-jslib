nacl_factory = require('../common/crypto/nacl.js');

var hybrixd = require('..dist/hybrixd.interface.nodejs.js');
var hybrixd = new hybrixd.Interface({http: require('http')});

// IoC credentials:
var username = '';
var password = '';

// Withdrawal paramaters. To withdraw a token, set the token variable to the token symbol (e.g. 'eth.kin'). To withdraw ethereum, set the token to the symbol of ethereum (i.e. 'eth').
var token = 'eth.kin';
var amount = '890';

var host = 'http://localhost:1111/';

hybrixd.sequential([
  'init',
  {username: username, password: password}, 'session',
  {host: host}, 'addHost',
  {symbol: 'eth'}, 'addAsset',
  {
    address: {data: {symbol: 'eth'}, step: 'getAddress'}
  }, 'parallel',
  (result) => {
    return { amount: {data: amount, step: 'id'},
      token: {data: {query: '/asset/' + token + '/details'}, step: 'rout'},

      nonce: {data: {query: '/engine/idex/getNextNonce/' + result.address}, step: 'rout'},
      address: {data: result.address, step: 'id'},
      privateKey: {data: {symbol: 'eth'}, step: 'getKeys'}};
  }, 'parallel',
  (result) => {
    return {data: result, id: 'dex_idex', func: 'SignedIdexWithdrawal'};
  }, 'client',
  (result) => {
    return {query: '/engine/idex/push/withdraw/' + JSON.stringify(result)};
  },
  'rout'
]
  , (data) => { console.log(data); }
  , (error) => { console.error(error); }
);
