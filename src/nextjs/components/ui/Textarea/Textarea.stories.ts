import Textarea from "./Textarea";

export default {
  title: "ui/Textarea",
  component: Textarea,
  args: {},
};

export const Primary = {
  args: {
    label: "ご意見・ご質問",
    required: true,
    placeholder: "例）住宅ローンについて質問したい",
  },
};
