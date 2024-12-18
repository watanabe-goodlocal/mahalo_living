import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Checkbox, Input, Select, Textarea } from "@/components/ui";
import { prefectureOptions } from "utils/prefectures";

type CatalogPageProps = {
  name: string;
  email: string;
  tel: string;
  postalCode: string;
  prefecture: string;
  city: string;
  address: string;
  message: string;
  privacyPolicy: boolean;
};

export default function CatalogPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CatalogPageProps>();
  const onSubmit: SubmitHandler<CatalogPageProps> = (data) => console.log(data);

  return (
    <div>
      <h1 className="text-3xl font-medium text-center p-12">
        資料請求フォーム
      </h1>
      <div className="text-center">
        <p>カタログをご希望の方はこちらからお問い合わせください。</p>
        <p>※同業の方の情報収集目的でのお問い合わせはご遠慮ください。</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-10">
        <Input
          label="お名前"
          required={true}
          placeholder="例）山田　太郎"
          error={!!errors.name}
          helperText={errors.name?.message}
          {...register("name", { required: "お名前を入力してください" })}
        />
        <Input
          label="メールアドレス"
          required={true}
          placeholder="例）email@address.com"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email", {
            required: "メールアドレスを入力してください",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "メールアドレスの形式が不正です",
            },
          })}
        />
        <Input
          label="お電話番号"
          required={true}
          placeholder="例）0466-54-7227"
          error={!!errors.tel}
          helperText={errors.tel?.message}
          {...register("tel", {
            required: "電話番号を入力してください",
            pattern: {
              value: /^(?!-)(\d{2,4}-?\d{2,4}-?\d{3,4}|\d{10,11})$/,
              message: "電話番号の形式が不正です",
            },
          })}
        />
        <Input
          label="郵便番号"
          required={true}
          formSize=""
          placeholder="例）251-0056"
          error={!!errors.postalCode}
          helperText={errors.postalCode?.message}
          {...register("postalCode", {
            required: "郵便番号を入力してください",
            pattern: {
              value: /^(\d{3}-\d{4}|\d{7})$/,
              message: "郵便番号の形式が不正です",
            },
          })}
        />
        <Select
          label="都道府県"
          required={true}
          placeholder="- 都道府県選択 -"
          error={!!errors.prefecture}
          helperText={errors.prefecture?.message}
          options={prefectureOptions}
          {...register("prefecture", {
            required: "都道府県を選択してください",
          })}
        />
        <Input
          label="市区町村"
          required={true}
          placeholder="例）藤沢市羽鳥"
          error={!!errors.city}
          helperText={errors.city?.message}
          {...register("city", {
            required: "市区町村を入力してください",
          })}
        />
        <Input
          label="町名・番地"
          required={true}
          placeholder="例）2-1-24 三上ハイツ101"
          error={!!errors.address}
          helperText={errors.address?.message}
          {...register("address", {
            required: "町名・番地を入力してください",
          })}
        />
        <Textarea
          label="ご意見・ご質問"
          placeholder="例）住宅ローンについて質問したい"
          {...register("message")}
        />
        <Checkbox
          label="プライバシーポリシーに同意する"
          error={!!errors.privacyPolicy}
          helperText={errors.privacyPolicy?.message}
          {...register("privacyPolicy", {
            required: "プライバシーポリシーへの同意は必須です",
          })}
        />
        <Button type="submit" label="送信する" />
      </form>
    </div>
  );
}
