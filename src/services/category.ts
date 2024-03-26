import axios from '@/plugins/axios'

const CONTROLLER_NAME = 'ProductCategory'
const CONTROLLER_DELETE = 'Delete'

const GetAll = async () => {
  try {
    const res = await axios.get(`${CONTROLLER_NAME}/GetAll`)
    console.log(res.data)
    return res.data
  } catch {
    return null
  }
}

const Category = {
  GetAll,
}

export default Category
