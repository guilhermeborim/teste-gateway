import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { TouchableOpacity, View } from "react-native";

interface HeaderProps {
  icon: keyof typeof Ionicons.glyphMap;
  notification: boolean;
  href: () => void;
}

export const Header = ({ icon, notification, href }: HeaderProps) => {
  return (
    <View className="flex-row mt-[42px] mb-6 items-center justify-between">
      <View className="items-center flex-row">
        <BlurView
          intensity={13}
          tint="light"
          className="rounded-full overflow-hidden"
        >
          <TouchableOpacity
            className="bg-white/40 p-3 rounded-full"
            onPress={href}
          >
            <Ionicons name="arrow-back" color="white" size={24} />
          </TouchableOpacity>
        </BlurView>
      </View>
      <View className="relative">
        <BlurView
          intensity={13}
          tint="light"
          className="rounded-full overflow-hidden"
        >
          <TouchableOpacity className="bg-white/40 p-3 rounded-full">
            <Ionicons name={icon} color="white" size={24} />
          </TouchableOpacity>
        </BlurView>

        {notification && (
          <View className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0B442A]" />
        )}
      </View>
    </View>
  );
};
