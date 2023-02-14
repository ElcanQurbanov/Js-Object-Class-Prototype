"use strict";

// homework

// let getReverseStr = (str) => {

//     return str.split("").reverse().join("");

// }

// console.log(getReverseStr("Xacker"));





// object

// let stu1 = {
//     name: "Konul",
//     surname: "Ibrahimova",
//     email: "konul@gmail.com",
//     phones: [5345, 6574675],
//     education: {
//         names: ["Programming", "Digital marketing"]
//     }
// }

// stu1.address = "Neftciler"

// console.log(stu1.address);

// for (const key in stu1) {
//     console.log(key + "/" + stu1[key])
// }

// let user = {};

// user.name = "Pervin";

// console.log(user.name);



// for (const item of stu1.phones) {
//     console.log(item)
// }


// console.log(stu1.education.names)




let stu1 = {
    id: 1,
    name: "Eli",
    surname: "Talibov",
    address: "Xetai"
}

let stu2 = {
    id: 2,
    name: "Elekber",
    surname: "Hesenov",
    address: "Bayil"
}

let stu3 = {
    id: 3,
    name: "Mirze",
    surname: "Besirzade",
    address: "Bulbule"
}

let stu4 = {
    id: 4,
    name: "Saiq",
    surname: "Kazimov",
    address: "Sedmoy"
}

let group = {
    name: "P135",
    capacity: 6,
    students: [],
    addStudent: function (student) {

        let stu = this.students.find(s => s.id == student.id);

        if (stu != undefined) {
            console.log("Student already exist");
            return;
        }

        if (this.students.length == this.capacity) {
            console.log("Group already filled");
            return;
        }

        this.students.push(student);

    },

    updateStudent: function (student) {
        let stu = this.students.find(s => s.id == student.id);

        if (stu != undefined) {
            stu.address = student.address;
        }
    },

    getStudents: function () {
        // for (const item of this.students) {
        //     console.log(`${item.name} ${item.surname} ${item.address}`)
        // }

        return this.students
    }
}

group.addStudent(stu1)
group.addStudent(stu2)
group.addStudent(stu3)
group.addStudent(stu4)


// getStudentsDatas(group.getstudent());

// let datas = group.getStudents();

// getStudentsDatas(datas);



function getStudentsDatas(arr) {
    for (const item of arr) {
        console.log(`${item.name} ${item.surname} ${item.address}`)
    }
}


let updatedStudent = {
    id: 4,
    address: "Ehmedli"
}

// group.updateStudent(updatedStudent);

// let datas = group.getStudents();

// getStudentsDatas(datas);




let user = {
    name: "Elcan",
    company: {
        name: "Code academy",
        rooms: [
            {
                name: "Yupiter",
                capacity: 15,
                computers: ["HP", "APPLE", "ACER"]
            },
            {
                name: "Saturn",
                capacity: 10
            }
        ]
    }
}

// function getRoomComputersByUser(user) {
//     let rooms = user.company.rooms;
//     let computers = [];

//     for (const room of rooms) {
//         if(room.name == "Yupiter"){
//             computers = room.computers;
//         }
//     }

//     for (const computer of computers) {
//         console.log(computer)
//     }
// }

// getRoomCapacityByUser(user)

// function getRoomComputersByUser(user) {

//     let rooms = user.company.rooms;

//     for (const room of rooms) {
//         if(room.name == "Yupiter"){
//             return room.computers;
//         }
//     }
// }

// console.log(getRoomCapacityByUser(user))




// class Car {
//     constructor(name, speed) {
//         this.name = name;
//         this.speed = speed;
//     }

//     showCarData(color) {
//         return this.name + " " + this.speed + "-" + color;
//     }
// }

// let car1 = new Car("BMW", 500);

// console.log(car1.showCarData("red")) 

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    static eat() {
        console.log("animal eating")
    }
}

// class Cat extends Animal{
//     constructor(color, name, sound){
//         super(name, sound);
//         this.color = color;
//     }
// }

// let cat1 = new Cat("black", "Luis", "ham ham");

// let animal1 = new Animal("Cat", "Miyauuu");

// console.log(animal1.name);

// cat1.name = "Luis";

// console.log(cat1.name);


// Animal.eat();


let nums = [1, 2, 3, 4, 5];

// Array.prototype.konul = function(){
//     console.log("Hello konul")
// }

// nums.konul();


// String.prototype.p135 = "Ugurlar";

String.prototype.getStr = function (str) {
    console.log(str)
}

String.prototype.arrow = () => {
    console.log("arrow")
}


let name = "Saiq";

name.arrow();
