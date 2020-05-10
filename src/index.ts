import express, {Request, Response} from "express"
import mongoose from "mongoose"
import car_description from "./car_description.model";
import bodyParser from "body-parser"
import car_user from "./car_user.model";
import car_categoryModel from "./car_category.model";
import car_category from "./car_category.model";
import car_booking from "./car_booking.models";
import car_user_profile from "./car_user_profile.model";

const app = express();
app.use(bodyParser.json());
const uri = "mongodb://localhost:27017/Agence"
mongoose.connect(uri,(err)=>{
    if(err) console.log(err);
    else console.log("success");
});

app.get("/",(req,resp)=>{
    resp.send("Hello Express");
});
app.get("/cardescription",(req:Request,resp:Response)=>{
    car_description.find((err,cardescription)=>{
        if(err) resp.status(500).send(err)
        else resp.send(cardescription)
        }
    )

})

app.get("/cardescription/:id",(req:Request,resp:Response)=>{
    car_description.findById(req.params.id ,(err,cardescription)=>{
            if(err) resp.status(500).send(err)
            else resp.send(cardescription)
        }
    )

})


app.post("/cardescription",(req:Request,resp:Response)=>{
   let cardescription = new car_description(req.body);
   cardescription.save(err=>{
       if(err) resp.status(500).send(err)
       else resp.send(cardescription)
   })

})

app.put("/cardescription/:id",(req:Request,resp:Response)=>{
    car_description.findByIdAndUpdate( req.params.id,req.body,(err)=>{
        if(err) resp.status(500).send(err)
        else resp.send("car modifié")
    })

})

app.delete("/cardescription/:id",(req:Request,resp:Response)=>{
    car_description.findByIdAndRemove( req.params.id,(err)=>{
        if(err) resp.status(500).send(err)
        else resp.send("car supprimé")
    })

})
/* GET http://localhost:8058/pcardescription?page=1&size=5 */
app.get("/pcardescription",(req:Request,resp:Response)=>{
    let p:number=parseInt(req.query.page || 1);
    let size:number=parseInt(req.query.size || 5);
    car_description.paginate({},{page:p,limit:size},(err,cardescription)=>{
            if(err) resp.status(500).send(err)
            else resp.send(cardescription)
        }
    )

})

/* GET http://localhost:8058/cardescription-search?kw=page=1&size=5 */
app.get("/cardescription-search",(req:Request,resp:Response)=>{
    let p:number=parseInt(req.query.page || 1);
    let size:number=parseInt(req.query.size || 5);
    let kw :string= req.query.kw || "";
    car_description.paginate({name :{$regex:".*"+kw+".*"}},{page:p,limit:size},(err,cardescription)=>{
            if(err) resp.status(500).send(err)
            else resp.send(cardescription)
        }
    )

})

/*--------------------------------------------------car_user------------------------------------------------------------------*/
app.get("/caruser",(req:Request,resp:Response)=>{
    car_user.find((err,caruser)=>{
            if(err) resp.status(500).send(err)
            else resp.send(caruser)
        }
    )

})

app.get("/caruser/:id",(req:Request,resp:Response)=>{
    car_user.findById(req.params.id ,(err,caruser)=>{
            if(err) resp.status(500).send(err)
            else resp.send(caruser)
        }
    )

})


app.post("/caruser",(req:Request,resp:Response)=>{
    let caruser = new car_user(req.body);
    caruser.save(err=>{
        if(err) resp.status(500).send(err)
        else resp.send(caruser)
    })

})

app.put("/caruser/:id",(req:Request,resp:Response)=>{
    car_user.findByIdAndUpdate( req.params.id,req.body,(err)=>{
        if(err) resp.status(500).send(err)
        else resp.send("user modifié")
    })

})

