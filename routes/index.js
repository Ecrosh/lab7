var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	projects["grid"]  = false;
  	res.render('index', projects);
  	var rand_num = Math.random();
    console.log(rand_num);
    
    if (rand_num > 0.5) 
    {
        projects["grid"] = false;
        res.render('index', projects);
    } 
    else
    {
        res.redirect('/grid');        
    }
};

exports.viewGrid = function(req, res){
	projects["grid"]  = true;
  	res.render('index', projects);
  	var rand_num = Math.random();
  	if (rand_num > 0.5) 
    {
        projects["grid"] = true;
        res.render('index', projects);
    } 
    else
    {
        res.redirect('/');
    }
};