import React from "react"
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native"
import SwipeableViews from 'react-swipeable-views-native';
const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

import Icon from "react-native-vector-icons/AntDesign"
import {fetch_weather} from "./components/component"

export default class App extends React.Component{
  constructor(props){
    super(props);
      this.state ={
        isLoading: true,
        test:[],
        tbilisi:[],
        Batumi:[],
        Kutaisi:[],
        city:"Tbilisi",
    }
    this.fetch_weather()
  }

  fetch_weather=()=> {
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

      this.setState({ city : "Batumi" })

      fetch('http://api.openweathermap.org/data/2.5/weather?q='+"Batumi"+'&appid=7c73072c87ba1256deefc0e44d621926')
      .then((response) => response.json())
      .then((json) => {
        this.state.Batumi.push(json.name)
        this.state.Batumi.push((json.main.temp-273.15).toFixed(2)+" °C" )
        this.state.Batumi.push(json.weather[0].icon )
        this.state.Batumi.push(json.weather[0].description )
        this.state.Batumi.push(json.weather[0].main)
        this.state.Batumi.push(json.main.humidity+" %")
        this.state.Batumi.push(json.main.pressure+" hPa")
        this.state.Batumi.push((json.visibility/1000).toFixed(2)+" Km")
        this.setState({ Batumi : this.state.Batumi })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });

      this.setState({ city : "Kutaisi" })

      fetch('http://api.openweathermap.org/data/2.5/weather?q='+"Kutaisi"+'&appid=7c73072c87ba1256deefc0e44d621926')
      .then((response) => response.json())
      .then((json) => {
        this.state.Kutaisi.push(json.name)
        this.state.Kutaisi.push((json.main.temp-273.15).toFixed(2)+" °C" )
        this.state.Kutaisi.push(json.weather[0].icon )
        this.state.Kutaisi.push(json.weather[0].description )
        this.state.Kutaisi.push(json.weather[0].main)
        this.state.Kutaisi.push(json.main.humidity+" %")
        this.state.Kutaisi.push(json.main.pressure+" hPa")
        this.state.Kutaisi.push((json.visibility/1000).toFixed(2)+" Km")
        this.setState({ Kutaisi : this.state.Kutaisi })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });

  }


