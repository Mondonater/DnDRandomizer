'use client'; //a lot of things seem to break if you're in "server mode", which is what it defaults to. This sets us up as a client, I believe.
import React, { useEffect, useState } from 'react'; //this is for hooks, used to maintain state of things in functional components.
import { Component } from 'react'; //this is for class components.
import ReactDOM from "react-dom/client"; //full disclosure, I'm not sure what this does yet
import axios from 'axios';
import Select from 'react-select';

//this is a functional Component. Components are the bread-and-butter of React.
export default function Home() {

  //this is the useState Hook, which we've imported. This allows us to keep track of data on the virtual DOM, kind of like getElementById() in regular JS.
  //for the sake of example, the 'default' useState() method as defined on the React website looks like this:
  //
  //  const [state, setState] = useState(initialState);
  //

const [buttonText1, setButtonText1] = useState("");
const [buttonText2, setButtonText2] = useState("");
const [buttonText3, setButtonText3] = useState("");
const [buttonText4, setButtonText4] = useState("");
const [buttonText5, setButtonText5] = useState("");
const [buttonText6, setButtonText6] = useState("");
const [buttonText7, setButtonText7] = useState("");

//these are for keeping track of the Select data
const [selectedStatGeneratorMethod, setSelectedStatGeneratorMethod] = useState("3d6");

const [generatorButtonColor1, setgeneratorButtonColor1] = useState("hsl(60, 50%, 75%)");
const [generatorButtonColor2, setgeneratorButtonColor2] = useState("hsl(60, 50%, 75%)");
const [generatorButtonColor3, setgeneratorButtonColor3] = useState("hsl(60, 50%, 75%)");
const [generatorButtonColor4, setgeneratorButtonColor4] = useState("hsl(60, 50%, 75%)");
const [generatorButtonColor5, setgeneratorButtonColor5] = useState("hsl(60, 50%, 75%)");
const [generatorButtonColor6, setgeneratorButtonColor6] = useState("hsl(60, 50%, 75%)");
const [generatorButtonColor7, setgeneratorButtonColor7] = useState("hsl(60, 50%, 75%)");

const [generatorButtonShadow1, setgeneratorButtonShadow1] = useState("inset 0 2px 2px hsla(0, 0%, 0%, 0.2)");
const [generatorButtonShadow2, setgeneratorButtonShadow2] = useState("inset 0 2px 2px hsla(0, 0%, 0%, 0.2)");
const [generatorButtonShadow3, setgeneratorButtonShadow3] = useState("inset 0 2px 2px hsla(0, 0%, 0%, 0.2)");
const [generatorButtonShadow4, setgeneratorButtonShadow4] = useState("inset 0 2px 2px hsla(0, 0%, 0%, 0.2)");
const [generatorButtonShadow5, setgeneratorButtonShadow5] = useState("inset 0 2px 2px hsla(0, 0%, 0%, 0.2)");
const [generatorButtonShadow6, setgeneratorButtonShadow6] = useState("inset 0 2px 2px hsla(0, 0%, 0%, 0.2)");
const [generatorButtonShadow7, setgeneratorButtonShadow7] = useState("inset 0 2px 2px hsla(0, 0%, 0%, 0.2)");

//these hooks are how we're taking things from our initial axios queries, to my understanding. Don't treat these as part of the player character.
const [cantrips, setCantrips] = useState([]);
const [levelOneSpells, setLevelOneSpells] = useState([]);
const [levelTwoSpells, setLevelTwoSpells] = useState([]);
const [levelThreeSpells, setLevelThreeSpells] = useState([]);
const [levelFourSpells, setLevelFourSpells] = useState([]);
const [levelFiveSpells, setLevelFiveSpells] = useState([]);
const [levelSixSpells, setLevelSixSpells] = useState([]);
const [levelSevenSpells, setLevelSevenSpells] = useState([]);
const [levelEightSpells, setLevelEightSpells] = useState([]);
const [levelNineSpells, setLevelNineSpells] = useState([]);
const [monsters, setMonsters] = useState([]);
const [generatedMonsterBuffer, setGeneratedMonsterBuffer] = useState([]);
const [magicItems, setMagicItems] = useState([]);
const [inventoryItems, setInventoryItems] = useState([]);
const [characterClass, setCharacterClass] = useState([]);
const [characterRace, setCharacterRace] = useState([]);

//this is supposed to keep track of the player character's spell list after generation, in case for example the player wants to add a new spell later.
const [playerCharacterCantripArray, setPlayerCharacterCantripArray] = useState([]);
const [playerCharacterFirstLevelSpellArray, setPlayerCharacterFirstLevelSpellArray] = useState([]);
const [playerCharacterSecondLevelSpellArray, setPlayerCharacterSecondLevelSpellArray] = useState([]);
const [playerCharacterThirdLevelSpellArray, setPlayerCharacterThirdLevelSpellArray] = useState([]);
const [playerCharacterFourthLevelSpellArray, setPlayerCharacterFourthLevelSpellArray] = useState([]);
const [playerCharacterFifthLevelSpellArray, setPlayerCharacterFifthLevelSpellArray] = useState([]);
const [playerCharacterSixthLevelSpellArray, setPlayerCharacterSixthLevelSpellArray] = useState([]);
const [playerCharacterSeventhLevelSpellArray, setPlayerCharacterSeventhLevelSpellArray] = useState([]);
const [playerCharacterEighthLevelSpellArray, setPlayerCharacterEighthLevelSpellArray] = useState([]);
const [playerCharacterNinthLevelSpellArray, setPlayerCharacterNinthLevelSpellArray] = useState([]);

const characterRaceArray = [];
const characterClassArray = [];
const characterStatArray = [];
const cantripSpellArray = [];
const levelOneSpellArray = [];
const levelTwoSpellArray = [];
const levelThreeSpellArray = [];
const levelFourSpellArray = [];
const levelFiveSpellArray = [];
const levelSixSpellArray = [];
const levelSevenSpellArray = [];
const levelEightSpellArray = [];
const levelNineSpellArray = [];
const monsterArray = [];
const inventoryItemsArray = [];
const magicItemsArray = [];

//this is for UI convenience purposes.
const crListArray = [0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

//structured with slight whitespace formatting for ease of human legibility
//of note, these are spell SLOTS, not spells known. Use this for what spell levels you can get access to, maybe

const highestSlotAvailable = {
  first_level: 1,
  second_level: 1,
  third_level: 2,
  fourth_level: 2,
  fifth_level: 3,
  sixth_level: 3,
  seventh_level: 4,
  eighth_level: 4,
  ninth_level: 5,
  tenth_level: 5,
  eleventh_level: 6,
  twelfth_level: 6,
  thirteenth_level: 7,
  fourteenth_level: 7,
  fifteenth_level: 8,
  sixteenth_level: 8,
  seventeenth_level: 9,
  eighteenth_level: 9,
  nineteenth_level: 9,
  twentieth_level: 9
}

//for the time being, our dataset is incapable of generating Artificers.
//maybe add them in later, but for now we get the core functionality.
const characterClasses = {
  barbarian: {hit_die: 12, 
              primary_attribute: ["STR"],
              secondary_attribute: ["DEX", "CON"], 
              class_has_casting: false,
              can_use_shield: true,
              save_proficiencies: ["STR", "CON"],
              armor_proficiencies: ["light", "medium", "unarmored_defense"],
              skill_proficiencies: ["animal_handling", "athletics", "intimidation", "nature", "perception", "survival"]},
  bard: {hit_die: 8, 
          primary_attribute: ["CHA"],
          secondary_attribute: ["DEX", "CON"],
          class_has_casting: true,
          save_proficiencies: ["DEX", "CHA"],
          has_unarmored_defense: false },
  cleric: {hit_die: 8, 
            primary_attribute: ["WIS"],
            secondary_attribute: ["STR", "DEX", "CON"],
            class_has_casting: true,
            save_proficiencies: ["WIS", "CHA"],
            has_unarmored_defense: false },
  druid: {hit_die: 8, 
          primary_attribute: ["WIS"],
          secondary_attribute: ["DEX", "CON"],
          class_has_casting: true,
          save_proficiencies: ["INT", "WIS"],
          has_unarmored_defense: false },
  fighter: {hit_die: 10, 
            primary_attribute: ["STR", "DEX"],
            secondary_attribute: ["DEX", "CON"], 
            class_has_casting: false,
            save_proficiencies: ["DEX", "CON"],
            has_unarmored_defense: false },
  monk: {hit_die: 8, 
          primary_attribute: ["DEX", "WIS"],
          secondary_attribute: ["DEX", "WIS", "CON"],
          class_has_casting: false,
          save_proficiencies: ["STR", "DEX"],
          has_unarmored_defense: true },
  paladin: {hit_die: 10, 
            primary_attribute: ["STR", "CHA"],
            secondary_attribute: ["DEX", "CON"],
            class_has_casting: true,
            save_proficiencies: ["STR", "CON"],
            has_unarmored_defense: false },
  ranger: {hit_die: 10, 
            primary_attribute: ["STR", "WIS"],
            secondary_attribute: ["DEX", "CON"],
            class_has_casting: true,
            save_proficiencies: ["STR", "DEX"],
            has_unarmored_defense: false },
  rogue: {hit_die: 8, 
            primary_attribute: ["DEX"],
            secondary_attribute: ["CON"],
            class_has_casting: false,
            save_proficiencies: ["DEX", "INT"],
            has_unarmored_defense: false },
  sorcerer: {hit_die: 6, 
              primary_attribute: ["CHA"],
              secondary_attribute: ["CON"], 
              class_has_casting: true,
              save_proficiencies: ["CON", "CHA"],
              has_unarmored_defense: false },
  warlock: {hit_die: 8, 
            primary_attribute: ["CHA"],
            secondary_attribute: ["CON"],
            class_has_casting: true,
            save_proficiencies: ["WIS", "CHA"],
            has_unarmored_defense: false },
  wizard: {hit_die: 6, 
            primary_attribute: ["INT"],
            secondary_attribute: ["CON"],
            class_has_casting: true,
            save_proficiencies: ["INT", "WIS"],
            has_unarmored_defense: false }
}

//we need this to format a full spell list, because even if it's empty, we need SOMETHING.
interface FullSpellList {
  cantrips: string[];
  first_level_spells: string[];
  second_level_spells: string[];
  third_level_spells: string[];
  fourth_level_spells: string[];
  fifth_level_spells: string[];
  sixth_level_spells: string[];
  seventh_level_spells: string[];
  eighth_level_spells: string[];
  ninth_level_spells: string[];
}

//for the sake of simplicity, let's categorize unarmored defense as a type of armor
interface ArmorCalculation {
  equipped_armor: string;
  stats: Array<number>;
}

//I know very well that this is not the idea way to do this; let's try it first and then work it out.
const monsterBufferArray = [];

//make a "canon" player object for testing purposes
//disregard multiclassing for the time being
const playerCharacter = {
  name: "Tests Jackson",
  hit_points: null,
  level: null,
  armor_class: null,
  equipped_armor: null,
  proficiency_bonus: null,
  save_proficiencies: null,
  class: null,
  subclass: null,
  race: null,
  subrace: null,
  //these are default 'safe' values for most characters, to be overridden by the process of making a full character.
  primary_attribute: ["STR", "DEX"],
  secondary_attribute: ["DEX", "CON"],
  stats: [null, null, null, null, null, null],
  magic_items: [],
  inventory: [],
  numberOfCantrips: null,
  isHalfCaster: false,
  cantrips: [],
  first_level_spells: [],
  second_level_spells: [],
  third_level_spells: [],
  fourth_level_spells: [],
  fifth_level_spells: [],
  sixth_level_spells: [],
  seventh_level_spells: [],
  eighth_level_spells: [],
  ninth_level_spells: []
};

const armorTypes = {
  light_armor: {padded: {base_ac: 11}, leather: {base_ac: 11}, studded_leather: {base_ac: 12}},
  medium_armor: {hide: {base_ac: 12}, chain_shirt: {base_ac: 13}, scale_mail: {base_ac: 14}, breastplate: {base_ac: 14}, half_plate: {base_ac: 15}},
  heavy_armor: {ring_mail: {base_ac: 14}, chain_mail: {base_ac: 16}, splint_mail: {base_ac: 17}, plate_mail: {base_ac: 18}}
}

//This function is going to do pretty much everything necessary to make a character. Order is VERY IMPORTANT HERE.
function calculateArmorClass(){

}

//loads and pre-separates the spells by level
useEffect(() => {
  axios
    .get("https://www.dnd5eapi.co/api/spells", { params: { level: 0 }})
    .then((response) => {
      console.log(response.data);
      setCantrips(response.data.results);
    })
    .catch((error) => console.log(error));

  axios
    .get("https://www.dnd5eapi.co/api/spells", { params: { level: 1 }})
    .then((response) => {
      console.log(response.data);
      setLevelOneSpells(response.data.results);
    })
    .catch((error) => console.log(error));

  axios
    .get("https://www.dnd5eapi.co/api/spells", { params: { level: 2 }})
    .then((response) => {
      console.log(response.data);
      setLevelTwoSpells(response.data.results);
    })
    .catch((error) => console.log(error));

    axios
    .get("https://www.dnd5eapi.co/api/spells", { params: { level: 3 }})
    .then((response) => {
      console.log(response.data);
      setLevelThreeSpells(response.data.results);
    })
    .catch((error) => console.log(error));

    axios
    .get("https://www.dnd5eapi.co/api/spells", { params: { level: 4 }})
    .then((response) => {
      console.log(response.data);
      setLevelFourSpells(response.data.results);
    })
    .catch((error) => console.log(error));

    axios
    .get("https://www.dnd5eapi.co/api/spells", { params: { level: 5 }})
    .then((response) => {
      console.log(response.data);
      setLevelFiveSpells(response.data.results);
    })
    .catch((error) => console.log(error));

    axios
    .get("https://www.dnd5eapi.co/api/spells", { params: { level: 6 }})
    .then((response) => {
      console.log(response.data);
      setLevelSixSpells(response.data.results);
    })
    .catch((error) => console.log(error));

    axios
    .get("https://www.dnd5eapi.co/api/spells", { params: { level: 7 }})
    .then((response) => {
      console.log(response.data);
      setLevelSevenSpells(response.data.results);
    })
    .catch((error) => console.log(error));

    axios
    .get("https://www.dnd5eapi.co/api/spells", { params: { level: 8 }})
    .then((response) => {
      console.log(response.data);
      setLevelEightSpells(response.data.results);
    })
    .catch((error) => console.log(error));

    axios
    .get("https://www.dnd5eapi.co/api/spells", { params: { level: 9 }})
    .then((response) => {
      console.log(response.data);
      setLevelNineSpells(response.data.results);
    })
    .catch((error) => console.log(error));
}, []);

useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/monsters")
      .then((response) => {
        console.log(response.data);
        setMonsters(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/magic-items")
      .then((response) => {
        console.log(response.data);
        setMagicItems(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/equipment")
      .then((response) => {
        console.log(response.data);
        setInventoryItems(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/classes")
      .then((response) => {
        console.log(response.data);
        setCharacterClass(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/races")
      .then((response) => {
        console.log(response.data);
        setCharacterRace(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);


//this takes the results from the axios queries and puts them into arrays. They can then be used client-side without any hassle.
cantrips.map((data) => { cantripSpellArray.push(data.name); });
levelOneSpells.map((data) => { levelOneSpellArray.push(data.name); });
levelTwoSpells.map((data) => { levelTwoSpellArray.push(data.name); });
levelThreeSpells.map((data) => { levelThreeSpellArray.push(data.name); });
levelFourSpells.map((data) => { levelFourSpellArray.push(data.name); });
levelFiveSpells.map((data) => { levelFiveSpellArray.push(data.name); });
levelSixSpells.map((data) => { levelSixSpellArray.push(data.name); });
levelSevenSpells.map((data) => { levelSevenSpellArray.push(data.name); });
levelEightSpells.map((data) => { levelEightSpellArray.push(data.name); });
levelNineSpells.map((data) => { levelNineSpellArray.push(data.name); });
monsters.map((data) => { monsterArray.push(data.name); });
magicItems.map((data) => { magicItemsArray.push(data.name); });
inventoryItems.map((data) => { inventoryItemsArray.push(data.name); });
characterClass.map((data) => { characterClassArray.push(data.name); });
characterRace.map((data) => { characterRaceArray.push(data.name); })

function rollIndividualDice(numberOfDice: number, sizeOfDice: number){
  let timesRolled: number = 0;
  let numberToRoll: number = numberOfDice;
  let resultingRolls: number[] = [];
  while(timesRolled < numberToRoll){
    resultingRolls.push(Math.floor((Math.random() * sizeOfDice + 1)));
    timesRolled++;
  }
  return resultingRolls;
}

function rollSumOfDice(numberOfDice: number, sizeOfDice: number){
  let timesRolled: number = 0;
  let numberToRoll: number = numberOfDice;
  let resultingRolls: number = 0;
  while(timesRolled < numberToRoll){
    resultingRolls += (Math.floor((Math.random() * sizeOfDice + 1)));
    timesRolled++;
  }
  return resultingRolls;
}

function removeRepeats(inputString: string[]){
    let placeholderArray: string[] = inputString;
    let outputArray: string[] = [];
    //repeats until all elements removed from placeholderArray
    while(placeholderArray.length !== 0){
        let count: number = 0;
        //iterate through array, looking for matches to placeholderArray[0]
        for(let i: number = 0; i < placeholderArray.length; i++){
            if(placeholderArray[0] === placeholderArray[i]){
                count++;
                if(i !== 0){
                    delete placeholderArray[i];
                }
            }
        }
        //after we've looked at every element, we remove the extras.
        placeholderArray = placeholderArray.filter( Boolean );
        //add the total count of our first position element to the result string.
        outputArray.push(`${count}x ` + placeholderArray[0]);
        //now that we're done with it, we remove the first element.
        placeholderArray.shift();
    }
    return outputArray;
}

//iterates over an array and removes each element. Returns an empty string.
function clearArray(inputArray: any[]){
    while(inputArray.length !== 0){
        inputArray.pop();
    }
}

function sortArrayDescending(inputArray: number[]) {
  let outputArray = inputArray.sort((a, b) => b - a);
  return outputArray;
}

function sortArrayAscending(inputArray: number[]) {
  let outputArray = inputArray.sort((a, b) => a - b);
  return outputArray;
}

//this is a react Function Component
//to my understanding, this takes an existing array and puts it into formatted markup
function StructuredArray(inputArray: string[]){
  const listItems = inputArray.map((listElement) => <li key={listElement}> {listElement} </li>);
  return <ul> {listItems} </ul>;
}

//this needs an input that assuredly has 10 separate arrays in it... we'll use the interface we made earlier
//incidentally, for clarity this is to be a React Component
// function StructuredSpellList(playerSpellList: FullSpellList){

// }

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

//start with simple version first and then improve the logic from there
/*
this needs to do a specific set of things:
1.) it needs to generate a number of spells per spell level equal to a parameter given.
2.) it needs to double-check that a spell is not already in the list it's adding to. [this is accomplished by the generator method, don't worry about this]
3.) it needs to do DIFFERENT things based on player LEVEL, since e.g. a first level character doesn't have access to/need second level spells.
4.) it needs to do DIFFERENT things based on player CLASS, since different classes get e.g. different numbers of cantrips.

What #3 and #4 mean together is that we need to pass the player's class and level into the function as parameters, and from there the function
can look up the existing tables to work with as we have defined.

For now, we're going to ignore half-casters and the like.
*/

function generateSpellList(playerClass: string = "Sorcerer", playerLevel: number = 1){
  //this method is going to just use the baked-in playerCharcter object for now.
  //first, we have to check for how many cantrips a given class gets.
}

function getRandomMonster(amountToGenerate: number){
  let outputArray: string[] = [];
  for(let i = 0; i < amountToGenerate; i++){
  let randomizedValue = Math.floor(Math.random() * monsterArray.length);
  outputArray.push(monsterArray[randomizedValue]);
  }
  return removeRepeats(outputArray);
}

//SPECIAL NOTE!
//the below function is an awful lot neater and more effective than anything we currently have running, but it doesn't seem to want to cooperate
function getRandomMonsterByCR(amountToGenerate: number, challengeRating: number){
  let methodGeneratedMonsters: string[] = [];
  let outputMonster: string = "ERROR";
  let randomizedValue: number = 0;
  for(let i = 0; i < amountToGenerate; i++){
    axios.get("https://www.dnd5eapi.co/api/monsters", { params: { challenge_rating: challengeRating }})
    .then((response) => {
      //this sticks the array of CR Whatever monsters into generatedMonsters
        randomizedValue = Math.floor(Math.random() * response.data.results.length);
        outputMonster = response.data.results[randomizedValue].name;
        setGeneratedMonsterBuffer((generatedMonsterBuffer)=> [generatedMonsterBuffer, outputMonster]);
      })
      .catch((error) => {console.log(error)});
  }
}

function getRandomMagicItem(amountToGenerate: number){
  let outputArray: string = [];
  for(let i = 0; i < amountToGenerate; i++){
  let randomizedValue = Math.floor(Math.random() * magicItemsArray.length);
  outputArray.push(magicItemsArray[randomizedValue]);
  }
  return removeRepeats(outputArray);
}

function getRandomInventoryItem(amountToGenerate: number){
  let outputArray: string = [];
  for(let i = 0; i < amountToGenerate; i++){
  let randomizedValue = Math.floor(Math.random() * inventoryItemsArray.length);
  outputArray.push(inventoryItemsArray[randomizedValue]);
  }
  return removeRepeats(outputArray);
}

// function addInventoryItem(){
//   let randomizedValue = Math.floor(Math.random() * inventoryItemsArray.length);
//   playerCharacter.inventory.push(inventoryItemsArray[randomizedValue]);
// }

function getRandomClass(){
  let randomizedValue = Math.floor(Math.random() * characterClassArray.length);
  return characterClassArray[randomizedValue];
}

// function setPlayerClass(){
//   let randomizedValue = Math.floor(Math.random() * characterClassArray.length);
//   playerCharacter.class = randomizedValue;
// }

function getCharacterStats(generatorMethod: string, useSmart: boolean = false, useTashasRules: boolean = false){
  debugger
  let finalResult: number[] = [0, 0, 0, 0, 0, 0];
  let generatedStats: number[] = [0, 0, 0, 0, 0, 0];
  let usingSmartGeneration: boolean = useSmart;
  let formattedResult: string[] = ["STR: ", "DEX: ", "CON: ", "INT: ", "WIS: ", "CHA: "];
  switch(generatorMethod){
    case "3d6":
        generatedStats = [0, 0, 0, 0, 0, 0];
        for (let i = 0; i < generatedStats.length; i++){
        generatedStats[i] = rollSumOfDice(3,6);
        }
      finalResult = generatedStats;
      if(usingSmartGeneration){
        let primaryAttributes = playerCharacter.primary_attribute;
        let secondaryAttributes = playerCharacter.secondary_attribute;
        let sortedFinalResult = sortArrayDescending(finalResult);
        let smartSortedArray: number[] = [0, 0, 0, 0, 0, 0];
        while (sortedFinalResult.length > 0) {
          while (sortedFinalResult.length === 6) {
            let primarySelector: number = Math.floor(Math.random() * primaryAttributes.length);
            let selectedPrimaryAttribute: string = primaryAttributes[primarySelector];
            switch (selectedPrimaryAttribute) {
              case "STR":
                if (smartSortedArray[0] === 0) {
                  smartSortedArray[0] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[0] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "DEX":
                if (smartSortedArray[1] === 0) {
                  smartSortedArray[1] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[1] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "CON":
                if (smartSortedArray[2] === 0) {
                  smartSortedArray[2] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[2] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "INT":
                if (smartSortedArray[3] === 0) {
                  smartSortedArray[3] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[3] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "WIS":
                if (smartSortedArray[4] === 0) {
                  smartSortedArray[4] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[4] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "CHA":
                if (smartSortedArray[5] === 0) {
                  smartSortedArray[5] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[5] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
            }
          }
          while (sortedFinalResult.length === 5) {
            let secondarySelector: number = Math.floor(Math.random() * secondaryAttributes.length);
            let selectedSecondaryAttribute: string = secondaryAttributes[secondarySelector];
            switch (selectedSecondaryAttribute) {
              case "STR":
                if (smartSortedArray[0] === 0) {
                  smartSortedArray[0] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[0] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "DEX":
                if (smartSortedArray[1] === 0) {
                  smartSortedArray[1] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[1] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "CON":
                if (smartSortedArray[2] === 0) {
                  smartSortedArray[2] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[2] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "INT":
                if (smartSortedArray[3] === 0) {
                  smartSortedArray[3] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[3] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "WIS":
                if (smartSortedArray[4] === 0) {
                  smartSortedArray[4] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[4] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "CHA":
                if (smartSortedArray[5] === 0) {
                  smartSortedArray[5] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[5] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
            }
            break;
          }
          while (sortedFinalResult.length > 0 && sortedFinalResult.length < 5) {
            let randomizedIndexValue = Math.floor(Math.random() * smartSortedArray.length);
            if (smartSortedArray[randomizedIndexValue] === 0) {
              smartSortedArray[randomizedIndexValue] = sortedFinalResult[0];
              sortedFinalResult.shift();
            }
          }
        }
        finalResult = smartSortedArray;
      }
      break;
    case "4d6_drop_lowest":
      generatedStats = [0, 0, 0, 0, 0, 0];
      for (let i = 0; i < generatedStats.length; i++){
        let sumOfArray: number = 0;
        let rawResults: number[] = rollIndividualDice(4,6);
        rawResults.sort(function(a, b){return a-b});
        rawResults.shift();
        for (const value of rawResults) {
        sumOfArray += value;
        }
        generatedStats[i] = sumOfArray;
        }
      finalResult = generatedStats;
      if(usingSmartGeneration){
        let primaryAttributes = playerCharacter.primary_attribute;
        let secondaryAttributes = playerCharacter.secondary_attribute;
        let sortedFinalResult = sortArrayDescending(finalResult);
        let smartSortedArray: number[] = [0, 0, 0, 0, 0, 0];
        while (sortedFinalResult.length > 0) {
          while (sortedFinalResult.length === 6) {
            let primarySelector: number = Math.floor(Math.random() * primaryAttributes.length);
            let selectedPrimaryAttribute: string = primaryAttributes[primarySelector];
            switch (selectedPrimaryAttribute) {
              case "STR":
                if (smartSortedArray[0] === 0) {
                  smartSortedArray[0] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[0] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "DEX":
                if (smartSortedArray[1] === 0) {
                  smartSortedArray[1] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[1] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "CON":
                if (smartSortedArray[2] === 0) {
                  smartSortedArray[2] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[2] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "INT":
                if (smartSortedArray[3] === 0) {
                  smartSortedArray[3] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[3] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "WIS":
                if (smartSortedArray[4] === 0) {
                  smartSortedArray[4] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[4] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "CHA":
                if (smartSortedArray[5] === 0) {
                  smartSortedArray[5] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[5] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
            }
          }
          while (sortedFinalResult.length === 5) {
            let secondarySelector: number = Math.floor(Math.random() * secondaryAttributes.length);
            let selectedSecondaryAttribute: string = secondaryAttributes[secondarySelector];
            switch (selectedSecondaryAttribute) {
              case "STR":
                if (smartSortedArray[0] === 0) {
                  smartSortedArray[0] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[0] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "DEX":
                if (smartSortedArray[1] === 0) {
                  smartSortedArray[1] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[1] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "CON":
                if (smartSortedArray[2] === 0) {
                  smartSortedArray[2] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[2] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "INT":
                if (smartSortedArray[3] === 0) {
                  smartSortedArray[3] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[3] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "WIS":
                if (smartSortedArray[4] === 0) {
                  smartSortedArray[4] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[4] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "CHA":
                if (smartSortedArray[5] === 0) {
                  smartSortedArray[5] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[5] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
            }
            break;
          }
          while (sortedFinalResult.length > 0 && sortedFinalResult.length < 5) {
            let randomizedIndexValue = Math.floor(Math.random() * smartSortedArray.length);
            if (smartSortedArray[randomizedIndexValue] === 0) {
              smartSortedArray[randomizedIndexValue] = sortedFinalResult[0];
              sortedFinalResult.shift();
            }
          }
        }
        finalResult = smartSortedArray;
      }
      break;
    case "point_buy":
      generatedStats = [8, 8, 8, 8, 8, 8];
      let availablePoints: number = 27;
      while(availablePoints > 0){
        let i = Math.floor(Math.random() * 6);
        if (generatedStats[i] < 13) {
          generatedStats[i] ++;
          availablePoints --;
        }
        else if((generatedStats[i] == (13 || 14)) && availablePoints >= 2){
          generatedStats[i] ++;
          availablePoints -= 2;
        }
      }
      finalResult = generatedStats;
      if(usingSmartGeneration){
        let primaryAttributes = playerCharacter.primary_attribute;
        let secondaryAttributes = playerCharacter.secondary_attribute;
        let sortedFinalResult = sortArrayDescending(finalResult);
        let smartSortedArray: number[] = [0, 0, 0, 0, 0, 0];
        while (sortedFinalResult.length > 0) {
          while (sortedFinalResult.length === 6) {
            let primarySelector: number = Math.floor(Math.random() * primaryAttributes.length);
            let selectedPrimaryAttribute: string = primaryAttributes[primarySelector];
            switch (selectedPrimaryAttribute) {
              case "STR":
                if (smartSortedArray[0] === 0) {
                  smartSortedArray[0] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[0] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "DEX":
                if (smartSortedArray[1] === 0) {
                  smartSortedArray[1] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[1] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "CON":
                if (smartSortedArray[2] === 0) {
                  smartSortedArray[2] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[2] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "INT":
                if (smartSortedArray[3] === 0) {
                  smartSortedArray[3] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[3] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "WIS":
                if (smartSortedArray[4] === 0) {
                  smartSortedArray[4] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[4] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "CHA":
                if (smartSortedArray[5] === 0) {
                  smartSortedArray[5] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[5] += 2;
                  }
                  sortedFinalResult.shift();
                }
                break;
            }
          }
          while (sortedFinalResult.length === 5) {
            let secondarySelector: number = Math.floor(Math.random() * secondaryAttributes.length);
            let selectedSecondaryAttribute: string = secondaryAttributes[secondarySelector];
            switch (selectedSecondaryAttribute) {
              case "STR":
                if (smartSortedArray[0] === 0) {
                  smartSortedArray[0] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[0] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "DEX":
                if (smartSortedArray[1] === 0) {
                  smartSortedArray[1] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[1] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "CON":
                if (smartSortedArray[2] === 0) {
                  smartSortedArray[2] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[2] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "INT":
                if (smartSortedArray[3] === 0) {
                  smartSortedArray[3] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[3] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "WIS":
                if (smartSortedArray[4] === 0) {
                  smartSortedArray[4] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[4] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
              case "CHA":
                if (smartSortedArray[5] === 0) {
                  smartSortedArray[5] = sortedFinalResult[0];
                  if(useTashasRules === true){
                    smartSortedArray[5] += 1;
                  }
                  sortedFinalResult.shift();
                }
                break;
            }
            break;
          }
          while (sortedFinalResult.length > 0 && sortedFinalResult.length < 5) {
            let randomizedIndexValue = Math.floor(Math.random() * smartSortedArray.length);
            if (smartSortedArray[randomizedIndexValue] === 0) {
              smartSortedArray[randomizedIndexValue] = sortedFinalResult[0];
              sortedFinalResult.shift();
            }
          }
        }
        finalResult = smartSortedArray;
      }
      break;
    }
  //this may cause problems somewhere if we need numbers?
  for(let i = 0; i < finalResult.length; i++){
    formattedResult[i] += finalResult[i].toString();
  }
  return formattedResult;
  //return this one instead if we need numbers
  // return finalResult;
}

//this currently just generates a string and gives it to one of our text hooks.
function getRandomRace(){
  let randomizedValue = Math.floor(Math.random() * characterRaceArray.length);
  return characterRaceArray[randomizedValue];
}

// this function needs to roll, IN ORDER, Class, Stat Spread, Race
// however, for the time being we can assume Tasha's 2-1 rule
function rollBasicCharacter(generatorMethod: string, playerLevel: number, useSmart: boolean = true, useTashasRules: boolean = true){
  const rolledClass: string = getRandomClass();
  playerCharacter.class = rolledClass;

  const rolledRace: string = getRandomRace();
  playerCharacter.race = rolledRace;

  switch(rolledClass){
    case "Barbarian":
      playerCharacter.hit_points = characterClasses.barbarian.hit_die;
      playerCharacter.primary_attribute = characterClasses.barbarian.primary_attribute;
      playerCharacter.secondary_attribute = characterClasses.barbarian.secondary_attribute;
      playerCharacter.numberOfCantrips = 0;
      break;
    case "Bard":
      playerCharacter.hit_points = characterClasses.bard.hit_die;
      playerCharacter.primary_attribute = characterClasses.bard.primary_attribute;
      playerCharacter.secondary_attribute = characterClasses.bard.secondary_attribute;
      playerCharacter.numberOfCantrips = 2;
      break;
    case "Cleric":
      playerCharacter.hit_points = characterClasses.cleric.hit_die;
      playerCharacter.primary_attribute = characterClasses.cleric.primary_attribute;
      playerCharacter.secondary_attribute = characterClasses.cleric.secondary_attribute;
      playerCharacter.numberOfCantrips = 3;
      break;
    case "Druid":
      playerCharacter.hit_points = characterClasses.druid.hit_die;
      playerCharacter.primary_attribute = characterClasses.druid.primary_attribute;
      playerCharacter.secondary_attribute = characterClasses.druid.secondary_attribute;
      playerCharacter.numberOfCantrips = 2;
      break;
    case "Fighter":
      playerCharacter.hit_points = characterClasses.fighter.hit_die;
      playerCharacter.primary_attribute = characterClasses.fighter.primary_attribute;
      playerCharacter.secondary_attribute = characterClasses.fighter.secondary_attribute;
      playerCharacter.numberOfCantrips = 0;
      break;
    case "Monk":
      playerCharacter.hit_points = characterClasses.monk.hit_die;
      playerCharacter.primary_attribute = characterClasses.monk.primary_attribute;
      playerCharacter.secondary_attribute = characterClasses.monk.secondary_attribute;
      playerCharacter.numberOfCantrips = 0;
      break;
    case "Paladin":
      playerCharacter.hit_points = characterClasses.paladin.hit_die;
      playerCharacter.primary_attribute = characterClasses.paladin.primary_attribute;
      playerCharacter.secondary_attribute = characterClasses.paladin.secondary_attribute;
      playerCharacter.numberOfCantrips = 0;
      playerCharacter.isHalfCaster = true;
      break;
    case "Ranger":
      playerCharacter.hit_points = characterClasses.ranger.hit_die;
      playerCharacter.primary_attribute = characterClasses.ranger.primary_attribute;
      playerCharacter.secondary_attribute = characterClasses.ranger.secondary_attribute;
      playerCharacter.numberOfCantrips = 0;
      playerCharacter.isHalfCaster = true;
      break;
    case "Rogue":
      playerCharacter.hit_points = characterClasses.rogue.hit_die;
      playerCharacter.primary_attribute = characterClasses.rogue.primary_attribute;
      playerCharacter.secondary_attribute = characterClasses.rogue.secondary_attribute;
      playerCharacter.numberOfCantrips = 0;
      break;
    case "Sorcerer":
      playerCharacter.hit_points = characterClasses.sorcerer.hit_die;
      playerCharacter.primary_attribute = characterClasses.sorcerer.primary_attribute;
      playerCharacter.secondary_attribute = characterClasses.sorcerer.secondary_attribute;
      playerCharacter.numberOfCantrips = 4;
      break;
    case "Warlock":
      playerCharacter.hit_points = characterClasses.warlock.hit_die;
      playerCharacter.primary_attribute = characterClasses.warlock.primary_attribute;
      playerCharacter.secondary_attribute = characterClasses.warlock.secondary_attribute;
      playerCharacter.numberOfCantrips = 2;
      break;
    case "Wizard":
      playerCharacter.hit_points = characterClasses.wizard.hit_die;
      playerCharacter.primary_attribute = characterClasses.wizard.primary_attribute;
      playerCharacter.secondary_attribute = characterClasses.wizard.secondary_attribute;
      playerCharacter.numberOfCantrips = 3;
      break;
  }
  //theoretically this should adjust your primary and secondary attributes for the getCharacterStats() method
  playerCharacter.stats = getCharacterStats(generatorMethod, useSmart, useTashasRules);
  playerCharacter.level = playerLevel;
  console.log(playerCharacter);
}

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-8 main-content-area" style = {{backgroundImage: "radial-gradient(hsl(60, 87%, 94%), hsl(60, 80%, 90%))"}}>

      <h1 style = {{fontSize: "72px", fontFamily: "serif", fontWeight: "bold", letterSpacing: "-2px", textShadow: "hsla(0, 0%, 0%, 0.2) 1px 1px 2px", marginBottom: "16px"}}> Dungeons and Dragons Randomizer </h1>

      <div id = "testDiv" className = "flex" style = {{width: "auto", height: "25%", border: "none", justifyContent: "center", marginBottom: "16px", alignItems: "center", padding: "10px", borderRadius: "12px", backgroundColor: "hsl(0 100% 100%)", boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)"}}>

        <button id = "magicItemButton" onClick = {() =>{setButtonText1(StructuredArray(getRandomMagicItem(3)));}} onMouseOver = {() => {setgeneratorButtonColor1("hsl(15, 35%, 50%)"); setgeneratorButtonShadow1("none");}} 
                onMouseLeave = {() => {setgeneratorButtonColor1("hsl(60, 50%, 75%)"); setgeneratorButtonShadow1("inset 0 2px 2px hsla(0, 0%, 0%, 0.2)");}} 
                style = {{width: "100px", height: "100px", backgroundColor: `${generatorButtonColor1}`, color: "white", boxShadow: `${generatorButtonShadow1}`, borderRadius: "12px", color: "hsl(0, 0%, 12%)"}}>
                Generate Magic Item
                </button>
        
        <button id = "spellButton" onClick = {() =>{setButtonText2(StructuredArray(getMultipleSpells(8)));}} onMouseOver = {() => {setgeneratorButtonColor2("hsl(15, 35%, 50%)"); setgeneratorButtonShadow2("none");}} 
                onMouseLeave = {() => {setgeneratorButtonColor2("hsl(60, 50%, 75%)"); setgeneratorButtonShadow2("inset 0 2px 2px hsla(0, 0%, 0%, 0.2)");}} 
                style = {{width: "100px", height: "100px", backgroundColor: `${generatorButtonColor2}`, color: "white", boxShadow: `${generatorButtonShadow2}`, borderRadius: "12px", marginLeft: "20px", color: "hsl(0, 0%, 12%)"}}>
                Generate Spell
                </button>

        <button id = "monsterButton" onClick = {() =>{setButtonText3(StructuredArray(getRandomMonster(10)));}} onMouseOver = {() => {setgeneratorButtonColor3("hsl(15, 35%, 50%)"); setgeneratorButtonShadow3("none");}} 
                onMouseLeave = {() => {setgeneratorButtonColor3("hsl(60, 50%, 75%)"); setgeneratorButtonShadow3("inset 0 2px 2px hsla(0, 0%, 0%, 0.2)");}} 
                style = {{width: "100px", height: "100px", backgroundColor: `${generatorButtonColor3}`, color: "white", boxShadow: `${generatorButtonShadow3}`, borderRadius: "12px", marginLeft: "20px", color: "hsl(0, 0%, 12%)"}}>
                Generate Monster
                </button>
        
        <button id = "inventoryButton" onClick = {() =>{setButtonText4(StructuredArray(getRandomInventoryItem(10)));}} onMouseOver = {() => {setgeneratorButtonColor4("hsl(15, 35%, 50%)"); setgeneratorButtonShadow4("none");}} 
                onMouseLeave = {() => {setgeneratorButtonColor4("hsl(60, 50%, 75%)"); setgeneratorButtonShadow4("inset 0 2px 2px hsla(0, 0%, 0%, 0.2)");}} 
                style = {{width: "100px", height: "100px", backgroundColor: `${generatorButtonColor4}`, color: "white", boxShadow: `${generatorButtonShadow4}`, borderRadius: "12px", marginLeft: "20px", color: "hsl(0, 0%, 12%)"}}>
                Generate Inventory
                </button>

        <button id = "classButton" onClick = {() =>{setButtonText5(getRandomClass());}} onMouseOver = {() => {setgeneratorButtonColor5("hsl(15, 35%, 50%)"); setgeneratorButtonShadow5("none");}} 
                onMouseLeave = {() => {setgeneratorButtonColor5("hsl(60, 50%, 75%)"); setgeneratorButtonShadow5("inset 0 2px 2px hsla(0, 0%, 0%, 0.2)");}} 
                style = {{width: "100px", height: "100px", backgroundColor: `${generatorButtonColor5}`, color: "white", boxShadow: `${generatorButtonShadow5}`, borderRadius: "12px", marginLeft: "20px", color: "hsl(0, 0%, 12%)"}}>
                Generate Class
                </button>

        <button id = "statsButton" onClick = {() =>{setButtonText6(StructuredArray(getCharacterStats("4d6_drop_lowest", true, true)));}} onMouseOver = {() => {setgeneratorButtonColor6("hsl(15, 35%, 50%)"); setgeneratorButtonShadow6("none");}} 
                onMouseLeave = {() => {setgeneratorButtonColor6("hsl(60, 50%, 75%)"); setgeneratorButtonShadow6("inset 0 2px 2px hsla(0, 0%, 0%, 0.2)");}} 
                style = {{width: "100px", height: "100px", backgroundColor: `${generatorButtonColor6}`, color: "white", boxShadow: `${generatorButtonShadow6}`, borderRadius: "12px", marginLeft: "20px", color: "hsl(0, 0%, 12%)"}}>
                Generate Stats
                </button>

        <button id = "raceButton" onClick = {() =>{setButtonText7(getRandomRace());}} onMouseOver = {() => {setgeneratorButtonColor7("hsl(15, 35%, 50%)"); setgeneratorButtonShadow7("none");}} 
                onMouseLeave = {() => {setgeneratorButtonColor7("hsl(60, 50%, 75%)"); setgeneratorButtonShadow7("inset 0 2px 2px hsla(0, 0%, 0%, 0.2)");}} 
                style = {{width: "100px", height: "100px", backgroundColor: `${generatorButtonColor7}`, color: "white", boxShadow: `${generatorButtonShadow7}`, borderRadius: "12px", marginLeft: "20px", color: "hsl(0, 0%, 12%)"}}>
                Generate Race
                </button>

      </div>

{/*  <div id = "resultTextHolder" className = "items-center flex flex-col" style = {{border: "black solid 2px", width: "1000px", height: "600px", marginTop: "25px", marginBottom: "25px", borderRadius: "12px", overflowY: "scroll", overflowX: "hidden"}}>

      <div id = "generateSpellText" onClick = {() => {setButtonText2("");}} style = {{fontSize: 36}}> {buttonText2} </div>

  </div>*/}

    <div id = "firstRowResults" style = {{display: "flex"}}>
      <div className = "items-center text-center place-items-center" style = {{width: "500px", height: "500px", boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)", border: "solid 1px hsl(60, 100%, 15%)", backgroundColor: "hsl(60, 70%, 95%)", marginRight: "15px"}}>
        <h1 id = "magicItemsCollectionHolder" style = {{padding: "35px", fontSize: "35px", backgroundColor: "hsl(60, 50%, 75%)"}}> Magic Items </h1>
        <hr />

        <div id = "magicItemsCollection" style = {{paddingTop: "25px", 
          height: "50%", 
          borderTop: "solid black 2px", 
          borderBottom: "solid black 2px", 
          fontSize: "24px",
          overflowX: "hidden",
          overflowY: "scroll"}}>
            <div id = "generateMagicItemText" onClick = {() => {}} style = {{fontSize: 24}}> {buttonText1} </div>
        </div>

        <button id = "magicItemsClearButton" onClick = {() => {setButtonText1("");}} 
          style = {{width: "35%",
          height: "10%", 
          backgroundColor: "hsl(60, 70%, 85%)", 
          boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)", 
          borderRadius: "12px", 
          marginTop: "30px"}}> Clear </button>
      </div>

      <div className = "items-center text-center" style = {{width: "500px", height: "500px", boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)", border: "solid 1px hsl(60, 100%, 15%)", backgroundColor: "hsl(60, 70%, 95%)", marginRight: "15px", marginBottom: "15px"}}>
        <h1 id = "spellCollectionHolder" style = {{padding: "35px", fontSize: "35px", backgroundColor: "hsl(60, 50%, 75%)"}}> Spell List </h1>
        <hr />

        <div id = "spellCollection" style = {{paddingTop: "25px", 
          height: "50%", 
          borderTop: "solid black 2px", 
          borderBottom: "solid black 2px", 
          fontSize: "24px",
          overflowX: "hidden",
          overflowY: "scroll"}}>
            <div id = "generateSpellText" onClick = {() => {setButtonText2("");}} style = {{fontSize: 24}}> {buttonText2} </div>
        </div>

        <button id = "spellCollectionClearButton" onClick = {() => {}} 
          style = {{width: "35%",
          height: "10%", 
          backgroundColor: "hsl(60, 70%, 85%)", 
          boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)",  
          borderRadius: "12px", 
          marginTop: "30px"}}> Clear </button>
      </div>

    <div className = "items-center text-center" style = {{width: "500px", height: "500px", boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)", border: "solid 1px hsl(60, 100%, 15%)", backgroundColor: "hsl(60, 70%, 95%)", marginRight: "15px"}}>
      <h1 id = "inventoryCollectionHolder" style = {{padding: "35px", fontSize: "35px", backgroundColor: "hsl(60, 50%, 75%)"}}> Inventory </h1>
      <hr />

      <div id = "inventoryCollection" style = {{paddingTop: "25px", 
        height: "50%", 
        borderTop: "solid black 2px", 
        borderBottom: "solid black 2px", 
        fontSize: "24px",
        overflowX: "hidden",
        overflowY: "scroll"}}>
          <div id = "generateInventoryText" onClick = {() => {}} style = {{fontSize: 24}}> {buttonText4} </div>
      </div>

      <button id = "inventoryCollectionClearButton" onClick = {() => {setButtonText4("");}} 
        style = {{width: "35%",
        height: "10%", 
        backgroundColor: "hsl(60, 70%, 85%)", 
        boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)",
        borderRadius: "12px", 
        marginTop: "30px"}}> Clear </button>
    </div>
  </div>

  <div id = "secondRowResults" style = {{display: "flex"}}>
    <div className = "items-center text-center" style = {{width: "500px", height: "500px", boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)", border: "solid 1px hsl(60, 100%, 15%)", backgroundColor: "hsl(60, 70%, 95%)", marginRight: "15px"}}>
      <h1 id = "monsterCollectionHolder" style = {{padding: "35px", fontSize: "35px", backgroundColor: "hsl(60, 50%, 75%)"}}> Monsters </h1>
      <hr />

      <div id = "monsterCollection" style = {{paddingTop: "25px", 
        height: "50%", 
        borderTop: "solid black 2px", 
        borderBottom: "solid black 2px", 
        fontSize: "24px",
        overflowX: "hidden",
        overflowY: "scroll"}}>
          <div id = "generateMonsterText" onClick = {() => {}} style = {{fontSize: 24}}> {buttonText3} </div>
      </div>

      <button id = "monsterCollectionClearButton" onClick = {() => {setButtonText3("");}} 
        style = {{width: "35%",
        height: "10%", 
        backgroundColor: "hsl(60, 70%, 85%)", 
        boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)", 
        borderRadius: "12px", 
        marginTop: "30px"}}> Clear </button>
  </div>

    <div className = "items-center text-center" style = {{width: "500px", height: "500px", boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)", border: "solid 1px hsl(60, 100%, 15%)", backgroundColor: "hsl(60, 70%, 95%)", marginRight: "15px"}}>
      <h1 id = "characterClassCollectionHolder" style = {{padding: "35px", fontSize: "35px", backgroundColor: "hsl(60, 50%, 75%)"}}> Class </h1>
      <hr />

      <div id = "characterClassCollection" style = {{paddingTop: "25px", 
        height: "50%", 
        borderTop: "solid black 2px", 
        borderBottom: "solid black 2px", 
        fontSize: "24px",
        overflowX: "hidden",
        overflowY: "scroll"}}>
          <div id = "generateClassText" onClick = {() => {}} style = {{fontSize: 36}}> {buttonText5} </div> 
      </div>

      <button id = "characterClassClearButton" onClick = {() => {setButtonText5("");}} 
        style = {{width: "35%",
        height: "10%", 
        backgroundColor: "hsl(60, 70%, 85%)", 
        boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)",  
        borderRadius: "12px", 
        marginTop: "30px"}}> Clear </button>
    </div>

    <div className = "items-center text-center" style = {{width: "500px", height: "500px", boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)", border: "solid 1px hsl(60, 100%, 15%)", backgroundColor: "hsl(60, 70%, 95%)", marginRight: "15px"}}>
      <h1 id = "statsCollectionHolder" style = {{padding: "35px", fontSize: "35px", backgroundColor: "hsl(60, 50%, 75%)"}}> Stats </h1>
      <hr />

      <div id = "statsCollection" style = {{paddingTop: "25px", 
        height: "50%", 
        borderTop: "solid black 2px", 
        borderBottom: "solid black 2px", 
        fontSize: "24px",
        overflowX: "hidden",
        overflowY: "scroll"}}>
          <div id = "generateStatsText" onClick = {() => {}} style = {{fontSize: 22}}> {buttonText6} </div>
        </div>

      <button id = "statsClearButton" onClick = {() => {setButtonText6("");}} 
        style = {{width: "35%",
        height: "10%", 
        backgroundColor: "hsl(60, 70%, 85%)", 
        boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)",  
        borderRadius: "12px", 
        marginTop: "30px"}}> Clear </button>
    </div>
  </div>

  <div id = "thirdRowResults" style = {{display: "flex"}}>
    <div className = "items-center text-center" style = {{width: "500px", height: "500px", boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)", border: "solid 1px hsl(60, 100%, 15%)", backgroundColor: "hsl(60, 70%, 95%)", marginRight: "15px", marginTop: "30px"}}>
      <h1 id = "raceCollectionHolder" style = {{padding: "35px", fontSize: "35px", backgroundColor: "hsl(60, 50%, 75%)"}}> Race </h1>
      <hr />

      <div id = "raceCollection" style = {{paddingTop: "25px", 
        height: "50%", 
        borderTop: "solid black 2px", 
        borderBottom: "solid black 2px", 
        fontSize: "24px",
        overflowX: "hidden",
        overflowY: "scroll"}}>
          <div id = "generateRaceText" onClick = {() => {}} style = {{fontSize: 36}}> {buttonText7} </div>
        </div>

      <button id = "raceClearButton" onClick = {() => {setButtonText7("");}} 
        style = {{width: "35%",
        height: "10%", 
        backgroundColor: "hsl(60, 70%, 85%)", 
        boxShadow: "1px 2px 4px hsla(0, 0%, 0%, 0.2)",  
        borderRadius: "12px", 
        marginTop: "30px"}}> Clear 
      </button>
    </div>
  </div>

<div id = "optionsDiv" className = "flex" style = {{width: "auto", height: "25%", border: "solid", justifyContent: "center", alignItems: "center", padding: "10px", borderRadius: "12px", marginTop: "25px"}}>

        <div>
        <fieldset id = "statOptions" style = {{border: "solid black 2px", marginRight: "10px", marginLeft: "10px", padding: "5px"}}>
          <legend style = {{padding: "5px"}}> <b> How do you want to generate stats? </b></legend>
          <input type = "radio" id="3d6"/>
            <label for = "3d6"> Roll 3d6 </label> <br />
            <input type ="radio" id="4d6_drop_lowest"/>
            <label for = "4d6_drop_lowest"> Roll 4d6, Drop the Lowest </label> <br />
            <input type ="radio" id="point_buy"/>
            <label for = "point_buy"> Randomize a Point Buy Array </label> <br />
        </fieldset>

        <fieldset id = "spellOptions" style = {{border: "solid black 2px", marginRight: "10px", padding: "5px"}}>          
            <legend style = {{padding: "5px"}}> <b> How do you want to generate spells? </b></legend>
            <input type = "radio" id="spells_by_specific_level"/>
              <label for = "spells_by_specific_level" style = {{marginRight: "5px"}}> By a Specific Level: 
                  <select style = {{marginLeft: "5px"}}> 
                    <option value = ""> - Please Select a Spell Level - </option>
                    <option value = "cantrip_select"> Cantrip </option>
                    <option value = "first_level_select"> First Level </option>
                    <option value = "second_level_select"> Second Level </option>
                    <option value = "third_level_select"> Third Level </option>
                    <option value = "fourth_level_select"> Fourth Level </option>
                    <option value = "fifth_level_select"> Fifth Level </option>
                    <option value = "sixth_level_select"> Sixth Level </option>
                    <option value = "seventh_level_select"> Seventh Level </option>
                    <option value = "eighth_level_select"> Eighth Level </option>
                    <option value = "ninth_level_select"> Ninth Level </option>
                  </select>  
                </label> <br />
              <input type="radio" id="spells_by_level_range"/>
              <label for= "spells_by_level_range"> Within a Specific Level Range </label> <br />
              <input type="radio" id="spells_fully_random"/>
              <label for= "spells_fully_random"> Fully Random </label> <br />
        </fieldset>

        <fieldset id = "monsterOptions" style = {{border: "solid black 2px", marginRight: "10px", padding: "5px"}}>
          <legend style = {{padding: "5px"}}> <b> How do you want to generate monsters? </b></legend>
          <input type = "radio" id = "monsters_by_challenge_rating"/>
            <label for = "monsters_by_challenge_rating" style = {{marginRight: "5px"}}> By Challenge Rating:
              <select style = {{marginLeft: "5px"}}>
                <option value = ""> - Please Select a Challenge Rating - </option>
                <option value = "cr_0"> 0 </option>
                <option value = "cr_0.125"> 0.125 </option>
                <option value = "cr_0.25"> 0.25 </option>
                <option value = "cr_0.5"> 0.5 </option>
                <option value = "cr_1"> 1 </option>
                <option value = "cr_2"> 2 </option>
                <option value = "cr_3"> 3 </option>
                <option value = "cr_4"> 4 </option>
                <option value = "cr_5"> 5 </option>
                <option value = "cr_6"> 6 </option>
                <option value = "cr_7"> 7 </option>
                <option value = "cr_8"> 8 </option>
                <option value = "cr_9"> 9 </option>
                <option value = "cr_10"> 10 </option>
                <option value = "cr_11"> 11 </option>
                <option value = "cr_12"> 12 </option>
                <option value = "cr_13"> 13 </option>
                <option value = "cr_14"> 14 </option>
                <option value = "cr_15"> 15 </option>
                <option value = "cr_16"> 16 </option>
                <option value = "cr_17"> 17 </option>
                <option value = "cr_18"> 18 </option>
                <option value = "cr_19"> 19 </option>
                <option value = "cr_20"> 20 </option>
                <option value = "cr_21"> 21 </option>
                <option value = "cr_22"> 22 </option>
                <option value = "cr_23"> 23 </option>
                <option value = "cr_24"> 24 </option>
                <option value = "cr_25"> 25 </option>
                <option value = "cr_26"> 26 </option>
                <option value = "cr_27"> 27 </option>
                <option value = "cr_28"> 28 </option>
                <option value = "cr_29"> 29 </option>
                <option value = "cr_30"> 30 </option>
              </select>
            </label> <br />
          <input type = "radio" id = "monsters_by_cr_range"/>
            <label for = "monsters_by_cr_range" style = {{marginRight: "5px"}}> Within a Specific Range of CR:
            </label> <br />
          <input type = "radio" id = "monsters_fully_random"/>
            <label for = "monsters_fully_random" style = {{marginRight: "5px"}}> Fully Random
            </label>
        </fieldset>
        </div>

        <div>
        <fieldset id = "raceOptions" style = {{border: "solid black 2px", marginRight: "10px", marginLeft: "10px", padding: "5px"}}>
          <legend style = {{padding: "5px"}}> <b> How do you want to generate Racial Stat Bonuses? </b></legend>
          <input type = "radio" id="tashas_rules_2_1"/>
            <label for = "tashas_rules_2_1"> Tasha's Rules ( Random [+2], [+1] ) </label> <br />
            <input type ="radio" id="tashas_rules_1_1_1"/>
            <label for = "tashas_rules_1_1_1"> Tasha's Rules ( Three distinct [+1]s ) </label> <br />
            <input type ="radio" id="racial_defaults"/>
            <label for = "racial_defaults"> Use Default Racial Bonuses </label> <br />
        </fieldset>

        <fieldset id = "classStatOptions" style = {{border: "solid black 2px", marginRight: "10px", padding: "5px"}}>          
            <legend style = {{padding: "5px"}}> <b> How do you want to generate Character Class? </b></legend>
            <input type = "radio" id="random_martial"/>
              <label for = "random_martial" style = {{marginRight: "5px"}}> Generate a Random Martial Class </label> <br />
              <input type="radio" id="random_full_caster"/>
              <label for= "random_full_caster"> Generate a Random Full Caster </label> <br />
              <input type="radio" id="class_fully_random"/>
              <label for= "class_fully_random"> Fully Random </label> <br />
        </fieldset>

        <fieldset id = "generalStatOptions" style = {{border: "solid black 2px", marginRight: "10px", padding: "5px"}}>
          <legend style = {{padding: "5px"}}> <b> How do you want to distribute your stats? </b></legend>
          <input type = "radio" id = "prioritize_primary_stat"/>
            <label for = "prioritize_primary_stat" style = {{marginRight: "5px"}}> Best Fit for Generated Class
            </label> <br />
          <input type = "radio" id = "monsters_by_cr_range"/>
            <label for = "monsters_by_cr_range" style = {{marginRight: "5px"}}> Random But Primary Attribute Gets Highest Roll
            </label> <br />
          <input type = "radio" id = "stat_spread_fully_random"/>
            <label for = "stat_spread_fully_random" style = {{marginRight: "5px"}}> Fully Random
            </label>
        </fieldset>
        </div>

        <div>
        <fieldset id = "magicItemOptions" style = {{border: "solid black 2px", marginRight: "10px", marginLeft: "10px", padding: "5px"}}>
          <legend style = {{padding: "5px"}}> <b>Start with magic items? </b></legend>
          <legend> Allowed Rarities: </legend>
          <input type = "checkbox" id = "common"/>
            <label for = "common"> Common Items </label>
          <input type = "checkbox" id = "uncommon"/>
            <label for = "uncommon"> Uncommon Items </label>
          <input type = "checkbox" id = "rare"/>
            <label for = "rare"> Rare Items </label> <br />
          <input type = "checkbox" id = "very_rare"/>
            <label for = "very_rare"> Very Rare Items </label>
          <input type = "checkbox" id = "legendary"/>
            <label for = "legendary"> Legendary Items </label>
          <input type = "checkbox" id = "artifact"/>
            <label for = "artifact"> Artifact Items </label> <br />
          <legend> Number to Generate: </legend>
          <select>
            <option value = ""> - Please Select a Number to Generate - </option>
            <option value = "0_magical_items"> 0 </option>
            <option value = "1_magical_item"> 1 </option>
            <option value = "2_magical_items"> 2 </option>
            <option value = "3_magical_items"> 3 </option>
            <option value = "4_magical_items"> 4 </option>
            <option value = "5_magical_items"> 5 </option>
          </select>
        </fieldset>

        <fieldset id = "inventoryOptions" style = {{border: "solid black 2px", marginRight: "10px", padding: "5px"}}>          
            <legend style = {{padding: "5px"}}> <b> How many items do you want for your inventory? </b></legend>
              <label for = "inventory_count_select" style = {{marginRight: "5px"}}> 
                  <select style = {{marginLeft: "5px"}}> 
                    <option value = ""> - Please Select a Number of Inventory Items - </option>
                    <option value = "0_regular_items"> 0 </option>
                    <option value = "1_regular_item"> 1 </option>
                    <option value = "2_regular_items"> 2 </option>
                    <option value = "3_regular_items"> 3 </option>
                    <option value = "4_regular_items"> 4 </option>
                    <option value = "5_regular_items"> 5 </option>
                    <option value = "6_regular_items"> 6 </option>
                    <option value = "7_regular_items"> 7 </option>
                    <option value = "8_regular_items"> 8 </option>
                    <option value = "9_regular_items"> 9 </option>
                    <option value = "10_regular_items"> 10 </option>
                  </select>  
                </label> <br />
        </fieldset>

        <fieldset id = "encounterOptions" style = {{border: "solid black 2px", marginRight: "10px", padding: "5px"}}>
          <legend style = {{padding: "5px"}}><b> How do you want to generate encounters? </b></legend>
          <input type = "radio" id = "encounters_by_challenge_rating"/>
            <label for = "encounters_by_challenge_rating" style = {{marginRight: "5px"}}> By Challenge Rating:
              <select style = {{marginLeft: "5px"}}>
                <option value = ""> - Please Select a Challenge Rating - </option>
                <option value = "cr_0"> 0 </option>
                <option value = "cr_0.125"> 0.125 </option>
                <option value = "cr_0.25"> 0.25 </option>
                <option value = "cr_0.5"> 0.5 </option>
                <option value = "cr_1"> 1 </option>
                <option value = "cr_2"> 2 </option>
                <option value = "cr_3"> 3 </option>
                <option value = "cr_4"> 4 </option>
                <option value = "cr_5"> 5 </option>
                <option value = "cr_6"> 6 </option>
                <option value = "cr_7"> 7 </option>
                <option value = "cr_8"> 8 </option>
                <option value = "cr_9"> 9 </option>
                <option value = "cr_10"> 10 </option>
                <option value = "cr_11"> 11 </option>
                <option value = "cr_12"> 12 </option>
                <option value = "cr_13"> 13 </option>
                <option value = "cr_14"> 14 </option>
                <option value = "cr_15"> 15 </option>
                <option value = "cr_16"> 16 </option>
                <option value = "cr_17"> 17 </option>
                <option value = "cr_18"> 18 </option>
                <option value = "cr_19"> 19 </option>
                <option value = "cr_20"> 20 </option>
                <option value = "cr_21"> 21 </option>
                <option value = "cr_22"> 22 </option>
                <option value = "cr_23"> 23 </option>
                <option value = "cr_24"> 24 </option>
                <option value = "cr_25"> 25 </option>
                <option value = "cr_26"> 26 </option>
                <option value = "cr_27"> 27 </option>
                <option value = "cr_28"> 28 </option>
                <option value = "cr_29"> 29 </option>
                <option value = "cr_30"> 30 </option>
              </select>
            </label> <br />
          <input type = "radio" id = "monsters_by_cr_range"/>
            <label for = "monsters_by_cr_range" style = {{marginRight: "5px"}}> By Maximum Allowed CR:
            <select style = {{marginLeft: "5px"}}>
                <option value = ""> - Please Select a Challenge Rating - </option>
                <option value = "cr_0"> 0 </option>
                <option value = "cr_0.125"> 0.125 </option>
                <option value = "cr_0.25"> 0.25 </option>
                <option value = "cr_0.5"> 0.5 </option>
                <option value = "cr_1"> 1 </option>
                <option value = "cr_2"> 2 </option>
                <option value = "cr_3"> 3 </option>
                <option value = "cr_4"> 4 </option>
                <option value = "cr_5"> 5 </option>
                <option value = "cr_6"> 6 </option>
                <option value = "cr_7"> 7 </option>
                <option value = "cr_8"> 8 </option>
                <option value = "cr_9"> 9 </option>
                <option value = "cr_10"> 10 </option>
                <option value = "cr_11"> 11 </option>
                <option value = "cr_12"> 12 </option>
                <option value = "cr_13"> 13 </option>
                <option value = "cr_14"> 14 </option>
                <option value = "cr_15"> 15 </option>
                <option value = "cr_16"> 16 </option>
                <option value = "cr_17"> 17 </option>
                <option value = "cr_18"> 18 </option>
                <option value = "cr_19"> 19 </option>
                <option value = "cr_20"> 20 </option>
                <option value = "cr_21"> 21 </option>
                <option value = "cr_22"> 22 </option>
                <option value = "cr_23"> 23 </option>
                <option value = "cr_24"> 24 </option>
                <option value = "cr_25"> 25 </option>
                <option value = "cr_26"> 26 </option>
                <option value = "cr_27"> 27 </option>
                <option value = "cr_28"> 28 </option>
                <option value = "cr_29"> 29 </option>
                <option value = "cr_30"> 30 </option>
              </select>
            </label> <br />
          <input type = "radio" id = "monsters_fully_random"/>
            <label for = "monsters_fully_random" style = {{marginRight: "5px"}}> Fully Random
            </label>
          <legend style = {{marginTop: "5px"}}><b> How Many Monsters? </b></legend>
          <hr style = {{marginBottom: "5px"}} />
            <select>
              <option value = ""> - Please Select a Number of Monsters - </option>
              <option value = "1_monster"> 1 </option>
              <option value = "2_monsters"> 2 </option>
              <option value = "3_monsters"> 3 </option>
              <option value = "4_monsters"> 4 </option>
              <option value = "5_monsters"> 5 </option>
              <option value = "6_monsters"> 6 </option>
              <option value = "7_monsters"> 7 </option>
              <option value = "8_monsters"> 8 </option>
              <option value = "9_monsters"> 9 </option>
              <option value = "10_monsters"> 10 </option>
            </select>
        </fieldset>
        </div>
      </div>

{/*  <button id = "jankyButton" onClick = {() => {rollBasicCharacter("3d6", 1, true, true); getRandomMonsterByCR(2, 5); console.log(generatedMonsterBuffer); setButtonText1(`${generatedMonsterBuffer}`);}} style = {{width: "100px", height: "100px", backgroundColor: "#eeeeee", border: "black solid 2px", marginTop: "25px"}}> PRESS ME </button>
  
  <button id = "clearJankyButtonResult" onClick = {() => { clearArray(generatedMonsterBuffer); setButtonText1(`${generatedMonsterBuffer}`);}} style = {{width: "100px", height: "100px", backgroundColor: "#eeeeee", border: "black solid 2px", marginTop: "25px"}}> CLEAR </button>

  <button id = "fillerButton" onClick = {() => {console.log(playerCharacter.name);}} style = {{width: "100px", height: "100px", backgroundColor: "#eeeeee", border: "black solid 2px", marginTop: "25px"}}> Lazy Button </button>*/}


  </main>
  );
}
