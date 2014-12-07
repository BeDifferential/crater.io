themeSettings.useDropdowns = false;

viewNav = [
  {
    route: 'posts_top',
    label: 'Top'
  },
  {
    route: 'posts_new',
    label: 'New'
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
    template: 'postInfo',
    order: 1
  },
  {
    template: 'postDomain',
    order: 3
  },
  {
    template: 'postAdmin',
    order: 5
  }
];

templates['nav'] = 'craterNav';

templates['postActions'] = 'craterPostActions';
templates['postAdmin'] = 'craterPostAdmin';
templates['postCategories'] = 'craterPostCategories';
templates['postCommentsLink'] = 'craterPostCommentsLink';
templates['postDiscuss'] = 'craterPostDiscuss';
templates['postDomain'] = 'craterPostDomain';
templates['postInfo'] = 'craterPostInfo';
templates['postUpvote'] = 'craterPostUpvote';

templates['post_body'] = 'craterPostBody';
templates['postsLoadMore'] = 'craterPostsLoadMore';

heroModules.unshift({
  template: 'craterHeader'
});
