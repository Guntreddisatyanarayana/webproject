


const obj=[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  },
]




const Prop = () => {
  return (
    <div className="every">
     {
      obj.map((eachObj)=>{
          const { id,title,url,thumbnailUrl}=eachObj;
          return(
               <Mul key={id} 
               id={id} 
               title={title} 
               url={url}
                thumbnailUrl={thumbnailUrl}/>
          )
          

      })
     }
     </div>
  )
}


const Mul = (props) => {
     const {title,url,thumbnailUrl}=props;
  return (
    <div>
     <img style={{width:"150px"}}src={thumbnailUrl} alt='imgae' />
     <h1>{title}</h1>
     <a href={url}>details</a>
    </div>
  )
}
export default Mul;

export default Prop;

