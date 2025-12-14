"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userData = {
    firstName: "Aaryan",
    lastName: "Wadhawan",
    interests: ["Generative-AI", "ML", "MERN Stack", "DevOps"],
};
function displayUserData(userData) {
    console.log("FirstName: ".concat(userData.firstName, ", lastName: ").concat(userData.lastName, ", User Interests: ").concat(userData.interests));
}
displayUserData(userData);
// ----------------------------------------------------------------------
// Object passed as parameter to Func.
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    console.log("".concat(name, " paid or not: ").concat(isPaid));
}
// Object passed as parameter to Func. -> 2
var user = {
    name: "Aaryan Wadhawan",
    isPaid: true,
    email: "aaryanwadhawanedu@gmail.com",
};
createUser(user);
createUser({ name: "Aaryan", isPaid: false });
// ----------------------------------------------------------------------
// Func. returning a object
function createCourse() {
    return { name: "Aaryan Wadhawan", price: 399 };
}
var courseObj = createCourse();
console.log(courseObj);
var myNote = {
    _id: 197,
    heading: "When Life Becomes Disaster...",
    tags: ["Literature", "Dead Poet Society", "Charles Dickens"],
    description: "Dead Person Tales - Aaryan Wadhawan",
    sign: "AARYAN WADHAWAN",
};
function createNote(note) {
    if (note) {
        // note info provided
        return true;
    }
    // note info not provided
    return false;
}
console.log(createNote(myNote));
// const task: string[] | number[] = [1,2,3,3]
// const task: (string | number)[] = ['aaryan', 'wadhawan', 197]
// -------------------------------------------------------------------------
// Tuple
var userDataTwo = [197, "22BCY10197", true];
userDataTwo.push("aaryanwadhawanedu@gmail.com");
console.log(userDataTwo);
// --------------------------------------------------------------------------
// enums
var seatType;
(function (seatType) {
    seatType[seatType["window"] = 0] = "window";
    seatType[seatType["aisle"] = 1] = "aisle";
    seatType[seatType["cabinSeat"] = 2] = "cabinSeat";
})(seatType || (seatType = {}));
console.log(typeof seatType.window);
