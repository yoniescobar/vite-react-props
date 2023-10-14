import { useState, useEffect } from 'react'

const ApiUsers = ({ url }) => {

    //Estado para almacenar los datos de las publicaciones
    const [posts, setPosts] = useState([])
    //Estado para almacenar la página actual
    const [currentPage, setCurrentPage] = useState(1)
    //Número de publicaciones por página
    const [postsPerPage] = useState(10)


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setPosts(data)
        console.log(data)

    }

    //Calculo para determinar que publicaciones mostrar en la pagina actual

    const indexOfLastPost = currentPage * postsPerPage // Aqui se determina el indice de la ultima publicacion
    const indexOfFirstPost = indexOfLastPost - postsPerPage // Aqui se determina el indice de la primera publicacion
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost) // Aqui se determina las publicaciones que se van a mostrar en la pagina actual

    //Funcion para cambiar de pagina

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <div className='container mt-5'>
            <h1>Api Users</h1>
            <div className="container">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Titulo</th>
                            <th>Contenido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentPosts.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <nav>
                <ul className="pagination">
                   {
                    Array.from({length: Math.ceil(posts.length / postsPerPage)}).map((_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1? 'active':''}`}>
                            <button onClick={() => paginate(index + 1)} className="page-link" >
                                {index + 1}
                            </button>
                        </li>
                    ))
                   }

                </ul>
            </nav>

        </div>
    )
}

export default ApiUsers
