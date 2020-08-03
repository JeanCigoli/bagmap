


export const jsonRegister = (person, address, user, upload) => {
  return {
    image: {
      filename: "user.jpg",
      mimeType: "image/jpg",
      base64: 'data:image/jpg;base64,' + upload.base64,
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
          idRoles: 1
        }
      ],
      namePerson: person.namePerson,
      dateBirth: person.dateBirth.split('/').reverse().join('-'),
      gender: person.gender,
      phonePerson: person.phonePerson,
      address: {
        street: address.street,
        number: address.number,
        city: {
          id: address.city 
        },
        zipcode: address.zipcode,
        state: {
          id: address.state
        },
        neighborhood: address.neighborhood,
        complement: address.complement
      }
    }
  }
}

export const jsonUserFormat = (person) => {
  return {
    idUser: person.idUser,
    namePerson: person.namePerson,
    image: person.image,
    roles: person.roles,
  }
}