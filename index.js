console.log("am i connect?");

//vanilla,vanilla,vanilla,strawberry,coffee,coffee
let flavors = prompt("Please enter your flavors here: ");

console.log(flavors);

//flavorList = ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"]
const flavorCounter = (flavors) => {
  const obj = {};
  console.log("am i coding?");
  let flavorList = flavors.split(",");
  console.log(flavorList);
  for (const flavor of flavorList) {
    console.log(flavorList[flavor]);
    if (obj[flavor] ) {
      //console.log(flavorList[i])
      obj[flavor] += 1;
      console.log(obj);
    } else {
      console.log(flavor)
      obj[flavor] =  1;
      console.log(obj);
    }

    console.log(obj);
  }
};

console.log(flavorCounter(flavors));

//for (const key in dinner) {
//    console.log(`${key}: $ ${dinner[key]}`);
