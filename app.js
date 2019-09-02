const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shell = require('shelljs');

const port = 3001;
const defaultTargetBranch = 'develop';
const outsystemsStylesRepo = 'https://github.com/wilko55/outsystems-styles';

const envs = [
  'develop',
];

shell.exec(`./initialise-outsystems-styles.sh ${outsystemsStylesRepo}`);

envs.forEach(env => {
  app.use(`/${env}/`, express.static(`public/${env}`));
});

app.use(bodyParser.json())

app.post('/refresh', (req, res) => {
  const refParts = req.body.ref.split('/');
  let targetBranch = refParts[refParts.length];
  if (!targetBranch) {
    targetBranch = defaultTargetBranch;
  }

  shell.exec(`./build-styles.sh ${targetBranch}`);
});

app.listen(port, () => console.log(`App listening on port ${port}!`))