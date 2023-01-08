import React, { useRef } from "react";
import { QuoteType } from "../../models/quote.types";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm: React.FC<{
  isLoading: boolean;
  onAddQuote: (quote: QuoteType) => void;
}> = (props) => {
  const authorInputRef =
    useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
  const textInputRef =
    useRef<HTMLTextAreaElement>() as React.MutableRefObject<HTMLTextAreaElement>;

  function submitFormHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows={5} ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
