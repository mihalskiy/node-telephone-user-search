const elasticsearch = require('elasticsearch');
const {Contact} = require('../models');

class ElasticSearch {

  #client = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
  });

  constructor() {
    this.#client.ping({ requestTimeout: 30000 }, (error) => {
      if (error) {
        console.error('elasticsearch cluster is down!');
      } else {
        console.log('Everything is ok');
      }
    });
  }

  async init (index, type) {
    const data = await Contact.findAll();
    this.bulkIndex(index, type, data);
  }

  async bulkIndex(index, type, data) {

    try {

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

      let errorCount = 0;
      const response = await this.#client.bulk({body: bulkBody})
        response.items.forEach((item) => {
          if (item.index && item.index.error) {
            console.log(++errorCount, item.index.error);
          }
        });
      console.log(`Successfully indexed ${data.length - errorCount}out of ${data.length} items`);
      await this.verify()

    } catch (e) {
      console.err(e)
    }
  }

  async verify() {

    try {
      return await this.#client.cat.indices({v: true})
        .then(console.log)
    } catch (err) {
      console.error(`Error connecting to the es elasticsearch: ${err}`)
    }
  }

  async searchData(index, body) {
    return await this.#client.search({index: index, body: body});
  }
};

module.exports = ElasticSearch;
