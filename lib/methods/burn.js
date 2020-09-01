/**
   * Delete a value in storage
   * @category Storage
   * @param {Object} data
   * @param {String} data.key - The key identifier for the data.
   * @param {Boolean} [data.legacy=false] - A toggle to use a legacy storage method.
   * @param {String} [data.host] - The host to store the data on.
   * @param {String} [data.channel=''] - Indicate the channel 'y' for encryption, 'z' for both encryption and compression.
   * @example
   * hybrix.sequential([
   * {username: 'DUMMYDUMMYDUMMY0', password: 'DUMMYDUMMYDUMMY0'}, 'session',
   * {host: 'http://localhost:1111/'}, 'addHost',
   * {key:'Hello', value:'World!'}, 'save',
   * {key:'Hello'}, 'burn'
   * ]
   *   , onSuccess
   *   , onError
   *   , onProgress
   * );
   */
exports.burn = (fail, legacy) => function (data, dataCallback, errorCallback, progressCallback) {
  if (typeof data !== 'object') return fail('Expected an object.', errorCallback);
  else if (!data.hasOwnProperty('key') || typeof data.key !== 'string') return fail('Expected \'key\' property of string type.', errorCallback);
  else if (data.legacy === true) {
    return this.rout({host: data.host, query: '/e/storage/burn/' + encodeURIComponent(legacy(data.key)), channel: data.channel, meta: data.meta},
      dataCallback, errorCallback, progressCallback);
  } else {
    return this.rout({host: data.host, query: '/e/storage/burn/' + encodeURIComponent(data.key), channel: data.channel, meta: data.meta},
      dataCallback, errorCallback, progressCallback);
  }
};