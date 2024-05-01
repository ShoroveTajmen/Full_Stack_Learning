{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 15;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  //ternary operator
  const isAdult = age >= 18 ? "adult" : "not adult";
  //   console.log({ isAdult });

  //nullish coalescing operator => we used this when we take the dcsn based on null / undefined
  //   const isAuthenticate = null;
  const isAuthenticate = "";

  const res1 = isAuthenticate ?? "Guest";
  const res2 = isAuthenticate ? isAuthenticate : "Guest";
  console.log({ res1 }, { res2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "srvi",
    address: {
      city: "ctg",
      road: "awesome road",
      presentAddress: "ctg town",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent address";
  console.log({ permanentAddress });
  //
}
