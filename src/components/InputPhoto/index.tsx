import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type InputPhotoProps<T extends FieldValues> = {
  images: string[];
  onAdd: (url: string) => void;
  control: Control<T>;
  name: Path<T>;
};

const MOCK_IMAGES = [
  "https://picsum.photos/400/300",
  "https://picsum.photos/401/300",
  "https://picsum.photos/402/300",
  "https://picsum.photos/403/300",
];

export const InputPhoto = <T extends FieldValues>({
  images,
  onAdd,
  control,
  name,
}: InputPhotoProps<T>) => {
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>(
    {},
  );

  const handleLoadStart = (uri: string) => {
    setLoadingImages((prev) => ({ ...prev, [uri]: true }));
  };

  const handleLoadEnd = (uri: string) => {
    setLoadingImages((prev) => ({ ...prev, [uri]: false }));
  };

  const handleAdd = () => {
    if (images.length >= 10) return;

    const random = MOCK_IMAGES[Math.floor(Math.random() * MOCK_IMAGES.length)];

    onAdd(`${random}?random=${Date.now()}`);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({}) => (
        <View>
          <View className="flex-row items-center mb-4 gap-4">
            <Text className="font-bold text-base text-[#131313]">Galeria</Text>
            <Text className="font-normal text-sm text-[#aaaaaa]">
              ({images.length}/10)
            </Text>
          </View>

          <View className="flex-row flex-wrap gap-1">
            {images.map((img) => {
              const isLoading = loadingImages[img];

              return (
                <View
                  key={img}
                  className="w-[120px] h-[120px] rounded-[9px] overflow-hidden border border-[#DDDDDD] items-center justify-center"
                >
                  {isLoading && (
                    <ActivityIndicator size="small" color="#14CE7C" />
                  )}

                  <Image
                    source={{ uri: img }}
                    className="w-full h-full absolute"
                    resizeMode="cover"
                    onLoadStart={() => handleLoadStart(img)}
                    onLoadEnd={() => handleLoadEnd(img)}
                  />
                </View>
              );
            })}

            {images.length < 10 && (
              <TouchableOpacity onPress={handleAdd}>
                <View className="items-center justify-center w-[120px] h-[120px] bg-[#F8F8F8] border border-[#DDDDDD] rounded-[9px]">
                  <View className="rounded-full border-2 border-[#aaaaaa] w-10 h-10 items-center justify-center">
                    <Ionicons name="add-outline" size={24} color={"#aaaaaa"} />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    />
  );
};
