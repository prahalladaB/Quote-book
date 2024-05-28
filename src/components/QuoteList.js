import QuoteItem from "./QuoteItem";

function QuoteList(props) {
  //console.log("list component", props);
  const { quotes } = props;
  return (
    <div className="bg-info">
      {quotes.length === 0 ? (
        <h5 className="p-2">
          No quotes found. <br /> Add your first quote
        </h5>
      ) : (
        <div>
          <h3 className="p-2">My Quotes - {quotes.length}</h3>
          {quotes.map((quote) => {
            return <QuoteItem key={quote.id} {...quote} />;
          })}
        </div>
      )}
    </div>
  );
}
export default QuoteList;
