Template[getTemplate('post_item')].events({
  'click': function (event, template) {
    var $target = $(event.target);
    if ($target.hasClass('post') || $target.hasClass('post-heading') || $target.hasClass('post-info') || $target.hasClass('post-meta')) {
      var postId = template.data._id;
      Router.go('post_page', {_id: postId});
    }
  }
});
