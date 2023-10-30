const Accounts = [];
let signed_in_user;
if (signed_in_user == "" || signed_in_user == undefined) {
  // console.log('hello document started....');
  document.getElementById("after_sign_in_section").style.display = "none";
}

const person1 = {
  Full_name: "person1",
  username: "p1",
  Aadhar_number: 1234567891234567,
  password: "person1",
  balance: 33400,
  recieve_money_requests: [],
  movements: [],
};

const person2 = {
  Full_name: "person2",
  username: "p2",
  password: "person2",
  Aadhar_number: 7654321987654321,
  balance: 12000,
  recieve_money_requests: [],
  movements: [],
};

const person3 = {
  Full_name: "person3",
  username: "p3",
  password: "person3",
  Aadhar_number: 1122334455667788,
  balance: 9000,
  recieve_money_requests: [],
  movements: [],
};

Accounts.push(person1);
Accounts.push(person2);
Accounts.push(person3);
// console.log(Accounts);

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////// Submit form - submit form - submit form - submit form  - submit form //////////////////////
//////////////// Submit form - submit form - submit form - submit form  - submit form //////////////////////
//////////////// Submit form - submit form - submit form - submit form  - submit form //////////////////////
//////////////// Submit form - submit form - submit form - submit form  - submit form //////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const form = document.querySelector("#form");
const names = form.elements["names"];
const password = form.elements["password"];
// const name_small = form.elements['name_small'];
const name_small = document.getElementById("name_small");

// const pass_small = form.elements['pass_small'];
const pass_small = document.getElementById("pass_small");
// console.log(names.value);
// console.log(password.value);
//adding form validations
form.addEventListener("submit", function (e) {
  if (names.value === "" || names.value == null) {
    name_small.textContent = "Name cannot be empty.";
  }

  if (password.value === "" || password.value == null) {
    pass_small.textContent = "password cannot be empty.";
  }

  if (password.value === "password") {
    pass_small.textContent = `Password cannot be 'password'. `;
  }

  if (names.value === "no name") {
    name_small.textContent = `name cannot be 'no name`;
  }

  // if(name_small.textContent != '' || pass_small.textContent != ''){
  //     e.preventDefault();
  // }
  e.preventDefault();

  // name_small.textContent = '';
  // pass_small.textContent = '';
});

//submit button onclick event//
const submit_btn = document.querySelector("#submit_btn");
const recieve_money_requests_container = document.getElementById(
  "recieve_money_requests_container"
);
submit_btn.addEventListener("click", function () {
  let to_find_user = names.value;
  const foundAccount = Accounts.find(
    (account) => account.Full_name === to_find_user
  );
  document.getElementById("show_account").textContent = JSON.stringify(
    foundAccount,
    null,
    2
  );
  //    console.log(JSON.stringify(foundAccount, null, 2));

  //    console.log(password.value);
  //    console.log(foundAccount.password);
  //    console.log(String(password.value) == String(foundAccount.password));

  if (password.value === foundAccount.password) {
    document.getElementById("show_account").textContent = `correct password, 
    here's your account`;
    signed_in_user = foundAccount;
    document.getElementById("after_sign_in_section").style.display = "block";

    let count = 0;

    signed_in_user.recieve_money_requests.forEach((element) => {
      let new_div = document.createElement("div");
      new_div.classList.add("each_money_request");
      new_div.innerHTML = `<span class="request_money_div_txt"> Person: </span>${element.user}
    <span class="request_money_div_txt"> Amount:</span> ${element.amount}  <button id="money_request_btn${count}">Send</button>`;
      recieve_money_requests_container.appendChild(new_div);
      count++;
    });
  } else {
    document.getElementById("show_account").textContent = "Wrong password";
  }
});

// console.log(names.value);
// console.log(password.value);

//first develop a method to get the movement of a particular account..
// i.e., option to create a send, recieve and loan money //
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////// dropdown code ////////// dropdown code///////// dropdown code////////
////////// dropdown code ////////// dropdown code///////// dropdown code////////
////////// dropdown code ////////// dropdown code///////// dropdown code////////
////////// dropdown code ////////// dropdown code///////// dropdown code////////
////////// dropdown code ////////// dropdown code///////// dropdown code////////
////////// dropdown code ////////// dropdown code///////// dropdown code////////
////////// dropdown code ////////// dropdown code///////// dropdown code////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Movements handling code below//
//
//first get which movement, you want to happen //
let movement_selected = document.getElementById(
  "dropdown_exchange_money_type"
).value;

