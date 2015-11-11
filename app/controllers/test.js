import Ember from 'ember';

export default Ember.Controller.extend({

  firstName: 'Private',
  lastName: 'Ryan',
  man: true,
  isShowingBody : false,
  soldier: true,
  armyCompleted: false,
  utils: ["pistol", 'riffle', 'grenade', 'defuse', 'amo'],
  ranks: {
    'marine' : ['captain', 'general'],
    'private' : ['coloniel', 'lutenant', 'general']
  },
  logoUrl: "http://design.ubuntu.com/wp-content/uploads/ubuntu-logo32.png",
  isSelected: true,
  title : "toggle me",
  body: "receiving actions and toggling",
  favoriteBand : 'red hot chilli peppers',

  actions:{
    toggleBody() {
      this.toggleProperty('isShowingBody');
    },

    select(beverages) {
        alert(beverages.get('coffee'));
    },

    bandDidChange(newValue) {
      console.log(newValue);
    },

    updateFirstName(val) {
      console.log(val);
    }
  }

});




