import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import { QuoteType } from "../models/quote.types";
import { addQuote } from "../lib/api";
import useHttp from "../hooks/useHttp";
import { useEffect } from "react";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);

  const addQuoteHandler = (quoteData: QuoteType) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm
      onAddQuote={addQuoteHandler}
      isLoading={status === "pending"}
    />
  );
};

export default NewQuote;
