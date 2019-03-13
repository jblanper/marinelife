export default function createCanvas (selector = 'canvas') {
      const dpr = window.devicePixelRatio;
      const height = window.innerHeight;
      const width = window.innerWidth;

      const canvas = document.querySelector(selector); 

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      
      return ctx;
}
