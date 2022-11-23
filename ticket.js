class CreateTicket{
    constructor(vehicleNumber){
        this.ticket = {}
        this.ticket["vehicleNumber"] = vehicleNumber;
        return this.ticket;
    }
}

module.exports = CreateTicket;