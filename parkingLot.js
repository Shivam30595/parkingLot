const MinHeapClass = require("./heap");
const TicketClass = require("./ticket");

class ParkingLot {
    constructor(size){
        this.heap = new MinHeapClass();
        for(let i = 1; i<= size; i++){
            this.heap.insert(i);
        }
        console.log(`Created parking lot with ${size} slots`);
        this.tickets = {};
    }

    getNearestSlotAvailable = ()=>{
       return this.heap.extractMin();
    }

    updateSlots(slotNumber){
        this.heap.insert(slotNumber);
    }

    park = (carNumber)=>{
        let ticket = new TicketClass(carNumber);
        let nearestSlotAvailable = this.getNearestSlotAvailable();
        if(!nearestSlotAvailable) {
            console.log("Sorry, parking Lot is full");
            return;
        }
        ticket["slotAlloted"] = nearestSlotAvailable;
        ticket["timing"] = new Date();
        console.log("Allocated Slot number: ",  nearestSlotAvailable);
        this.tickets[carNumber] = ticket;
    }

     status = ()=>{
       console.log("Slot No.", "Registration No.");
       for(let val in this.tickets){
        console.log("  ", this.tickets[val]["slotAlloted"],"    " ,this.tickets[val]["vehicleNumber"])
       }
    }

    leave = (carNumber, hours)=>{
        let carSlot = this.getCarSlot(carNumber);
        if(!carSlot) {
            console.log(`Registration Number ${carNumber} not found`);
            return;
        }
        let charges = this.calculateCharges(hours);
        console.log(`Registration Number ${carNumber} from Slot ${carSlot} has left with Charge ${charges}`);
        this.updateSlots(carSlot);
        delete this.tickets[carNumber];
    }

    getCarSlot(carNumber){
        let carTicket = this.tickets[carNumber];
        if(!carTicket) return null;
        return carTicket["slotAlloted"];
    }

    calculateCharges = (hours)=>{
        if(hours<=2) return 10;
        else return Math.ceil(hours-2)*10 + 10; 
    }
}

module.exports = ParkingLot;