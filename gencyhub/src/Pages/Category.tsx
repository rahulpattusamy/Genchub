import useCategory from "../hooks/useCategory"


const Category = () => {
    const {data} = useCategory()
    console.log(data)
  return (
    <div>Category</div>
  )
}

export default Category