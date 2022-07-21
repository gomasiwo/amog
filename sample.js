const requestDeviceMotionPermission = () => {
  if (
    DeviceMotionEvent &&
    typeof DeviceMotionEvent.requestPermission === 'function'
  ) {
    // iOS 13+ の Safari
    // 許可を取得
    DeviceMotionEvent.requestPermission()
    .then(permissionState => {
      if (permissionState === 'granted') {
        // 許可を得られた場合、devicemotionをイベントリスナーに追加
        window.addEventListener('devicemotion', e => {
          // devicemotionのイベント処理
        }）
      } else {
        // 許可を得られなかった場合の処理
      }
    })
    .catch(console.error) // https通信でない場合などで許可を取得できなかった場合
  } else {
    // 上記以外のブラウザ
  }
}

// ボタンクリックでrequestDeviceMotionPermission実行
const startButton = document.getElementById("start-button")
startButton.addEventListener('click', requestDeviceMotionPermission, false)
