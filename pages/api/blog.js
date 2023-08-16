// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
  try {
    let data = await fs.promises.readdir("blogData");
    let allBlogs = [];

    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      console.log(item);

      try {
        let myFile = await fs.promises.readFile(('blogData/' + item), 'utf-8');
        let parsedContent = JSON.parse(myFile);
        allBlogs.push(parsedContent);
      } catch (error) {
        console.error(`Error parsing file "${item}": ${error}`);
      }
    }

    const formattedJSON = JSON.stringify(allBlogs, null, 2); // Use space parameter for indentation
    res.setHeader('Content-Type', 'application/json');
    res.status(200).end(formattedJSON);

  } catch (error) {
    console.error(`Error reading directory: ${error}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

