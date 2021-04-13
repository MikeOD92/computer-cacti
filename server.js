require('dotenv').config();
const express =require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;
const Product = require('./models/product');


///////
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.json());


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

////////
mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('connected', ()=> console.log('mongoose connected'));


//Routes

//index
app.get('/', (req,res)=>{
    Product.find({}, (err, foundProducts) =>{
        if(!err){
            res
                .status(200)
                .render('Index', {
                    products: foundProducts
                })
        } else {
            res
                .status(400)
                .json(err)
        }
    } )
})
//new 
app.get('/new', (req,res)=>{
    res.render('New')
})

//delete
app.delete('/:id', (req,res)=>{
    Product.findByIdAndDelete(req.params.id, (err, deletedProduct)=>{
        if(!err){
            res.redirect('/')
        } else {
            res
                .status(400)
                .send(err)
        }
    })
})

//Update 
app.put('/:id', (req,res)=>{
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err)=>{
        if(!err){
            res.redirect(`/${req.params.id}`)
        } else {
            res
                .status(400)
                .send(err)
        }
    })
})
//create
app.post('/new', (req,res)=>{
    Product.create(req.body, (err, createdProduct)=>{
        if(!err){
            res.redirect('/')
        } else {
            res
                .status(400)
                .send(err)
        }
    })
})

//edit
app.get('/:id/edit', (req,res)=>{
    Product.findById(req.params.id, (err, foundProduct)=>{
        if(!err){
            res
                .status(200)
                .render('Edit', {
                    product: foundProduct
                })
        } else {
            res
                .status(400)
                .send(err)
        }
    })
})
//show
app.get('/:id', (req,res)=>{
    Product.findById(req.params.id, (err, foundProduct)=>{
        if(!err){
            res
                .status(200)
                .render('Show', {
                    product: foundProduct
                })
        } else {
            res
                .status(400)
                .send(err)
        }
    })
})

/// buy route 
app.post('/:id/buy', (req,res)=>{
    Product.findById(req.params.id,(err, foundProduct)=>{
        if(!err){  
            foundProduct.qty -= 1;
            foundProduct.save();
            res.render("Show",{
                product: foundProduct
            })
            //res.redirect(`/shop/${req.params.id}`)
        } else {
            console.log('me me no fun');
            res
                .status(400)
                .send(err)
        }
    })
})

app.listen(PORT, ()=> console.log('running'));