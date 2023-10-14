

const Datos = ({nombre,edad,users}) => {
  return (
    <div className="container">
        <h1>Datos</h1>
        <p>Nombre: {nombre}</p>
        <p>Edad: {edad}</p>
        <h2>Mostrando datos de la Tabla de Alumnos</h2>
        
        
          <div className="container">
          <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nombre}</td>
                            <td>{user.edad}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
          </div>
    </div>
  )
}

export default Datos
