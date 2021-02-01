function mapToNegativize(sourceArray) {
    let output = []
    sourceArray.forEach(i => output.push(-i))
    return output
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let output = []
    sourceArray.forEach(i => output.push(2*i))
    return output
}


function mapToSquare(sourceArray) {
    let output = []
    sourceArray.forEach(i => output.push(i**2))
    return output
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    let i
    for (i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    let output = []
    sourceArray.forEach(i => {
        if (i){
            output.push(1)
        } else {
            output.push(0)
        }
    }) 
    if (output.includes(0)) {
        return false
    } else {
        return true
    }
}

function reduceToAnyTrue(sourceArray) {
    let output = []
    sourceArray.forEach(i => {
        if (i){
            output.push(1)
        } else {
            output.push(0)
        }
    }) 
    if (output.includes(1)) {
        return true
    } else {
        return false
    }
}

