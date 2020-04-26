/*
  WorkingData.js is a file for generating fake data that is useful for development.
*/


// Fake Data -------------------------------------------------------------------

let __firstNames = ["Chris", "Alex", "Sam", "Laura", "Sarah", "Jason", "Cynthia", "Jacob", "Mason", "Alexander", "Joseph", "Hayden", "Adrian", "Dylan", "Anthony", "Isaac", "Gavin", "Sophia", "Harper", "Zoey", "Morgan", "Isabelle", "Julia", "Brooke", "Charlotte", "Melanie", "Mariah", "Maya", "Alexis", "Elizabeth", "Hailey", "Olivia", "Emily", "Logan", "Ryan", "John", "Christian", "Taylor", "Austin"];
let __lastNames = ["Smith", "Johnson", "Williams", "Brown", "Corleone", "Jackson", "Taylor", "White", "Harris", "Garcia", "Martinez", "Clark", "Robinson", "Lewis", "Walker", "Hall", "Allen", "Thompson", "Davis", "Adams", "Carter", "Perez", "Roberts", "Stewart", "Morris", "Reed", "Cook", "Sanders", "Barnes", "Ross", "Hughes", "Ford", "Myers", "Graham"];

let __lorem_ipsum_options = [
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
];


let __occupations = [
  "nurse", "doctor", "assistant", "cook", "manager", "EMT", "store owner", "waiter", "clerk"
];

let __locations = [
  "Mountain View, California",
  "Sunnyvale, California",
  "Los Altos, California",
  "Cupertino, California",
  "Los Gatos, California",
  "Palo Alto, California",
  "Menlo Park, California",
  "Atherton, California",
  "San Jose, California",
  "San Francisco, California",
  "Berkeley, California",
  "Oakland, California",
  "Santa Cruz, California",
  "Half Moon Bay, California"
];


let __bannedPhotos = [86, 97, 105, 138, 148, 150]; // images that error on lorem picsum


let __tags = [
  "food",
  "health",
  "small business",
  "medical",
  "recreation",
  "education",
  "entertainment",
  "community",
  "non-profit",
  "tech",
  "corner store",
  "mom-and-pop",
  "restaurant",
  "bakery",
  "media",
  "news",
  "mechanic",
  "specialty",
  "market"
];

let __communityFundNames = [
  "Medical Workers",
  "Unemployed",
  "Bay Area Homeless",
  "Emergency Responders",
  "Emergency Workers",
  "Essential Workers",
  "Uninsured Residents",
  "Waiters without Work"
];


