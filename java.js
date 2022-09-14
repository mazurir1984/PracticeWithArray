//---- Задание 1 --------(concat)
//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const concatArray = firstArray.concat(secondArray);


//---- Задание 2 --------(reverse)
//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const sourceArray = [1, 2, 3];
const reverseArray = sourceArray.reverse();


//---- Задание 3 --------(push)
//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const givenArray = [1, 2, 3];
givenArray.push(4, 5, 6);


//---- Задание 4 --------(unshift)
//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const simpleArray = [1, 2, 3];
simpleArray.unshift(4, 5, 6);


//---- Задание 5 --------(shift)
//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.

const shiftArray = ['js', 'css', 'jq'];
console.log(shiftArray[0]);
shiftArray.shift();


//---- Задание 6 --------(pop)
// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его

const popArray = ['js', 'css', 'jq'];
console.log(popArray[popArray.length -1]);
popArray.pop();


//---- Задание 7 --------(slice)
//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

const sliceArray = [1, 2, 3, 4, 5];
const newSliceArray = sliceArray.slice(0, 3);


//---- Задание 8 --------(slice)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const secondSliceArray = [1, 2, 3, 4, 5];
const newSecondSliceArray = secondSliceArray.slice(-2);


//---- Задание 9 --------(splice)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

const spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(1, 2);


//---- Задание 10 --------(splice)
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

const secondSpliceArray = [1, 2, 3, 4, 5];
const newSecondSpliceArray = secondSpliceArray.splice(1, 3);


//---- Задание 11 --------(splice)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const thirdSpliceArray = [1, 2, 3, 4, 5];
thirdSpliceArray.splice(3, 0, 'a', 'b', 'c');


//---- Задание 12 --------(splice)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const fourthSpliceArray = [1, 2, 3, 4, 5];
fourthSpliceArray.splice(1, 0, 'a', 'b');
fourthSpliceArray.splice(6, 0, 'c');
fourthSpliceArray.splice(fourthSpliceArray.length, 0, 'e');
//II вариант
//fourthSpliceArray.splice(1, 4, 'a', 'b', 2, 3, 4, 'c', 5, 'e');


//---- Задание 13 --------(sort)
// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const sortArray = [3, 4, 1, 2, 7];
/*const newSortArray = sortArray.sort();*/
//II способ
function sortArrFunc(a, b) {
        return a - b;
};
console.log(sortArray.sort(sortArrFunc));

//---- Задание 14 --------(forEach)
/*Дан массив со следующими объектами внутри:  					
{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			
{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		
{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		
{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}, 		
Для каждого элемента выведите сообщение в консоль типа “Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет” */

const forEarchArray = [
    {firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',}, 			
{firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		
{firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		
{firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',}
];

function messageForUser(element) {
    console.log(`Пользователь ${element.firstName} ${element.lastName} является ${element.gender} и ему сейчас ${element.age} лет.`);
}
forEarchArray.forEach(messageForUser);



//---- Задание 15 --------(map)
/*Дан массив со следующими объектами внутри:  					
{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			
{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		
{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		
{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}		
Создайте новый массив на основании старого массива, добавив каждому пользователю в новом массиве свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение).*/

const mapArray = [
    {firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',}, 			
    {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		
    {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		
    {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',}
];

const newMapArray = mapArray.map(function(currentElement, index) {
    currentElement.telephonNumber = 0998768976;
    const newMapArrayObject = {
        firstName: currentElement.firstName,
        lastName: currentElement.lastName,
        age: currentElement.age,
        gender: currentElement.gender,
        telephonNumber: 0998768976 + index,
    }
    return newMapArrayObject;
});
console.log(mapArray);



//---- Задание 16 --------(filter)
/*Дан массив со следующими объектами внутри:  					
{firstName: ‘Test’, lastName: ’Testovich’, age: 27, gender: ‘male’,}, 			
{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		
{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		
{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,},		
{firstName: ‘Undefined’, lastName: ’Undefinovich’, age: 99},			
{firstName: ‘Null’, lastName: ’Nullovich’, gender: ‘male’}				
Создайте новый массив на основании старого массива, в котором будут только те совершеннолетние пользователи, у которых будет определенный пол.*/

const filterArray = [
    {firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male',}, 			
    {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		
    {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		
    {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',},		
    {firstName: 'Undefined', lastName: 'Undefinovich', age: 99},			
    {firstName: 'Null', lastName: 'Nullovich', gender: 'male'}
];

const newFilterArray = filterArray.filter(function(element) {
    return element.age >= 18 && element.gender === 'male';
});
console.log(newFilterArray);



//---- Задание 17 --------(flat)
//Дан следующий массив [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]]. Создайте новый массив на основании старого массива, в котором не будет вложенных массивов.

const flatArray = [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]];
const newFlatArray = flatArray.flat(Infinity);