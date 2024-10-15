import { StatusBar } from "expo-status-bar";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import Navigation from "./src/Navigation";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Navigation />
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
