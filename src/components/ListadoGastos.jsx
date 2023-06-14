import Gasto from "./Gasto"

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto, gastosFiltrados, filtro }) => {
  return (
    <div className="contenedor listado-gastos">
      
      { filtro ? (
          <>
            <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
            {gastosFiltrados.map(gasto => (
              <Gasto
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
              />
          ))}
          </>
          ) : (
            <>
            <h2>{gastos.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
                {gastos.map(gasto => (
                  <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                  />
                ))}
            </>


          )

      }
      
    </div>
  )
}

export default ListadoGastos