import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";

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
      <form className="p-10">
        <Input label="お名前" required={true} placeholder="例）山田　太郎" />
        <Input
          label="メールアドレス"
          required={true}
          placeholder="例）email@address.com"
        />
        <Button label="送信する" />
      </form>
    </div>
  );
}