app.delete("/caruser/:id",(req:Request,resp:Response)=>{
    car_user.findByIdAndRemove( req.params.id,(err)=>{
        if(err) resp.status(500).send(err)
        else resp.send("user supprimé")
    })

})
/* GET http://localhost:8058/pcaruser?page=1&size=5 */
app.get("/pcaruser",(req:Request,resp:Response)=>{
    let p:number=parseInt(req.query.page || 1);
    let size:number=parseInt(req.query.size || 5);
    car_user.paginate({},{page:p,limit:size},(err,caruser)=>{
            if(err) resp.status(500).send(err)
            else resp.send(caruser)
        }
    )

})

/* GET http://localhost:8058/caruser-search?kw=page=1&size=5 */
app.get("/caruser-search",(req:Request,resp:Response)=>{
    let p:number=parseInt(req.query.page || 1);
    let size:number=parseInt(req.query.size || 5);
    let kw :string= req.query.kw || "";
    car_user.paginate({name :{$regex:".*"+kw+".*"}},{page:p,limit:size},(err,caruser)=>{
            if(err) resp.status(500).send(err)
            else resp.send(caruser)
        }
    )

})
/*--------------------------------------------------car_category------------------------------------------------------------------*/
app.get("/carcategory",(req:Request,resp:Response)=>{
    car_category.find((err, carcategory)=>{
            if(err) resp.status(500).send(err)
            else resp.send(carcategory)
        }
    )

})

app.get("/carcategory/:id",(req:Request,resp:Response)=>{
    car_category.findById(req.params.id ,(err, carcategory)=>{
            if(err) resp.status(500).send(err)
            else resp.send(carcategory)
        }
    )

})


app.post("/carcategory",(req:Request,resp:Response)=>{
    let carcategory = new car_category(req.body);
    carcategory.save(err=>{
        if(err) resp.status(500).send(err)
        else resp.send(carcategory)
    })

})

app.put("/carcategory/:id",(req:Request,resp:Response)=>{
    car_category.findByIdAndUpdate( req.params.id,req.body,(err)=>{
        if(err) resp.status(500).send(err)
        else resp.send("categorie modifié")
    })

})

app.delete("/carcategory/:id",(req:Request,resp:Response)=>{
    car_category.findByIdAndRemove( req.params.id,(err)=>{
        if(err) resp.status(500).send(err)
        else resp.send("categorie supprimé")
    })

})
/* GET http://localhost:8058/pcarcategory?page=1&size=5 */
app.get("/pcarcategory",(req:Request,resp:Response)=>{
    let p:number=parseInt(req.query.page || 1);
    let size:number=parseInt(req.query.size || 5);
    car_category.paginate({},{page:p,limit:size},(err,carcategory)=>{
            if(err) resp.status(500).send(err)
            else resp.send(carcategory)
        }
    )

})

/* GET http://localhost:8058/carcategory-search?kw=page=1&size=5 */
app.get("/carcategory-search",(req:Request,resp:Response)=>{
    let p:number=parseInt(req.query.page || 1);
    let size:number=parseInt(req.query.size || 5);
    let kw :string= req.query.kw || "";
    car_category.paginate({name :{$regex:".*"+kw+".*"}},{page:p,limit:size},(err,carcategory)=>{
            if(err) resp.status(500).send(err)
            else resp.send(carcategory)
        }
    )

})
/*--------------------------------------------------car_booking------------------------------------------------------------------*/
app.get("/carbooking",(req:Request,resp:Response)=>{
    car_booking.find((err, carbooking)=>{
            if(err) resp.status(500).send(err)
            else resp.send(carbooking)
        }
    )

})

app.get("/carbooking/:id",(req:Request,resp:Response)=>{
    car_booking.findById(req.params.id ,(err, carbooking)=>{
            if(err) resp.status(500).send(err)
            else resp.send(carbooking)
        }
    )

})


app.post("/carbooking",(req:Request,resp:Response)=>{
    let carbooking = new car_booking(req.body);
    carbooking.save(err=>{
        if(err) resp.status(500).send(err)
        else resp.send(carbooking)
    })

})

