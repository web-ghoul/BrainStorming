exports.sanitizeUser = (user) => {
  return {
    _id: user._id,
    Name: user.Name,
    Email: user.Email,
    Teams: user.Teams,
    Image: user.Image,
    BackgroundImage: user.BackgroundImage,
  };
};
