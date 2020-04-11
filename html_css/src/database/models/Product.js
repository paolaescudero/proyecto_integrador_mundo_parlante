module.exports = (sequelize, dataTypes) => {
	const Product = sequelize.define('Products', {
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: dataTypes.INTEGER
		},
		name: {
			type: dataTypes.STRING
		},
		price: {
			type: dataTypes.INTEGER
		},
		image: {
			type: dataTypes.STRING
		},
		brand_id: {
			type: dataTypes.INTEGER
        },
        model: {
			type: dataTypes.STRING
		},
        description: {
			type: dataTypes.STRING
		},
        user_id: {
			type: dataTypes.INTEGER
		}
    }, 
    {
		// tableName: 'PELICULAS'
		timestamps: false
    });
    
    Product.associate = (models) => {
		Product.belongsTo(models.Brands, {
			as: 'brand',
			foreignKey: 'brand_id'
        });
        Product.belongsTo(models.Users, {
			as: 'user',
			foreignKey: 'user_id'
		});
    }

	return Product;
}
