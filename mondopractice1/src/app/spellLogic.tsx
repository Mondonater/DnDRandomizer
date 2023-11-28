//logic for the DnD randomizer as it relates to spells or spellmaking.

//TODO: get this and other code logic separated into neater parts for easier maintenance.
//for the time being it's just a visual reference.

// generates a random spell of ANY level if unparameterized, or one of the chosen level if given args.
function getRandomSpell(spellLevel: number){
  let randomizedValue: number = null;
  let outputString: string = null;
  let generatedSpell: string = null;
  switch(spellLevel){
    case 0:
      randomizedValue = Math.floor(Math.random() * cantripSpellArray.length);
      generatedSpell = cantripSpellArray[randomizedValue];

      //playerCharacter.cantrips.push(generatedSpell);
      outputString = "Cantrip: " + generatedSpell;
      break;
    case 1:
      randomizedValue = Math.floor(Math.random() * levelOneSpellArray.length);
      generatedSpell = levelOneSpellArray[randomizedValue];
      playerCharacter.first_level_spells.push(generatedSpell);
      outputString = "First Level Spell: " + generatedSpell;
      break;
    case 2:
      randomizedValue = Math.floor(Math.random() * levelTwoSpellArray.length);
      generatedSpell = levelTwoSpellArray[randomizedValue];
      playerCharacter.second_level_spells.push(generatedSpell);
      outputString = "Second Level Spell: " + generatedSpell;
      break;
    case 3:
      randomizedValue = Math.floor(Math.random() * levelThreeSpellArray.length);
      outputString = "Third Level Spell: " +  levelThreeSpellArray[randomizedValue];
      break;
    case 4:
      randomizedValue = Math.floor(Math.random() * levelFourSpellArray.length);
      outputString = "Fourth Level Spell: " +  levelFourSpellArray[randomizedValue];
      break;
    case 5:
      randomizedValue = Math.floor(Math.random() * levelFiveSpellArray.length);
      outputString = "Fifth Level Spell: " + levelFiveSpellArray[randomizedValue];
      break;
    case 6:
      randomizedValue = Math.floor(Math.random() * levelSixSpellArray.length);
      outputString = "Sixth Level Spell: " +  levelSixSpellArray[randomizedValue];
      break;
    case 7:
      randomizedValue = Math.floor(Math.random() * levelSevenSpellArray.length);
      outputString = "Seventh Level Spell: " +  levelSevenSpellArray[randomizedValue];
      break;
    case 8:
      randomizedValue = Math.floor(Math.random() * levelEightSpellArray.length);
      outputString = "Eighth Level Spell: " +  levelEightSpellArray[randomizedValue];
      break;
    case 9:
      randomizedValue = Math.floor(Math.random() * levelNineSpellArray.length);
      outputString = "Ninth Level Spell: " +  levelNineSpellArray[randomizedValue];
      break;
    default:
      //0 - 9 gets determined at random, then we run the function recursively
      let spellLevelIndex = Math.floor(Math.random() * 10);
      outputString = getRandomSpell(spellLevelIndex);
      break;
  }
  if (outputString !== null){
    console.log(playerCharacter);
    return outputString;
  }
}

