const express = require('express')
const mongoose = require('mongoose')
const app = express()
const methodOverride = require('method-override')
//pulling in array of data
const cyberSeed = require('./models/cyberseed.js')
const CyberSchema = require('./models/cyberschema.js')

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static(__dirname + "/public"))


//seed app.get('/)
                            //seeding
//Passing in cyberSeed to create. 
app.post('/cyberSeed', (req,res)=>{
    CyberSchema.create(CyberSeed, (error, cyberEntry)=> {
        console.log(cyberEntry)
        res.redirect('/') //accepting string
    })
})

                          ///get

app.get('/cyber', (req, res) => {
    CyberSchema.find({}, (error, allCyberPost) => {
        res.render('index.ejs', {data: allCyberPost})
    })
})

app.get('/', (req, res) => {
    res.render('new.ejs')
})

app.get('/cyber/:id',(req,res) => {
    CyberSchema.findById(req.params.id, (err, foundEntry) => {
        res.render('show.ejs' , {
            entry: foundEntry
        })
    })
})


// app.get('/:id/edit', (req,res) => {
//     CyberSchema.findById(req.params.id, (err, editedCyberPost) =>{
//         res.render('edit.ejs', {
//             editPost: editedCyberPost
//         })
//     })
// })

                          //Put routes

// app.delete('/:id', (req,res) => {
//     CyberSchema.findByIdAndRemove(req.params.id, (err,data) => {
//         res.redirect('/cyber')
//     })
// })
// app.put('/netflix/:id', (req,res) => {
//     CyberSchema.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel) => {
  
//         res.redirect(`/cyber`)
//     })
// })

// app.post('/cyber', (req, res) =>{
//     CyberSchema.create(req.body, (error, entry )=> {
//         console.log(req.body)
//         res.redirect('/cyber')
// })
// });




// app.get('/', (req, res) => {
//     res.render('new.ejs')
// })

///////Funding db

app.listen(3000, ()=>{
    console.log('listening');
});

//connects mongoose to mongo for  sub DB, if no db auto make. 
mongoose.connect('mongodb://localhost:27017/CyberData', () => {
  console.log('The connection with mongod is established')
})


        //creating database
// CyberSchema.create(cyberSeed, (error, createdCyberSeed) => {
//     if (error) {
//     console.log(error.message)
// }
//     else { 
//     console.log(createdCyberSeed)
// }
// })