Package.describe({summary: "Crater.io Theme"});

Package.onUse(function (api) {

  api.use(['telescope-lib', 'telescope-base'], ['client', 'server']);

  api.use(['templating', 'less'], 'client');

  api.add_files([
    'lib/crater.js',
  ], ['client', 'server']);

  api.add_files([
    'lib/client/stylesheets/variables.import.less',
    'lib/client/stylesheets/mixins.import.less',
    'lib/client/stylesheets/lib/avatars.import.less',
    'lib/client/stylesheets/lib/buttons.import.less',
    'lib/client/stylesheets/lib/forms.import.less',
    'lib/client/stylesheets/lib/typography.import.less',
    'lib/client/stylesheets/crater.less'
  ], ['client']);

  api.add_files([
    'lib/client/templates/posts/modules/post_comments_link.html',
    'lib/client/templates/posts/modules/post_discuss.html',
    'lib/client/templates/posts/modules/post_domain.html',
    'lib/client/templates/posts/modules/post_info.html',
    'lib/client/templates/posts/modules/post_upvote.html',
    'lib/client/templates/posts/posts_load_more.html',
    'lib/client/templates/nav/header.html',
    'lib/client/templates/nav/header.js',
    'lib/client/templates/nav/nav.html',
    'lib/client/templates/nav/submit_button.html'
  ], ['client']);

  api.export([
    'viewNav',
    'postHeading',
    'postMeta',
    'heroModules'
  ]);

});
