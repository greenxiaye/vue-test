<template>
  <div>
    <div>试canvas</div>
    <canvas />
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 200,
      y: 200,
      dx: 4, //滑动的距离，也就是x的位置,hen
      dy: 4,
      radius: 30 //半径
    };
  },
  mounted() {
    this.startCanvas();
    // console.log(123)
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      let canvas = document.querySelector('canvas');
      let c = canvas.getContext('2d');
      //  清空画布 这样就是单个圆在
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); // x y指的是圆心 的位置
      c.strokeStyle = 'green';
      c.stroke();
      // 控制圆的x
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
      // 控制圆的y
      if (
        this.y + this.radius + 100 > innerHeight ||
        this.y - this.radius < 0
      ) {
        this.dy = -this.dy;
      }
      // 在循环中，一个圆就懂起来了
      this.x += this.dx;
      this.y += this.dy;
    },
    startCanvas() {
      let canvas = document.querySelector('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let c = canvas.getContext('2d');
      //  圆形 填充颜色
      c.fillStyle = 'pink';
      let x = 100,
        y = 100,
        width = 100,
        height = 100;
      c.fillRect(x, y, width, height);
      c.fillStyle = 'green';
      c.fillRect(300, 300, 100, 100);

      // line 画直线
      c.beginPath();
      c.moveTo(50, 400);
      c.lineTo(300, 100);
      c.lineTo(400, 300);
      c.strokeStyle = 'red';
      c.stroke();

      // 画圆形
      c.beginPath();
      c.arc(200, 200, 30, 0, Math.PI * 2, false); // x y指的是圆心 的位置
      c.strokeStyle = 'green';
      c.stroke();
      console.log(canvas);
      this.animate();
      // 画撒
      // for (let i = 0; i < 3; i++) {
      //   let x = Math.random() * window.innerWidth;
      //   let y = Math.random() * window.innerHeight;
      //   c.beginPath();
      //   c.arc(x, y, 30, 0, Math.PI * 2, false);
      //   c.strokeStyle = 'blue';
      //   c.stroke();
      // }
    }
  }
};
</script>

<style lang="scss">
canvas {
  border: 1px solid black;
  width: 100%;
  /* height:100%;  */
  /* html本身就没有100% 所以height不起效果 */
}
</style>
