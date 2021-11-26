const List = ({ products }) => {
  return (
    <div>
      {products.map((prod, index) => {
        return (
          <div key={index}>
            <div>Code: {prod.code}</div>
            <div>Name: {prod.name}</div>
            {/* <div>Description: {prod.description}</div> */}
            <div>Price: {prod.price}</div>
            <div>Discount: {prod.discount}</div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
