module.exports = (sequelize, dataTypes) => {
	const Brand = sequelize.define('Brands', {
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: dataTypes.INTEGER
		},
		name: {
			type: dataTypes.STRING
		}
    }, 
    {
		tableName: 'brands',
		timestamps: false
    });
   
	
	return Brand;
};
