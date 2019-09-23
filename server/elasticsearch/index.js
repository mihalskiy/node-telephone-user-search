const elasticsearch = require('elasticsearch');
const {Contact} = require('../models');

const client = new elasticsearch.Client({
  host: '127.0.0.1:9200',
  log: 'error'
});

client.ping({ requestTimeout: 30000 }, function(error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('Everything is ok');
  }
});

module.exports = {
  async init(index, type) {
    const data = await Contact.findAll();
    this.bulkIndex(index, type, data);
  },

  bulkIndex(index, type, data) {
    let bulkBody = [];

    data.forEach((item) => {
      bulkBody.push({
        index: {
          _index: index,
          _type: type,
          _id: item.id,
        }
      });

      bulkBody.push(item);
    });

    client.bulk({body: bulkBody})
      .then((response) => {
        let errorCount = 0;
        response.items.forEach((item) => {
          if (item.index && item.index.error) {
            console.log(++errorCount, item.index.error);
          }
        });
        console.log(
          `Successfully indexed ${data.length - errorCount}
         out of ${data.length} items`
        );
      })
      .then(() => {
        this.verify();
      })
      .catch(console.err);
  },

  verify() {
    return client.cat.indices({v: true})
      .then(console.log)
      .catch((err) => console.error(`Error connecting to the es elasticsearch: ${err}`));
  },

  searchData(index, body) {
    return client.search({index: index, body: body});
  }
};
