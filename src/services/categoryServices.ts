import axios from "@/plugins/axios";

const CONTROLLER_NAME = "ProductCategory";
const CONTROLLER_DELETE = "Delete";

const GetAll = async () => {
  try {
    const res = await axios.get(`${CONTROLLER_NAME}/GetAll`);
    console.log(res.data);
    return res.data;
  } catch {
    return null;
  }
};

const Update = async (id: number, name: null, file?: File) => {
  try {
    await axios.put(`${CONTROLLER_NAME}/Update/${id}?categoryName=` + name);
  } catch {}
};

const Delete = async (id: number) => {
  try {
    await axios.delete(`${CONTROLLER_NAME}/${CONTROLLER_DELETE}/${id}`);
  } catch {}
};

const Category = {
  GetAll,
  Update,
  Delete,
};

export default Category;
