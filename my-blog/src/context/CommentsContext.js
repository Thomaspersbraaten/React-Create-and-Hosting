import { createContext, useState } from "react";

export const CommentContext = createContext([null, () => {}]);
export const CommentProvider = (props) => {
  //   const [comments, setComments] = useLocalStorage("favourite", null);
  const [comments, setComments] = useState([]);
  return <CommentContext.Provider value={[comments, setComments]}>{props.children}</CommentContext.Provider>;
};
