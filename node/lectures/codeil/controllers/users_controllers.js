module.exports.profile = function (req, res) {
 return res.render('layout', {
    title: 'checking'
 });
};

module.exports.about = function(req, res){
    return res.end('layout',{
        title:'about'
    });
};