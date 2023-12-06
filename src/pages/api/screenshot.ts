import type { NextApiRequest, NextApiResponse } from 'next';

const axios = require('axios');
const chrome = require('chrome-aws-lambda'); // add chrome-aws-lambda package
const puppeteer = require('puppeteer-core'); // add puppeteer-core package

export interface AccountImages {
  id: string;
  title: string;
  description: null;
  datetime: number;
  type: string;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  vote: null;
  favorite: boolean;
  nsfw: null;
  section: null;
  account_url: string;
  account_id: number;
  is_ad: boolean;
  in_most_viral: boolean;
  has_sound: boolean;
  tags: any[];
  ad_type: number;
  ad_url: string;
  edited: string;
  in_gallery: boolean;
  deletehash: string;
  name: null;
  link: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method == 'GET') {
    const { title } = req.query;
    if (!title) {
      return res.status(400).json({ error: 'Title parameter is required' });
    }
    try {
      const response = await axios.get(
        'https://api.imgur.com/3/account/me/images',
        {
          headers: {
            Authorization: `Bearer ${process.env.PUPPETEER_API_KEY}`,
          },
        },
      );
      if (!res.status(200)) {
        res.status(400).json('deu ruim');
      }
      const search = response.data.data.filter(
        (item: AccountImages) => item.title == title,
      );

      if (search.length == 0) {
        return res.status(404).json({ error: `Not found ${title}` });
      }
      res.status(200).json(search[0].link);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  }

  if (req.method == 'POST') {
    const options = {
      args: [chrome.args, '--hide-scrollbars', '--disable-web-security'],
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: true,
      ignoredHTTPSErrors: true,
    };

    const { url, title } = req.query;

    if (!url) {
      return res.status(400).json({ error: 'URL parameter is required' });
    }
    if (!title) {
      return res.status(400).json({ error: 'Title parameter is required' });
    }

    let browser; // Abre uma nova instância do Chrome (ou Chromium)

    try {
      browser = await puppeteer.launch(options); // add empty object to add types
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
}
