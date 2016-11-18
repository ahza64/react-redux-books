
export function selectBook (book) {
  //selectBook is an ActionCreator, return an action with and object with a type propery
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
