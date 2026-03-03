import Settings
  from "../models/Settings.js";

import { asyncHandler }
  from "../utils/asyncHandler.js";

/* GET SETTINGS */
export const getSettings =
  asyncHandler(async (req, res) => {

    const settings =
      await Settings.findOne();

    res.json(settings);

  });

/* UPDATE SETTINGS */
export const updateSettings =
  asyncHandler(async (req, res) => {

    const settings =
      await Settings.findOneAndUpdate(

        {},           // single doc

        req.body,

        {
          new: true,
          upsert: true
        }

      );

    res.json(settings);

  });