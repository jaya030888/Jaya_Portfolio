const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const targets = [
    { url: 'https://my-todo-app-frontend-lo64.vercel.app/', file: 'public/todo.png' },
    { url: 'https://jaya030888.github.io/weather/', file: 'public/weather.png' },
    { url: 'https://online-quiz-platform-seven-peach.vercel.app/', file: 'public/quiz_platform.png' },
    { url: 'https://guess-the-number-sandy.vercel.app/', file: 'public/guess_the_number_new.png' }
  ];

  for (const { url, file } of targets) {
    console.log(`Taking screenshot of ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
      // wait a bit extra for animations
      await new Promise(r => setTimeout(r, 2000));
      await page.screenshot({ path: file });
      console.log(`Saved ${file}`);
    } catch (e) {
      console.error(`Failed to screenshot ${url}:`, e);
    }
  }

  await browser.close();
})();
