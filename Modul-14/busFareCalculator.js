const age = 22;
const isStudent = false;

let ticketFare = 800;

if (age < 10) {
  ticketFare = 0;
} else if (isStudent) {
  ticketFare = ticketFare * 0.5; // 50% discount
} else if (age >= 60) {
  ticketFare = ticketFare * 0.85; // 15% discount
} else {
  ticketFare = 800;
}

console.log("Ticket Fare:", ticketFare, "tk");
