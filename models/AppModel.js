let AppModel = Backbone.Model.extend({});

/***********************************************
    FROM: beer-review-backbone(master) 
************************************************/
// var AppModel = Backbone.Model.extend({
//   defaults: function () {
//     return {
//       beers: new BeersCollection(),

//       current_beer: null,

//       // either true or false
//       show_reviews: false
//     }
//   },

//   showReviews: function (id) {
//     var allBeers = this.get('beers');

//     var currentBeer = allBeers.findWhere({ id: id });

//     this.set('current_beer', currentBeer);
//     this.set('show_reviews', true);
//   },

//   showBeers: function () {
//     this.set('show_reviews', false);
//   }
// });