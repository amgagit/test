import Ember from 'ember';

export function myHelper(params/*, hash*/) {
  let len = params.length;

  return params;
}

export default Ember.Helper.helper(myHelper);
