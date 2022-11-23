Projects Title: Parking Lot

Problem Statement:
I own a parking lot that can hold up to n cars at any given point in time. Each slot is given a number starting at 1 
increasing with increasing distance from the entry point in steps of one. I want to create an automated ticketing system
that allows my customers to use my parking lot without human intervention.

When a car enters my parking lot, I want to have a ticket issued to the driver. The ticket issuing process includes us 
documenting the registration number (number plate) and allocating an available parking slot to the car before actually 
handing over the ticket to the driver. We assume that our customers are nice enough to always park in the slots allocated 
to them. The customer should be allocated a parking slot which is nearest to the entry. At the exit the customer returns 
the ticket with the time the car was parked in the lot, which then marks the slot they were using as being available. 
Total parking charge should be calculated as per the parking time. Charge applicable is $10 for the first 2 hours and 
$10 for every additional hour.

We interact with the system via a simple set of commands which produce a specific output. Please take a look at the 
example below, which includes all the commands you need to support - they're self-explanatory. The system should accept
a filename as a parameter at the command prompt and read the commands from that file.

How To Run:
Step 1: Run npm install
Step 2: Run npm start
Step 3: Copy all the set of commands which you want to run in commands.txt file
Step 4: Give file name as "commands.txt" in the terminal and press Enter 

Note: I already have the commands in the commands.txt file to run.

Execution: I have used the HEAP data structure in maintaining the parking lots