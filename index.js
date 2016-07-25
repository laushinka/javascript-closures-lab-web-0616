const app = "I don't do much."

function bumpCounter() {
  var counter = 0;
  function addBump(){
    return counter += 1
  }
  function getBumps(){
    return counter
  }
  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType) {
  return function(dev) {
    return {animalType: animalType, deadlyDevice: dev}
  }
  // return fn;
}

sharkCreator = createAnimal("Shark");
sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
sharkWithFrickinCannon = sharkCreator("Cannon")
