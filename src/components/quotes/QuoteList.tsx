import { Fragment } from "react";
import { QuoteType } from "../../models/quote.types";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList: React.FC<{ quotes: QuoteType[] }> = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
