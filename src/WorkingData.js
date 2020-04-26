/*
  WorkingData.js is a file for generating fake data that is useful for development.
*/


// Fake Data -------------------------------------------------------------------

let __firstNames = ["Chris", "Alex", "Sam", "Laura", "Sarah", "Jason", "Cynthia"];
let __lastNames = ["Smith", "Johnson", "Corleone", "Jackson", "Focker"];

let __lorem_ipsum_options = [
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
];


let __occupations = [
  "nurse", "doctor", "assistant", "cook", "manager", "EMT"
];

let __locations = [
  "Mountain View, California",
  "Sunnyvale, California",
  "Los Altos, California",
  "Cupertino, California",
  "Los Gatos, California",
  "Palo Alto, California",
  "Menlo Park, California",
  "Atherton, California"
];


let __bannedPhotos = [86, 97, 105, 138, 148, 150]; // images that error on lorem picsum

// Working Data Class ----------------------------------------------------------

class WorkingData {
  constructor() {
    this.funds = {};
    this.users = {};
    this.transactions = {};
    this.seedUsers(); // <- make sure to seed users before funds
    this.seedFunds();
  }

  getFunds() {
    return this.funds;
  }

  getUsers() {
    return this.users;
  }

  getTransactions() {
    return this.transactions;
  }

  getUser(userID) {
    return this.users[userID];
  }
  __getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  __getRandomDouble(min, max) {
    return Math.random() * (max - min) + min;
  }

  __getRandomName() {
    let firstNameIndex = this.__getRandomInt(0, __firstNames.length - 1);
    let lastNameIndex = this.__getRandomInt(0, __lastNames.length - 1);
    return __firstNames[firstNameIndex] + " " + __lastNames[lastNameIndex];
  }

  __getRandomText() {
    // step 1) get a random string
    let randomStringIndex = this.__getRandomInt(0, __lorem_ipsum_options.length - 1);

    // step 2) get a random amount from that string
    let options = __lorem_ipsum_options[randomStringIndex].split(" ");
    let text = "";
    for (let i = 0; i < this.__getRandomInt(20, options.length - 1); i++) {
      text += options[i] + " ";
    }
    return text;
  }

  __getRandomDate(startDate = 0, endDate = 60) {
    let current_date = Date.now(); // in milliseconds
    let days_offset = (this.__getRandomInt(startDate, endDate)) * 1000 * 60 * 60 * 24;
    return current_date - days_offset;
  }

  __getRandomOccupation() {
    let i = this.__getRandomInt(0, __occupations.length - 1);
    return __occupations[i];
  }

  __getRandomItem(items) {
    let i = this.__getRandomInt(0, items.length - 1);
    return items[i];
  }

  // gets a random String to act as a unique key
  getNewUniqueID() {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let newID = "";
    for (let i = 0; i < 10; i++) {
      newID += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return newID;
  }


  __getRandomPhoto(x = '300', y = '300') {
    let photoID = this.__getRandomInt(1,149);
    if (__bannedPhotos.indexOf(photoID) >= 0) {
      photoID += 1;
    }
    return 'https://i.picsum.photos/id/' + photoID + '/' + x + '/' + y + '.jpg';
  }


  // Users ---------------------------------------------------------------------

  getRandomUser() {
    let keys = Object.keys(this.users);
    let i = this.__getRandomInt(0, keys.length - 1);
    let userID = keys[i];
    return this.users[userID];
  }

  // profile_photo_url: 'https://picsum.photos/300/300' - always returns the same photo
  createUser(id = false) {
    if (id == false) {
      id = this.getNewUniqueID();
    }
    this.users[id] = {
      id: id,
      name: this.__getRandomName(),
      profile_photo_url: this.__getRandomPhoto(300, 300),
      occupation: this.__getRandomOccupation(),
      location: this.__getRandomItem(__locations),
      get_from: [], // <- a list of fund IDs that the user collects money from, is empty for people who aren't subscribed to a community fund
      control: [], // <- list of business IDs that the user controls
      advocate_id: false // <- their advocate account
      // note: messages is not currently implemented here
    };
  }


  seedUsers() {
    this.createUser('test');
    for (let i = 1; i < 2000; i++) {
      this.createUser();
    }
  }


  // funds ---------------------------------------------------------------------


  createTransactions(fundID, fundType) {
    let transactions = [];

    for (let i = 0; i < this.__getRandomInt(20, 2000); i++) {
      let user = this.getRandomUser();
      let responseMemo = (this.__getRandomInt(1, 10) > 7) ? this.__getRandomText() : "";
      transactions.push({
        id: this.getNewUniqueID(),
        destination: {id: fundID, account_type: fundType, memo: responseMemo},
        origin: {id: user.id, account_type: 'user', memo: this.__getRandomText()},
        amount: this.__getRandomDouble(5, 400),
        memo: this.__getRandomText(),
        date: this.__getRandomDate(0, 60),
        status: 'accepted'
      });
    }

    // make a donation a donation for a specific user
    let user = this.getUser('test');
    transactions.push({
      id: this.getNewUniqueID(),
      origin: {id: user.id, account_type: 'user', memo: this.__getRandomText()},
      destination: {id: fundID, account_type: fundType, memo: this.__getRandomText()},
      amount: this.__getRandomDouble(5, 400),
      memo: this.__getRandomText(),
      date: this.__getRandomDate(0, 60),
      status: 'accepted'
    });

    for (let i = 0; i < transactions.length; i++) {
      let transactionID = Object.keys(this.transactions).length;
      this.transactions[transactionID] = transactions[i];
    }
    return transactions;
  }



  createFundRecipients(fundID) {
    for (let i = 0; i < this.__getRandomInt(15, 100); i++) {
      let user = this.getRandomUser();
      if (user.get_from.indexOf(fundID) < 0) {
        this.users[user.id]['get_from'].push(fundID);
      }
    }
  }

  createUpdates() {
    let updates = [];
    for (let i = 0; i < this.__getRandomInt(1, 10); i++) {
      updates.push({
        text: this.__getRandomText(),
        image: this.__getRandomPhoto(600, 270),
        date: this.__getRandomDate()
      });
    }
    return updates;
  }


  // creates an object representing a fund
  createFund(title, tags, address) {
    let id = this.getNewUniqueID();
    let fundType = (this.__getRandomInt(1, 10) > 5) ? "community fund" : "business";
    this.createTransactions(id, fundType);
    this.createFundRecipients(id);

    // assign an owner
    let owner = this.getRandomUser();

    this.funds[id] = {
      id: id,
      title: title,
      description: this.__getRandomText(),
      cover_photo_url: this.__getRandomPhoto(window.innerWidth, 350),
      fund_type: fundType,
      tags: tags,
      address: address,
      owner_user: owner.id,
      updates: this.createUpdates()
      // messages are missing
    };
  }

  // initializes the dataset with funds
  seedFunds() {
    this.createFund('Ciceros Pizza', ['restaurant', 'pizza'], 'San Jose, California');
    this.createFund('El Camino Hospital Worker Relief', ['medical'], 'Mountain View, California');
  }
}

export default WorkingData;
