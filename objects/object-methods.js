let restaurant = {
    name :'Restaurant Chidera',
    guestCapacity: 75,
    guestCounter: 0,
    checkAvailability: function(partySize){
         let seatsLeft = this.guestCapacity - this.guestCounter;
        return partySize <= seatsLeft
    },
    seatParty:  function(partySize){
        this.guestCounter = this.guestCounter + partySize 
    },
    removeParty: function(partySize){
        this.guestCounter = this.guestCounter - partySize
    }
}
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))