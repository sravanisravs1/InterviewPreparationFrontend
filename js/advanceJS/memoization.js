function memoisedFibonacci(n, cache) {
    cache = cache || [1, 1]
    if (cache[n])
        return cache[n]
    return cache[n] = memoisedFibonacci(n - 1, cache) + 
    memoisedFibonacci(n - 2, cache);
}

console.log(memoisedFibonacci(10))