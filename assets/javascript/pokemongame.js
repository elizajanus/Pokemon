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

var Bulbasaur = {
    hpvalue: 100,
    attackvalue: 5
 };

var Charmander = {
     hpvalue: 150,
     attackvalue: 20
 };

var Koffing = {
     hpvalue: 180,
     attackvalue: 25
 };

/*if ($('#yourcharacter').is(':empty')) {
  console.log("empty");*/
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
      })
  } else if ($('#yourcharacter').is(':!empty')) {
      console.log("not empty");
      $("#enemies").on('click', ".enemy", function() {
      $defensetarget = $(this.target)
      $defensetarget.addClass('defense');
      console.log("defense class added");
      $defensetarget.appendTo("#defender");
      console.log("appended to defender");
    })
  };

/*});
} else {*/
  /*console.log("not empty");
$(".enemy").on('click', function() {
    $defensetarget = $(this.target)
    $(this).addClass('defense');
    console.log("defense class added");
    $(this).appendTo("#defender");
    console.log("appended to defender");*/



















});
