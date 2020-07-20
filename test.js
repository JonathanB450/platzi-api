const app = require('./src/index')

app('Jonathan_Buitrago')
.then(response => console.log(response))
.catch(err => console.log(err))