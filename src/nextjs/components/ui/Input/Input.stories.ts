import Input from "./Input";

export default {
  title: "ui/FormInput",
  component: Input,
  args: {},
};

export const Primary = {
  args: {
    label: "お名前",
    required: true,
    placeholder: "例）山田　太郎",
  },
};
