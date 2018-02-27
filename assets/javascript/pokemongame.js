/*
var characters
click character, stays in Your Character section
remainder move to Enemies Available to Attack
select from enemies, moves to Defender
reduce the Defender hp to 0 or below
attack button in Fight Section: increasing number for each attack from Your Character, and continues to increase until game over
Defender attack back is static and reduces Your Character's hp by the attack number

variables to consider:
characters
hp per character
attack value per character

EACH CHARACTER IS AN OBJECT

functions to consider:
ASSIGN role when character is clicked (your character, enemies, defender)
ATTACK
SUBTRACTION from hp
ADDITION to attack power

Restart button reloads the page or resets values (duh)
 */
$(document).ready(function () {
var Pikachu = {
    hpvalue: 120,
    attackvalue: 8
 };
 /*I can't get these dang object values to display in the html even when I use $("#pikahp").text(Pikachu.hpvalue)*/
console.log(Pikachu.hpvalue);

var Bulbasaur = {
    hpvalue: 100,
    attackvalue: 5
 };
console.log(Bulbasaur.hpvalue);

var Charmander = {
     hpvalue: 150,
     attackvalue: 20
 };
console.log (Charmander.hpvalue);
var Koffing = {
     hpvalue: 180,
     attackvalue: 25
 };
console.log(Koffing.hpvalue);
/*puts characters in correct divs*/
  if ($('#yourcharacter').is(':empty')) {
      $("#characterbank").on('click', ".character", function() {
          console.log("empty")
          $target = $(this.target);
          $(this).addClass('selected');
          console.log("selected class added");
          $('.selected').appendTo("#yourcharacter");
          console.log("appended to your character");
          $nottarget = $(".character:not(.selected)");
          $nottarget.addClass('enemy');
          console.log("enemy class added");
          $(".enemy").appendTo("#enemies");
          console.log("appended to enemies");
      });
  } if ($('#defender').is(':empty')) {
      console.log("not empty");
      $("#enemies").on('click', ".enemy", function() {
      $defensetarget = $(this.target)
      $defensetarget.addClass('defense');
      console.log("defense class added");
      $(this).appendTo("#defender");
      console.log("appended to defender");
    });
  };
/*if Pikachu is my character and Bulbasaur is defender, etc for 24 possible situations IF THIS ONE WOULD JUST WORK DAMMIT*/
if ($("#pikachu").hasClass('selected') || $("#bulbasaur").hasClass('defense')) { 
$("#attack").on('click', function () {
      console.log("you clicked the attack button");
        Bulbasaur.hpvalue -= Pikachu.attackvalue;
        Bulbasaur.attackvalue -= Pikachu.hpvalue;
        Pikachu.attackvalue += 8;
        console.log(Pikachu.hpvalue);
  });
} else {
    $("#attack").on('click', function () {
        console.log("I went to the else statement and you clicked the attack button");
    });
};


















});
