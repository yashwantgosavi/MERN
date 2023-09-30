module.exports.profile = function (req, res) {
 return res.render('home', {
    title: 'checking'
 });
};

module.exports.about = function(req, res){
    return res.end('home',{
        title:'about'
    });
};