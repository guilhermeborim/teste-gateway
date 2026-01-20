import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Checkbox } from "../../components/Checkbox";
import { InputController } from "../../components/InputController";
import { InputPhoto } from "../../components/InputPhoto";
import { KeyboardContainer } from "../../components/KeyboardContainer";
import { useProperty } from "./useProperty";

export const AddPropertyView = () => {
  const { control, onSubmit, watch, setValue, loading, error } = useProperty();
  const gallery = watch("gallery");
  const name = watch("name");
  const price = watch("price");
  const listingTypeForm = watch("listingType");
  const totalSteps = 4;

  const completedSteps = [
    !!name?.trim(),
    !!listingTypeForm,
    !!price,
    gallery?.length > 0,
  ].filter(Boolean).length;

  const progress = completedSteps / totalSteps;

  const [listingType, setListingType] = useState<"SALE" | "RENT" | null>(
    "SALE",
  );

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1" edges={[]}>
          <KeyboardContainer>
            <View className="flex-1 bg-white px-6">
              <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex-row mt-[48px] mb-[42px] items-center px-6">
                  <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" color="black" size={24} />
                  </TouchableOpacity>
                  <Text className="flex-1 text-center font-bold text-base text-[#070707]">
                    Adicionar imóvel
                  </Text>
                </View>
                <View className="w-full h-[4px] bg-[#E5E5E5] rounded-full mb-[42px] overflow-hidden">
                  <View
                    className="h-full bg-[#14CE7C]"
                    style={{ width: `${progress * 100}%` }}
                  />
                </View>
                <View>
                  <InputController
                    label="Título do anúncio"
                    placeholder="Título"
                    control={control}
                    name="name"
                  />

                  <View className="flex-row items-center gap-[60px] my-16">
                    <Checkbox
                      control={control}
                      name="listingType"
                      label="Venda"
                      checked={listingType === "SALE"}
                      onPress={() => setListingType("SALE")}
                    />

                    <Checkbox
                      control={control}
                      name="listingType"
                      label="Aluguel"
                      checked={listingType === "RENT"}
                      onPress={() => setListingType("RENT")}
                    />
                  </View>

                  <InputController
                    label={
                      listingType === "SALE"
                        ? "Valor de venda"
                        : "Valor do aluguel"
                    }
                    placeholder="R$0,00"
                    control={control}
                    name="price"
                    keyboardType="numeric"
                  />

                  <View className="mt-16 mb-8">
                    <InputPhoto
                      control={control}
                      name="gallery"
                      images={gallery}
                      onAdd={(url) => setValue("gallery", [...gallery, url])}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  className="w-full bg-[#14CE7C] rounded-[9px] py-5 mb-8 mt-[26px]"
                  onPress={onSubmit}
                >
                  <Text className="text-white font-bold text-base text-center">
                    {loading ? "Publicando..." : "Publicar imóvel"}
                  </Text>
                </TouchableOpacity>
                {error && (
                  <Text className="text-red-500 text-center mb-4">
                    {error.message}
                  </Text>
                )}
              </ScrollView>
            </View>
          </KeyboardContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
