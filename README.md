/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/:id -> See User
/users/logout -> Log out
/users/edit -> Edit my profile
/users/delete -> Delete my profile

/videos/:id -> See Video
/videos/:id/edit Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload

<!-- Simple Steps -->
<!-- set routes => /users /videos
set controllers => what you are going to do with the routes
set pug for each controller => res.render("pugtitle")
set mixin if needed => ex. each a in vids
				+video(a)

from watch -> edit => a(href=`${video.id}/edit`) Edit Video &rarr;
edit -> getEdit and postEdit. get is for searching and post is
when you interact with db set postEdit on forms -> app.use(express.urlencoded({ extended: true })); need to put this in server.js to transform
values in form -> js object that we can use

after this, if you want to change the title of the video after
clicking save, then
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);

redirect is for redirecting to watch -->
