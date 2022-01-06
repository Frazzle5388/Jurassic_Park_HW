const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Dinotellyaedinosaurswernaedeid', 50);
    dinosaur1 = new Dinosaur('Triceratops', 'herbivore', 12);
    dinosaur2 = new Dinosaur('Pterodactyl', 'carnivore', 180);
    dinosaur3 = new Dinosaur('Triceratops', 'herbivore', 200);
    dinosaur4 = new Dinosaur('Allosaurus', 'carnivore', 35);
    dinosaur5 = new Dinosaur('Velociraptor', 'carnivore', 150);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Dinotellyaedinosaurswernaedeid');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });


  it('should have a collection of dinosaurs', function () {
    const actual = [];
    assert.deepStrictEqual(actual, park.dinosaurCollection)
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    const actual = [dinosaur1];
    assert.deepStrictEqual(actual, park.dinosaurCollection)
  } );

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur();
    const actual = [];
    assert.deepStrictEqual(actual, park.dinosaurCollection)
  });


  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
