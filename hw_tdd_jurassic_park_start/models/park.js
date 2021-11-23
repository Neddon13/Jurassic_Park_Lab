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

Park.prototype.mostVisitors = function () {

}

module.exports = Park