import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      const params = new URLSearchParams({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        APPID: 'f816d7f39052e3a98b21952097a43076',
      });

      fetch(`http://api.openweathermap.org/data/2.5/weather?${params}`)
        .then(res => res.json())
        .then(data => this.setState({ weather: data }));
    });
  }

  render() {
    let content = <div></div>;

    if (this.state.weather) {
      const weather = this.state.weather;
      const temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
        <p>{weather.name}</p>
        <p>{temp.toFixed(1)} degrees</p>
      </div>;
    } else {
      content = <div className='loading'>loading weather...</div>;
    }
    return (
      <div>
        <h1>Weather</h1>
        <div className='weather'>
          {content}
        </div>
      </div>
    );
  }
}
