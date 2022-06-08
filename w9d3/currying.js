// function addThreeNums(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// function curriedAddThreeNums() {
//     return function(num1) {
//         num1;
//         return function(num2) {
//             num1; num2;
//             return function(num3) {
//                 num1; num2; num3
//                 return num1 + num2 + num3;
//             }
//         }
//     }
// }

// // const a = curriedAddThreeNums()(1)(2)(3);
// // const b = a(1);
// // const c = b(2);
// // const result = c(3);
// // console.log(result);

// function curriedSum(numArgs) {
//     var nums = [];

//     return function _curriedSum(num) {
//         nums.push(num);
//         if (nums.length === numArgs) {
//             let result = 0;
//             nums.forEach(num => {
//                 result += num;
//             })
//             return result;
//         } else {
//             return _curriedSum;
//         }
//     }
// }

// const curriedAdd = curriedSum(3);
// console.log(curriedAdd(1)(2)(3));

Function.prototype.myCurry = function(num){
    let that = this;
    let arr = [];
    debugger
    return function _function(...args){
        arr.push(...args)
        debugger
        if(arr.length >= num){
            return that(...(arr.slice(0,num)))
        }

        return _function
    }
}

let curry = function(func,num){
    let arr = [];
    debugger
    return function _function(...args){
        debugger
        arr.push(...args)
        if(arr.length >= num){
            return func.apply("banana",arr.slice(0,num))
        }

        return _function
    }
}
function curryWithContext(func, context, numArgs) {
    const args = [];

    return function _curryWithContext(...elements) {
        args.push(...elements);

        if (args.length < numArgs) {
            return _curryWithContext;
        }

        return func.apply(context, args.slice(0, numArgs));
    }
}



let sum = function(...args){
    debugger
    let sum = 0; 
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }

    return sum;
}

// console.log(curry(sum,4)(1)(2)(3)(5)) #instance where they pass sufficient arguments one at a time
// console.log(sum.myCurry(3)(1,2,3,4)); #instance where they pass more arguments than needed
// console.log(curryWithContext(carlos.greet, sandra, 4)('Hi')('Hello')('Wassup')('Yo'));


Function.prototype.myBind = function(context,...bargs){
    let that = this;
    debugger
    return function(cargs){
        return that.apply(context,bargs.concat(cargs))
    }
}

const carlos = {
    name: "carlos",
    age: 24,
    sayName: function(){
        debugger
        console.log(this.name)
    },
    greet: function(...greetings) {
        const greetingsString = greetings.join(", ");
        return `${greetingsString} my name is ${this.name}`;
    }
}

const sandra = {
    name: "sandra",
    age: 30
}

// carlos.sayName.myBind(sandra)() //run this to test myBind and trace the call path


Array.prototype.mergeSort = function (callback) {
    if (this.length < 2) return this;
    let midIdx = this.length / 2;

    // leftCall = this.slice(0, midIdx).mergeSort(callback);
    let leftArray = this.slice(0, midIdx);
    let rightArray = this.slice(midIdx);
    let leftCall = leftArray.mergeSort(callback);
    let rightCall = rightArray.mergeSort(callback);
    
    return merge(leftCall, rightCall, callback)
};


function merge(left, right, callback) {
    let merged = []
    while ((left.length !== 0) && (right.length !== 0)) {
        if (callback(left[0], right[0]) === -1) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift())
        }
    }
    return merged.concat(left, right)
};

function revCb (x, y) {
    if (x === y) {
        return 0;
    } else if (x < y) {
        return 1;
    } else {
        return -1;
    }
}

function normCb(x, y) {
    if (x === y) {
        return 0;
    } else if (x > y) {
        return 1;
    } else {
        return -1;
    }
}

console.log([5, 4, 7, 9, 3, 6, 0].mergeSort(revCb)) //[ 9, 7, 6, 5, 4, 3, 0 ]
console.log([5, 4, 7, 9, 3, 6, 0].mergeSort(normCb)) // [ 0, 3, 4, 5, 6, 7, 9 ]

// console.log(['a', 'b', 'c'].concat(['a'], ['d', 'e', 'f'])) ==> ["a", "b", "c", "a", "d", "e", "f"]