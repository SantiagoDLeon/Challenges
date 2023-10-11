
import UseFetchGifs from "./UseFetchGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const {images,isLoading}=UseFetchGifs(category)



  

  return (
    <>
        <h3>{category}</h3>
        <div className="card-grid">
          {
            images.map((image, key) => {
              return <GifItem key={key} {...image}></GifItem>
            })
          }
        </div>
    </>
  )
}

export default GifGrid;
