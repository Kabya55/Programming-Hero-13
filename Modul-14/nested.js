const money = 400;

if (money >= 500) {
  console.log("You will eat biryani");
} else {
  if (money >= 300) {
    console.log("You will eat rice and curry");
  } else {
    if (money >= 100) {
      console.log("You will eat samosa");
    } else {
      if (money >= 50) {
        console.log("You will eat roti");
      } else {
        if (money > 0) {
          console.log("You will eat bread");
        } else {
          console.log("kisu khayna");
        }
      }
    }
  }
}
