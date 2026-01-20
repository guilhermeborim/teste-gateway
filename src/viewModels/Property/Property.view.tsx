import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
} from "react-native";
import { Header } from "../../components/Header";
import { useGetProperty } from "./useGetProperty";

export const PropertyView = ({ id }: { id: string }) => {
  const { data, loading } = useGetProperty(id);
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = Dimensions.get("screen");
  const gallery = data?.enterprise.gallery ?? [];

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  if (loading || !data) return null;

  return (
    <View className="flex-1 bg-white">
      <View className="absolute left-0 right-0 z-20 px-6">
        <Header
          notification={false}
          href={() => router.back()}
          icon="pencil-outline"
        />
      </View>

      <View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={gallery}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => `${item}-${index}`}
            onViewableItemsChanged={onViewableItemsChanged.current}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                style={{ width, height: 477 }}
                resizeMode="cover"
              />
            )}
          />
        )}

        <View className="absolute bottom-36 w-full flex-row justify-center gap-2">
          {gallery.map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === activeIndex ? "bg-[#14CE7C]" : "bg-white"
              }`}
            />
          ))}
        </View>

        <View className="absolute bottom-24 left-0 right-0 px-6">
          <BlurView
            intensity={13}
            className="rounded-[30px] w-[60px] overflow-hidden"
          >
            <View className="rounded-[30px] bg-[#9393936B] w-[60px]">
              <Text className="text-white font-bold text-xs py-2 px-2 text-center">
                {data.enterprise.listingType === "SALE" ? "Venda" : "Aluguel"}
              </Text>
            </View>
          </BlurView>

          <Text className="text-white font-bold text-2xl mt-1 flex-1">
            {data.enterprise.name}
          </Text>
        </View>

        <View className="absolute -bottom-16 left-0 right-0 px-6">
          <View className="w-[130px] h-[120px] bg-white rounded-2xl">
            <View
              className="
              flex-1 justify-center items-start gap-2 ml-2
            "
            >
              <Ionicons name="cash-outline" size={18} />
              <Text className="font-bold text-base text-[#070707]">
                {Number(data.enterprise.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>
              <Text className="font-normal text-xs text-[#070707]">
                Valor de venda
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text className="mt-16 px-6 font-bold text-base text-[#070707]">
          Galeria
        </Text>
        <View className="px-6 mt-4">
          <View className="flex-row gap-3">
            <View className="flex-1 h-[200px] rounded-2xl overflow-hidden">
              {gallery[0] && (
                <Image
                  source={{ uri: gallery[0] }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              )}
            </View>

            <View className="w-[110px] gap-3">
              <View className="h-[96px] rounded-2xl overflow-hidden">
                {gallery[1] && (
                  <Image
                    source={{ uri: gallery[1] }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                )}
              </View>

              <View className="h-[96px] rounded-2xl overflow-hidden relative">
                {gallery[2] && (
                  <Image
                    source={{ uri: gallery[2] }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                )}

                {gallery.length > 3 && (
                  <View className="absolute inset-0 bg-black/50 items-center justify-center">
                    <Text className="text-white font-bold text-lg">
                      +{gallery.length - 3}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
