

const ProductCardSkeleton = () => {
  return (
    <div className=" card p-4 w-full bg-white rounded shadow animate-pulse">
      <div className="h-40 bg-gray-300 rounded mb-4" />
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4" />
      <div className="h-8 bg-gray-300 rounded w-full" />
    </div>
  );
};

export default ProductCardSkeleton;