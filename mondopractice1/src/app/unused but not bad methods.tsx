// function getRandomHexDigit(){
//   let value = Math.floor(Math.random() * 16);
//   if (value === 10){
//     value = 'a';
//   }
//   if (value === 11){
//     value = 'b';
//   }
//   if (value === 12){
//     value = 'c';
//   }
//   if(value === 13){
//     value = 'd';
//   }
//   if(value === 14){
//     value = 'e';
//   }
//   if(value === 15){
//     value = 'f';
//   }
//   return value;
// }

// function getRandomHexCode(){
//   //this creates an array of 6 strings, representing a hex value.
//   let resultString: string = "#";
//   let generatedHexValue: string[] = ['0' , '0' , '0' , '0' , '0' , '0'];
//   for(let i = 0; i < generatedHexValue.length; i++){
//     generatedHexValue[i] = getRandomHexDigit();
//     resultString += generatedHexValue[i]; // this should eliminate any type discrepencies, though it's really ugly
//   }
//   return resultString;
// }

// function testRandom(){
//   let randomizedValue: number = Math.floor(Math.random() * 4);
//   let resultString: string = "";
//   switch(randomizedValue){
//     case 0:
//       resultString = "Earth";
//       break;
//     case 1:
//       resultString = "Wind";
//       break;
//     case 2:
//       resultString = "Fire";
//       break;
//     case 3:
//       resultString = "Water";
//       break;
//   }
//       return resultString;
// }

// function hexToDecimal(inputDigitString: string) {

//   let outputValue = 0;
//   let isString = true;
//   switch (inputDigitString) {
//   case "a":
//       outputValue = 10;
//       isString = false;
//       break;
//   case "b":
//       outputValue = 11;
//       isString = false;
//       break;
//   case "c":
//       outputValue = 12;
//       isString = false;
//       break;
//   case "d":
//       outputValue = 13;
//       isString = false;
//       break;
//   case "e":
//       outputValue = 14;
//       isString = false;
//       break;
//   case "f":
//       outputValue = 15;
//       isString = false;
//       break;
//   }
//   if (isString) {
//       outputValue = Number(inputDigitString);
//   }
//   return outputValue;
// }

// function decimalToHex(inputDigitNumber: number) {
// //returns a two-digit string of hexadecimal code.
// let outputValue = "";
// //larger doesn't care about remainder, smaller ONLY does. Think 10s and 1s digit places.
// let largerDigit = Math.floor(inputDigitNumber / 16);
// let largerDigitString = null;
// let smallerDigit = inputDigitNumber % 16;
// let smallerDigitString = null;
// switch(largerDigit){
//   case 10:
//     largerDigitString = "a";
//     break;
//   case 11:
//     largerDigitString = "b";
//     break;
//   case 12:
//     largerDigitString = "c";
//     break;
//   case 13:
//     largerDigitString = "d";
//     break;
//   case 14:
//     largerDigitString = "e";
//     break;
//   case 15:
//     largerDigitString = "f";
//     break;
// }
//   //if number wasn't already sent to string via letter
//   if(largerDigitString === null){
//     largerDigitString = largerDigit.toString();
//   }

//   switch(smallerDigit){
//   case 10:
//     smallerDigitString = "a";
//     break;
//   case 11:
//     smallerDigitString = "b";
//     break;
//   case 12:
//     smallerDigitString = "c";
//     break;
//   case 13:
//     smallerDigitString = "d";
//     break;
//   case 14:
//     smallerDigitString = "e";
//     break;
//   case 15:
//     smallerDigitString = "f";
//     break;
// }
//     if(smallerDigitString === null){
//     smallerDigitString = smallerDigit.toString();
//   }
// //this should cast to string due to how JS works, but consider fixing up
// return outputValue = largerDigitString + smallerDigitString;
// }

// function hexCodeToRGBConversion(hexcode: string) {

//    //this wants a string, yields an Array with [0 - 6].
//   let rgbInputArray = hexcode.split("");
//   //this is an array of numbers, not string values.
//   let redValue = 0;
//   let greenValue = 0;
//   let blueValue = 0;
//   let rgbResultArray = [0, 0, 0];

//   let redFirstDigit = hexToDecimal(rgbInputArray[1]);
//   let redSecondDigit = hexToDecimal(rgbInputArray[2]);
//   redFirstDigit *= 16;
//   redValue = redFirstDigit + redSecondDigit;

//   let greenFirstDigit = hexToDecimal(rgbInputArray[3]);
//   let greenSecondDigit = hexToDecimal(rgbInputArray[4]);
//   greenFirstDigit *= 16;
//   greenValue = greenFirstDigit + greenSecondDigit;

//   let blueFirstDigit = hexToDecimal(rgbInputArray[5]);
//   let blueSecondDigit = hexToDecimal(rgbInputArray[6]);
//   blueFirstDigit *= 16;
//   blueValue = blueFirstDigit + blueSecondDigit;
  
//   rgbResultArray[0] = redValue;
//   rgbResultArray[1] = greenValue;
//   rgbResultArray[2] = blueValue;

//   //this returns three RGB values.
//   //if we want to make them into another hex string, we need to have logic for that too.
//   return rgbResultArray;
// }

// function rgbToHexConversion(red: number, green: number, blue: number){
//   let outputValue: string = "#";
//   outputValue += decimalToHex(red);
//   outputValue += decimalToHex(green);
//   outputValue += decimalToHex(blue);
// return outputValue;
// }

// function hexColorInverse(inputHexString){
//   let initialValueArray = hexCodeToRGBConversion(inputHexString); //creates an array with three values.
//   let invertedRedValue = Math.abs(255 - initialValueArray[0]);
//   let invertedGreenValue = Math.abs(255 - initialValueArray[1]);
//   let invertedBlueValue = Math.abs(255 - initialValueArray[2]);
//   return rgbToHexConversion(invertedRedValue, invertedGreenValue, invertedBlueValue);
// }