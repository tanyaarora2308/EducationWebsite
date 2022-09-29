import AnnouncementModel from "../Models/announcementModel.js";

// Create new announcements
export const postAnnouncement = async (req, res) => {
  const { title, description } = req.body;
  const newAnnouncement = new AnnouncementModel(req.body);
  if (!title || !description)
    return res.status(400).json("Title or Description not entered.");
  try {
    await newAnnouncement.save();
    res.status(200).json(newAnnouncement);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a Announcement

export const getAnnouncement = async (req, res) => {
  const id = req.params.id;

  try {
    const Announcement = await AnnouncementModel.findById(id);
    res.status(200).json(Announcement);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Show all Announcements
export const showAllAnnouncements = async (req, res) => {
  AnnouncementModel.find({})
    .then((announcements) => {
      res.status(200).json(announcements);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
