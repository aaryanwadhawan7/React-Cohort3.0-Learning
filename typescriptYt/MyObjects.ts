// Type Alias Func. Declaration
type data = {
  firstName: string;
  lastName: string;
  interests: Array<string>;
};

const userData = {
  firstName: "Aaryan",
  lastName: "Wadhawan",
  interests: ["Generative-AI", "ML", "MERN Stack", "DevOps"],
};

function displayUserData(userData: data): void {
  console.log(
    `FirstName: ${userData.firstName}, lastName: ${userData.lastName}, User Interests: ${userData.interests}`
  );
}

displayUserData(userData);

// ----------------------------------------------------------------------

// Object passed as parameter to Func.
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
  console.log(`${name} paid or not: ${isPaid}`);
}

// Object passed as parameter to Func. -> 2
const user = {
  name: "Aaryan Wadhawan",
  isPaid: true,
  email: "aaryanwadhawanedu@gmail.com",
};

createUser(user);

createUser({ name: "Aaryan", isPaid: false });

// ----------------------------------------------------------------------

// Func. returning a object
function createCourse(): { name: string; price: number } {
  return { name: "Aaryan Wadhawan", price: 399 };
}

const courseObj = createCourse();
console.log(courseObj);

// -----------------------------------------------------------------------

type notes = {
  readonly _id: number;
  theme?: string;
  heading: string;
  tags: Array<string>;
  description: string;
  sign: string;
};

const myNote = {
  _id: 197,
  heading: "When Life Becomes Disaster...",
  tags: ["Literature", "Dead Poet Society", "Charles Dickens"],
  description: "Dead Person Tales - Aaryan Wadhawan",
  sign: "AARYAN WADHAWAN",
};

function createNote(note: notes): boolean {
  if (note) {
    // note info provided
    return true;
  }
  // note info not provided
  return false;
}

console.log(createNote(myNote));

// ----------------------------------------------------------------------

type cardNumber = {
  uniqueNumber: number;
};

type cardExpiry = {
  expiry: string;
};

type cardDetails = cardNumber &
  cardExpiry & {
    cvv: number;
  };

// const task: string[] | number[] = [1,2,3,3]
// const task: (string | number)[] = ['aaryan', 'wadhawan', 197]

// -------------------------------------------------------------------------

// Tuple
const userDataTwo: [number, string, boolean] = [197, "22BCY10197", true];
userDataTwo.push("aaryanwadhawanedu@gmail.com");
console.log(userDataTwo);

export {};

// --------------------------------------------------------------------------

// enums
enum seatType {
  window = "window",
  aisle = "aisle",
  cabinSeat = "cabinSeat",
}

console.log(typeof seatType.window);
