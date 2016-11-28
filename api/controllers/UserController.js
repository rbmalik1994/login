module.exports = {
    getUsers: function(req, res) {
        Service.getUsers(function(users) {
            res.json(users)
        })
    },
    addUser: function(req, res) {
        console.log(req.body);
        var name =  req.param('formData.name');
        var email =  req.param('formData.email');
        var password =  req.param('formData.password');

           user.create({
             name:'r',
             email:'r@r',
             password:'aa'
        //   // }).exec(function(err, todo) {
        //   //   if(err) throw err;
        //   // return res.json({ok:'su'});
          })



    }

}