// console.log(movement_selected);
const transfer_money_form = document.getElementById("transfer_money_form");
const recieve_money_form = document.getElementById("recieve_money_form");
const loan_money_form = document.getElementById("loan_money_form");
const dropdown_exchange_money_type = document.getElementById(
  "dropdown_exchange_money_type"
);
console.log(".........dropdowexhcange" + dropdown_exchange_money_type);
transfer_money_form.style.display = "block";
recieve_money_form.style.display = "none";
loan_money_form.style.display = "none";
dropdown_exchange_money_type.addEventListener("change", function () {
  // console.log('changechangechangechangechangechangechange');
  movement_selected = document.getElementById(
    "dropdown_exchange_money_type"
  ).value;
  if (movement_selected == "Transfer_money") {
    //display none for other two//
    transfer_money_form.style.display = "block";
    recieve_money_form.style.display = "none";
    loan_money_form.style.display = "none";
    // console.log('1111');
  } else if (movement_selected == "Recieve_money") {
    recieve_money_form.style.display = "block";
    transfer_money_form.style.display = "none";
    loan_money_form.style.display = "none";
    // console.log('222');
  } else {
    transfer_money_form.style.display = "none";
    recieve_money_form.style.display = "none";
    loan_money_form.style.display = "block";
    // console.log('3333');
  }
});

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
///////// transfer-money-form -- transfer-money-form -- transfer-money-form //
///////// transfer-money-form -- transfer-money-form -- transfer-money-form //
///////// transfer-money-form -- transfer-money-form -- transfer-money-form //
///////// transfer-money-form -- transfer-money-form -- transfer-money-form //
///////// transfer-money-form -- transfer-money-form -- transfer-money-form //
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//transfer money form validations and changes//
// const transfer_money_form = document.getElementById('transfer_money_form');

let transfer_to = document.getElementById("transfer_to").value;
transfer_money_form.addEventListener("submit", function (e) {
  e.preventDefault();

  let transfer_to_acc = Accounts.find(
    (account) => account.username == transfer_to
  );
  let transfer_amount = parseInt(
    document.getElementById("transfer_amount").value
  );
  if (transfer_to_acc == null || transfer_to_acc == undefined) {
    console.log("transfer_to_value: " + transfer_to);
    console.log("username account found using find" + transfer_to_acc);
    document.getElementById("transfer_to_user_small").textContent =
      "username does not exist";
  } else {
    document.getElementById("transfer_to_user_small").textContent = "";
  }

  if (signed_in_user.balance < transfer_amount) {
    document.getElementById("amount_transfer_small").textContent =
      "Insufficient balance";
  } else if (transfer_amount == 0 || transfer_amount == undefined) {
    document.getElementById("amount_transfer_small").textContent =
      "amount cannot be zero";
  } else {
    document.getElementById("amount_transfer_small").textContent = "";
  }
});

transfer_money_btn.addEventListener("click", function (e) {
  // e.preventDefault();
  transfer_to = document.getElementById("transfer_to").value;
  money_transfers = document.getElementById("money_transfers");

  if (
    document.getElementById("transfer_to_user_small").textContent == "" &&
    document.getElementById("amount_transfer_small").textContent == ""
  ) {
    let transfer_to_acc = Accounts.find(
      (account) => account.username == transfer_to
    );
    let transfer_amount = parseInt(
      document.getElementById("transfer_amount").value
    );
    transfer_to_acc.balance += parseInt(transfer_amount);
    signed_in_user.balance -= transfer_amount;

    console.log(
      "---------------------------------------------------------craing new div"
    );
    let new_div = document.createElement("div");
    // new_div.classList.add('');
    new_div.innerHTML = `Transferred Money: <span id="red_text">${transfer_amount}</span> to <span id="red_text">${transfer_to_acc.Full_name}</span>
    CURRENT BALANCE: <span id="red_text">${signed_in_user.balance}</span>`;
    money_transfers.prepend(new_div);
  } else {
    document.getElementById("transfer_btn_msg").textContent =
      "Incorrect details above";
  }
});

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
///////// recieve-money-form -- recieve-money-form -- recieve-money-form /////
///////// recieve-money-form -- recieve-money-form -- recieve-money-form /////
///////// recieve-money-form -- recieve-money-form -- recieve-money-form /////
///////// recieve-money-form -- recieve-money-form -- recieve-money-form /////
///////// recieve-money-form -- recieve-money-form -- recieve-money-form /////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const recieve_from = document.getElementById("recieve_from");
const recieve_amount = document.getElementById("recieve_amount");
const small_recieve_from = document.getElementById("small_recieve_from");
const small_recieve_amount = document.getElementById("small_recieve_amount");
const request_money_btn = document.getElementById("request_money_btn");
let recieve_from_acc;
console.log(
  "111111111111111111" + "recievefrom text contente" + recieve_from.value
);

