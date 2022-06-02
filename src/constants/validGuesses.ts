import { CONFIG } from './config'

export const VALIDGUESSES = [
  'wahine',
  'maunga',
  'aotearoa',
  'whanau',
  'waita',
  'tikanga',
  'tiriti',
  'pipiri',
  'kumara',
  'whenua',
  'pākehā',
  'rongoā',
  'kōrero',
  'ngākaupai',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
