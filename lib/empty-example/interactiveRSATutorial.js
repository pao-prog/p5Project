let aliceImage;
let bobImage;
let message;
let bobReceives;
let e;
let d;
let N;
let eStep = 0;
let gStep = 0;
var dict = {
  "a" : 1,
  "b" : 2,
  "c" : 3,
  "d" : 4,
  "e" : 5,
  "f" : 6,
  "g" : 7,
  "h" : 8,
  "i" : 9,
  "j" : 10,
  "k" : 11,
  "l" : 12,
  "m" : 13,
  "n" : 14,
  "o" : 15,
  "p" : 16,
  "q" : 17,
  "r" : 18,
  "s" : 19,
  "t" : 20,
  "u" : 21,
  "v" : 22,
  "w" : 23,
  "x" : 24,
  "y" : 25,
  "z" : 26
};

function preload() {
  aliceImage = loadImage('alice.png');
  bobImage = loadImage('bob.jfif');
}

function setup() {
    createCanvas(1500, 1500);
    textSize(32);
    text('Welcome to this RSA (Rivest, Shenir, Adleman) Tutorial', 100, 50);
    fill(0, 102, 153);
    textSize(18);
    
    text('First we must generate our keys', 375, 100);
    generateKeysButton = createButton('generate');
    generateKeysButton.position(700, 80);
    generateKeysButton.mousePressed(generate);

    textSize(10);
    text('Alice wants to send Bob the message: B.', 100, 220);
    encryptButton = createButton('encrypt');
    encryptButton.position(100, 225);
    encryptButton.mousePressed(encrypt);

    decryptButton = createButton('decrypt');
    decryptButton.position(900, 200);
    decryptButton.mousePressed(decrypt);
  }

function draw() {
  image(aliceImage, 100, 100, 100, 100);
  image(bobImage, 900, 100, 100, 100);
}

function generate() {
  textSize(18);
  if (gStep == 0) {
    text('Pick two primes eg: p=2 q =7', 375, 150);
  }
  if (gStep == 1) {
    N = 14;
    text('N = p*q = 14', 375, 175);
  }
  if (gStep == 2) {
    text("Let's work out Euler's Totient, phi(N) = (p-1)(q-1) = 6", 375, 200);
  }
  if (gStep == 3) {
    text("Find e such that 1<e<phi(N) and e is coprime with N and phi(N).", 375, 250);
    text("In this case e = 5", 375, 275);
    text("Now you have the lock you hand out to everyone (e, N) = (5, 14)", 375, 300);
  }
  if (gStep == 4) {
    text("Now we must find the private key to decrypt", 375, 325);
    text("Choose d such that: d*e (mod phi(N)) = 1. Here: 5d (mod 6) = 1", 375, 350);
    text("Let's pick d = 11, our key is (11, 14)", 375, 375);
  }
  if (gStep == 5) {
    e = 5;
    d = 11;
    N = 14;
    text("(5, 14)", 100, 275);
    text("(11, 14)", 900, 250);
  }
  gStep += 1;
}

function encrypt() {
  textSize(14);
  text('Convert letter to its number equivalent.', 100, 300);
  text('Keep it simple here and use A->1 to Z->26', 100, 325);
  if (eStep == 0) {
    text("You picked B which is equivalent to 2", 100, 350);
  }
  if (eStep == 1) {
    text("2^5 mod 14 = 4. 4 means D.", 100, 375);
    text("So bob receives D", 100, 400);
    let a = Math.pow(dict.message, e);
    bobReceives = a % N;
  }
  if (eStep == 2) {
    text("Encrypted msg: D -> 4", 900, 275);
  }
  eStep += 1;
}

function decrypt() {
  text("4^11 (mod 14) = 2", 1000, 300);
  text("2 -> B", 1000, 320);
}
