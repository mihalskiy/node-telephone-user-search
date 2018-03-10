'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

      return queryInterface.bulkInsert('Contacts', [
          {
              phoneNumber: "1697102183799",
              firstName: "Christen",
              lastName: "Fiona",
              email: "nascetur.ridiculus.mus@nec.org",
              photoURL: "photo.jpg",
              companyName: "Consectetuer Adipiscing Elit LLC",
              anotherPhoneNumber: "(702) 206-4213",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              phoneNumber: "1697102183799",
              firstName: "Christen",
              lastName: "Fiona",
              email: "nascetur.ridiculus.mus@nec.org",
              photoURL: "photo.jpg",
              companyName: "Consectetuer Adipiscing Elit LLC",
              anotherPhoneNumber: "(702) 206-4213",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              phoneNumber: "1697102183799",
              firstName: "Christen",
              lastName: "Fiona",
              email: "nascetur.ridiculus.mus@nec.org",
              photoURL: "photo.jpg",
              companyName: "Consectetuer Adipiscing Elit LLC",
              anotherPhoneNumber: "(702) 206-4213",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              phoneNumber: "(552) 230-1157",
              firstName: "Jerome",
              lastName: "Zelenia",
              email: "amet.consectetuer@urnanec.com",
              photoURL: "Morgan",
              companyName: "Phasellus Vitae Ltd",
              anotherPhoneNumber: "26668298599",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(648) 709-8036",
              firstName: "Stacey",
              lastName: "Laura",
              email: "convallis.ligula@magnaPraesent.ca",
              photoURL: "Ima",
              companyName: "Sem Limited",
              anotherPhoneNumber: "05501306299",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(737) 769-1015",
              firstName: "Tate",
              lastName: "Bertha",
              email: "lacinia@commodoauctorvelit.edu",
              photoURL: "Wylie",
              companyName: "Amet Risus LLP",
              anotherPhoneNumber: "80873550299",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(670) 611-9386",
              firstName: "Ulla",
              lastName: "Sonia",
              email: "sollicitudin@arcuCurabitur.org",
              photoURL: "Wendy",
              companyName: "Dis Parturient Montes Foundation",
              anotherPhoneNumber: "89891008699",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(315) 463-0743",
              firstName: "Fulton",
              lastName: "Orla",
              email: "dapibus.ligula.Aliquam@velsapienimperdiet.ca",
              photoURL: "Cherokee",
              companyName: "Integer Urna Vivamus companyName",
              anotherPhoneNumber: "79867949899",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(670) 659-9134",
              firstName: "Hakeem",
              lastName: "Nichole",
              email: "Sed.diam@nectellusNunc.org",
              photoURL: "Amethyst",
              companyName: "Quam Vel Industries",
              anotherPhoneNumber: "57514003099",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(358) 481-1300",
              firstName: "Cara",
              lastName: "Idona",
              email: "enim.nec.tempus@rutrumFusce.com",
              photoURL: "Vanna",
              companyName: "Lorem Ipsum Dolor Inc.",
              anotherPhoneNumber: "80371621899",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(493) 839-0036",
              firstName: "Myra",
              lastName: "Shana",
              email: "lobortis@fermentum.com",
              photoURL: "Amery",
              companyName: "Cras Corporation",
              anotherPhoneNumber: "99893881199",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(356) 315-0927",
              firstName: "Walker",
              lastName: "Tamekah",
              email: "Integer@lacusCras.ca",
              photoURL: "Myra",
              companyName: "Dui Suspendisse Ac PC",
              anotherPhoneNumber: "35818405499",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(553) 232-9044",
              firstName: "Carlos",
              lastName: "Sigourney",
              email: "et@Pellentesquehabitant.ca",
              photoURL: "Lionel",
              companyName: "Ac Mattis Associates",
              anotherPhoneNumber: "71645260499",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(413) 698-3813",
              firstName: "Elizabeth",
              lastName: "Clare",
              email: "aliquet.sem@dapibusligulaAliquam.net",
              photoURL: "Yeo",
              companyName: "Ac Risus Foundation",
              anotherPhoneNumber: "78452048299",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(873) 522-6949",
              firstName: "Uta",
              lastName: "Indira",
              email: "tortor.dictum.eu@eu.com",
              photoURL: "Jacqueline",
              companyName: "Dui Corp.",
              anotherPhoneNumber: "62541914299",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(427) 507-3140",
              firstName: "Ray",
              lastName: "Amelia",
              email: "mauris@blanditcongueIn.edu",
              photoURL: "Lavinia",
              companyName: "Sapien Aenean Associates",
              anotherPhoneNumber: "39933470799",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(918) 853-9606",
              firstName: "TaShya",
              lastName: "Callie",
              email: "Curae.Phasellus@duiCras.net",
              photoURL: "Ima",
              companyName: "Interdum Sed Auctor Inc.",
              anotherPhoneNumber: "97420859899",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(908) 820-1480",
              firstName: "Oprah",
              lastName: "Nichole",
              email: "lectus.sit@vestibulum.org",
              photoURL: "Barclay",
              companyName: "Diam Pellentesque Corp.",
              anotherPhoneNumber: "59504180099",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(415) 464-2175",
              firstName: "Upton",
              lastName: "Kirby",
              email: "pharetra.ut.pharetra@scelerisqueloremipsum.edu",
              photoURL: "Winter",
              companyName: "Et Libero Proin Consulting",
              anotherPhoneNumber: "16520705499",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(895) 906-9156",
              firstName: "Kirsten",
              lastName: "Ayanna",
              email: "Quisque@adipiscing.net",
              photoURL: "Astra",
              companyName: "Leo Elementum Sem Consulting",
              anotherPhoneNumber: "04954489199",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(513) 484-8543",
              firstName: "Destiny",
              lastName: "Candice",
              email: "arcu.et@pharetranibhAliquam.org",
              photoURL: "Winifred",
              companyName: "Sed Dictum Incorporated",
              anotherPhoneNumber: "33973045899",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(619) 609-5401",
              firstName: "Georgia",
              lastName: "Tana",
              email: "feugiat@dapibusligula.ca",
              photoURL: "Courtney",
              companyName: "Ante Maecenas Mi Corporation",
              anotherPhoneNumber: "43218079299",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(487) 392-9358",
              firstName: "Troy",
              lastName: "Fredericka",
              email: "sapien.Nunc@aliquet.co.uk",
              photoURL: "Roanna",
              companyName: "Parturient Montes Nascetur Corp.",
              anotherPhoneNumber: "02302464599",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(220) 689-8791",
              firstName: "Cain",
              lastName: "Veronica",
              email: "Duis.risus.odio@nulla.ca",
              photoURL: "Duncan",
              companyName: "Ornare In Faucibus Limited",
              anotherPhoneNumber: "07534620699",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(804) 340-7449",
              firstName: "Kessie",
              lastName: "Bertha",
              email: "iaculis.enim@acipsum.edu",
              photoURL: "Ali",
              companyName: "Urna Nunc companyName",
              anotherPhoneNumber: "47242579599",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(513) 163-4755",
              firstName: "Samuel",
              lastName: "Whilemina",
              email: "nec@eratVivamusnisi.com",
              photoURL: "Steven",
              companyName: "Et Corporation",
              anotherPhoneNumber: "31618342399",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(131) 605-7379",
              firstName: "Xerxes",
              lastName: "Maisie",
              email: "per.conubia.nostra@commodoat.co.uk",
              photoURL: "Aline",
              companyName: "Morbi Inc.",
              anotherPhoneNumber: "81783671999",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(885) 895-9319",
              firstName: "Jordan",
              lastName: "Moana",
              email: "vitae.mauris.sit@quispede.ca",
              photoURL: "Ruth",
              companyName: "Nonummy Limited",
              anotherPhoneNumber: "24251156899",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(543) 107-9598",
              firstName: "Kadeem",
              lastName: "Claire",
              email: "ut@utdolor.ca",
              photoURL: "Florence",
              companyName: "Ullamcorper Eu Euismod Foundation",
              anotherPhoneNumber: "93354101099",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(993) 910-7779",
              firstName: "Hilel",
              lastName: "Alyssa",
              email: "dictum.ultricies@feugiat.co.uk",
              photoURL: "Howard",
              companyName: "Neque Tellus Imperdiet PC",
              anotherPhoneNumber: "62566069299",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(159) 901-4261",
              firstName: "Oleg",
              lastName: "Regina",
              email: "consequat.lectus@nullamagna.co.uk",
              photoURL: "Amal",
              companyName: "Elementum Lorem Limited",
              anotherPhoneNumber: "52996631399",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(614) 581-9354",
              firstName: "Urielle",
              lastName: "Lael",
              email: "luctus@nislsemconsequat.edu",
              photoURL: "Felicia",
              companyName: "A Sollicitudin Associates",
              anotherPhoneNumber: "00555371199",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(629) 884-0473",
              firstName: "Silas",
              lastName: "Alika",
              email: "dolor.dapibus@egestasblandit.com",
              photoURL: "Karleigh",
              companyName: "Erat Vivamus Nisi Foundation",
              anotherPhoneNumber: "24981186999",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(932) 107-0796",
              firstName: "Cara",
              lastName: "Wynne",
              email: "posuere.at@Vestibulumanteipsum.co.uk",
              photoURL: "Rafael",
              companyName: "Nec Limited",
              anotherPhoneNumber: "86331320599",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(407) 473-1408",
              firstName: "Amery",
              lastName: "Kalia",
              email: "ultricies@lectusNullamsuscipit.com",
              photoURL: "Cherokee",
              companyName: "Ullamcorper Duis Associates",
              anotherPhoneNumber: "45856020499",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(425) 493-7401",
              firstName: "James",
              lastName: "Emi",
              email: "tincidunt.nunc@Seddiam.org",
              photoURL: "Lunea",
              companyName: "Ligula LLP",
              anotherPhoneNumber: "54351878899",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(963) 153-7313",
              firstName: "Nicole",
              lastName: "Germane",
              email: "amet.massa.Quisque@feugiat.net",
              photoURL: "Gray",
              companyName: "Dui Nec LLC",
              anotherPhoneNumber: "23475673399",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(581) 967-2962",
              firstName: "Alyssa",
              lastName: "Tara",
              email: "Maecenas.malesuada@elit.ca",
              photoURL: "Quincy",
              companyName: "Pharetra Felis Associates",
              anotherPhoneNumber: "05614203499",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(776) 832-2561",
              firstName: "Rhoda",
              lastName: "Tashya",
              email: "sit.amet@luctus.co.uk",
              photoURL: "Chester",
              companyName: "Elementum PC",
              anotherPhoneNumber: "33443754399",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(418) 469-1310",
              firstName: "Colleen",
              lastName: "Lesley",
              email: "urna.suscipit@lectusCumsociis.edu",
              photoURL: "Hasad",
              companyName: "Malesuada Consulting",
              anotherPhoneNumber: "63761424999",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(827) 523-0320",
              firstName: "Octavia",
              lastName: "Karleigh",
              email: "nec@etlibero.com",
              photoURL: "Demetrius",
              companyName: "Dui Semper companyName",
              anotherPhoneNumber: "38397716699",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(922) 671-4762",
              firstName: "Aretha",
              lastName: "Gretchen",
              email: "Cras.interdum@pedePraesent.co.uk",
              photoURL: "Beverly",
              companyName: "Hendrerit companyName",
              anotherPhoneNumber: "60878005199",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(582) 697-9640",
              firstName: "Mason",
              lastName: "Yael",
              email: "vitae@a.net",
              photoURL: "Cailin",
              companyName: "Accumsan Sed Facilisis LLC",
              anotherPhoneNumber: "97419420899",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(416) 191-4949",
              firstName: "Emi",
              lastName: "Marcia",
              email: "diam.Sed@gravidanuncsed.org",
              photoURL: "Emi",
              companyName: "Interdum Libero LLP",
              anotherPhoneNumber: "77618699999",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(958) 863-7256",
              firstName: "Keelie",
              lastName: "Macy",
              email: "amet.consectetuer@aliquetdiamSed.edu",
              photoURL: "Abra",
              companyName: "Scelerisque Sed companyName",
              anotherPhoneNumber: "05710673799",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(674) 362-3842",
              firstName: "August",
              lastName: "Anne",
              email: "elit@Pellentesque.com",
              photoURL: "Lane",
              companyName: "Quisque Tincidunt Pede Inc.",
              anotherPhoneNumber: "06546512899",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(155) 350-0676",
              firstName: "Chiquita",
              lastName: "Rebekah",
              email: "Curabitur.ut@Morbinequetellus.ca",
              photoURL: "Jasmine",
              companyName: "Nec Ligula Consectetuer LLP",
              anotherPhoneNumber: "29365804299",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(801) 874-0562",
              firstName: "Kaitlin",
              lastName: "Jasmine",
              email: "ipsum@gravida.org",
              photoURL: "Uma",
              companyName: "Enim Mi Consulting",
              anotherPhoneNumber: "09744826499",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(828) 989-2100",
              firstName: "Malik",
              lastName: "Vanna",
              email: "morbi.tristique.senectus@eleifendegestasSed.org",
              photoURL: "Melyssa",
              companyName: "Ultricies Institute",
              anotherPhoneNumber: "57869361399",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(335) 569-3433",
              firstName: "Indigo",
              lastName: "Anjolie",
              email: "enim.nec@consectetueradipiscing.ca",
              photoURL: "Gillian",
              companyName: "Blandit Congue In Inc.",
              anotherPhoneNumber: "82672037299",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(502) 476-3744",
              firstName: "Zorita",
              lastName: "Freya",
              email: "elit.Curabitur@nunc.ca",
              photoURL: "Orlando",
              companyName: "Hendrerit Limited",
              anotherPhoneNumber: "43458244299",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(368) 417-0364",
              firstName: "Nomlanga",
              lastName: "Astra",
              email: "ipsum.Donec@ipsumnunc.co.uk",
              photoURL: "Mannix",
              companyName: "Iaculis Nec LLP",
              anotherPhoneNumber: "37625732099",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(171) 246-6253",
              firstName: "Montana",
              lastName: "Sybill",
              email: "nulla@maurisidsapien.com",
              photoURL: "Cheryl",
              companyName: "Ridiculus LLP",
              anotherPhoneNumber: "67263926199",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(466) 987-6157",
              firstName: "Alma",
              lastName: "Vera",
              email: "nunc@dui.com",
              photoURL: "Jocelyn",
              companyName: "At Associates",
              anotherPhoneNumber: "14604424299",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(381) 520-0778",
              firstName: "Channing",
              lastName: "Lacy",
              email: "mauris.a@Suspendisse.co.uk",
              photoURL: "Victoria",
              companyName: "Iaculis Institute",
              anotherPhoneNumber: "09586894999",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(731) 980-6978",
              firstName: "Brett",
              lastName: "Shellie",
              email: "lobortis.Class.aptent@duiCraspellentesque.co.uk",
              photoURL: "Tyrone",
              companyName: "Ac Sem Ut Corp.",
              anotherPhoneNumber: "24322989299",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(873) 574-5703",
              firstName: "Hanna",
              lastName: "Simone",
              email: "leo@metusVivamus.org",
              photoURL: "Casey",
              companyName: "Nunc Ac companyName",
              anotherPhoneNumber: "30976826999",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(386) 725-6141",
              firstName: "Xavier",
              lastName: "Fatima",
              email: "Aenean.sed.pede@nequeIn.ca",
              photoURL: "Raymond",
              companyName: "Netus Et LLP",
              anotherPhoneNumber: "22584535899",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(986) 857-6529",
              firstName: "Yvonne",
              lastName: "Vielka",
              email: "magna.a@turpis.net",
              photoURL: "Illiana",
              companyName: "Eu Arcu LLP",
              anotherPhoneNumber: "50997809499",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(734) 416-6417",
              firstName: "Bradley",
              lastName: "Veda",
              email: "ac@estNunclaoreet.edu",
              photoURL: "Silas",
              companyName: "Eget Ipsum Suspendisse Institute",
              anotherPhoneNumber: "02793533799",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(848) 417-5513",
              firstName: "Brandon",
              lastName: "Bethany",
              email: "ipsum.non@non.com",
              photoURL: "Shelby",
              companyName: "Aliquam Tincidunt Consulting",
              anotherPhoneNumber: "34384324799",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(544) 927-2458",
              firstName: "Carter",
              lastName: "Camille",
              email: "enim@orci.net",
              photoURL: "TaShya",
              companyName: "Phasellus Industries",
              anotherPhoneNumber: "99543073899",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(160) 662-5385",
              firstName: "Kevyn",
              lastName: "Haley",
              email: "elit.sed.consequat@lacusEtiam.edu",
              photoURL: "Tanisha",
              companyName: "Lectus A Incorporated",
              anotherPhoneNumber: "86205926999",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(346) 677-5535",
              firstName: "Rhona",
              lastName: "Belle",
              email: "primis@elit.co.uk",
              photoURL: "Talon",
              companyName: "Et Institute",
              anotherPhoneNumber: "30584825599",
              createdAt:  new Date(),
              updatedAt:  new Date()
          },
          {
              phoneNumber: "(595) 764-1543",
              firstName: "Wayne",
              lastName: "Claire",
              email: "nibh@enim.co.uk",
              photoURL: "Yolanda",
              companyName: "Metus Aenean LLC",
              anotherPhoneNumber: "32269822099",
              createdAt:  new Date(),
              updatedAt:  new Date()
          }




      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
