
import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`blogData/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if(err){
        res.status(500).json({error: "the blog in not found"})
    }
    console.log(req.query.slug)
      res.status(200).json(JSON.parse(data))
  })
}