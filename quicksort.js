let desordedNums = [];
let ordedNums = [];

function makeArray(N) {
    for (let i = 0; i < N; i++) {
        let num = parseInt(prompt(`Digite o ${i + 1}º número: `));
        desordedNums.push(num);
    }
    return desordedNums;
}

function getNumbers() {
    const N = parseInt(document.getElementById("quantity").value);
    desordedNums = makeArray(N);
    document.getElementById("lista-desorded").textContent = `Números Desordenados: ${desordedNums}`;
}

function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

function pressOrded() {
    ordedNums = quicksort(desordedNums);
    document.getElementById("lista-orded").textContent = `Números Ordenados: ${ordedNums}`;
}