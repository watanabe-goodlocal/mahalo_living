import Textarea from "./Textarea";

const textareaStory = {
  title: "ui/Textarea",
  component: Textarea,
  args: {},
};

export default textareaStory;

export const Primary = {
  args: {
    label: "ご意見・ご質問",
    required: true,
    placeholder: "例）住宅ローンについて質問したい",
  },
};
