
const config = require('./config/config');
require('./config/database');
console.log(config);
const app = require('./app')

app.listen(config.PORT, ()=>{
  console.log(`Server running on port: ${config.PORT}`);
})
