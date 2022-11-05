const Grid = () => {
    const gamegrid = new Array(551).fill({gridX:1, gridY: 0})
  return (
    <section className="gamegrid">
        {gamegrid && gamegrid.map((v,i) => <div key={i} className="gamegrid__cell"></div>)}

    </section>
  )
}

export default Grid
