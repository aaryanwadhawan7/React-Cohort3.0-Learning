class User {
  name: string;
  email: string;
  phoneNo: number;
  constructor(name: string, email: string, phoneNo: number) {
    (this.name = name), (this.email = email), (this.phoneNo = phoneNo);
  }
}

const aaryan = new User("AARYAN WADHAWAN", "aaryan@aw.com", 8132098345);

console.log(aaryan);
console.log(typeof aaryan);
