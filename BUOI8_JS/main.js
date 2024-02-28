//map
const arr = [1, 2, 3, 4]
function map(arr) {
    const newArr = []

    for(let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(map(arr))

//forEach
const fruits = ["Banana", "Orange", "Apple"]

for(let i = 0; i < fruits.length; i++) {
    console.log(`${i}, ${fruits[i]}, ${fruits}`);
}

//find
function find(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 3) return arr[i]
    }
}

console.log(find(arr));

//findIndex
const arr1 = [1, 2, 3, 4, 5]
function findIndex(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 3) return i
    }
}

console.log(findIndex(arr1));

//reduce
function reduce(arr) {
    var total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

console.log(reduce(arr1));

//filter
function filter(arr) {
    const newArr1 = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 3) newArr1.push(arr[i])
    }
    return newArr1
}

console.log(filter(arr1));

//Bai tap 1
const a = ['a', 'b', 'c']
const b = [1, 2, 3]

console.log(b.concat(a));

//Bai tap 2
data = [1, 2, 4, 6]
const everyEven = data.every(
    (num) => num % 2 === 0
)

if(everyEven) {
    console.log("Yes");
}
else console.log("No");

//Bai tap 3
const someEven = data.some(
    (num) => num % 2 === 0
)

if(someEven) {
    console.log("Yes");
}
else console.log("No");

//Bai tap 4
data1 = [-1, -2, 2, 3]

const posNum = data1.filter(
    (num) => num > 0
)

console.log(posNum);

//Bai tap 5
const posNum1 = data1.find(
    (num) => { return num > 0 }
)
const posNum2 = data1.findIndex(
    (num) => { return num > 0 }
)

if(posNum1 != undefined) {
    console.log(posNum2 + " " + posNum1);
}
else console.log("No result");

//Bai tap 6
data2 = [5, 10, 4, 6]
const div5 = data2.forEach((value) => {
    if (value % 5 == 0) console.log(value);
});

//Bai tap 7
data3 = [2, 3, 5, 2, 6]
const is2 = data3.findIndex(
    (value) => value === 2
)

const is2_1 = data3.lastIndexOf(2)

if (is2 != -1) {
    console.log(is2 + " " + is2_1);
}
else console.log("No result");

//Bai tap 8
console.log(data3.join(", "));

//Bai tap 9
const data4 = [-1, -2, 3]
const newdata4 = data4.map(
    (value) => {
        if(value < 0) value = -value;
        return value
    }
)

console.log(newdata4);

//Bai tap 10

var reverse = function(x) {
    var INT_MAX = 2147483647;
    var INT_MIN = - INT_MAX - 1;
    var res = 0;
    var num = x;
    while (num !== 0) {
      res = (res * 10) + (num % 10);
      num = num > 0 ? Math.floor(num / 10) : Math.ceil(num / 10);
      if (res > INT_MAX || res < INT_MIN) return 0;
    }
    return res;
};
console.log(reverse(-123));




