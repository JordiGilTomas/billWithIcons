import model from '../model/model.js';

export const renderIndex = async (req, res) => {
  const productos = await model.getAllProducts();
  res.render('index', { productos });
};

export const renderBill = () => null;
