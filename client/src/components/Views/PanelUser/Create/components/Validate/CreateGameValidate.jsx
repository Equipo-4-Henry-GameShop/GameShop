export const validate = (val) => {
  const errors = {};

  if (val.name === "") {
    errors.name = "Missing enter name";
  } else {
    errors.name = "";
  }

  if (val.description  === "") {
    errors.description = "Need to add an description";
  } else {
    errors.description = "";
  }

  if (val.releaseDate === "") {
    errors.releaseDate = "Need to add an date";
  } else {
    errors.releaseDate = "";
  }

  if (!val.image.length) {
    errors.image = "Need to add an image";
  } else {
    errors.image = "";
  }

  if (!val.screnShots.length) {
    errors.screnShots = "Need to add screenshot";
  } else {
    errors.screnShots = "";
  }

  if (!val.platform.length) {
    errors.platform = "Need to add an platform";
  } else {
    errors.platform = "";
  }
  
  if (!val.genres.length) {
    errors.genres = "Need to add an genre";
  } else {
    errors.genres = "";
  }

  if (!val.tags.length) {
    errors.tags = "Need to add an tag";
  } else {
    errors.tags = "";
  }

  return errors;
};
