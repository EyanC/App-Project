const express = require('express')
const mongoose = require('mongoose')
const app = express()
const methodOverride = require('method-override')
//pulling in array of data, importing seed data
const cyberseed = require('./models/cyberseed.js')
const Schema = require('./models/cyberschema.js')

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static(__dirname + "/public"))

//Works one empty object
// app.post('cyberseed', (req,res) => {
//     Schema.create(req.body, (error, newEntry) =>
//         res.render('/show') //accepting string
//     )
// })

app.get('/cyberseed', (req,res)=>{
    //passing seed to create
    Cyberseed.create(cyberseed, (error, data)=> {
        res.redirect('/')
    })
})


    // creating database from //schema// file.js 

// Schema.create(cyberseed, (error, cyberseed) => {
//     if (error) {
//         console.log(error.message)
// }
//     else { 
//         console.log(cyberseed)
//     }
// })

                          ///get

app.get('/cyber', (req, res) => {
    Schema.find({}, (error, allCyberPost) => {
        res.render('index.ejs', {
            data: allCyberPost
        })
        //reference data in index
    })
})

app.get('/new', (req, res) => {
    res.render('new.ejs')
})

app.get('/cyber/:id',(req,res) => {
    Schema.findById(req.params.id, (err, foundEntry) => {
        res.render('show.ejs' , {
            entry: foundEntry
        })
    })
})

//edit route
app.get('/:id/edit', (req,res) => {
    Schema.findById(req.params.id, (err, editedCyberPost) =>{
        res.render('edit.ejs', {
            editPost: editedCyberPost
        })
    })
})

//delete route
app.delete('/:id', (req,res) => {
    Schema.findByIdAndRemove(req.params.id, (err,data) => {
        res.redirect('/cyber')
    })
})

//Edit 
app.put('/Cyber/:id', (req,res) => {
    Schema.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel) => {
        res.render('/cyber', {entry: foundEntry})
    })
})


///////Funding db

app.listen(3000, ()=>{
    console.log('listening')
});

//connects mongoose to mongo for  sub DB, if no db auto make. 
mongoose.connect('mongodb://localhost:27017/CyberData', () => {
  console.log('The connection with mongod is established')
})


//         //creating database from //schema// file.js 
// Schema.create(cyberseed, (error, cyberseed) => {
//     if (error) {
//     console.log(error.message)
// }
//     else { 
//     console.log(cyberseed)
// }
// })






// seed app.get('/)
// // seeding
// // Passing in cyberSeed to create. 
// app.post('/cyberSeed', (req,res)=>{
//     CyberSchema.create(CyberSeed, (error, cyberEntry)=> {
//     //passing seed to create CyberSeed/data I need in db
//         console.log(cyberEntry)
//         res.redirect('/CyberSchema') 
//         //accepting string, and getting feedback from created content
//     })
// })

// app.post('/cyber', (req, res) =>{
//     CyberSchema.create(req.body, (error, entry )=> {
//         console.log(req.body)
//         res.redirect('/cyber')
// })
// });


//NOTES
//app.get seeding from html page
//request object/req (parameter, sting, object, body).........response object/res (once receive request...responds with res)
//Seeding db...Request to run create seed


// app.get('/cyberSeed', (req,res)=>{
//     //passing seed to create
//     CyberSeed.create(cyberSeed, (error, data)=> {
//         res.redirect('/')
//     })