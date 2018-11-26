// 获取id为r的input元素 和 output元素
const _R = document.getElementById('r'),
  _O = _R.nextElementSibling.querySelector('output');
// 设置一个变量v
let v;
// 创建一个update函数，更新--r的值
function update() {
  if (v !== +_R.value) {
    document.getElementById('range').style.setProperty(`--r`, `${(_O.value = v = +_R.value)}px`);
    // document.body.style.setProperty(`--r`, `${(_O.value = v = +_R.value)}px`);
  }
}
update();
_R.addEventListener('change', update, false);
_R.addEventListener('input', update, false);
