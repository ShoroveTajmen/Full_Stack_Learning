{
  //
  // nullable types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("There is nothing to search");
    }
  };
  searchName();

  //unknown types
  const getSpeedMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    }
    if (typeof value === "string") {
      const [res, unit] = value.split(" ");
      console.log(res);
      const convertedSpeed = parseFloat(res * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };
  getSpeedMeterPerSecond(`1000 kmh^-1`);

  //never
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError("error occured");
  //
}
