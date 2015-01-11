Template[getTemplate('post_item')].events({
  'click': function (event, template) {
    console.log('event', event);
    if (!$(event.currentTarget).is('a')) {
      var postId = template.data._id;
      Router.go('post_page', {_id: postId});
    }
  }
});
