db = db.getSiblingDB('cyberdb');

const data = cat('/docker-entrypoint-initdb.d/cyberAttack.json');
const documents = JSON.parse(data);
db.events.insertMany(documents);
