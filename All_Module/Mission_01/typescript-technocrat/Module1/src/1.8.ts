// destructuring

{
  const user = {
    id: 345,
    name: {
      firstName: "srvi",
      middleName: "tajmen",
      lastName: "taj",
    },
    contactNO: "0170000000",
    address: "Uganda",
  };

  //object destructuring
  const {
    contactNO,
    name: { middleName: midName },
  } = user;

  //array destructuring
  const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoeba"];
  const [, , bestfriend, ...rest] = myFriends;
}
