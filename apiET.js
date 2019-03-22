
var express = require('express'); 

var app = express(); 
var port = 4000; 

var myRouter = express.Router();
var bodyParser = require("body-parser"); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 

myRouter.route('/extrater')

.get(function(req,res){ 
	  res.json({message : "Liste toutes les extraterrestres",
              	    nom : req.query.nom,
                 prenom : req.query.prenom, 
                    age : req.query.age, 	
                   race : req.query.race, 	
             nourriture	: req.query.nourriture,				   
				methode : req.method});
})

.post(function(req,res){
      res.json({message : "Ajoute un extraterrestre à la liste",
	                nom : req.body.nom, 
				 prenom : req.query.prenom,
				    age : req.query.age, 	
                   race : req.query.race,
			nourriture	: req.query.nourriture,	
                methode : req.method});
})

.put(function(req,res){ 
      res.json({message : "Mise à jour des informations d'un  extraterrestre dans la liste", methode : req.method});
})

.delete(function(req,res){ 
res.json({message : "Suppression d'un extraterrestre dans la liste", methode : req.method});  
}); 

myRouter.route('/')
.all(function(req,res){ 
      res.json({message : "Bienvenue sur l'API du carnet d'adresse des E.T", methode : req.method});
});

myRouter.route('/extrater/:extrater_id')
.get(function(req,res){ 
	  res.json({message : "Vous souhaitez accéder aux informations de l'extraterrestres n°" + req.params.extrater_id});
})
.put(function(req,res){ 
	  res.json({message : "Vous souhaitez modifier les informations de l'extraterrestres n°" + req.params.extrater_id});
})
.delete(function(req,res){ 
	  res.json({message : "Vous souhaitez supprimer l'extraterrestres n°" + req.params.extrater_id});
});

app.use(myRouter); 
 
app.listen(port, function(){
	console.log("Mon serveur fonctionne sur http://"+":"+port+"\n"); 
});