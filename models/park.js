const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
  };

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    this.dinosaurCollection.pop(dinosaur);
};
  
  module.exports = Park