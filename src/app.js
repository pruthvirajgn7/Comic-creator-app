const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title : 'comic-creator-web-app'
    })
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/create',(req,res)=>{
    res.render('create')
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})