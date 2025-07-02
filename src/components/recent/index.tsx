import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { s } from "./style";
import { colors } from "@/styles/colors";
type Props = {
  data: {
    title: string;
    cover?: string;
  };
};

export default function Recent({ data }: Props) {
  return (
    <TouchableOpacity style={s.container} activeOpacity={0.7}>
      <Image style={s.cover} source={{ uri: data.cover }} />
      <View style={s.content}>
        <Feather
          name="file-text"
          size={32}
          color={colors.gray[300]}
          style={s.icon}
        />
        <Text style={s.title} numberOfLines={2}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
