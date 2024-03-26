import axios from '@/plugins/axios'
import { isParameter } from 'typescript'
import { ca } from 'vuetify/locale'
import { ITokenRes } from '@/interfaces/res/IToken.res'

const CONTROLLER_NAME = 'auth'
const CONTROLLER_DELETE = 'Delete'

const login = async (email: string, password: string): Promise<ITokenRes | null> => {
  try {
    const res = await axios.post(`${CONTROLLER_NAME}/login`, {
      userName: email,
      password: password,
    })
    return res.data.data
  } catch (err) {
    return null
  }
}

export default login
