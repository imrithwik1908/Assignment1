const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"), 
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  }); 
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
  // Redirect to localhost:3000/login
});

//Dummy data for demonstration

// import { MsgDet } from '../models/messageModel';

// var messages = MsgDet.find({})

// var messages;

// fetch('/message', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)
// })
// .then(response => response.json())
// .then(result => {
//   console.log('Response from the server:', result);
//   // // Handle the response from the back-end
//   // // Access the data sent from the back-end
//   // const name = result.name;
//   // const email = result.email;
//   // const additionalInfo = result.additionalInfo;

//   // // Use the received data as needed in the front-end
//   // console.log('Received Name:', name);
//   // console.log('Received Email:', email);
//   // console.log('Additional Info:', additionalInfo);
//   messages = result
// })
// .catch(error => {
//   console.error('Error:', error);
//   // Handle any errors that occurred during the request
// });

// // const messages = [
// //   { orderId: 'XB120', to: 'Manufacturer A', from: 'Transporter X', address: '123 Street, City', content: 'Message 1' },
// //   { orderId: 'YH223', to: 'Manufacturer B', from: 'Transporter Y', address: '456 Road, Town', content: 'Message 2' },
// //   { orderId: 'AB456', to: 'Manufacturer C', from: 'Transporter Z', address: '789 Avenue, Village', content: 'Message 3' },
// // ];

// // Function to render the messages
// function renderMessages() {
//   const messageList = document.getElementById('message-list');

//   // Clear previous messages
//   messageList.innerHTML = '';

//   // Render each message
//   messages.forEach((message) => {
//     const messageItem = document.createElement('div');
//     messageItem.classList.add('message-item');
//     messageItem.textContent = `Order ID: ${message.orderID}`;
//     messageItem.addEventListener('click', () => {
//       showMessageContent(message);
//     });

//     messageList.appendChild(messageItem);
//   });
// }

// // Function to show the message content when clicked
// function showMessageContent(message) {
//   const messageDetails = document.getElementById('message-details');
//   const orderId = document.getElementById('Order-id');
//   const to = document.getElementById('To');
//   const from = document.getElementById('From');
//   const address = document.getElementById('Address');
//   const content = document.getElementById('content');

//   // Update the order details
//   orderId.textContent = `Order ID: ${message.orderID}`;
//   to.textContent = `To: ${message.To}`;
//   from.textContent = `From: ${message.From}`;
//   address.textContent = `Address: ${message.address}`;
//   content.textContent = `Content: ${message.transporter}`;

//   // Show the message details
//   messageDetails.style.display = 'block';
// }

// // Event listeners
// document.addEventListener('DOMContentLoaded', renderMessages);

// // Function to render the messages
// function renderMessages() {
//   const messageList = document.getElementById('message-list');
//   const searchInput = document.getElementById('search-input');
//   const searchTerm = searchInput.value.toLowerCase();

//   // Clear previous messages
//   messageList.innerHTML = '';

//   // Render each message
//   messages.forEach((message) => {
//     const orderId = message.orderId.toLowerCase();

//     // Check if the current message matches the search term
//     if (orderId.includes(searchTerm)) {
//       const messageItem = document.createElement('div');
//       messageItem.classList.add('message-item');
//       messageItem.textContent = `Order ID: ${message.orderID}`;
//       messageItem.addEventListener('click', () => {
//         showMessageContent(message);
//       });

//       messageList.appendChild(messageItem);
//     }
//   });
// }

// // Event listeners
// document.addEventListener('DOMContentLoaded', renderMessages);
// document.getElementById('search-input').addEventListener('input', renderMessages);


const searchInput = document.getElementById('search-input');
const messageList = document.getElementById('message-list');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();
  const messages = messageList.getElementsByTagName('h5');

  for (let i = 0; i < messages.length; i++) {
    const orderID = messages[i].textContent.toLowerCase();

    if (orderID.includes(searchTerm)) {
      messages[i].style.display = 'block'; // Show matching messages
    } else {
      messages[i].style.display = 'none'; // Hide non-matching messages
    }
  }
});