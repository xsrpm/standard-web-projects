/*
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1) Usernames can only use alpha-numeric characters.

2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3) Username letters can be lowercase and uppercase.

4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/
/**
 * @param {string} username
 * @returns {boolean}
 */
function restrictPossibleUsername(username){
  return /^[a-z]{2}[a-z]*[0-9]*$|^[a-z][a-z]*[0-9]{2,}$/i.test(username);
}
  
const tests= [
  { input: "JACK",output:true,descrip :"Usernames can only use alpha-numeric characters."},
  { input: "J",output:false,descrip :"Usernames have to be at least two characters long."},
  { input: "Jo",output:true,descrip :"Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters."},
  { input: "Oceans11",output:true,descrip :"Usernames can only use alpha-numeric characters. The only numbers in the username have to be at the end."},
  { input: "RegexGuru",output:true,descrip :"Usernames can only use alpha-numeric characters. Username letters can be lowercase and uppercase."},
  { input: "007",output:false,descrip :"Username cannot start with the number."},
  { input: "9",output:false,descrip :"Usernames have to be at least two characters long. Username cannot start with the number."},
  { input: "A1",output:false,descrip :"Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters."},
  { input: "BadUs3rnam3",output:false,descrip :"The only numbers in the username have to be at the end."},
  { input: "Z97",output:true,descrip :"Usernames can only use alpha-numeric characters. The only numbers in the username have to be at the end."},
  { input: "c57bT3",output:false,descrip :"The only numbers in the username have to be at the end."}
]

let res;
tests.forEach((t)=>{
  res=restrictPossibleUsername(t.input);
  console.log(res);
  console.assert(res===t.output,t.descrip);
});

  /*
Your regex should match JACK
Your regex should not match J
Your regex should match Jo
Your regex should match Oceans11
Your regex should match RegexGuru
Your regex should not match 007
Your regex should not match 9
Your regex should not match A1
Your regex should not match BadUs3rnam3
Your regex should match Z97
Your regex should not match c57bT3
  */