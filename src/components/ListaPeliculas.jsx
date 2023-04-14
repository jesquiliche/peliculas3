import Link from "next/link";

const ListaPeliculas = async ({data,title}) => {
    
  
    return (
      <div className="container mt-5">
      <div className="container text-center mt-5 text-dark">
          <h2 className='text-dark'>{title}</h2>
        </div>
        <div className="row mt-5">
          {data.map((p) => (
            
            <div key={p.id} className="card col-lg-2 mx-auto mt-3 px-1">
              <div className="card-header text-center">
              <Link href={`/Detalle/${p.id}`}>
                <img src={`https://image.tmdb.org/t/p/w154${p.poster_path}`} alt={p.title} />
                </Link>
              </div>
              <div className="card-body mx-auto">
                <h6><Link href={`/Detalle/${p.id}`}>{p.title}</Link></h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default ListaPeliculas;
  