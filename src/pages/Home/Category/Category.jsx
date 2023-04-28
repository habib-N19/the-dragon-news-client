import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import NewsCard from '../Home/NewsCard/NewsCard'

const Category = () => {
  // to show dynamically the id name and info in dynamic routes
  const { id } = useParams()
  //   retriving data dynamically from loader
  const categoryNews = useLoaderData()

  return (
    <div>
      {id && <h2>this is a category news: {categoryNews.length}</h2>}
      {categoryNews.map(news => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  )
}

export default Category
