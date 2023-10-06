module.exports.home=function(req, res){
    return res.render('home', {
        title: 'home'
    });
}

// module.exports.signUp=function(req, res){
//     return res.render('home', {
//         title: 'sign-Up'
//     });
// }