// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

// handler.post(async (req, res) => {
//   let myobj = {
//     questions: req.body.questions,
//   };
//   req.db.collection('users').insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     response.json(res);
//   });
//   res.json({ message: 'ok' });
// });

handler.post(async (req, res) => {
  let data = req.body.questions;
  data = JSON.parse(data);
  let doc = await req.db.collection('users').insertOne(data);
  res.json({ message: 'ok' });
});

export default (req, res) => handler.apply(req, res);
