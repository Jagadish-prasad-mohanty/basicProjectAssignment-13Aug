// // - variable should not start with number any other special chars
// // - alphabets or _


// // premitive data types
// // String
// // Number
// // Boolean
// // undefined
// // null
// // DRY 

// var firstName = "Vasu";
// var FirstName = "Vasu sample";

// let salary = 10000,
//     isEmpActive = true,
//     address = undefined,
//     pancard = null;

// let myVar;

// // References Data types
// // Array
// let colors = ['red', 'green', 'blue'];

// // Object
// const employee = {  
//   name: 'Vasu',
//   role: 'APA',
//   gender: 'M',
//   isActive: true,
//   salary: 20000,
//   getName: function() {
//     return this.name;
//   }
// }

// // function
// // function greet(text, user) {
// //   console.log(text + ' ' + user);
// // }

// // const greet = function(text, user) {
// //   console.log(text + ' ' + user);
// // }

// // const greet = (text, user) => {
// //   console.log(text + ' ' + user);
// //   console.log(text + ' ' + user)
// // }

// // console.log(greet('Good morning', 'Vasu'));
// // console.log(greet('Good afternoon', 'Sahoo'));
// // console.log(greet('Good evening', 'Random'));

// // Statements
// // if
// day = "";
// if (true) {
//   day = "sunday"
// } else {
//   day = "saturday"
// }

// // if else
// if (true) {
//   console.log("You see me")
// } else {

// }

// // if else else if
// // time complexity 0.04
// if (day == "sunday") {
//   console.log("You see me")
// } else if (day == "mon") {
//   console.log("You see me")
// }
// else if (day == "tue") {
//   console.log("You see me")
// }
// else if (day == "wed") {
//   console.log("You see me")
// } else {
//   console.log("You see me")
// }



// // switch
// // 0.01
// switch(day) {
//   case "sunday": 
//     //
//     break;

//   case "monday":
//     //
//     break;

//   case "tue":
//     //
//   break;

//   case "wed":
//     //
//     break;
  
//   default:
//     //
// }

// let Colors = ['red', 'green', 'blue'];
// // for loop

// for(let i = 0; i < Colors.length; i++ ) {
//   console.log(`You have chosen ${Colors[i]} color`);
// }

// Colors.forEach((item, index) => {
//   console.log(`Value ${item} present in ${index}`)
// })

// while(Colors.length != 0) {
//   console.log(`india is my country`);
//   Colors.length = Colors.length - 1;
// }



// // for (let color in Colors) {
// //   console.log(`Value is ${color}`)
// // }

// // for (let { color, index } in Colors) {
// //   console.log(`Value ${color} present in ${index}`)
// // }

// // map 
// Colors.map((el, index) => {
//   if (el === 'green') {
//     alert("Green color is chosen")
//   }
//   alert(el)
// })
// // reduce

// // filter

const renderErrorMessages = (errors) => {
  const errorDiv = document.getElementById('error-msg-div');

  const content = errors.map(error => `<li>${error}</li>`).join('');

  errorDiv.innerHTML = content;
}

const onDeleteHandler = (e) =>{
  console.log("hiii");
  if (!e.target.classList.contains("deleteBtn")){
    return;
  }
  const btn=e.target;
  btn.closest("tr").remove();
}

const renderTableRows = (name, email, role, status) => {
  const tableDiv = document.getElementById('table-body');
  console.log(status);
  statuss = status==='active' ? 'Active' : 'Inactive';
  const content = `<tr>
    <td>${name}</td>
    <td>${email}</td>
    <td>${role}</td>
    <td>${statuss}</td>
    <td><button class="deleteBtn">Delete</button></td>
  </tr>`;

  tableDiv.innerHTML += content; 
}


const submitForm = () => {
  const name = document.getElementById('name'),
        email = document.getElementById('email'),
        role = document.getElementById('role'),
        status = document.getElementById('isActive');

  let errorMessages = [];
  if (!name.value) {
    errorMessages.push('Please enter your name');
  }
  if (!email.value) {
    errorMessages.push('Please enter your email address');
  }
  if (!role.value) {
    errorMessages.push('Please enter your role');
  }

  if (errorMessages.length > 0) {
    renderErrorMessages(errorMessages);
    return false;
  } else {
    document.getElementById('error-msg-div').innerHTML = "";
  }

  // Table rows rendering
  renderTableRows(name.value, email.value, role.value, status.value);

  name.value = '';
  email.value = '';
  role.value = '';
  status.value = '';
}

const tableDel=document.querySelector('table');
tableDel.addEventListener('click',onDeleteHandler);