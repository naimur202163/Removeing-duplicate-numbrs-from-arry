const array = [1, 2, 3, 4, 5, 6, 7, 2, 4, 6, 1, 3];

function removeDuplicate(numbers) {
    let unique = [];
    for (let element of numbers) {
        // console.log(element)
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const result = removeDuplicate(array);
console.log(result);