const express = require('express')
const morgan = require('morgan')
const app = express()
const { Cors } = require('./middlewares/cors')

app.use(Cors);

app.use(express.json({
  limit: '5mb',
  verify: (req, res, buf) => {
    req.rawBody = buf.toString();
  }
}))
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use('/api/v1/user', require('./routes/user.routes'))
app.use('/api/v1/auth', require('./routes/auth.routes'))
app.use('/api/v1/profile', require('./routes/profile.routes'));
app.use('/api/v1/contact', require('./routes/contact.routes'));
app.use('/api/v1/education', require('./routes/education.routes'));
app.get('/', (req,res)=>{
  res.status(200).json({msg: `Resume Builder Application! Use endpoints in format 'api/v1/* for queries'`})
})

module.exports=app
