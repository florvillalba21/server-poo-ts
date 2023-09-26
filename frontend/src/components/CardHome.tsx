import {Link} from 'react-router-dom'

type Card = {
    name: string,
    description: string,
    url: string
}

export const CardHome = ({name, description, url}: Card ) => {

    return (
        <div className="card" style={{ width: 300, margin:20 }}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <Link to={url} className="btn btn-primary">Ir</Link>
            </div>
        </div>
    )
}