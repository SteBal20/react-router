import { QuoteType } from "../../models/quote.types";
import classes from "./HighlightedQuote.module.css";

const HighlightedQuote: React.FC<QuoteType> = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
