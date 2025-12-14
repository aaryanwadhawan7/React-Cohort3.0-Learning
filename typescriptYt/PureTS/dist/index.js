class User {
    name;
    email;
    phoneNo;
    constructor(name, email, phoneNo) {
        (this.name = name), (this.email = email), (this.phoneNo = phoneNo);
    }
}
const aaryan = new User("AARYAN WADHAWAN", "aaryan@aw.com", 8132098345);
console.log(aaryan);
console.log(typeof aaryan);
export {};
//# sourceMappingURL=index.js.map