function addRandomSpelltoPlayer(spellLevel: number, playerSpellList: FullSpellList){
  let randomizedValue: number = null;
  let outputString: string = null;
  let spellAdded: boolean = false;
  //checks for valid range
  switch(spellLevel){
    case 0:
      let spellAdded = false;
      while (!spellAdded){
        randomizedValue = Math.floor(Math.random() * cantripSpellArray.length);
      //output string is the cantrip by name
        outputString = cantripSpellArray[randomizedValue];
        if(!playerCharacter.cantrips.includes(outputString)){
          playerCharacter.cantrips.push(outputString);
          spellAdded = true;
        }
      }
      break;
    case 1:
      spellAdded = false;
      while (!spellAdded){
        randomizedValue = Math.floor(Math.random() * levelOneSpellArray.length);
      //output string is the cantrip by name
        outputString = levelOneSpellArray[randomizedValue];
        if(!playerCharacter.first_level_spells.includes(outputString)){
          playerCharacter.first_level_spells.push(outputString);
          spellAdded = true;
        }
      }
      break;
    case 2:
      spellAdded = false;
      while (!spellAdded){
        randomizedValue = Math.floor(Math.random() * levelTwoSpellArray.length);
      //output string is the cantrip by name
        outputString = levelTwoSpellArray[randomizedValue];
        if(!playerCharacter.second_level_spells.includes(outputString)){
          playerCharacter.second_level_spells.push(outputString);
          spellAdded = true;
        }
      }
      break;
    case 3:
      spellAdded = false;
      while (!spellAdded){
        randomizedValue = Math.floor(Math.random() * levelThreeSpellArray.length);
      //output string is the cantrip by name
        outputString = levelThreeSpellArray[randomizedValue];
        if(!playerCharacter.third_level_spells.includes(outputString)){
          playerCharacter.third_level_spells.push(outputString);
          spellAdded = true;
        }
      }
      break;
    case 4:
      spellAdded = false;
      while (!spellAdded){
        randomizedValue = Math.floor(Math.random() * levelFourSpellArray.length);
      //output string is the cantrip by name
        outputString = levelFourSpellArray[randomizedValue];
        if(!playerCharacter.fourth_level_spells.includes(outputString)){
          playerCharacter.fourth_level_spells.push(outputString);
          spellAdded = true;
        }
      }
      break;
    case 5:
      spellAdded = false;
      while (!spellAdded){
        randomizedValue = Math.floor(Math.random() * levelFiveSpellArray.length);
      //output string is the cantrip by name
        outputString = levelFiveSpellArray[randomizedValue];
        if(!playerCharacter.fifth_level_spells.includes(outputString)){
          playerCharacter.fifth_level_spells.push(outputString);
          spellAdded = true;
        }
      }
      break;
    case 6:
      spellAdded = false;
      while (!spellAdded){
        randomizedValue = Math.floor(Math.random() * levelSixSpellArray.length);
      //output string is the cantrip by name
        outputString = levelSixSpellArray[randomizedValue];
        if(!playerCharacter.sixth_level_spells.includes(outputString)){
          playerCharacter.sixth_level_spells.push(outputString);
          spellAdded = true;
        }
      }
      break;
    case 7:
      spellAdded = false;
      while (!spellAdded){
        randomizedValue = Math.floor(Math.random() * levelSevenSpellArray.length);
      //output string is the cantrip by name
        outputString = levelSevenSpellArray[randomizedValue];
        if(!playerCharacter.seventh_level_spells.includes(outputString)){
          playerCharacter.seventh_level_spells.push(outputString);
          spellAdded = true;
        }
      }
      break;
    case 8:
      spellAdded = false;
      while (!spellAdded){
        randomizedValue = Math.floor(Math.random() * levelEightSpellArray.length);
      //output string is the cantrip by name
        outputString = levelEightSpellArray[randomizedValue];
        if(!playerCharacter.eighth_level_spells.includes(outputString)){
          playerCharacter.eighth_level_spells.push(outputString);
          spellAdded = true;
        }
      }
      break;
    case 9:
      spellAdded = false;
      while (!spellAdded){
        randomizedValue = Math.floor(Math.random() * levelNineSpellArray.length);
      //output string is the cantrip by name
        outputString = levelNineSpellArray[randomizedValue];
        if(!playerCharacter.ninth_level_spells.includes(outputString)){
          playerCharacter.ninth_level_spells.push(outputString);
          spellAdded = true;
        }
      }
      break;
    default:
      //0 - 9 gets determined at random, then we run the function recursively
      let spellLevelIndex = Math.floor(Math.random() * 10);
      outputString = addRandomSpelltoPlayer(spellLevelIndex, playerSpellList);
      break;
  }
}

//if spellLevel is -1, the default, the method generates an unparameterized getRandomSpell().
//if spellLevel is anything else, the method generates based on that spell level.
//-1 should never happen outside of the default case, it's just there to not be 0 - 9
//of note, this method doesn't currently push to the player's spell lists individually, just to this mish-mash
function getMultipleSpells(amountToGenerate: number, spellLevel: number = -1){
  let generatedSpellArray: string[] = [];
  let spellsRemaining: number = amountToGenerate;
  while (spellsRemaining > 0){
    if(spellLevel === -1){
      let generatedSpell = getRandomSpell();
      if (!generatedSpellArray.includes(generatedSpell)){
        generatedSpellArray.push(generatedSpell);
        spellsRemaining--;
      }
    }
    else{
      let generatedSpell = getRandomSpell(spellLevel);
      if (!generatedSpellArray.includes(generatedSpell)){
        generatedSpellArray.push(generatedSpell);
        spellsRemaining--;
      }
    }
  }
  return generatedSpellArray;
}