recieve_money_form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("222222222222222222222");
  if (Accounts.find((account) => account.username == recieve_from.value)) {
    recieve_from_acc = Accounts.find(
      (account) => account.username == recieve_from.value
    );
    small_recieve_from.textContent = "";
    console.log("333333333333333333");
  } else {
    console.log("44444444444444444");
    small_recieve_from.textContent = "No such username found";
  }

  console.log("55555555555555");
  const recieve_amount_obj = {
    user: signed_in_user.Full_name,
    amount: recieve_amount.value,
  };

  recieve_from_acc.recieve_money_requests.push(recieve_amount_obj);
});

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////// recieve money requests div -- recieve money requests div-----//
////////// recieve money requests div -- recieve money requests div-----//
////////// recieve money requests div -- recieve money requests div-----//
////////// recieve money requests div -- recieve money requests div-----//
////////// recieve money requests div -- recieve money requests div-----//
////////// recieve money requests div -- recieve money requests div-----//
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

console.log("hello ->----------------------------- " + signed_in_user);

// const recieve_money_requests_container = document.getElementById('recieve_money_requests_container');
// signed_in_user.recieve_money_requests.forEach(element => {
//     let new_div = document.createElement('div');
//     new_div.classList.add('each_money_request');
//     new_div.textContent = `Person: ${element.Full_name}
//     Amount: ${element.amount}`;
//     recieve_money_requests_container.appendChild(new_div);
// });

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//// Creating accounts form ------ Creating accounts form ----- Creating accounts form ///////
//// Creating accounts form ------ Creating accounts form ----- Creating accounts form ///////
//// Creating accounts form ------ Creating accounts form ----- Creating accounts form ///////
//// Creating accounts form ------ Creating accounts form ----- Creating accounts form ///////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// Creating accounts button //

const acc_full_name = document.getElementById("acc_full_name");
const acc_username = document.getElementById("acc_username");
const acc_aadhar = document.getElementById("acc_aadhar");
const acc_pass = document.getElementById("acc_pass");
const acc_confirm_pass = document.getElementById("acc_confirm_pass");

const create_acc_form = document.getElementById("create_acc_form");

const small_acc_full_name = document.getElementById("small_acc_full_name");
const small_username = document.getElementById("small_username");
const small_acc_aadhar = document.getElementById("small_acc_aadhar");
const small_acc_pass = document.getElementById("small_acc_pass");
const small_confirm_acc_pass = document.getElementById(
  "small_confirm_acc_pass"
);

const create_acc_div = document.getElementById("create_acc_div");
//form validation for this account creation
create_acc_form.addEventListener("submit", (e) => {
  if (acc_full_name.value === "" || acc_full_name.value == null) {
    small_acc_full_name.textContent = "Name cannot be empty.";
  } else {
    small_acc_full_name.textContent = "";
  }

  if (acc_full_name.value === "no name") {
    small_acc_full_name.textContent = `name cannot be 'no name`;
  } else {
    small_acc_full_name.textContent = "";
  }

  // let regex = /[^123456789]/g;
  // if(regex === );
  // confirming the length of aadhar card number //
  if (
    acc_aadhar.value.length != 16 ||
    String(parseInt(acc_aadhar.value, 10)).length != 16
  ) {
    small_acc_aadhar.textContent = "Aadhar needs to be of 16 digits";
  } else {
    small_acc_aadhar.textContent = "";
  }

  if (acc_pass.value === "" || acc_pass.value == null) {
    small_acc_pass.textContent = "password cannot be empty.";
  } else {
    small_acc_pass.textContent = "";
  }

  if (acc_pass.value === "password") {
    small_acc_pass.textContent = `Password cannot be 'password'. `;
  } else {
    small_acc_pass.textContent = "";
  }

  if (acc_confirm_pass.value != acc_pass.value) {
    small_confirm_acc_pass.textContent =
      "Password you entered is not same as above";
  } else {
    small_confirm_acc_pass.textContent = "";
  }

  // console.log("small_acc_full_name+"+JSON.stringify(small_acc_full_name)+small_acc_aadhar.textContent);
  // console.log("small_acc_full_name.textContent"+small_acc_full_name.textContent);
  // console.log("small_username.textContent"+small_username.textContent);
  // console.log("small_acc_aadhar.textContent"+small_acc_aadhar.textContent);
  // console.log("small_acc_pass.textContent"+small_acc_pass.textContent);
  // console.log("small_confirm_acc_pass.textContent"+small_confirm_acc_pass.textContent);

  if (
    small_acc_full_name.textContent == "" &&
    small_username.textContent == "" &&
    small_acc_aadhar.textContent == "" &&
    small_acc_pass.textContent == "" &&
    small_confirm_acc_pass.textContent == ""
  ) {
    const object = {
      Full_name: acc_full_name.value,
      username: acc_username.value,
      Aadhar_number: acc_aadhar.value,
      password: acc_pass.value,
      balance: 10000,
      recieve_money_requests: [],
      movements: [],
    };

    // console.log('aagya ander');

    if (Accounts.find((account) => account.username == acc_username.value)) {
      // console.log('if ke ander');
      document.getElementById(
        "create_acc_div"
      ).textContent = `Account already exists, can't create new account.`;
    } else {
      // console.log('else ke ander');
      Accounts.push(object);
      let new_div1 = document.createElement("div");
      // new_div.classList.add('');
      console.log(acc_username.value + "00000000000000000");
      new_div1.innerHTML = `Created new account with username: <span id="red_text">${acc_username.value}</span>`;
      // create_acc_div.appendChild(new_div1);
      document.getElementById("create_acc_div").textContent = ``;
      document.getElementById("create_acc_div").appendChild(new_div1);
    }
  } else {
    document.getElementById(
      "create_acc_div"
    ).textContent = `Enter valid details before creating a new account.`;
  }

  e.preventDefault();

  // name_small.textContent = '';
  // pass_small.textContent = '';

  // form.submit();
});

