import { DRAW_ADD_ITEM, DRAW_LOAD_ITEM } from "../constants";

const items = (state = [], action) => {
  switch (action.type) {
    case DRAW_LOAD_ITEM:
      return action.items.map((item) => {
        return {
          id: item._id,
          title: item.title,
          rate: item.rate,
          description: item.description,
          price: item.price,
          brand: item.brand,
          detailProduct: item.detailProduct,
          image: item.image,
          sent: true,
        };
      });

      case DRAW_ADD_ITEM:
        return [
            ...state,
            {
              title: action.title,
              rate: action.rate,
              description: action.description,
              price: action.price,
              brand: action.brand,
              detailProduct: action.detailProduct,
              image: action.image,
              sent: true,
            }
        ]

    default:
      return state;
  }
};

export default items;
