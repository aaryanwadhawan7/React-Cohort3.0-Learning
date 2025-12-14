var aaryan = {
    name: "Aaryan Wadhawan",
    plan: "Paid",
    email: "aaryanwadhawan777@gmail.com",
    userId: "22BCY10197",
    course: "Computer Science: Cyber Security & Digital Forensics",
    getCourseDetail: function () {
        return "".concat(aaryan.name, " is pursuing ").concat(aaryan.course);
    },
};
// aaryan.email = "aaryanwadhawam339@gmail.com";
console.log(aaryan.getCourseDetail());
