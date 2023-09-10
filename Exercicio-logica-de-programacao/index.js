function maiorNumero(x, y) {
    if (x > y) {
        return x;
    } else if (y > x) {
        return y;
    }
    else {
        return 'Números iguais.'
    }
}

console.log(maiorNumero(5, 5));