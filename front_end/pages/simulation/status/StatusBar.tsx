

const StatusBar = () => {


  return (
    <div className="statusbar">
      <span className="statusbar__status">Health:</span>
      <span className="statusbar__status">Hunger:</span>
      <span className="statusbar__status">Thirst:</span>
      <button className="statusbar__inventory">Bag</button>
    </div>
    
  )
}

export default StatusBar