// В данной работе и далее под определением набор понимают Set.

// Task 1

let s1 = new Set();
s1.add('h');
s1.add('b');
s1.add('o');
s1.add('h');
console.log(s1);



// Task 2

let s2 = new Set();
const f2 = () => {
  let val = document.querySelector('.i-2');
  s2.add(val.value);
  console.log(s2);
  val.value = "";
}

document.querySelector('.b-2').onclick = f2;


// Task 3

let s3 = new Set(['one', 'two', 'four']);

const f3 = () => {
    let val = document.querySelector('.i-3');
    for (let key of s3) {
        if (key === val.value) {
            s3.delete(key);
        }
    }
    console.log(s3);
    val.value = "";
}

document.querySelector('.b-3').onclick = f3;


// Task 4

let s4 = new Set(['a', 'b', 'c', 'z']);

const f4 = () => {
    let val = document.querySelector('.i-4');
    for (let item of s4) {
        item = val.value
        document.querySelector('.out-4').innerHTML = s4.has(item);
    }
    console.log(s4);
}

document.querySelector('.b-4').onclick = f4;

// Task 5


let s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);

const f5 = () => {
    document.querySelector('.out-5').innerHTML = s5.size;
}

document.querySelector('.b-5').onclick = f5;

// Task 6


let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];
let mySet = new Set(a6);
const f6 = () => {
    document.querySelector('.out-6').innerHTML = mySet.size;
    console.log(mySet);
}

document.querySelector('.b-6').onclick = f6;

// Task 7

const f7 = () => {
     let val = document.querySelector('.i-7').value;
     let s7 = new Set(val);
        if (val.length === s7.size && val.length > 6) {
            document.querySelector('.out-7').innerHTML = 1;
        } else {
            document.querySelector('.out-7').innerHTML = 0;
            console.log("Wrong-pass!!!");
        }
         console.log(s7);
}

document.querySelector('.b-7').onclick = f7;

// Task 8

let s8 = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
let ar8 = [];

const f8 = () => {
    for (let item of s8) {
        if (item > 5) {
            ar8.push(item);
        }
    }
    console.log(ar8);

}
document.querySelector('.b-8').onclick = f8;

// Task 9

const f9 = our_set => {
    let a = Array.from(our_set);
    console.log(a);
    return a.join(" ");
}

document.querySelector('.b-9').onclick = () => {
    let s9 = new Set([9, 8, 7, 6, 5]);
    document.querySelector('.out-9').innerHTML = f9(s9);
}

// Task 10

const f10 = (out_set, elem) => {
    let a = Array.from(out_set);
    for (let items of out_set) {
       elem = document.querySelector('.out-10').innerHTML = a.join(" ");
    }
    console.log(elem);
}

document.querySelector('.b-10').onclick = () => {
    let a10 = new Set(['4', '5', '6']);
    f10(a10, '.out-10');
};


// Task 11

const f11 = () => {
    let s = new Set();
    s.add([1]);
    s.add([1]);
    console.log(s);
}

document.querySelector('.b-11').onclick = f11;

// Task 12

let str12 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

const f12 = () => {
    str12.split("");
    let a = new Set();
    return a.add(str12);
}

document.querySelector('.b-12').onclick = () => {
    console.log(f12());
}

// Task 13
//  При нажатии b-13 выполняете функцию f13.
//  Функция должна преобразовать строку str13 в массив,
//  причем каждая буква - отдельный элемент массива.
//  Потом создать набор на основе массива.
//  Затем, перебирая набор поэлементам, найти сколько раз каждый символ встречается
//  в исходном массиве. Результат - в виде объекта типа
//  { символ : количество, символ : количество } вывести в консоль и возвратить.
// пример результата для строки 'Hello ho'
// { "H" : 1, 'e' : 1, 'l' : 2, "o" : 2, " ": 1}

let str13 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';


const f13 = () => {
    let result = {};
    str13.split("");
    let a = new Set();
    a.add(str13);
    for (let item of a) {
        for (let i = 0; i < item.length; i++) {
            let count = result[item[i]] ? result[item[i]] : 0;
            result[item[i]] = count + 1;
            console.log( i + " " + count);
        }

    }
    return result;
}

document.querySelector('.b-13').onclick = () => {
    console.log(f13());
}
