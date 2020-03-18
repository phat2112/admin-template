const listShoesData = state => state['shoes'].get('listShoes');
const listShoeItem = state => state['shoesItem'].get('listShoeItems');
const setShoeData = state =>  state['shoeId'].get('shoeData');

export const ShoeSelectors = {
    listShoesData,
    listShoeItem,
    setShoeData,
}