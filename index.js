const fs = require("fs");
const readline = require('readline');

const parkingLotClass = require("./parkingLot")

const readFileName = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

readFileName.question("Enter file name ", name => {
    readFile(name);
    readFileName.close();
});


let parkingLot;
let create = (size)=>{
   parkingLot = new parkingLotClass(size);  
}

const readFile = (name) =>{
    let file = readline.createInterface({ 
        input: fs.createReadStream(name),
        output: process.stdout,
        terminal: false
    });
    file.on('line', (line) => {
        let array = line.split(" ");
        switch(array[0]) {
            case "create":
                create(array[1]);
              break;
            case "park":
                parkingLot.park(array[1]);
              break;
            case "leave":
                parkingLot.leave(array[1], array[2]);
            break;
            default:
                parkingLot.status();
          }
    }); 
} 