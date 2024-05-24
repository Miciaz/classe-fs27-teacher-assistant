function increasingTriangle(n) {
    for(let i = 1; i <= n; i++) {
        console.log('*'.repeat(i))
    }
}

increasingTriangle(4)

function decreasingTriangle(n) {
    for(let i = n; i > 0; i--) {
        console.log('*'.repeat(i))
    }
}

decreasingTriangle(4)