let __businessNames = [
  "Alexander's Patisserie",
  "Amici's East Coast Pizzeria",
  "Asian Box",
  "Boutique 4",
  "California Bank & Trust",
  "Cascal",
  "City of Mountain View",
  "Dana Street Roasting Company",
  "Elan Mountain View",
  "Endicia",
  "Eureka!",
  "Fenwick & West LLP",
  "Fiesta del Mar TOO!",
  "INTENTIO Fitness Coaching",
  "JPMorgan Chase Bank",
  "Kaiser Permanente",
  "Le Boulanger",
  "Monte Carlo",
  "Mountain View Center for the Performing Arts",
  "Mountain View Central Business Assoc. (CBA)",
  "Mountain View Chamber of Commerce",
  "PURE STORAGE",
  "State Farm Insurance - Shana Nelson",
  "Steins Beer Garden",
  "Study.com",
  "Wells Fargo - Downtown Mountain View",
  "A & J Couture",
  "Action Properties, Inc.",
  "Agave",
  "Alberto's",
  "Allure Salon",
  "Amarin Thai Cuisine",
  "American Vacation Travel",
  "Art & Frames Unlimited",
  "Art Frame Studio",
  "Aruba Salon & Day Spa",
  "Ava's Downtown Market & Deli",
  "aXess Cleaners",
  "Bangkok Spoon",
  "Bank of America",
  "Bank of the West",
  "Bean Scene Cafe",
  "Biryaniz",
  "Blue Otter Corporation",
  "Books Inc.",
  "Buysycle",
  "Cafe Baklava",
  "Camille's Hair Design",
  "Casa Lupe Mexican Restaurant",
  "Castro Street Music Studio",
  "Chez TJ",
  "Chhabra Law Firm, PC",
  "Chop & Pub",
  "701 W EVELYN AVE - B",
  "City Dolls Salon",
  "Cognition Cyclery",
  "Community Care Educational Services",
  "CREDIT SESAME Inc.",
  "CVS Pharmacy #7774",
  "Dana Oriental Market",
  "Debra K. Hotter, CPA",
  "Dental Fabulous",
  "Downtown SMOG Center",
  "Dr. Lucy Osgood",
  "Drunken Lobster",
  "E & W Natural Way",
  "Easy Foods",
  "Elegance Hair Salon",
  "EPHESUS",
  "Excellent Nails",
  "Face-N-Body",
  "Fashion Code Beauty Salon",
  "Fast Repair",
  "Fragomen Del Rey Bernsen & Loewy",
  "FU LAM MUM",
  "Fu Lam Mum Chinese Restaurant",
  "Giovanna's Fine Jewelry",
  "Global Beads",
  "Glooko",
  "GTS Auto Center",
  "Hair by Heinz",
  "Happy Feet Foot Spa",
  "Highway Media",
  "HIPPO Insurance",
  "Hong Kong Bakery",
  "Hong Kong Bistro",
  "Imagine Clothing Alternations",
  "IMAGINE Hair Salon",
  "Information Arts, Inc.",
  "InStep Footware",
  "IN-STEP Footwear",
  "Jane's Beer Store",
  "JulieQ's Hair & Nail Salon",
  "Kappo Nami Nami",
  "Kelly's Healing Massage",
  "Khuu Dentistry & Dermatology",
  "KIKURA & Company",
  "KLF Partnership",
  "La Beauty Skin Care",
  "LA ESPUELA Mexican Food",
  "La Fontaine",
  "La Monique's Nail Salon",
  "LIEW Design, Inc.",
  "LiquidSpace, Inc.",
  "Luxuray Skin Care",
  "Madera Apartments",
  "MAGINATICS Inc.",
  "MANAGE.COM GROUP, Inc.",
  "Mantra India",
  "MARU ICHI Noodle House",
  "MASAS Sushi & Sandwiches",
  "Mediterranean Grill House",
  "MERVYN's",
  "Model Shoe Repair",
  "Molly Magees",
  "Morgan Stanley Smith Barney - The Mountain View Group",
  "Mountain Bay Plaza, LLC",
  "Mountain View Dental Care",
  "Mountain View Door Closer (Keys&Locks)",
  "Mountain View Masonic Lodge #194",
  "Mountain View Optometry & Contact Lens Clinic",
  "Movement Chiropractic and Wellness",
  "Nancy Gee, Attorney",
  "National Travel",
  "New Mongolian BBQ",
  "NIJI Sushi",
  "Old Mountain View Neighborhood Asso.",
  "135 Castro St.",
  "Optom Eyes",
  "Orbit & Rust Salon",
  "Oren's Hummus Shop",
  "ORIGAMI Logic, Inc.",
  "Pacific Eye Care Optometry",
  "PEEL Technologies, Inc.",
  "Peet's Coffee",
  "Perfect Salon",
  "PHO HOA Restaurant",
  "Pho to Chau",
  "PLAN A, Inc.",
  "Poke Bar",
  "QBB - Quality Bourbon & Barbecue",
  "Queen House",
  "RAYBEAM Solutions, Inc.",
  "Ristorante Don Giovanni",
  "Ron Ikebe Realtor",
  "Rumble Fish Mountain View",
  "Salon Finesse",
  "Scratch",
  "SEQUOIA Retail Systems, Inc.",
  "SHABUWAY",
  "SHEZAN",
  "Sight Optometry",
  "Site for Sore Eyes",
  "SONG PA Korean Cuisine",
  "Spangler Mortuaries",
  "SSGI Asia",
  "St. Stephen's Green",
  "STAR Modern Furniture",
  "Studio 364",
  "SUBWAY",
  "Sugar Spa",
  "SUMMA Therapeutics, LLC",
  "Sushi Tomi",
  "Sweetgreen Mountain View",
  "TAP Plastics, Inc.",
  "Tapioca Express",
  "Taqueria La Espuela",
  "Tea Era",
  "The Crepevine",
  "The JEHNING Family Lock Museum",
  "THERAPY Stores, Inc.",
  "Tied House Cafe & Brewery",
  "Tierion",
  "211 HOPE ST 375",
  "TIYAS Touch",
  "Top over Base",
  "TOTVS Labs, Inc.",
  "Vasso Azzurro Ristorante",
  "Vee Cosmetics",
  "West Valley Music",
  "William Maston Architect & Assoc.",
  "Windows & Beyond, Inc.",
  "Alpine Animal Hospital",
  "Alta View Animal Hospital",
  "Los Altos Community Foundation",
  "Mentor Tutor Connection",
  "Mountain View Academy",
  "Mountain View Chamber of Commerce Education Foundation",
  "Mountain View Whisman School District",
  "NASA Ames Research Center",
  "SETI Institute",
  "Study.com",
  "The Boeing Company",
  "Working Scholars",
  "Yew Chung International School of Silicon Valley",
  "A Deluxe Driving School",
  "Assemblymember, 22nd district",
  "Community School of Music and Arts",
  "District 24 AssemblyMember - Marc Berman",
  "Educators Institute",
  "Foothill-De Anza Community College",
  "Freelance Fieldengineer",
  "German International School of Silicon Valley",
  "IMAGINEERZ LEARNING",
  "Los Altos School District",
  "Math Gym USA",
  "Military Entrance Processing Station",
  "Mountain View Educational Foundation",
  "Mountain View Los Altos High School Foundation",
  "Mountain View/Los Altos Union High School District",
  "Mountain View-Los Altos High School District, AVID Program",
  "Nurse Builders Academy",
  "Primary Plus",
  "Pro Essays Writers",
  "Saint Francis High School",
  "Santa Clara County Supervisor S. Joseph Simitian",
  "Silicon Valley Clean Energy",
  "Sparkiverse Labs",
  "St. Joseph Elementary School",
  "The Fogarty Institute for Innovation",
  "Tom Means Consulting",
  "Uk Essay Writers",
  "US Army Recruiting Company South Bay",
  "Waldorf School of the Peninsula",
  "American Cancer Society",
  "American Red Cross Silicon Valley Chapter",
  "Avenidas Rose Kleiner Center",
  "Church of Scientology of Silicon Valley",
  "Community Services Agency",
  "El Camino YMCA",
  "Kiwanis Club of Mountain View",
  "KMVT",
  "Los Altos Community Foundation",
  "Magical Bridge Foundation",
  "Managing Moves & More",
  "Mountain View Center for the Performing Arts",
  "Mountain View Central Business Assoc. (CBA)",
  "Mountain View Chamber of Commerce",
  "Mountain View Public Safety Foundation",
  "Mountain View Whisman School District",
  "Peninsula Youth Theatre",
  "Redwood Villa",
  "SETI Institute",
  "Special Events",
  "The California Israel Chamber of Commerce",
  "Valley Water",
  "Windsor Academy",
  "Women's Networking Alliance",
  "Assistance League of Los Altos",
  "Bay Area Adoption Services",
  "California Apartment Association, Tri-County Division",
  "California Chamber of Commerce",
  "Campbell Chamber of Commerce",
  "Citizens' Climate Lobby",
  "Community Health Awareness Council (CHAC)",
  "CONCERN-Employee Assistance Program",
  "Cusimano Family Colonial Mortuary",
  "Day Worker Center of Mountain View",
  "Fraternal Order of Eagles",
  "Friends of Stevens Creek Trail",
  "HOPE Services",
  "IMAGINEERZ LEARNING",
  "Independent Order of Odd Fellows",
  "Latino Business Council SV",
  "Leadership Mountain View",
  "Lean In Latinas",
  "Midpeninsula Regional Open Space District",
  "Moffett Field Museum",
  "Morgan Hill Chamber of Commerce",
  "Mountain View Educational Foundation",
  "Mountain View Los Altos High School Foundation",
  "Mountain View Los Altos Soccer Club (MVLA)",
  "Mountain View Marauders",
  "Mountain View Masonic Lodge #194",
  "Mountain View Police Activities League",
  "MVCode",
  "National Chamber Program",
  "Old Mountain View Neighborhood Asso.",
  "Oriki Theater",
  "Palo Alto Chamber of Commerce",
  "Palo Alto Housing",
  "Rainbow Chamber of Commerce Silicon Valley",
  "Renaissance Mid-Peninsula",
  "Rotary Club of Mountain View",
  "Silicon Valley Association of Realtors",
  "Silicon Valley Community Foundation",
  "Spangler Mortuaries",
  "TheatreWorks",
  "Thida Cornes",
  "Villa Siena Senior Living Community",
  "WomenSV",
  "World Business Academy",
  "Mountain View Whisman School District",
  "Passion Fit, LLC",
  "San Antonio Center",
  "TITLE Boxing Club of Mountain View",
  "Oshman Family Jewish Community Center",
  "Transform Fitness",
  "YogaSix Mountain View",
  "Artisan Wine Depot",
  "Boutique 4",
  "Costco Wholesale",
  "Frankie Johnnie & Luigi Too!",
  "FUJIFILM Corporation",
  "Greystar",
  "Safeway Store #1108",
  "Safeway Store #2948",
  "San Antonio Center",
  "Sashay Floral",
  "Steins Beer Garden",
  "A & J Couture",
  "Ace Hardware of Mountain View",
  "Art & Frames Unlimited",
  "Art Frame Studio",
  "Ava's Downtown Market & Deli",
  "Benchworks Optical",
  "Boast Coffee Co",
  "Books Inc.",
  "Cognition Cyclery",
  "CVS Pharmacy #7774",
  "Dana Oriental Market",
  "Desk Depot",
  "E & W Natural Way",
  "Easy Foods",
  "Equalia",
  "Fast Repair",
  "Ginos Tailor",
  "Giovanna's Fine Jewelry",
  "Global Beads",
  "Hoverboard Technologies",
  "Imagine Clothing Alternations",
  "InStep Footware",
  "IN-STEP Footwear",
  "Jane's Beer Store",
  "Los Altos Eyecare",
  "Office Depot",
  "One Curious Kat",
  "Optom Eyes",
  "Peak Laboratories, LLC",
  "Ralston Florist, Inc.",
  "Safeway Store #705",
  "Sight Optometry",
  "Sleep Number",
  "Stanford Electric Works",
  "STAR Modern Furniture",
  "TAP Plastics, Inc.",
  "THERAPY Stores, Inc.",
  "Total Wine & More",
  "Verde Tea & Expresso Bar",
  "Village at San Antonio Center - The Merlone Geier Partners",
  "West Valley Music",
  "YANG YANG Acupuncture & Herbs"
];

