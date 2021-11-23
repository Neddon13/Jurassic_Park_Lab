const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    park = new Park("Jurassic", 50);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('t-rex', 'carnivore', 1000);

  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic");
  });
  

  it('should have a ticket price', function () {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collection_of_dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur("babyDino", "carnivore", 1000);
    park.removeDinosaur("babyDino", "carnivore", 1000)
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0);
  
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.mostVisitors();
    assert.strictEqual(actual, dinosaur2);
  });
    
  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.particularSpecies('t-rex');
    const expected = [dinosaur1, dinosaur2]
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
