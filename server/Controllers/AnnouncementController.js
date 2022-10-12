import AnnouncementModel from "../Models/announcementModel.js";

// Create new announcements
export const postAnnouncement = async (req, res) => {
  const { title, description,subject } = req.body;
  const newAnnouncement = new AnnouncementModel(req.body);
  if (!title || !description || !subject)
    return res.status(400).json("Title,Description or subject not entered.");
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


export const deleteAnnouncement = async (req, res) => {
  const id = req.params.id;

  try {
    const announcement = await AnnouncementModel.findById(id);
    await announcement.deleteOne();
    res.status(200).json("Announcement deleted successfully");
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
