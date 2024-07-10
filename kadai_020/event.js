//btnというidを持つHTML要素を取得し定数に代入
const btn = document.getElementById('btn');

//textというidを持つHTML要素を取得し定数に代入
const text = document.getElementById('text');

//HTML要素がクリックされたときイベント処理を実行する
btn.addEventListener('click', () => {
  //li要素を新しく作成
  const newText = document.createElement('li');

  //新しく作成したli要素をtextの末尾に追加
  text.appendChild(newText);
  
  //textに変更後のテキストを追加
  text.textContent = 'ボタンをクリックしました';
});