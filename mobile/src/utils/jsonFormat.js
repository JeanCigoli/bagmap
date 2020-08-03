export const jsonImagesFormat = (images) => {
  const arrayImages = [];

  images.forEach((image) => {
    arrayImages.push({
      filename: "images.jpg",
      mimeType: "image/jpg",
      base64: "data:image/jpg;base64," + image.base64,
    });
  });

  return arrayImages;
};

export const jsonRegister = (user, person, upload) => {
  return {
    image: {
      filename: "user.jpg",
      mimeType: "image/jpg",
      base64: "data:image/jpg;base64," + upload.base64,
    },
    userEstablishment: {
      username: person.username,
      password: person.password,
      email: user.email,
      uid: null,
      authorization: false,
      roles: [
        {
          idRoles: 2,
        },
      ],
      nameUserEstablishment: user.nameUserEstablishment,
      phoneUserEstablishment: user.phoneUserEstablishment,
      positions: user.positions,
    },
  };
};

export const jsonRegisterEstablishment = (user, establishment) => {
  return {
    nameEstablishment: establishment.nameEstablishment,
    instagram: establishment.instagram,
    facebook: establishment.facebook,
    userEstablishment: {
      idUser: user.idUser,
    },
  };
};

export const jsonRegisterBranch = (establishment, branch, location, upload) => {
  return {
    mainImage: {
      filename: "establishment.jpg",
      mimeType: "image/jpg",
      base64: "data:image/jpg;base64," + upload[0].base64,
    },
    branch: {
      phoneBranch: branch.phoneBranch,
      nameBranch: branch.nameBranch,
      cnpj: branch.cnpj,
      latitude: location.latitude,
      longitude: location.longitude,
      typePlace: {
        id: branch.typePlace,
      },
      establishment: {
        idEstablishment: establishment.idEstablishment,
      },
    },
    images: jsonImagesFormat(upload),
  };
};

export const jsonUserFormat = (person) => {
  return {
    idUser: person.idUser,
    namePerson: person.nameUserEstablishment,
    image: person.image,
    roles: person.roles,
  };
};

export const jsonTypePlaceFormat = (typesPlaces) => {
  const arrayFormat = typesPlaces.types.map((type) => {
    return {
      value: type.id,
      label: type.name,
    };
  });

  return arrayFormat;
};
