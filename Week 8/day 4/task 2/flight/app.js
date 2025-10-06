const FlightTicket = require('./script.js');

const myTicket = new FlightTicket('12A', 'FLT789', 'BER', 'UK', '2025-10-25');


myTicket.updateInfo('seatNum', '14C');
myTicket.displayTicketInfo();
myTicket.getTicketInfo()