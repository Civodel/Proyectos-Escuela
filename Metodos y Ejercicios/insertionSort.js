function insertionSort(vector) {
    for (var i = 0; i < vector.length; i++) {
        var pos = i
        while (pos >= 0 && vector[pos] < vector[pos - 1]) {
            var aux = vector[pos - 1]
            vector[pos - 1] = vector[pos]
            vector[pos] = aux

            pos = pos - 1
        }
    }
    return vector
}

function insertionSortB(vector) {
    for (let i = 0; i < vector.length; i++) {
        var pos = i;
        var valor = vector[i]
        while (pos >= 0 && valor < vector[pos - 1]) {
            vector[pos] = vector[pos - 1]
            pos = pos - 1
        }
        vector[pos] = valor
    }
    return vector
}
const miArray = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1]
const resp = insertionSortB(miArray)
console.log(resp);