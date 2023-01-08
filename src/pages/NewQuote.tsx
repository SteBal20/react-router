import QuoteForm from "../components/quotes/QuoteForm";
import { QuoteType } from "../models/quote.types";

const NewQuote = () => {
  const addQuoteHandler = (quoteData: QuoteType) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} isLoading={false} />;
};

export default NewQuote;
