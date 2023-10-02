module.exports.profile = function (req, res) {
 return res.render('userProfile', {
    title: 'checking',
    nav:'layout',
 });
};

module.exports.about = function(req, res){
    return res.render('layout',{
        title:'about'
    });
};