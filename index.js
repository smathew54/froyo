console.log("am i connect?");

//vanilla,vanilla,vanilla,strawberry,coffee,coffee,vanilla,vanilla,vanilla,strawberry,coffee,coffee
let flavors = prompt("Please enter your flavors here: ");

console.log(flavors);

//flavorList = ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"]
const flavorCounter = (flavors) => {
  const obj = {};
  console.log("am i coding?");
  let flavorList = flavors.split(",");
  console.log(flavorList);
  for (let i = 0; i < flavorList.length; i++) {
    console.log(flavorList[i]);
    if (flavorList[i] in Object.keys(obj)) {
      obj[flavorList[i]] += 1;
    } else {
      //obj.flavorList[i] = 1;
      obj[flavorList[i]] = i + 1;
    }

    console.log(obj);
  }
};

console.log(flavorCounter(flavors));

//for (const key in dinner) {
//    console.log(`${key}: $ ${dinner[key]}`);
