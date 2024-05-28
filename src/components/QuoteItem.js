function QuoteItem(props) {
  //console.log(props);
  const [id, name, description] = props;

  return (
    <div>
      <b>{description}</b>
    </div>
  );
}

export default QuoteItem;
