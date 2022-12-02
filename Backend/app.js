const express=require("express")
var cors=require("cors")
const mongoose=require("mongoose")
const dotenv=require('dotenv');
const app=express();
dotenv.config(); 

const sliderRouter=require("./routes/routeSlider.js");
const categoryRouter=require("./routes/routeCategory.js");
const arrivalRouter=require("./routes/routeArrival.js");
const postRouter=require("./routes/routePost.js");
const instagramRouter=require("./routes/routeInstagram.js");
const logoRouter=require("./routes/routeLogo.js");
const settingRouter=require("./routes/routeSetting.js");
const expertRouter=require("./routes/routeExpert.js");
const quoteRouter=require("./routes/routeQuote.js");
const contactRouter=require("./routes/routeContact.js");


app.use(cors());
app.use(express.json());
app.use("/slider",sliderRouter);
app.use("/category",categoryRouter);
app.use("/arrival",arrivalRouter);
app.use("/post",postRouter);
app.use("/instagram",instagramRouter);
app.use("/logo",logoRouter);
app.use("/setting",settingRouter);
app.use("/expert",expertRouter);
app.use("/quote",quoteRouter);
app.use("/contact",contactRouter);

app.get('/*', (req, res) => {
    res.send(template({
        css: bundle.css,
        js: bundle.js,
    }));
});
 

const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error
    }
    };

    mongoose.connection.on("disconnected",()=>{
        console.log("mongoDB disconnected");
    });
    
    app.listen(5000,()=>{
        connect();
        console.log("Connected to backend!");
    } )