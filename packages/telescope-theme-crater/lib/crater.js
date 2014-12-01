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

postHeading = [
  {
    template: 'postTitle',
    order: 1
  }
]

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
]

templates['nav'] = 'craterNav';

templates['postCommentsLink'] = 'craterPostCommentsLink';
templates['postDiscuss'] = 'craterPostDiscuss';
templates['postDomain'] = 'craterPostDomain';
templates['postInfo'] = 'craterPostInfo';
templates['postUpvote'] = 'craterPostUpvote';

templates['postsLoadMore'] = 'craterPostsLoadMore';

heroModules.unshift({
  template: 'craterHeader'
});
