function postComments(state = [], action) {
  switch (action.type) {
      case "ADD_COMMENT":
        //return existing with the new comment
          return [...state, {
              user:action.author,
              text:action.comment
          }];
      case "REMOVE_COMMENT":
        console.log('removing a comment');
        //return w/o the deleted comment
        return [
            //from the start to the onwe we want to delete
            ...state.slice(0,action.i),
            //after the deleted one, to the end
            ...state.slice(action.i + 1),
        ]
        return state;
    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      //take current state
      ...state,
      //overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;
