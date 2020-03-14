import model from '../model/model.js';

const main = async (req, res) => {
  const productos = await model.getAllProducts();
  res.send(JSON.stringify(productos));
};

export default { main };
