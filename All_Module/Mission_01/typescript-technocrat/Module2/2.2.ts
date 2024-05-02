{
  //
  // interface
  //we can use type alias for premitive type also for non-premitive
  // we can use interface only for non-premitive type like object

  //type alias
  type User1 = {
    name: string;
    age: number;
  };
  //if we want to expand the properties using type alias
  type UserWithRole1 = User1 & { role: string };
  const user1: UserWithRole1 = {
    name: "Person",
    age: 122,
    role: "manager",
  };

  //lets declare use type interface
  //if we want to expand the properties using type interface
  interface User2 {
    name: string;
    age: number;
  }
  interface UserWithRole2 extends User2 {
    role: string;
  }
  const user2: UserWithRole2 = {
    name: "Person",
    age: 122,
    role: "manager",
  };

  //type interface for array
  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber: Roll1 = [1, 2, 3];

  //interface in function

  //using type alias
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  //using interface
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
