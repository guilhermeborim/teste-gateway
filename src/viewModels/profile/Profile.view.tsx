import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header";
import { ListPropertys } from "../../components/ListPropertys";
import { useUserStore } from "../../shared/store/auth";
import { useProfile } from "./useProfile";

export const ProfileView = () => {
  const { logout, signIn } = useUserStore();
  const { data, onDelete, loading, deleteLoading } = useProfile();

  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 mt-0 p-0" edges={[]}>
          <LinearGradient
            colors={["#0B442A", "#BDBDBD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            className="flex-1"
          >
            <View className="flex-1 px-6">
              <Header icon="notifications-outline" notification href={logout} />

              <View className="flex flex-row items-center gap-6">
                <Image
                  source={require("../../assets/user.png")}
                  width={120}
                  height={120}
                />
                <Text className="font-bold text-[32px] text-white">
                  {signIn?.user?.name}
                </Text>
              </View>

              <View className="flex-1">
                <View className="flex flex-row items-center gap-3 mt-6 mb-5">
                  <Ionicons name="home-outline" color="white" size={24} />
                  <Text className="font-bold text-lg text-white">
                    Meus imóveis
                  </Text>
                </View>

                {loading || deleteLoading ? (
                  <View className="items-center justify-center m-auto flex">
                    <ActivityIndicator size={42} />
                  </View>
                ) : (
                  <ListPropertys
                    enterprises={data?.enterprises || []}
                    onDelete={onDelete}
                  />
                )}
              </View>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
