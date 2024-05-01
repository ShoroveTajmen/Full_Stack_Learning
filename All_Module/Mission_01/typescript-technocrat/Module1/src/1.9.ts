{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "srvi",
    age: 50,
    gender: "female",
    contactNo: "01731888888",
    address: "dhaka",
  };
  const student2: Student = {
    name: "taj",
    age: 50,
    gender: "female",
    contactNo: "01731888888",
    address: "ctg",
  };

  //type Alias also used for string , boolean
  type UserName = string;
  const userName: UserName = "srvi";
  type IsAdmin = boolean;
  const isAdmin: IsAdmin = true;

  //type Alias for function
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  //
}
