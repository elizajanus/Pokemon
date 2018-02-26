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

$(".character").on('click', function() {
    $target = $(this.target);
    $(this).addClass('selected');
    $(this).appendTo("#yourcharacter");
    $nottarget = $(".character:not(.selected)");
    $nottarget.addClass('enemy');
    $(".enemy").appendTo("#enemies");
});
















});