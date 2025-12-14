var superheros = ["Ironman", "Spiderman", "Hawkeye"];
var movies = ["The place beyond the pines", "Whiplash"];
var allUsers = [];
function addUser(userInfo) {
    var flag = userInfo.bankDetails ? "submitted" : "not submitted";
    console.log("".concat(userInfo.first_name, " ").concat(userInfo.last_name, " has ").concat(flag, " the bank details!"));
}
addUser({ first_name: "Kiwi", last_name: "Wadhawan" });
var userOne = {
    name: "aaryan",
    regNo: "22BCY10197",
    course: "Computer Science: Cyber Security & Digital Forensics",
};
userOne = { name: "aw", teacherId: "197", subjects: ["DBMS", "DM"] };
console.log(userOne);
