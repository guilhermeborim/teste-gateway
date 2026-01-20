import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { InputController } from "../../components/InputController";
import { KeyboardContainer } from "../../components/KeyboardContainer";
import { useLogin } from "./useLogin";

export const LoginView = () => {
  const { control, onSubmit, loading, error } = useLogin();
  return (
    <KeyboardContainer>
      <View className="flex-1 bg-[#070707] relative">
        <Image
          source={require("../../assets/logo_3d.png")}
          className="absolute bottom-0 left-0 w-full opacity-50"
          resizeMode="cover"
        />

        <View className="flex-1 mt-14 px-6 z-10">
          <View className="flex-row items-center justify-center mt-16">
            <Image
              source={require("../../assets/logo.png")}
              className="w-16 h-20 flex-1"
              resizeMode="contain"
            />
          </View>

          <View className="mt-[80px] mb-12">
            <InputController
              placeholder="Digite seu e-mail"
              control={control}
              name="email"
            />
            <InputController
              placeholder="Senha"
              control={control}
              name="password"
              secureTextEntry
            />
          </View>
          {error && (
            <Text className="text-red-500 mb-4">
              Erro no Login: {error.message}
            </Text>
          )}

          <BlurView
            intensity={100}
            tint="dark"
            className="rounded-[9px] overflow-hidden"
          >
            <LinearGradient
              colors={["#ffffffc1", "#FFFFFF21", "#ffffffc1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <TouchableOpacity
                onPress={onSubmit}
                className="bg-[#FFFFFF21] rounded-[9px] py-[22px] items-center"
              >
                <Text className="text-white text-base font-bold">
                  {loading ? <ActivityIndicator /> : "Entrar"}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </BlurView>

          <View className="items-center justify-center mt-8">
            <Text className="text-white text-center">
              Ao prosseguir, você concorda com nossos
            </Text>
            <Text className="text-white text-center">
              <Text className="font-bold">Termos e Condições de Uso</Text> do
              app.
            </Text>
          </View>
        </View>
      </View>
    </KeyboardContainer>
  );
};
