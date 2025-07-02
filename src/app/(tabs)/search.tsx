import { View, Text } from "react-native";
import { colors } from "@/styles/colors";
export default function Search() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.gray[800],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.white }}>Search Screen</Text>
    </View>
  );
}
