import React, { useEffect, useRef } from "react";
import useHttp from "../../hooks/useHttp";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./NewCommentForm.module.css";

const NewCommentForm: React.FC<{
  onAddedComment: () => void;
  quoteId: string | undefined;
}> = (props) => {
  const commentTextRef =
    useRef<HTMLTextAreaElement>() as React.MutableRefObject<HTMLTextAreaElement>;

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;
    sendRequest({
      commentData: { text: enteredText },
      quoteId: props.quoteId,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          id="comment"
          rows={5}
          ref={commentTextRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