// Working Data Class ----------------------------------------------------------

class WorkingData {
  constructor() {
    this.funds = {};
    this.users = {};
    this.transactions = {};
    this.seedUsers(); // <- make sure to seed users before funds
    this.seedFunds();

    console.log(JSON.stringify({funds: this.funds, users: this.users, transactions: this.transactions}));
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
      get_from: {},                                       // <- a dict of fund IDs that the user collects money from, is empty for people who aren't subscribed to a community fund
      owns: {},                                           // <- dict of business IDs that the user controls
      advocate_id: false,                                 // <- their advocate account
      messages: {responses: {}, contributions: {}}        // <- broken into 'responses', 'contributions'
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
      let transactionID = this.getNewUniqueID();
      transactions.push({
        id: transactionID,
        destination: {id: fundID, account_type: fundType, memo: responseMemo},
        origin: {id: user.id, account_type: 'user', memo: this.__getRandomText()},
        amount: this.__getRandomDouble(5, 400),
        date: this.__getRandomDate(0, 60),
        status: 'accepted'
      });
      this.users[user.id]['messages']['contributions'][transactionID] = true;
    }

    // make a donation a donation for a specific user
    let user = this.getUser('test');
    let transactionID = this.getNewUniqueID();
    transactions.push({
      id: transactionID,
      origin: {id: user.id, account_type: 'user', memo: this.__getRandomText()},
      destination: {id: fundID, account_type: fundType, memo: this.__getRandomText()},
      amount: this.__getRandomDouble(5, 400),
      date: this.__getRandomDate(0, 60),
      status: 'accepted'
    });
    this.users[user.id]['messages']['contributions'][transactionID] = true;

