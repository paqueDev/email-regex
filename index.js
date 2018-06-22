'use strict';

var re = '[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*';

module.exports = (options = {}) => options.exact ? new RegExp(`^${re}$`) : new RegExp(re, 'g');
