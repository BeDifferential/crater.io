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

// postModules = [
// {
//   template: 'postUpvote',
//   position: 'left-left'
// },
// {
//   template: 'postContent',
//   position: 'center-center'
// },
// {
//   template: 'postDiscuss',
//   position: 'right-right'
// }
// ];
//
// postHeading = [
//   {
//     template: 'postTitle',
//     order: 1
//   }
// ];
//
// postMeta = [
//   {
//     template: 'postDomain',
//     order: 1
//   },
//   {
//     template: 'postInfo',
//     order: 3
//   },
//   {
//     template: 'postAdmin',
//     order: 5
//   }
// ];

postModules = [
  {
    template: 'postUpvote',
    order: 1
  },
  {
    template: 'postContent',
    order: 5
  },
  {
    template: 'postAvatars',
    order: 30
  },
  {
    template: 'postDiscuss',
    order: 40
  }
];

postThumbnail = [];

postHeading = [
  {
    template: 'postTitle',
    order: 10
  }
];

postMeta = [
  {
    template: 'postDomain',
    order: 10
  },
  {
    template: 'postInfo',
    order: 20
  },
  {
    template: 'postCommentsLink',
    order: 30
  },
  {
    template: 'postAdmin',
    order: 50
  }
]

templates['layout']               = 'craterLayout';
templates['footer']               = 'craterFooter';

templates['nav']                  = 'craterNav';
templates['viewsMenu']            = 'craterViewsMenu';

templates['comment_item']         = 'craterCommentItem';

templates['postActions']          = 'craterPostActions';
templates['postAdmin']            = 'craterPostAdmin';
templates['postAvatars']          = 'craterPostAvatars';
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
