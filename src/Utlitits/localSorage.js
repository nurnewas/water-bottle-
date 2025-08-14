const getStoreCard = () => {
  const storeCardString = localStorage.getItem("card");
  if (storeCardString) {
    return JSON.parse(storeCardString);
  }
  return [];
};
const saveCardToLS = (card) => {
  const cardStringify = JSON.stringify(card);
  localStorage.setItem("card", cardStringify);
};
const addToLS = (id) => {
  const card = getStoreCard();
  card.push(id);
  saveCardToLS(card);
};

export { addToLS, getStoreCard };
