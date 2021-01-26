module.exports = (sequelize, dataTypes) => {
	const Comment = sequelize.define('Comments', {
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: dataTypes.INTEGER
		},
		product_id: {
			type: dataTypes.INTEGER
		},
		user_id: {
			type: dataTypes.INTEGER
		},
		name: {
			type: dataTypes.STRING
        },
        email: {
			type: dataTypes.STRING
        },
        comment: {
			type: dataTypes.STRING
		}
		
    }, 
    {
		tableName: 'comments',
		timestamps: true
    });
    
    Comment.associate = (models) => {
		Comment.belongsTo(models.Products, {
			as: 'product',
			foreignKey: 'product_id'
        });
        Comment.belongsTo(models.Users, {
			as: 'user',
			foreignKey: 'user_id'
		});
    }

	return Comment;
}
