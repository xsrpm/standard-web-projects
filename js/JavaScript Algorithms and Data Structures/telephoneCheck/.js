/*
Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.
*/

//https://support.twilio.com/hc/en-us/articles/223183008-Formatting-International-Phone-Numbers
//https://en.wikipedia.org/wiki/E.164


function telephoneCheck(str) {
  console.log(str);
  let res = /^1? ?([0-9]{3}|\([0-9]{3}\))[ -]?[0-9]{3}[ -]?[0-9]{4}$/g.test(str);
  console.log(res);
  return res;
}

console.assert(typeof(telephoneCheck("555-555-5555")) === 'boolean' ,`should return boolean`);

const test= new Map([
  ['1 555-555-5555',true],
  ['1 (555) 555-5555',true],
  ['5555555555',true],
  ['555-555-5555',true],
  ['(555)555-5555',true],
  ['1(555)555-5555',true],
  ['555-5555',false],
  ['5555555',false],
  ['1 555)555-5555',false],
  ['1 555 555 5555',true],
  ['1 456 789 4444',true],
  ['123**&!!asdf#',false],
  ['55555555',false],
  ['(6054756961)',false],
  ['2 (757) 622-7382',false],
  ['0 (757) 622-7382',false],
  ['-1 (757) 622-7382',false],
  ['2 757 622-7382',false],
  ['10 (757) 622-7382',false],
  ['27576227382',false],
  ['(275)76227382',false],
  ['2(757)6227382',false],
  ['555)-555-5555',false],
  ['(555-555-5555',false],
  ['(555)5(55?)-5555',false],
]);


for (let [key, value] of test) {
  console.assert(telephoneCheck(key) === value, `should return \"${value}\"`);
}