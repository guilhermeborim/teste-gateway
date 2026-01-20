import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { PropertysResponse } from "../../shared/interfaces/http/property/property.response";
import { PropertyInterface } from "../../shared/interfaces/property";
import { DeleteModal } from "../DeleteModal";

type AddItem = {
  id: "add";
  type: "add";
};

type PropertyItem = PropertyInterface & {
  type: "item";
};

type ListItem = AddItem | PropertyItem;

type ListPropertysProps = PropertysResponse & {
  onDelete: (id: string) => void;
};

export const ListPropertys = ({
  enterprises,
  onDelete,
}: ListPropertysProps) => {
  const [open, setOpen] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const listData: ListItem[] = [
    { id: "add", type: "add" },
    ...enterprises.map(
      (item): PropertyItem => ({
        ...item,
        type: "item",
      }),
    ),
  ];

  return (
    <View className="flex-1">
      <FlatList
        data={listData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 40, gap: 16 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          if (item.type === "add") {
            return (
              <View className="w-[169px] h-[212px] bg-[#F8F8F84D] rounded-2xl border border-[#dddddd] items-center justify-center gap-4">
                <TouchableOpacity
                  className="w-[42px] h-[42px] bg-white rounded-full items-center justify-center"
                  onPress={() => router.push("(private)/add-property")}
                >
                  <Ionicons name="add-outline" color="black" size={24} />
                </TouchableOpacity>

                <Text className="text-center font-normal text-base text-[#070707]">
                  Adicionar{"\n"}Imóvel
                </Text>
              </View>
            );
          }

          return (
            <View className="w-[169px]">
              <TouchableOpacity
                onPress={() => router.push(`(private)/${item.id}`)}
              >
                <View className="relative">
                  <Image
                    source={{ uri: item.gallery[0] }}
                    className="w-[168px] h-[164px] rounded-xl"
                    resizeMode="cover"
                  />

                  <TouchableOpacity
                    onPress={() =>
                      setOpen((prev) => (prev === item.id ? null : item.id))
                    }
                    className="absolute top-2 right-2 w-8 h-8 bg-[#FFFFFF6B] rounded-full items-center justify-center"
                  >
                    <Ionicons
                      name="ellipsis-horizontal"
                      size={16}
                      color="black"
                    />
                  </TouchableOpacity>

                  {open === item.id && (
                    <View className="absolute top-10 right-2 bg-[#FFFFFF80] rounded-2xl shadow-md z-20 overflow-hidden">
                      <TouchableOpacity className="px-4 py-2 flex-row items-center gap-2">
                        <Ionicons
                          name="pencil-outline"
                          size={16}
                          color="black"
                        />
                        <Text className="text-sm text-[#070707]">Editar</Text>
                      </TouchableOpacity>

                      <View className="h-px w-[60%] self-end bg-[#9b9b9b]" />

                      <TouchableOpacity
                        className="px-4 py-2 flex-row items-center gap-2"
                        onPress={() => {
                          setDeleteId(item.id);
                          setOpen(null);
                        }}
                      >
                        <Ionicons name="trash-outline" size={16} color="red" />
                        <Text className="text-sm text-red-500">Deletar</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>

                <View className="pl-2 mt-2">
                  <Text className="font-bold text-xs text-[#070707]">
                    {item.name}
                  </Text>
                  <Text className="font-normal text-sm text-[#070707]">
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <DeleteModal
        deleteId={deleteId}
        setDeleteId={setDeleteId}
        onDelete={onDelete}
      />
    </View>
  );
};
