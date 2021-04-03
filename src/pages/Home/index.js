import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Conditions from "../../components/Conditions";
import Forecast from "../../components/Forecast";
import * as Location from "expo-location";
import api, { key } from "../../services/api";


export default function Home() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({ name: "cloud", color: "#fff" });
  const [background, setBackGround] = useState(["#1ed6ff", "#97c1ff"]);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        setError("Permissao negada para acessar a localização");
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const response = await api.get(
        `weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      );
      setWeather(response.data);

      if (response.data.results.currently === "noite") {
        setBackGround(["abc3741", "#0f2f61"]);
      }

      switch (response.data.results.conditions_slug) {
        case "clear-day":
          setIcon({ name: "partly-sunny", color: "#FFB300" });
          break;
        case "rain":
          setIcon({ name: "rainy", color: "#fff" });
          break;
        case "storm":
          setIcon({ name: "rainy", color: "#fff" });
          break;
      }
      setLoading(false);
    })();
  }, []);
  if(loading){
      return(
          <View style={styles.container}>
              <Text style={{fontSize: 17, fontStyle: 'italic'}}>Carregando dados...</Text>
          </View>
      )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Menu/>
      <Header background={background} weather={weather} icon={icon} />
      <Conditions weather={weather}/>
      <FlatList
        horizontal={true}
        contentContainerStyle={{ paddingBottom: "5%" }}
        style={styles.list}
        data={weather.results.forecast}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8f0ff",
    paddingTop: "5%",
  },
  list: {
    marginTop: 10,
    marginLeft: 10,
  },
});
