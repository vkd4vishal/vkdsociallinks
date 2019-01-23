const express = require('express');
const hbs = require('hbs');

const portvkd = process.env.PORT || 5000;

var vkdsociallinks = express();

hbs.registerPartials(__dirname + '/views/partials')

vkdsociallinks.set('view engine','hbs'); 

// vkdsociallinks.use((req,res,next)=>{
//    res.render('maintenance.hbs',{
//       midnstMessage : 'Website under maintanance !',
//       pageTitle : 'Updating Website'
//    });
// });
vkdsociallinks.use(express.static(__dirname + '/public'));


hbs.registerHelper('getCurrentYear',()=>{

   return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text)=>{
 return text.toUpperCase();
});


vkdsociallinks.get('/',(req,res)=>{
   // response.send('<h1>Hello Express!<h1>');
   res.render('home.hbs',{
      welcomeMessage : 'Get all links at one place',
      pageTitle : 'VKD SOCIAL LINKS'
   });
});


vkdsociallinks.listen(portvkd,()=>{
console.log(`Server is up for port ${portvkd}`);
});