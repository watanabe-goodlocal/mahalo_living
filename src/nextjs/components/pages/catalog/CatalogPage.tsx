import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";

type CatalogPageProps = {
  name: string;
  email: string;
};

export default function CatalogPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CatalogPageProps>();
  // console.log(errors);
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
        {/* <input
          // label="お名前"
          required={true}
          placeholder="例）山田　太郎"
          // error={!!errors.name}
          // helperText={errors.name?.message}
          {...register("name")}
        /> */}
        <Input
          label="お名前"
          required={true}
          placeholder="例）山田　太郎"
          error={!!errors.name}
          helperText={errors.name?.message}
          {...register("name")}
        />
        <Input
          label="メールアドレス"
          required={true}
          placeholder="例）email@address.com"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email")}
        />
        <Button type="submit" label="送信する" />
      </form>
    </div>
  );
}
