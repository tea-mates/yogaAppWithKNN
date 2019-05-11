const poses = [
  {
    name: 'Garland',
    imageUrl: 'https://i.imgur.com/16JLzA4.png',
    ActiveImage: 'https://i.imgur.com/bhP3AYN.png',
  },
  {
    name: 'Tree',
    imageUrl:
      'https://live.staticflickr.com/65535/33935797398_279eda570c_z.jpg',
  },
  {
    name: 'Half Moon',
    imageUrl: 'https://i.imgur.com/UxYp8RN.png',
    ActiveImage: 'https://i.imgur.com/9qbKcYs.png',
  },
  {
    name: 'Half Moon',
    imageUrl:
      'https://st4.depositphotos.com/5130171/19866/v/1600/depositphotos_198661934-stock-illustration-child-doing-yoga-half-moon.jpg',
  },
];

const GET_POSES = 'GET_POSES';

let initialState = {
  poses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSES:
      return poses;
    default:
      return state;
  }
};
