import * as util from 'util'

const infoOptions = { showHidden: false, depth: null, colors: true }

export function log(message?: any, ...optionalParams: any[]) {
  console.log(message, optionalParams)
}

export function info(message?: any, ...optionalParams: any[]) {
  console.log(util.inspect(message, infoOptions), optionalParams)
}
