import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {flags: []}
  }

  componentDidMount() {
    fetch('https://deployment-demo-backend-042020.herokuapp.com/flags')
    .then(res => res.json())
    .then(flags => this.setState({flags: flags}))
  }

  render() {
    return (
      <div>
        <div className="header">My Favorite Flags</div>
        <div className="gallery">
          {this.state.flags.map(flag => {
            return (
              <div key={flag.id} className="card">
                <img src={flag.image}></img>
                <p>{flag.country}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App
