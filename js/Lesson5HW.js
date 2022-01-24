// class Car {
//   constructor(name, dateOfManufacture){
//       this.name = name;
//       this.dateOfManufacture = dateOfManufacture;
//   }
  
//   getAge(){
//       // На момент написания был 2020 год
//       return new Date().getFullYear() - this.dateOfManufacture;
//   }
// }

// const car = new Car('Audi', 2010);
// const car2 = new Car('BMW', 2022);
// car.name // 'Audi'
// car.getAge() // 10
// console.log(car2,car)


// class Animal {
//   constructor(heigth, weigth) {
//     super (heigth, weigth);
//     this.weigth = weigth;
//   }

//   getTestHeigth(){
//     return `${this.heigth} sm` 
//   }
// }

// let dog = new Animal(100, 35);
// console.log(dog.getTestHeigth())
// let cat = new Animal(50, 15);
// console.log(cat.getTestHeigth())

// class Dog extends Animal{

// }

// let dog1 = new Dog();
// console.log(dog1.getTestHeigth())

// Task1

// const user = {
//   name: "Sergey",
//   birthDay: "1994.01.14",
// };

// function whenbirthDay( value ) {
//   console.log(this.birthDay + value, "this.birthDay")
// }

// function bindFunc(foo, text, ...arg) {
//   if(typeof foo === "function") {
//     return foo.bind(text);
//   }
//   return "foo is not function";
// }


// // Task2

// function countKey() {
//   return Object.keys(this).length;
// }

// console.log(countKey.call(user));

// // Task3

// const valObject0 = {
//   values: [1, '2', 4, 8, '8',  3, 10, null, false],
// };

// function arrayFromObject() {
//   let array = [];
//   for (let i = 0; i < this.values.length; i++){
//     let elements = this.values[i];
//     if ((typeof elements === 'number') && (elements < 10) && (elements % 2 === 0)){
//       array.push(elements);
//     }
//   }
//   return array;
// }

// console.log(arrayFromObject.call(valObject0));

// // Task4
   
// person = {
//   birthdayDate: new Date("1994-01-14")
//   }
  
//   console.log("birthdayDate.toLocalString=>",person.birthdayDate.toLocaleString());
  
//   function whenNextBirthday(){
//   let now = new Date();
//   let nextbirthday = person.birthdayDate;
  
//   if(now.getMonth()>person.birthdayDate.getMonth()|| (now.getMonth()===person.birthdayDate.getMonth() && now.getDate()>person.birthdayDate.getDate())){	
//     nextbirthday.setFullYear(now.getFullYear()+1)
//   }else{
//     nextbirthday.setFullYear(now.getFullYear())
//   }
//   console.log("whenNextBirthday",(nextbirthday-now)/(1000*60*60*24))
//   }

//     whenNextBirthday(person);
// let start = new Date();
// alert("test");
// let end = new Date();
// console.log(end.getTime());
// console.log("giff date",(end.getTime() - start.getTime())/(1000*60));


// Task1
const studentArr = [{
  name: 'Сергей',
  surname: 'Войлов',
  ratingPoint: 1000,
  schoolPoint: 1000,
  course: 2,
},
{
  name: 'Татьяна',
  surname: 'Коваленко',
  ratingPoint: 880,
  schoolPoint: 700,
  course: 1,
},
{
  name: 'Анна',
  surname: 'Кугир',
  ratingPoint: 1430,
  schoolPoint: 1200,
  course: 3,
},
{
  name: 'Станислав',
  surname: 'Щелоков',
  ratingPoint: 1130,
  schoolPoint: 1060,
  course: 2,
},
{
  name: 'Денис',
  surname: 'Хрущ',
  ratingPoint: 1000,
  schoolPoint: 990,
  course: 4,
},
{
  name: 'Татьяна',
  surname: 'Капустник',
  ratingPoint: 650,
  schoolPoint: 500,
  course: 3,
},
{
  name: 'Максим',
  surname: 'Меженский',
  ratingPoint: 990,
  schoolPoint: 1100,
  course: 1,
},
{
  name: 'Денис',
  surname: 'Марченко',
  ratingPoint: 570,
  schoolPoint: 1300,
  course: 4,
},
{
  name: 'Антон',
  surname: 'Завадский',
  ratingPoint: 1090,
  schoolPoint: 1010,
  course: 3
},
{
  name: 'Игорь',
  surname: 'Куштым',
  ratingPoint: 870,
  schoolPoint: 790,
  course: 1,
},
{
  name: 'Инна',
  surname: 'Скакунова',
  ratingPoint: 1560,
  schoolPoint: 200,
  course: 2,
},
];

class Student {
  constructor(enrollee = {}) {
      this.id = Student.incrementId();
      this.name = enrollee.name;
      this.surname = enrollee.surname;
      this.ratingPoint = enrollee.ratingPoint;
      this.schoolPoint = enrollee.schoolPoint;
      Student.listOfStudents = {id: this.id, ...enrollee,};
  }

  static get listOfStudents() {
      return this.studentsList || []
  }

  static set listOfStudents(student) {
      const studentList = this.studentsList || [];
      student.isSelfPayment = true;
      if (student.ratingPoint >= 800 && studentList.length < 5) {
          student.isSelfPayment = false;
      }
      if (studentList.length >= 5) {
          let notSelfPayment = studentList.filter((person) => !person.isSelfPayment);
          let selfPayment = studentList.filter((person) => person.isSelfPayment);

          if (student.ratingPoint >= 800) {
              student.isSelfPayment = false;
              notSelfPayment.unshift(student);

              if (notSelfPayment.length > 5) {
                  let notSelfPaymentSort = notSelfPayment.sort((a, b) => a.ratingPoint - b.ratingPoint);
                  if (notSelfPaymentSort[0].ratingPoint === notSelfPaymentSort[1].ratingPoint) {
                      notSelfPaymentSort[0].isSelfPayment = notSelfPaymentSort[0].schoolPoint < notSelfPaymentSort[1].schoolPoint;
                      notSelfPaymentSort[1].isSelfPayment = notSelfPaymentSort[0].schoolPoint > notSelfPaymentSort[1].schoolPoint;
                  } else {
                      notSelfPaymentSort[0].isSelfPayment = notSelfPaymentSort[0].ratingPoint < notSelfPaymentSort[1].ratingPoint;
                      notSelfPaymentSort[1].isSelfPayment = notSelfPaymentSort[0].ratingPoint > notSelfPaymentSort[1].ratingPoint;
                  }
                  notSelfPayment = notSelfPaymentSort;
              }
          } else {
              selfPayment.push(student)
          }
          return this.studentsList = [...notSelfPayment, ...selfPayment];
      }
      return this.studentsList = [...studentList, student];
  }

  static incrementId() {
      if (!this.latestId) this.latestId = 1;
      else this.latestId++;
      return this.latestId;
  }
}

studentArr.forEach(student => new Student(student));
console.log(Student.listOfStudents);




// Task2
class CustomString {
  reverse(myString) {
    return myString.split("").reverse().join("");
    }

  ucFirst(myString) {
    if (!myString) return myString;
    return myString[0].toUpperCase() + myString.slice(1);
    }

  ucWords(myString){
    return myString.replace(/^(.)|\s(.)/g, function ( $1 ) { return $1.toUpperCase ( ); } );
    }  
  }

  const myString = new CustomString();

  console.log(myString.reverse("qwerty"))

  console.log(myString.ucFirst("qwerty"))

  console.log(myString.ucWords("qwerty, qwerty, qwerty"))




