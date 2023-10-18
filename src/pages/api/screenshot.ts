import type { NextApiRequest, NextApiResponse } from 'next';
const puppeteer = require('puppeteer');
const axios = require('axios');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { url, title } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  // if ((req.method = 'POST')) {
  //   req.body = JSON.parse(req.body);
  //   console.log(req.body);
  // }

  let browser; // Abre uma nova instância do Chrome (ou Chromium)

  try {
    browser = await puppeteer.launch({}); // add empty object to add types
    const page = await browser.newPage(); // add types

    await page.setViewport({ width: 1600, height: 1200 });
    await page.goto(url as string); // Navega até a URL
    await page.waitForTimeout(5000); // Espera 5 segundos
    await page.screenshot(); // Tira um screenshot da página

    const screenshot = await page.screenshot(); // define screenshot variable

    const dataImgur = await axios.post(
      'https://api.imgur.com/3/image',
      {
        image: screenshot.toString('base64'),
        title: title,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PUPPETEER_API_KEY}`,
        },
      },
    );

    res.status(200).send(dataImgur.data.data.link);
  } catch (error) {
    res.status(500).json({ error: (error as any).message });
  } finally {
    if (browser) {
      await browser.close(); // Fecha o navegador
    }
  }
}
