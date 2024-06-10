import Camera from "../../components/camera";

export default function TestCamera() {
  return (
    <main>
      <h1>Test Camera</h1>
      <h2>機能概要</h2>
      <ul className="pl-8">
        <li className="list-disc">カメラの映像をcanvasに表示する</li>
        <li className="list-disc">フレーム画像をcanvasに重ねる</li>
        <li className="list-disc">
          ボタンを押すと、canvasの表示をPNG画像化して、ローカルにダウンロードする
        </li>
      </ul>
      <Camera />
    </main>
  );
}
