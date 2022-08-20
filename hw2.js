var n;
do {
    n = prompt("Enter a positive number");
    if (!isNaN(n)) {
        break;
    } else {
        alert("Enter a positive NUMBER");
    }
} while (isNaN(n));

function kt_SNT(n) {
    var isPrime = true;
    if (n < 2) {
        isPrime = false;
    } else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
            isPrime = false;
            break;
            }
        }
    }
    if (isPrime = true) {
        document.write(n + 'is a prime');
    } else {
        document.write(n + 'is not a prime');
    }
}
kt_SNT(n);