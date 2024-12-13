import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Comment {
  id: number;
  title: string;
  description: string;
  //   user: string;
  //   home: string;
  //   status: number;
  //   answer: Comment[];
}

interface CommentsContextType {
  comments: Comment[];
  addComment: (title: string, description: string) => void;
  removeComment: (id: number) => void;
}

const CommentsContext = createContext<CommentsContextType | undefined>(
  undefined
);

interface CommentsProviderProps {
  children: ReactNode;
}

export const CommentsProvider: React.FC<CommentsProviderProps> = ({
  children,
}) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      title: "تست 1",
      description: "بود ..احسینتتتت بود و فلان ...و .....",
      //   user: "ممد بادی",
      //   home: "خونه زعفرانیه",
      //   status: 0,
      //   answer: [],
    },
  ]);

  const addComment = (title: string, description: string) => {
    const newComment = { id: Date.now(), title, description };
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const removeComment = (id: number) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== id)
    );
  };

  return (
    <CommentsContext.Provider value={{ comments, addComment, removeComment }}>
      {children}
    </CommentsContext.Provider>
  );
};

export const useCommentsContext = () => {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error(
      "useCommentsContext must be used within a CommentsProvider"
    );
  }
  return context;
};
