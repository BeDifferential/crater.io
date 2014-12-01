Template.craterHeader.helpers({
  canPost: function(){
    return canPost(Meteor.user());
  },

  tagline: function() {
    return getSetting('tagline');
  }
});
