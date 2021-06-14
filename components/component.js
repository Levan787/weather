  const fetch_weather=()=> {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&appid=7c73072c87ba1256deefc0e44d621926')
      .then((response) => response.json())
      .then((json) => {
        this.state.tbilisi.push(json.name)
        this.state.tbilisi.push((json.main.temp-273.15).toFixed(2)+" °C" )
        this.state.tbilisi.push(json.weather[0].icon )
        this.state.tbilisi.push(json.weather[0].description )
        this.state.tbilisi.push(json.weather[0].main)
        this.state.tbilisi.push(json.main.humidity+" %")
        this.state.tbilisi.push(json.main.pressure+" hPa")
        this.state.tbilisi.push((json.visibility/1000).toFixed(2)+" Km")
        this.setState({ tbilisi : this.state.tbilisi })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

    const fetch_weather1=()=> {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&appid=7c73072c87ba1256deefc0e44d621926')
      .then((response) => response.json())
      .then((json) => {
        this.state.tbilisi.push(json.name)
        this.state.tbilisi.push((json.main.temp-273.15).toFixed(2)+" °C" )
        this.state.tbilisi.push(json.weather[0].icon )
        this.state.tbilisi.push(json.weather[0].description )
        this.state.tbilisi.push(json.weather[0].main)
        this.state.tbilisi.push(json.main.humidity+" %")
        this.state.tbilisi.push(json.main.pressure+" hPa")
        this.state.tbilisi.push((json.visibility/1000).toFixed(2)+" Km")
        this.setState({ tbilisi : this.state.tbilisi })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

    const fetch_weather2=()=> {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&appid=7c73072c87ba1256deefc0e44d621926')
      .then((response) => response.json())
      .then((json) => {
        this.state.tbilisi.push(json.name)
        this.state.tbilisi.push((json.main.temp-273.15).toFixed(2)+" °C" )
        this.state.tbilisi.push(json.weather[0].icon )
        this.state.tbilisi.push(json.weather[0].description )
        this.state.tbilisi.push(json.weather[0].main)
        this.state.tbilisi.push(json.main.humidity+" %")
        this.state.tbilisi.push(json.main.pressure+" hPa")
        this.state.tbilisi.push((json.visibility/1000).toFixed(2)+" Km")
        this.setState({ tbilisi : this.state.tbilisi })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }