import Tiger from './Tiger.js';
import Wolf from './Wolf.js';
 

const tiger = new Tiger();
const wolf = new Wolf();
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
console.log(`Tiger's strength is ${Tiger.strength}`);
// fighting(tiger);