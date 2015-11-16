import Ember from 'ember';

export function myHelper(params/*, hash*/) {
  let out = '';
  for (let i = 0; i < params.length; i++) {
    out += ' ' + params[i];
  }
  return out;
}

export default Ember.Helper.helper(myHelper);