// console.log(Accounts);

// Now need to create arrays with the accounts created using these forms //

// When form submits, I want a new account to be created...

// Going to create a form validation and closing button for the close account form //

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////// close-acc-form   close-acc-form   close-acc-form ///////////////
////// close-acc-form   close-acc-form   close-acc-form////////////////
////// close-acc-form   close-acc-form    close-acc-form//////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const close_acc_form = document.getElementById("close_acc_form");
const close_acc_username = document.getElementById("close_acc_username");
const close_acc_password = document.getElementById("close_acc_password");
const close_acc_confirm_pass = document.getElementById(
  "close_acc_confirm_pass"
);
// console.log('...............');
// console.log(close_acc_form);
close_acc_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let to_close_acc;
  if (
    Accounts.find((account) => account.username == close_acc_username.value)
  ) {
    to_close_acc = Accounts.find(
      (account) => account.username == close_acc_username.value
    );
    document.getElementById("close_acc_usr_small").textContent = "";
  } else {
    document.getElementById("close_acc_usr_small").textContent =
      "No such username exists in the database";
  }
  if (to_close_acc.password != close_acc_password.value) {
    document.getElementById("close_acc_pass_small").textContent =
      "Wrong passsword";
    document.getElementById(
      "close_acc_confirm_pass_small"
    ).textContent = `Wrong password entered or both passwords don't match `;
  } else {
    document.getElementById("close_acc_pass_small").textContent = "";
    document.getElementById("close_acc_confirm_pass_small").textContent = "";
  }
  if (to_close_acc.password != close_acc_confirm_pass.value) {
    document.getElementById(
      "close_acc_confirm_pass_small"
    ).textContent = `Wrong password entered or both passwords don't match `;
    document.getElementById("close_acc_pass_small").textContent =
      "Wrong passsword";
  } else {
    document.getElementById("close_acc_confirm_pass_small").textContent = "";
    document.getElementById("close_acc_pass_small").textContent = "";
  }

  let foundAccount = Accounts.find(
    (account) => account.username === close_acc_username.value
  );
  if (
    document.getElementById("close_acc_usr_small").textContent == "" &&
    document.getElementById("close_acc_confirm_pass_small").textContent == "" &&
    document.getElementById("close_acc_pass_small").textContent == ""
  ) {
    const index_of_to_close_acc = Accounts.findIndex(
      (account) => account.username == foundAccount.username
    );
    Accounts.splice(index_of_to_close_acc, 1);
    document.getElementById("close_acc_confirmation").textContent =
      "Account successfully closed.";
  } else {
    document.getElementById("close_acc_confirmation").textContent =
      "Enter valid details of the account to be closed";
  }
});

// console.log('close acc close acc close acc close acc close acc');

// const close_acc_btn = document.querySelector('#close_acc_btn');

// close_acc_btn.addEventListener('click', function(){
//    let foundAccount = Accounts.find(account => account.username === close_acc_username.value);
//    if(document.getElementById('close_acc_usr_small').textContent == '' && document.getElementById('close_acc_confirm_pass_small').textContent == '' && document.getElementById('close_acc_pass_small').textContent == ''){
//     const index_of_to_close_acc = Accounts.findIndex(account => account.username == foundAccount.username);
//     Accounts.splice(index_of_to_close_acc, 1);
//     document.getElementById('close_acc_confirmation').textContent = 'Account successfully closed.';
//     }
//     else{
//         document.getElementById('close_acc_confirmation').textContent = 'Enter valid details of the account to be closed';
//     }
// });

// Now here we will be handling all the manipulations/money transfers//
// onclick events for transfer, request and loan buttons //

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//////////// Handling transfers --- Handling transfers ----------- Handling transfers //
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
