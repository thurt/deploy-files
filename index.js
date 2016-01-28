'use strict';

function deployFiles(deploy_dir, deploy_arr) {
  const join = require('path').join;
  const writeFileP = require('denodeify')(require('fs').writeFile);

  let promises = deploy_arr.map(item => {
    return writeFileP(join(deploy_dir, item.filename), item.data);
  });

  return Promise.all(promises);
}

module.exports = deployFiles;
