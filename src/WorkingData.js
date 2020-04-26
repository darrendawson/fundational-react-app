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


// Working Data Class ----------------------------------------------------------

class WorkingData {
  constructor() {
    this.funds = [];
    this.users = [];
    this.seedUsers(); // <- make sure to seed users before funds
    this.seedFunds();
  }

  getFunds() {
    return this.funds;
  }

  getUsers() {
    return this.users;
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
  // Users ---------------------------------------------------------------------

  getRandomUser() {
    let i = this.__getRandomInt(0, this.users.length - 1);
    return this.users[i];
  }

  // profile_photo_url: 'https://picsum.photos/300/300' - always returns the same photo
  createUser() {
    let i = this.__getRandomInt(1, 100);
    this.users.push({
      id: this.users.length + 1,
      name: this.__getRandomName(),
      profile_photo_url: 'https://i.picsum.photos/id/' + i + '/300/300.jpg',
      occupation: this.__getRandomOccupation(),
      location: this.__getRandomItem(__locations)
    });
  }


  seedUsers() {
    for (let i = 1; i < 2000; i++) {
      this.createUser();
    }
  }


  // funds ---------------------------------------------------------------------




  getUserDonationsToFund() {

    let getDonation = () => {
      return {
        'amount': this.__getRandomDouble(5, 100)
      };
    };

    let stats = [];
    for (let i = 0; i < this.__getRandomInt(0, 10); i++) {
      stats.push(getDonation());
    }
    return stats;
  }


  getTransactionsForFund(fundID) {
    let transactions = [];

    for (let i = 0; i < this.__getRandomInt(20, 2000); i++) {
      let user = this.getRandomUser();
      transactions.push({
        sender_id: user.id,
        receiver_id: fundID,
        sender_name: user.name,
        profile_photo_url: user.profile_photo_url,
        location: user.location,
        amount: this.__getRandomDouble(5, 400),
        memo: this.__getRandomText(),
        date: this.__getRandomDate(0, 60)
      });
    }
    return transactions;
  }

  // returns stats about a fund's transactions
  getFundSnapshotStats(transactions, patrons, recipients = []) {
    let stats = {};
    stats['num_recipients'] = recipients.length;
    stats['num_donors'] = patrons.length;
    stats['average_donation'] = 0;
    if (transactions.length > 0) {
      for (let i = 0; i < transactions.length; i++) {
        stats['average_donation'] += transactions[i]['amount']
      }
      stats['average_donation'] = stats['average_donation'] / transactions.length;
    }
    stats['past_day'] = {'num_donations': this.__getRandomInt(2, 30), 'amount': this.__getRandomDouble(30, 200)};
    stats['past_month'] = {'num_donations': this.__getRandomInt(30, 100), 'amount': this.__getRandomDouble(500, 2100)}
    return stats;
  }


  getPatronsOfFund(transactions) {
    let patrons = []
    let patronLookup = {};
    for (let i = 0; i < transactions.length; i++) {
      let userID = transactions[i]['sender_id'];
      if (userID in patronLookup) {
        patronLookup[userID]['amount']        += transactions[i]['amount'];
        patronLookup[userID]['num_donations'] += 1;
      } else {
        patronLookup[userID] = {}
        patronLookup[userID]['amount']            = transactions[i]['amount'];
        patronLookup[userID]['num_donations']     = 1;
        patronLookup[userID]['id']                = userID;
        patronLookup[userID]['name']              = transactions[i]['sender_name'];
        patronLookup[userID]['profile_photo_url'] = transactions[i]['profile_photo_url'];
        patronLookup[userID]['location']          = transactions[i]['location'];
      }
    }

    // convert lookup of patrons to list
    for (let key in patronLookup) {
      patrons.push(patronLookup[key]);
    }
    return patrons;
  }


  getRecipientsOfFund() {
    let recipients = [];
    for (let i = 0; i < this.__getRandomInt(15, 1200); i++) {
      let user = this.getRandomUser();
      recipients.push({
        id: user.id,
        name: user.name,
        profile_photo_url: user.profile_photo_url,
        occupation: user.occupation
      });
    }
    return recipients;
  }

  // creates an object representing a fund
  createFund(title, fundType, tags, address) {
    let id = this.funds.length + 1;
    let transactions = this.getTransactionsForFund(id);
    let patrons = this.getPatronsOfFund(transactions);
    let recipients = this.getRecipientsOfFund();
    this.funds.push({
      id: id,
      title: title,
      description: this.__getRandomText(),
      cover_photo_url: 'https://i.picsum.photos/id/' + id + '/' + window.innerWidth + '/350.jpg',
      fund_type: fundType,
      at_a_glance_stats: this.getFundSnapshotStats(transactions, patrons, recipients),
      user_donations: this.getUserDonationsToFund(),
      tags: tags,
      address: address,
      owner_user: this.getRandomUser(),
      transactions: transactions,
      patrons: patrons
    });
  }

  // initializes the dataset with funds
  seedFunds() {
    this.createFund('Ciceros Pizza', 'business', ['restaurant', 'pizza'], 'San Jose, California');
    this.createFund('El Camino Hospital Worker Relief', 'community fund',  ['medical'], 'Mountain View, California');
  }
}

export default WorkingData;
