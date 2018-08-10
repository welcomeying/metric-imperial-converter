/*
*
*
*       Complete the handler logic below
*       
*       
*/



function ConvertHandler() {
  const units = [['gal', 'l'],['l', 'gal'],
                   ['lbs', 'kg'],['kg', 'lbs'], 
                   ['mi', 'km'],['km', 'mi']];
  const spellUnits = [['gal', 'gallons'],['l', 'liters'],
                   ['lbs', 'pounds'],['kg', 'kilograms'], 
                   ['mi', 'miles'],['km', 'kilometers']];
  const nums = [3.78541, 1/3.78541, 0.453592, 1/0.453592, 1.60934, 1/1.60934];

  this.getNum = function(input) {
    let num = input.slice(0, input.indexOf(input.match(/[a-zA-Z]/)));
    if (num === ''){ return 1;}
    let arr = num.split('/');
    if (arr.length === 2) {
      return parseFloat(arr[0],10)/parseFloat(arr[1],10);
    }
    if (isNaN(num) && arr.length > 2) {
      return "invalid number";
    }
    return num;
  };
  
  this.getUnit = function(input) {
    const inputUnit = input.slice(input.indexOf(input.match(/[a-zA-Z]/)));
    for (let i = 0; i < units.length; i ++) {
      if (inputUnit.toLowerCase() === units[i][0]) {
        return inputUnit;
      }
    }
    return "invalid unit";
  };
  
  this.getReturnUnit = function(initUnit) {
    for (let i = 0; i < units.length; i ++) {
      if (initUnit.toLowerCase() === units[i][0]) {
        return units[i][1];
      }
    }
    
  };

  this.spellOutUnit = function(unit) {
    for (let i = 0; i < spellUnits.length; i ++) {
      if (unit == spellUnits[i][0]) {
        return spellUnits[i][1];
      }
    }
  };
  
  this.convert = function(initNum, initUnit) {
    let returnNum;
    for (let i = 0; i < units.length; i ++) {
      if (initUnit.toLowerCase() == units[i][0]) {
        returnNum = initNum * nums[i];
        if (isNaN(returnNum)) {return "invalid number";}
      }
    }
    return returnNum
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if (!isNaN(returnNum)) {
      returnNum = returnNum.toFixed(5);
    }
    return initNum + ' ' + this.spellOutUnit(initUnit.toLowerCase()) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
  };
  
}

module.exports = ConvertHandler;
