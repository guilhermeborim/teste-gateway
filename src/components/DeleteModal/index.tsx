import { Modal, Text, TouchableOpacity, View } from "react-native";

interface DeleteModalProps {
  deleteId: string | null;
  setDeleteId: (id: string | null) => void;
  onDelete: (id: string) => void;
}

export const DeleteModal = ({
  deleteId,
  setDeleteId,
  onDelete,
}: DeleteModalProps) => {
  return (
    <Modal
      visible={!!deleteId}
      transparent
      animationType="fade"
      onRequestClose={() => setDeleteId(null)}
    >
      <View className="flex-1 bg-black/50 items-center justify-center">
        <View className="bg-white w-[80%] rounded-2xl p-6">
          <Text className="font-bold text-lg text-[#070707] mb-2">
            Excluir imóvel
          </Text>

          <Text className="text-sm text-[#6B6B6B] mb-6">
            Tem certeza que deseja excluir este imóvel? Essa ação não pode ser
            desfeita.
          </Text>

          <View className="flex-row justify-end gap-4">
            <TouchableOpacity
              onPress={() => setDeleteId(null)}
              className="px-4 py-2"
            >
              <Text className="text-[#070707] font-semibold">Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                if (deleteId) onDelete(deleteId);
                setDeleteId(null);
              }}
              className="px-4 py-2 bg-red-500 rounded-lg"
            >
              <Text className="text-white font-semibold">Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
