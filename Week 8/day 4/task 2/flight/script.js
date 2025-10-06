class FlightTicket {
  constructor(
    seatNum,
    flightNum,
    departureAirport,
    arrivalAirport,
    travellingDate
  ) {
    this.seatNum = seatNum;
    this.flightNum = flightNum;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
    this.travellingDate = travellingDate;
  }

  displayTicketInfo() {
    console.log(`Seat Number: ${this.seatNum}`);
    console.log(`Flight Number: ${this.flightNum}`);
    console.log(`Departure Airport: ${this.departureAirport}`);
    console.log(`Arrival Airport: ${this.arrivalAirport}`);
    console.log(`Travel Date: ${this.travellingDate}`);
  }

  getTicketInfo() {
    return {
      seatNum: this.seatNum,
      flightNum: this.flightNum,
      departureAirport: this.departureAirport,
      arrivalAirport: this.arrivalAirport,
      travellingDate: this.travellingDate,
    };
  }

  updateInfo(key, value) {
    if (this.hasOwnProperty(key)) {
      this[key] = value;
      console.log(`Successfully updated ${key}. New value: ${this[key]}`);
    } else {
      console.error(`Error: "${key}" is not a valid ticket property.`);
    }
  }
}

module.exports = FlightTicket;
