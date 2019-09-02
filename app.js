const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shell = require('shelljs');

const port = 3001;
const defaultTargetBranch = 'develop';
const outsystemsStylesRepo = 'https://github.com/wilko55/outsystems-styles';

const path = 'styles';

shell.exec(`./initialise-outsystems-styles.sh ${outsystemsStylesRepo}`);

app.use(`/${path}/`, express.static(`styles`));

app.use(bodyParser.json())

app.post('/refresh', (req, res) => {
  // set up webhook for correct env remote
  const refParts = req.body.ref.split('/');
  let targetBranch = refParts[refParts.length];
  if (!targetBranch) {
    targetBranch = defaultTargetBranch;
  }

  shell.exec(`./build-styles.sh ${targetBranch}`);
});

app.listen(port, () => console.log(`App listening on port ${port}!`))