import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFindById } from '../query/ProductQuery';

const Detail = () => {
    const {id} = useParams();
    const {data:product  , isLoading , isError} = useFindById(id);
 if (isLoading) return <p>Loading post...</p>;
  if (isError) return<p>Error loading post!</p>;
  return (
    <div>Detail {id}
      <p>{product.title}</p>
    </div>

  )
}

export default Detail