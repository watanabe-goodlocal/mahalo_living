import Select from "./Select";
import { prefectureOptions } from "utils/prefectures";

export default {
  title: "ui/Select",
  component: Select,
  args: {},
};

export const Primary = {
  args: {
    label: "都道府県",
    required: true,
    placeholder: "- 都道府県選択 -",
    options: prefectureOptions,
  },
};
