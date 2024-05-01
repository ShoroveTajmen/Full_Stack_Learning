// Reference Type --> Object

const user: {
  //   company: "Programming Hero"; //type --> literal types
  readonly company: string; // when only read is possible not write
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "srvi",
  lastName: "tajmen",
  isMarried: true,
};
