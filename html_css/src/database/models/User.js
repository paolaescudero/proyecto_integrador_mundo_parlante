module.exports = (sequelize, dataTypes) => {
	const User = sequelize.define('Users', {
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: dataTypes.INTEGER
		},
		first_name: {
			type: dataTypes.STRING
		},
		last_name: {
			type: dataTypes.STRING
		},
		email: {
			type: dataTypes.STRING
		},
		password: {
			type: dataTypes.STRING
        },
        avatar: {
			type: dataTypes.STRING
		},
        role: {
			type: dataTypes.STRING
		}
    }, 
    {
		tableName: 'users',
		timestamps: false
	});
	
	return User;
};
