function calculateVolume(length) {
    return function (breadth){
        return function (width){
            return length*breadth*width
        }
    }
}
console.log(calculateVolume(1)(2)(3))