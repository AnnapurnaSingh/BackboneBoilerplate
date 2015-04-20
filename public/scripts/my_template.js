// create a template
var tpl = _.template("<h1>Hello, I am <%= name %>! My favorite movie is <%= movie %> and my favorite city is <%= city %> and I love WDI <%= reason %>. </h1>");

// some data object
var data = {
  name: "Annapurna",
  movie: "Shawshank Redemption",
  city: "Chicago",
  reason: "for all the Many Ways",
};
// replace $('body')'s html with it
console.log("first pass");
var rendered_template = tpl(data);
$('body').html(rendered_template);

// can also be written as this.. and changed the data
console.log("second pass");
data.movie = "There will be Blood";
$('body').html(tpl(data));
