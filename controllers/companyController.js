import Company from '../models/companyModel.js'; // Import your Mongoose model for Companies

export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find({});
    return res.status(200).json([companies]);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const addCompany = async (req, res) => {
  try {
    const  name  = req.body;
    const newCompany = new Company(name);
    await newCompany.save();
    return res.status(201).json(newCompany);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
