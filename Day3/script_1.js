// 1.Compare two JSON properties without order:

let obj1 = [{"name":"Person 1","age":"5"}];
let obj2 = [{"age":"5","name":"Person 1"}];

function compareJSONProperties(obj1,obj2){
    return JSON.stringify(obj1) == JSON.stringify(obj2);
}
console.log(compareJSONProperties(obj1,obj2));