    //
    let transactionKeys = {}; // <- maintain a list of keys for firebase
    for (let i = 0; i < transactions.length; i++) {
      let transactionID = transactions[i]['id'];
      transactionKeys[transactionID] = true;
      this.transactions[transactionID] = transactions[i];
    }
    return transactionKeys;
  }



  createCommunityFundTransaction(fundID, userID) {
    let transaction = {
      id: this.getNewUniqueID(),
      origin: {id: fundID, account_type: 'community fund', memo: this.__getRandomText()},
      destination: {id: userID, account_type: 'user', memo: this.__getRandomText()},
      amount: this.__getRandomDouble(5, 400),
      memo: this.__getRandomText(),
      date: this.__getRandomDate(0, 60),
      status: 'accepted'
    };
    this.transactions[transaction.id] = transaction;
    this.users[userID]['messages']['responses'][transaction.id] = true;
    return transaction.id;
  }

  createFundRecipients(fundID) {
    let communityFund = {'transactions': {}, 'recipients': {}};

    for (let i = 0; i < this.__getRandomInt(15, 100); i++) {
      let user;
      if (i == 0) {
        user = this.getUser('test');
        if (Object.keys(user.messages.responses).length > 2) {
          user = this.getRandomUser();
        }
      } else {
        user = this.getRandomUser();
      }
      this.users[user.id]['get_from'][fundID] = true;
      let transactionID = this.createCommunityFundTransaction(fundID, user.id);
      communityFund['transactions'][transactionID] = true;
      communityFund['recipients'][user.id] = true;
    }
    return communityFund;
  }

  createUpdates() {
    let updates = {};
    for (let i = 0; i < this.__getRandomInt(1, 10); i++) {
      let id = this.getNewUniqueID(); // because lists aren't a thing in firebase
      updates[id] = {
        text: this.__getRandomText(),
        image: this.__getRandomPhoto(600, 270),
        date: this.__getRandomDate()
      };
    }
    return updates;
  }


  // creates an object representing a fund
  createFund() {
    let id = this.getNewUniqueID();
    let fundType = (this.__getRandomInt(1, 10) > 5) ? "community fund" : "business";
    let messages = this.createTransactions(id, fundType);
    let communityFund = {'transactions': {}, 'recipients': {}};
    if (fundType == "community fund") {
      communityFund = this.createFundRecipients(id);
    }

    // add community fund transactions to list of total transactions when applicable
    for (let key in communityFund['transactions']) {
      messages[key] = true;
    }

    // get tags
    let tags = {};
    for (let i = 0; i < this.__getRandomInt(1, 3); i++) {
      let tagID = this.__getRandomItem(__tags);
      tags[tagID] = true;
    }

    // grab a name for this fund
    let fundName;
    if (fundType == 'community fund') {
      if (this.__getRandomInt(1, 10) > 7) {
        fundName = this.__getRandomItem(__communityFundNames) + " Covid Fund";
      } else {
        fundName = this.__getRandomItem(__businessNames) + " Worker Relief";
      }
    } else {
      fundName = this.__getRandomItem(__businessNames);
    }

    // assign an owner
    let owner = this.getRandomUser();
    this.users[owner.id]['owns'][id] = true;

    this.funds[id] = {
      id: id,
      title: fundName,
      description: this.__getRandomText(),
      cover_photo_url: this.__getRandomPhoto(window.innerWidth, 350),
      profile_photo_url: this.__getRandomPhoto(300, 300),
      fund_type: fundType,
      community_fund: communityFund,
      tags: tags,
      address: this.__getRandomItem(__locations),
      owner_user: owner.id,
      updates: this.createUpdates(),
      messages: messages
    };
  }

  // initializes the dataset with funds
  seedFunds() {
    for (let i = 0; i < 30; i++) {
      this.createFund();
    }
  }
}

export default WorkingData;
