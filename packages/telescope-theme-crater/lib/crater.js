themeSettings.useDropdowns = false;

primaryNav = ['viewsMenu'];
secondaryNav = ['notificationsMenu', 'userMenu'];

viewNav = [
  {
    route: 'posts_top',
    label: 'Trending'
  },
  {
    route: 'posts_new',
    label: 'Recent'
  }
];

postModules = [
{
  template: 'postUpvote',
  position: 'left-left'
},
{
  template: 'postContent',
  position: 'center-center'
},
{
  template: 'postDiscuss',
  position: 'right-right'
}
];

postHeading = [
  {
    template: 'postTitle',
    order: 1
  }
];

postMeta = [
  {
    template: 'postDomain',
    order: 1
  },
  {
    template: 'postInfo',
    order: 3
  },
  {
    template: 'postAdmin',
    order: 5
  }
];

templates['layout']               = 'craterLayout';
templates['footer']               = 'craterFooter';

templates['nav']                  = 'craterNav';
templates['viewsMenu']            = 'craterViewsMenu';

templates['postActions']          = 'craterPostActions';
templates['postAdmin']            = 'craterPostAdmin';
templates['postCategories']       = 'craterPostCategories';
templates['postCommentsLink']     = 'craterPostCommentsLink';
templates['postDiscuss']          = 'craterPostDiscuss';
templates['postDomain']           = 'craterPostDomain';
templates['postInfo']             = 'craterPostInfo';
templates['postUpvote']           = 'craterPostUpvote';

templates['post_body']            = 'craterPostBody';
templates['post_edit']            = 'craterPostEdit';
templates['postsLoadMore']        = 'craterPostsLoadMore';
templates['post_submit']          = 'craterPostSubmit';

// heroModules.unshift({
//   template: 'craterHeader'
// });
