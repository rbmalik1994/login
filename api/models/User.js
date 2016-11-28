module.exports = {

	tableName: 'todo',

	attributes: {
	 	  name: {
	 		  type: 'string',
	 		  required: true
	 	  },

	 	  email: {
	 		  type:'string',
	 		  email:true
	 	  },

	 	  password:{
	 		  type:'string',
	 		  required: true
	 	  }

	   }
	 };
