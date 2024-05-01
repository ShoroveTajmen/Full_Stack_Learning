{
  //
  // union types => concept is that hoy eta hbe na hoy oita hobe

  // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
  // type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

  // type Developer = FrontendDeveloper | FullStackDeveloper
  // const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

  // type User = {
  //     name: string;
  //     email?: string;
  //     gender: 'male' | 'female';
  //     bloodGroup: 'O+' | 'A+' | 'AB+';
  // }

  // const user1 : User = {
  //     name: 'srvi',
  //     email: "@gmial.com",
  //     gender: 'female',
  //     bloodGroup: 'A+'
  // }

  //intersection means common property

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation1: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}
