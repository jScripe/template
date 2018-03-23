const smartgrid = require('smart-grid');

const settings = {
	filename: '_smartgrid',
	outputStyle: 'less',
	container: {
		maxWidth: '960px',
		fields: '30px'
	},
	breakPoints: {

	},
	oldSizeStyle: false,
	properties: []
};

smartgrid('./app/less/', settings)