export const showModal = (data, id) => {
  return {
    type: "@modal/SHOW_MODAL", payload: { id, data}
  };
};

