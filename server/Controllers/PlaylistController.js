import PlaylistModel from "../Models/PlaylistModel.js";

// Create new Playlist
export const postPlaylist = async (req, res) => {
  const { title, videoUrl,subject } = req.body;
  const newPlaylist = new PlaylistModel(req.body);
  if (!title) return res.status(400).json("Title not entered.");
  if (!videoUrl || !subject)
    return res.status(400).json("VideoLink or Subject Empty");
  try {
    await newPlaylist.save();
    res.status(200).json(newPlaylist);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a Playlist

export const getPlaylist = async (req, res) => {
  const id = req.params.id;

  try {
    const Playlist = await PlaylistModel.findById(id);
    res.status(200).json(Playlist);
  } catch (error) {
    res.status(500).json(error);
  }
};


// Delete an Playlist
export const deletePlaylist = async (req, res) => {
  const id = req.params.id;

  try {
    const Playlist = await PlaylistModel.findById(id);
      await Playlist.deleteOne();
      res.status(200).json("Playlist deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

//Show all Playlists
export const showAllPlaylists = async (req, res) => {
  PlaylistModel.find({})
    .then((Playlist) => {
      res.status(200).json(Playlist);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
