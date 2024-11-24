import FormInput from "@/components/ui/FormInput/FormInput";

export default function CatalogPage() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-center p-12">
        資料請求フォーム
      </h1>
      <div className="text-center">
        <p>カタログをご希望の方はこちらからお問い合わせください。</p>
        <p>※同業の方の情報収集目的でのお問い合わせはご遠慮ください。</p>
      </div>
      <div className="p-10">
        <FormInput
          label="お名前"
          required={true}
          placeholder="例）山田　太郎"
        />
      </div>
    </div>
  );
}
