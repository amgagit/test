import Ember from 'ember';

var wife = Ember.Object.create({
  householdIncome: 80000
});

var husband = Ember.Object.extend({
  householdIncome: Ember.computed.alias('wife.householdIncome')
});

husband.get('householdIncome'); // 80000

// Someone gets raise.
wife.set('householdIncome', 90000);
console.log(husband.get('householdIncome')); // should print 90000
