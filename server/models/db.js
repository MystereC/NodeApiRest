const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err) => {
    if (!err) { 
	console.log('succes de la connection à MongoDB '); 
	}
    else {
		console.log('Erreur de connection à MongoDB : ' + JSON.stringify(err, undefined, 2)); }
});


require('./user.model');