{
  //spread operator
  //rest operator
  //destructuring

  //learn spread operator

  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["Tonmoy", "Nahid", "Rahat"];
  bros1.push(...bros2);

  const mentors1 = {
    typescript: "srvi",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "firoz",
    next: "tonmoy",
    cloud: "nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //learn rest operator
  const greetFriends = (...frinds: string[]) => {
    frinds.forEach((frind: string) => console.log(`Hi ${frind}`));
  };
  greetFriends("abul", "kabul", "jabul", "labul");
}
