const Park = function(name, ticket_price) {
    this.name = name;
    this.ticket_price = ticket_price;
    this.collection_of_dinosaurs = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
        this.collection_of_dinosaurs.push(dinosaur);
};
        
Park.prototype.numberOfDinosaurs = function () {
    return this.collection_of_dinosaurs.length;
};

Park.prototype.removeDinosaur = function (dinosaur) {
    this.collection_of_dinosaurs = [];
}

Park.prototype.mostVisitors = function (dinosaur) { 
    let bestDino = this.collection_of_dinosaurs[0];
    for (const dino of this.collection_of_dinosaurs) {
        if (dino.guestsAttractedPerDay > bestDino.guestsAttractedPerDay) { 
            bestDino = dino;
        }
    }
    return bestDino;
}

Park.prototype.particularSpecies = function (species) {
    const discoveredDino = [];
    for (const dinosaur of this.collection_of_dinosaurs) {
        if (dinosaur.species === species) {
            discoveredDino.push(dinosaur);
        };

    };
    return discoveredDino
};
        
module.exports = Park