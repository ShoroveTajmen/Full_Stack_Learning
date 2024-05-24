//create module
const { a, add } = require("./local-1");
const { a: a2, add: add2 } = require("./local-2");
console.log(add2(2, 3, 5));

// built-in-modules
const path = require("path");
console.log(
  path.dirname(
    "C:/A_Learning_2023/PH_Level02/All_Module/Mission_02/Module_07/Learning_node/index.js"
  )
);
