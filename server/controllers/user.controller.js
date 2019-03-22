const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => { 

    var user = new User();
	 user.nom = req.body.nom;
	 user.prenom = req.body.prenom;
	 user.pseudo = req.body.pseudo;
	 user.age = "18";
	 user.famille = "inconnue";
	 user.race = "inconnue";
	 user.nourriture =" inconnue";
	 user.password = req.body.password;
	 user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate pseudo found.']);
            else
                return next(err);
        }

    });

	
}