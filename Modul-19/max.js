const kabya = 80;
const kabita = 70;

if (kabya > kabita) {
  console.log("kabya is greater than kabita " + kabya);
} else {
  console.log("kabita is greater than kabya " + kabita);
}

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(kabya, kabita));
// ---------------------------------

const rahim = 77;
const karim = 88;
const jahid = 90;

if (rahim > karim && rahim > jahid) {
  console.log("Rahim got a hight number " + rahim);
} else if (karim > rahim && karim > jahid) {
  console.log("Karim got a hight number " + karim);
} else {
  console.log("Jahid got a hight number " + jahid);
}

console.log("-------------------------------");

function maxNumber(a, b, c) {
  if (a > b && a > c) {
    // console.log("Rahim got a hight number " + rahim);
    const hightNumber = "Rahim got a hight number " + a;
    return hightNumber;
  } else if (b > a && b > c) {
    // console.log("Karim got a hight number " + karim);
    const hightNumber = "Karim got a hight number " + b;
    return hightNumber;
  } else {
    // console.log("Jahid got a hight number " + jahid);
    const hightNumber = "Jahid got a hight number " + c;
    return hightNumber;
  }
}

const hightNumber = maxNumber(rahim, karim, jahid);
console.log(hightNumber);
