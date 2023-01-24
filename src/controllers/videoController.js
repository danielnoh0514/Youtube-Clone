let videos = [
  {
    title: "First Video",
    rating: 3,
    comments: 4,
    createdAt: "2019-01_01",
    views: 2,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 3,
    comments: 4,
    createdAt: "2019-01_01",
    views: 2,
    id: 2,
  },
];

export const homePage = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];

  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body; // you need to put name in input
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const newVideo = {
    title: req.body.title,
    rating: 3,
    comments: 4,
    createdAt: "just now",
    views: 2,
    id: 3,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
