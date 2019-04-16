var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  console.log(this.$node, 'check here');
  this.$node.append('<img src="https://www.gifmania.co.uk/Manga-Anime/Pokemon/Ghost/Gastly/gastly1-30908.gif" alt="Gastly (Pokémon) - GIFMANIA" />');
/* <span class ="ghastly"></span> */

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  var oldStep = Dancer.prototype.step.bind(this);
  oldStep();

  this.$node.fadeToggle("slow", "linear");
};
