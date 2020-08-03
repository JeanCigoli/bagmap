
export const jsonImagesFormat = (images) => {
  const arrayImages = [];

  images.forEach(image => {
    arrayImages.push({
      filename: image.image.name,
      mimeType: image.image.type,
      base64: image.preview,
    });
  });

  return arrayImages;
};


export const jsonRegister = (person, address, user, upload) => {
  return {
    image: {
      filename: upload?.image?.name || "",
      mimeType: upload?.image?.type || "",
      base64: upload?.preview || "",
    },
    person: {
      username: user.username,
      password: user.password,
      email: person.email,
      image: user?.image || null,
      uid: person?.uid || null,
      authorization: person?.authorization || false,
      roles: [
        {
          idRoles: 1,
        },
      ],
      namePerson: person.namePerson,
      dateBirth: person.dateBirth,
      gender: person.gender,
      phonePerson: person.phonePerson,
      address: {
        street: address.street,
        number: address.number,
        city: {
          id: address.city,
        },
        zipcode: address.zipcode,
        state: {
          id: address.state,
        },
        neighborhood: address.neighborhood,
        complement: address.complement,
      },
    },
  };
};

export const jsonRoadMapRegister = (road, user, image, location) => {
  return {
    image: {
      filename: image.image.name,
      mimeType: image.image.type,
      base64: image.preview,
    },
    roadMaps: {
      name: road.roadName,
      description: road.description,
      days: road.days,
      latitude: location.lat,
      longitude: location.lng,
      person: {
        idUser: user.idUser,
      },
    },
  };
};

export const jsonPostsRegister = (post, user, image) => {
  return {
    images: jsonImagesFormat(image),
    post: {
      location: post.location,
      description: post.description,
      person: {
        idUser: user.idUser,
      },
    },
  };
};

export const jsonPlaceRoadRegister = (placeroad, road) => {
  const array = [];

  placeroad.map(place => {
    array.push({
      idPlace: place.idPlace,
      typeIdPlace: place.typeIdPlace,
      day: place.day,
      description: place.description,
      roadMap: {
        idRoadMaps: road.idRoadMaps,
      }
    });
  })

  return array;
};

export const jsonUserFormat = (person) => {
  return {
    idUser: person.idUser,
    namePerson: person.namePerson,
    image: person.image,
    roles: person.roles,
  };
};
