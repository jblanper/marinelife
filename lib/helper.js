export default function createCanvas (selector = 'canvas') {
      const dpr = window.devicePixelRatio;
      const height = window.innerHeight;
      const width = window.innerWidth;

      const canvas = document.querySelector(selector); 
      const ctx = canvas.getContext('2d');

      if (dpr) {
          ctx.canvas.width = width * dpr;
          ctx.canvas.height = height * dpr;

          ctx.scale(dpr, dpr);
      }
      
      return ctx;
}
