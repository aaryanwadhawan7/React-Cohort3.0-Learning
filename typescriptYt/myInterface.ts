interface User {
  name: string;
  plan: "Paid" | "Free";
  email: string;
  readonly userId: string;
  course: string;
  // getCourseDetail: () => string
  getCourseDetail(): string;
}

// Reopening of Interface
interface User {
  year: 1 | 2 | 3 | 4;
}

const aaryan: User = {
  name: "Aaryan Wadhawan",
  plan: "Paid",
  email: "aaryanwadhawan777@gmail.com",
  userId: "22BCY10197",
  course: "Computer Science: Cyber Security & Digital Forensics",
  getCourseDetail: () => {
    return `${aaryan.name} is pursuing ${aaryan.course}`;
  },
  year: 4,
};

// Inheritance can be performed in Interface
interface Role extends User {
  role: "admin" | "CTO" | "SOC";
}

const aaryan_wadhawan: Role = { ...aaryan, role: "CTO" };

// aaryan.email = "aaryanwadhawam339@gmail.com";
console.log(aaryan.getCourseDetail());
