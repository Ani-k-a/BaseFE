const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
      for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
      } 
      this.potions.push(newPotion);
    },
    removePotion(potionName) {
        for (i = 0; i < this.potions.length; i += 1) {
            let potion = this.potions[i];       
        if (potion.name === potionName) {
          this.potions.splice(i, 1);
        }
        }
        return `Potion ${potionName} is not in inventory!`;
    },
    updatePotionName(oldName, newName) {
       for (potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
       return `Potion ${oldName} is not in inventory!`;  
    },
    // Change code above this line
  };
  atTheOldToad.removePotion('Dragon breath');
  atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
  atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');


  