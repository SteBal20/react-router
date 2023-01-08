import { Link } from "react-router-dom";
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
      <Link className="btn" to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
