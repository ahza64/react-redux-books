//state is not app state, only state that this reducer is responsible
export default function (state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
