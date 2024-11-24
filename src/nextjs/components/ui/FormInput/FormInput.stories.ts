import FormInput from "./FormInput";

export default {
  title: "ui/FormInput",
  component: FormInput,
  args: {},
};

export const Primary = {
  args: {
    label: "お名前",
    required: true,
    placeholder: "例）山田　太郎",
  },
};
