// THIS IS PREPENDED BY COMPILER: var nacl_factory = require('../common/crypto/nacl.js');

DEBUG = false;

const sha256 = require('../common/crypto/sha256'); // Used for legacy storage key generation

// let sjcl = require('../common/crypto/sjcl');

// emulate window for browser code executed in nodejs environment
if (typeof window === 'undefined') {
  window = {};
}
if (typeof window.crypto === 'undefined') {
  window.crypto = require('crypto');
}

// In browser implementations a window.crypto.getRandomValues is expected
// this is not in nodjes crypto library so we define it here in case
// we want to use browser code in a nodejes environment
if (typeof window.crypto.getRandomValues === 'undefined') {
  window.crypto.getRandomValues = function getRandomValues (arr) {
    const bytes = window.crypto.randomBytes(arr.length);
    for (let i = 0; i < bytes.length; i++) {
      arr[i] = bytes[i];
    }
  };
}
// Likewise in a nodejs implementation crypto.randomBytes is expected
// this is not available in a browser envrioment so we define it here in case
// we want to use nodejs code in a browser environment
if (typeof window.crypto.randomBytes === 'undefined') {
  window.crypto.randomBytes = function (size, callback) {
    let bytes = [];
    for (let i = 0; i < bytes.length; i++) {
      bytes.push(0);
    }
    window.crypto.getRandomValues(bytes); // overwrite the zero values with random values
    if (typeof callback === 'function') {
      callback(null, bytes);
    } else {
      return bytes;
    }
  };
}

if (typeof crypto === 'undefined') { // Needed to make ethereum work
  crypto = window.crypto;
}
if (typeof crypto.getRandomValues === 'undefined') {
  crypto.getRandomValues = window.crypto.getRandomValues;
}

// emulate self for browser code executed in nodejs environment
if (typeof self === 'undefined') {
  self = {};
}
if (typeof self.crypto === 'undefined') {
  self.crypto = window.crypto;
}

if (typeof FormData === 'undefined') {
  FormData = {};
}

let Interface = function (data) {
  const connector = data;
  const user_keys = {};
  /*
    boxPk
    boxSk
  */
  const assets = {};
  /* per symbol:
     {$SYMBOL:
     {
     seed
     keys
     address
     }
     }
  */
  const clientModules = {};
  /*  per id/mode:
      {$ID/MODE :
      {
      keys()
      sign()
      ..TODO
      }
      }
  */
  const clientModuleBlobs = {};
  //  per id/mode: a string containing the code

  const hybrixdNodes = {};

  const fail = function (message, errorCallback) {
    if (DEBUG) {
      console.error(message);
    }
    if (typeof errorCallback === 'function') {
      errorCallback(message);
    }
  };

  const legacy = function (key) {
    return nacl.to_hex(sha256(user_keys.boxPk)) + '-' + String(key);
  };

  const powQueue = [];

  const method = name => function () {
    this[name] = require('./methods/' + name + '.js')[name].apply(this, arguments);
  }.bind(this);

  method('init')(nacl_factory);
  method('logout')(assets, user_keys);
  method('session')(user_keys, fail);
  method('asset')(assets, fail);
  method('initAsset')(user_keys, fail, assets, clientModules);
  method('import')(fail, clientModules, clientModuleBlobs, hybrixdNodes);
  method('export')(fail, clientModuleBlobs);
  method('modules')(clientModules);
  method('addAsset')(assets, fail, clientModules);
  method('addUnifiedAsset')(assets);
  method('removeAsset')(assets);
  method('client')(assets, fail, clientModules);
  method('getKeys')(assets);
  method('getAddress')(assets);
  method('getPrivateKey')(assets);
  method('getPublicKey')(assets);
  method('setPrivateKey')(assets, clientModules, fail);
  method('atom')(fail);
  method('form')(fail);
  method('signTransaction')(fail, assets, clientModules);
  method('rawTransaction')(assets);
  method('transaction')();
  method('assert')(fail);
  method('refreshAsset')(assets);
  method('addHost')(fail, hybrixdNodes);
  method('login')(user_keys, hybrixdNodes, connector, fail);
  method('rout')(fail, user_keys, hybrixdNodes, connector);
  method('save')(fail, powQueue, legacy);
  method('work')();
  method('queue')(powQueue);
  method('load')(fail, legacy);
  method('seek')(fail, legacy);
  method('meta')(fail, legacy);
  method('hash')();
  method('keys')(fail);
  method('sign')(fail);
  method('encrypt')(user_keys, fail);
  method('decrypt')(user_keys, fail);
  method('createAccount')(fail);
  method('id')();
  method('sequential')(fail);
  method('parallel')(fail);
  method('promise')();
  method('call')();
};

module.exports = {Interface};
