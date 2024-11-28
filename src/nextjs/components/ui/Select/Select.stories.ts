import Select from "./Select";
import { prefectureOptions } from "utils/prefectures";

const selectStory = {
  title: "ui/Select",
  component: Select,
  args: {},
};

export default selectStory;

export const Primary = {
  args: {
    label: "都道府県",
    required: true,
    placeholder: "- 都道府県選択 -",
    options: prefectureOptions,
  },
};
