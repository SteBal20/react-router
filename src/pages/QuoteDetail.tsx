import { Fragment } from "react";
import { Outlet, Route, Routes, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  {
    id: "q2",
    author: "Maximilian",
    text: "Learning React is great!",
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(
    (quote) => quote.id === params.quoteId
  );

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes>
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
