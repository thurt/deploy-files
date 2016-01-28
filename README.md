Deploy an array of javascript strings into individual files in a directory.
Returns a promise. The promise fulfills to undefined.

``` javascript
var deployFiles = require('deploy-files')
var deploy_arr = [
  {
    filename: 'something.json',
    data: JSON.stringify(js_variable) // or any other string data!
  },
  {
    filename: 'something.txt',
    data: 'Something to put in a file'
  }
]

deployFiles('/path/to/deploy/dir', deploy_arr)
  .then(_ => { console.log('All done!') })
  .catch(err => { console.log('You got problems: ', err.message)
```