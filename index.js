const message_queue_integrator = require('message-queue-integrator');
const inventory_management_platform = require('inventory-management-platform');
const xml2js = require('xml2js');
const ethereumjs_util = require('ethereumjs-util');
const dotenv = require('dotenv');
const truffle = require('truffle');
const babel_core = require('babel-core');
const eslint = require('eslint');
const validator = require('validator');
const ethereumjs_tx = require('ethereumjs-tx');
const webpack_cli = require('webpack-cli');

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
delay(2000).then(() => console.log('Delayed message after 2 seconds.'));

// Get information about an Ethereum transaction by hash
web3.eth.getTransaction(txHash).then(tx => {
  console.log('Transaction details by hash:', tx);
}).catch(err => {
  console.error('Error getting transaction details by hash:', err);
});

// Get the balance of an Ethereum address
web3.eth.getBalance('0x1234567890123456789012345678901234567890').then(balance => {
  console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
}).catch(err => {
  console.error('Error getting balance:', err);
});

// Shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledArray = shuffleArray([1, 2, 3, 4, 5]);
console.log('Shuffled array:', shuffledArray);

const https = require('https');
const options = {
  hostname: 'www.example.com',
  port: 443,
  path: '/api/data',
  method: 'GET'
};
const req = https.request(options, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Response data:', data);
  });
});
req.end();

const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('Apple is $0.65 per pound.');
    break;
  case 'banana':
    console.log('Banana is $0.33 per pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
}

// Check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}
console.log('Is 17 prime?', isPrime(17));

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your favorite programming language? ', answer => {
  console.log(`Your favorite language is ${answer}`);
  rl.close();
});

class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}
console.log(new Polygon(4, 3).area);

const util = require('util');
const log = util.debuglog('foo');
log('Debug message from foo');