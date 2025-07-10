import useProductquery from "../productquerystore"


const useProductendpoint = () => {
  const productquery = useProductquery(s=>s.productquery)
  const  {searchText, category}  = productquery

  let endpoint = '/products'

  if(searchText){
     endpoint = `/products/search?q=${searchText}`;
  }else if (category){
     endpoint = `/products/category/${category}`;
  }

  return {endpoint, productquery}
}

export default useProductendpoint