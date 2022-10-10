const Database = require('wow-classic-items');
const classes = new Database.Classes();



import {scriptSetup} from './script-setup';


const admin = scriptSetup();

async function exec() {
  const firestore = admin.firestore();
  firestore.settings({ignoreUndefinedProperties: true})
  for (let i = 0; i < classes.length; i++) {
    await firestore.collection("classes").add({
      name: classes[i].name,
      icon: classes[i].icon,
      specs: classes[i].specs,
    }).catch(error => {
      console.log(error);
    })
  }
}

exec()
  .then(() => {
    console.log('Getting data completed');
    process.exit(0);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
