const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
	 pseudo: {
        type: String,
        required: 'le pseudo est requis',
        unique: true,
		minlength : [4,'4 caracteres minimum']
    },
     nom: {
        type: String,
        required: 'le Nom  est requis '
    },
	 prenom: {
        type: String,
        required: ' le Prenom est requis '
    },
	 age: {
        type: String
    },
	famille: {
        type: String
    },
	
	race: {
        type: String
    },
	nourriture: {
        type: String
    },
   
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength : [4,'4 caracteres minimum']
    },
    saltSecret: String
});


// Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

mongoose.model('User', userSchema);