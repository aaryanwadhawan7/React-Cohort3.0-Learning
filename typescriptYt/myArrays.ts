const superheros: string[] = ["Ironman", "Spiderman", "Hawkeye"];
const movies: Array<string> = ["The place beyond the pines", "Whiplash"];

type bankInfo = {
  account_number: number;
  expiry: string;
  cvv: number;
};

type user = {
  first_name: string;
  last_name: string;
  bankDetails?: bankInfo;
};

const allUsers: user[] = [];

function addUser(userInfo: user) {
  let flag: string = userInfo.bankDetails ? "submitted" : "not submitted";
  console.log(
    `${userInfo.first_name} ${userInfo.last_name} has ${flag} the bank details!`
  );
}

addUser({ first_name: "Kiwi", last_name: "Wadhawan" });

// -----------------------------------------------------------------------------

// Union
type Student = {
  name: string;
  readonly regNo: string;
  course: string;
};

type Teacher = {
  name: string;
  readonly teacherId: string;
  subjects: string[];
};

let userOne: Student | Teacher = {
  name: "aaryan",
  regNo: "22BCY10197",
  course: "Computer Science: Cyber Security & Digital Forensics",
};

userOne = { name: "aw", teacherId: "197", subjects: ["DBMS", "DM"] };

console.log(userOne);
