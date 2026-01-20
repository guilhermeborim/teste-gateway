import { tv, type VariantProps } from "tailwind-variants";

export const InputVariants = tv({
  slots: {
    container: "w-full",
    wrapper: "flex-row items-center border border-[#DDDDDD] rounded-[9px]",
    input:
      "bg-white text-[#070707] text-sm flex-1 rounded-[9px] px-6 py-[22px]",
    label: "text-base text-[#131313] font-bold pb-4",
    error: "text-sm text-red-500 mt-1",
  },
});

export type InputVariantsProps = VariantProps<typeof InputVariants>;
