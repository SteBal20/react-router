import { QuoteType } from "../../models/quote.types";
import classes from "./QuoteItem.module.css";

const QuoteItem: React.FC<QuoteType> = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <a className="btn" href="/">
        View Fullscreen
      </a>
    </li>
  );
};

export default QuoteItem;