  render(){
    return(
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor="#000"/>
      <ImageBackground source={{uri:"https://images.unsplash.com/photo-1592601250984-da0dc45e25f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"}} 
      style={styles.Image_Background_Style}>

      <SwipeableViews style={{height:"30%",width:"100%"}} >
        <View style={styles.Weather_Box_Main}>
          <View style={styles.Weather_Holder_View}>
              <Image tintColor='#FFF' 
                source={{uri:"http://openweathermap.org/img/wn/"+this.state.tbilisi[2]+"@2x.png",}} 
                style={styles.Weather_Image}/>
              <View>
                <Text style={styles.temprature_text}>{this.state.city}</Text>
                <Text style={styles.city_text}>{this.state.tbilisi[1]}</Text>
              </View>
            </View>
        </View>

                <View style={styles.Weather_Box_Main}>
          <View style={styles.Weather_Holder_View}>
              <Image tintColor='#FFF' 
                source={{uri:"http://openweathermap.org/img/wn/"+this.state.Batumi[2]+"@2x.png",}} 
                style={styles.Weather_Image}/>
              <View>
                <Text style={styles.temprature_text}>{"Batumi"}</Text>
                <Text style={styles.city_text}>{this.state.Batumi[1]}</Text>
              </View>
            </View>
        </View>

                <View style={styles.Weather_Box_Main}>
          <View style={styles.Weather_Holder_View}>
              <Image tintColor='#FFF' 
                source={{uri:"http://openweathermap.org/img/wn/"+this.state.Kutaisi[2]+"@2x.png",}} 
                style={styles.Weather_Image}/>
              <View>
                <Text style={styles.temprature_text}>{"Kutaisi"}</Text>
                <Text style={styles.city_text}>{this.state.Kutaisi[1]}</Text>
              </View>
            </View>
        </View>

      </SwipeableViews>

      <SwipeableViews style={{height:"45%",width:"100%"}}>
        <View style={styles.Info_Box_View}>
          <View style={styles.Info_Holder_Veiw}>
            <Text style={styles.Main_Weather_Text}>{this.state.tbilisi[4]}</Text>
            <Text style={styles.description_text}>{this.state.tbilisi[3]}</Text>
            <Text style={styles.humidity_text}>Humidity : {this.state.tbilisi[5]}</Text>
            <Text style={styles.other_text}>Pressure : {this.state.tbilisi[6]}</Text>
            <Text style={styles.other_text}>Visibility : {this.state.tbilisi[7]}</Text>
          </View>
        </View>

                <View style={styles.Info_Box_View}>
          <View style={styles.Info_Holder_Veiw}>
            <Text style={styles.Main_Weather_Text}>{this.state.Batumi[4]}</Text>
            <Text style={styles.description_text}>{this.state.Batumi[3]}</Text>
            <Text style={styles.humidity_text}>Humidity : {this.state.Batumi[5]}</Text>
            <Text style={styles.other_text}>Pressure : {this.state.Batumi[6]}</Text>
            <Text style={styles.other_text}>Visibility : {this.state.Batumi[7]}</Text>
          </View>
        </View>

                <View style={styles.Info_Box_View}>
          <View style={styles.Info_Holder_Veiw}>
            <Text style={styles.Main_Weather_Text}>{this.state.Kutaisi[4]}</Text>
            <Text style={styles.description_text}>{this.state.Kutaisi[3]}</Text>
            <Text style={styles.humidity_text}>Humidity : {this.state.Kutaisi[5]}</Text>
            <Text style={styles.other_text}>Pressure : {this.state.Kutaisi[6]}</Text>
            <Text style={styles.other_text}>Visibility : {this.state.Kutaisi[7]}</Text>
          </View>
        </View>

      </SwipeableViews>
      </ImageBackground>
      
      
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:Dev_Height,
    width: Dev_Width
  },
  Image_Background_Style:{
    height:"100%",
    width:"100%"
  },
  Search_Box_View:{
    height:"20%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  Search_Box:{
    height:"35%",
    width:"80%",
    borderColor:"#FFF",
    borderWidth:1,
    borderRadius:15,
    color:"#FFF",
    paddingHorizontal:15
  },
  button_touch:{
    marginLeft:"5%",
    height:"35%",
    width:"8%",
    justifyContent:"center",
    alignItems:"center"
  },
  Weather_Box_Main:{
    height:"100%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  Weather_Holder_View:{
    height:"80%",
    width:"90%",
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius:15,
    alignItems:"center",
    flexDirection:"row"
  },
  Weather_Image:{
    height:"80%",
    width:"50%"
  },
  temprature_text:{
    fontSize:30,
    color:"#FFF",
    marginLeft:"5%"
  },
  city_text:{
    fontSize:20,
    color:"#FFF",
    marginLeft:"5%",
    marginTop:"3%"
  },
  Info_Box_View:{
    height:"100%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  Info_Holder_Veiw:{
    height:"80%",
    width:"90%",
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius:15
  },
  Main_Weather_Text:{
    fontSize:28,
    color:"#464646",
    marginLeft:"8%",
    marginTop:"8%",
    fontWeight:"bold"
  },
  description_text:{
    fontSize:20,
    color:"#121212",
    marginLeft:"8%",
    marginTop:"3%"
  },
  humidity_text:{
    fontSize:18,
    color:"#121212",
    marginLeft:"8%",
    marginTop:"5%"
  },
  other_text:{
    fontSize:18,
    color:"#121212",
    marginLeft:"8%",
    marginTop:"2%"
  },
  
})