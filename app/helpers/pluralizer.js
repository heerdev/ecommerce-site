import Ember from 'ember';

export function pluralizer(params) {
  if (params[1] === "Box" && params[0] > 1) {
    return "Boxes";
  } else if (params[0] > 1) {
    return params[1] + 's';
  } else {
    return params[1];
  }
}

export default Ember.Helper.helper(pluralizer);