app.put("/carbooking/:id",(req:Request,resp:Response)=>{
    car_booking.findByIdAndUpdate( req.params.id,req.body,(err)=>{
        if(err) resp.status(500).send(err)
        else resp.send("booking modifié")
    })

})

app.delete("/carbooking/:id",(req:Request,resp:Response)=>{
    car_booking.findByIdAndRemove( req.params.id,(err)=>{
        if(err) resp.status(500).send(err)
        else resp.send("booking supprimé")
    })

})
/* GET http://localhost:8058/pcarbooking?page=1&size=5 */
app.get("/pcarbooking",(req:Request,resp:Response)=>{
    let p:number=parseInt(req.query.page || 1);
    let size:number=parseInt(req.query.size || 5);
    car_booking.paginate({},{page:p,limit:size},(err,carbooking)=>{
            if(err) resp.status(500).send(err)
            else resp.send(carbooking)
        }
    )

})

/* GET http://localhost:8058/carbooking-search?kw=page=1&size=5 */
app.get("/carbooking-search",(req:Request,resp:Response)=>{
    let p:number=parseInt(req.query.page || 1);
    let size:number=parseInt(req.query.size || 5);
    let kw :string= req.query.kw || "";
    car_booking.paginate({order_number :{$regex:".*"+kw+".*"}},{page:p,limit:size},(err,carbooking)=>{
            if(err) resp.status(500).send(err)
            else resp.send(carbooking)
        }
    )

})
/*--------------------------------------------------car_user_profile------------------------------------------------------------------*/
app.get("/caruserprofile",(req:Request,resp:Response)=>{
    car_user_profile.find((err, caruserprofile)=>{
            if(err) resp.status(500).send(err)
            else resp.send(caruserprofile)
        }
    )

})

app.get("/caruserprofile/:id",(req:Request,resp:Response)=>{
    car_user_profile.findById(req.params.id ,(err, caruserprofile)=>{
            if(err) resp.status(500).send(err)
            else resp.send(caruserprofile)
        }
    )

})


app.post("/caruserprofile",(req:Request,resp:Response)=>{
    let caruserprofile = new car_user_profile(req.body);
    caruserprofile.save(err=>{
        if(err) resp.status(500).send(err)
        else resp.send(caruserprofile)
    })

})

app.put("/caruserprofile/:id",(req:Request,resp:Response)=>{
    car_user_profile.findByIdAndUpdate( req.params.id,req.body,(err)=>{
        if(err) resp.status(500).send(err)
        else resp.send("profil modifié")
    })

})

app.delete("/caruserprofile/:id",(req:Request,resp:Response)=>{
    car_user_profile.findByIdAndRemove( req.params.id,(err)=>{
        if(err) resp.status(500).send(err)
        else resp.send("profil supprimé")
    })

})
/* GET http://localhost:8058/pcaruserprofile?page=1&size=5 */
app.get("/pcaruserprofile",(req:Request,resp:Response)=>{
    let p:number=parseInt(req.query.page || 1);
    let size:number=parseInt(req.query.size || 5);
    car_user_profile.paginate({},{page:p,limit:size},(err,caruserprofile)=>{
            if(err) resp.status(500).send(err)
            else resp.send(caruserprofile)
        }
    )

})

/* GET http://localhost:8058/caruserprofile-search?kw=page=1&size=5 */
app.get("/caruserprofile-search",(req:Request,resp:Response)=>{
    let p:number=parseInt(req.query.page || 1);
    let size:number=parseInt(req.query.size || 5);
    let kw :string= req.query.kw || "";
    car_user_profile.paginate({car_user_id :{$regex:".*"+kw+".*"}},{page:p,limit:size},(err,caruserprofile)=>{
            if(err) resp.status(500).send(err)
            else resp.send(caruserprofile)
        }
    )

})

app.listen(8058,()=>{
    console.log("Server started");
})
