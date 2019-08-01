/**
 * @method formatNumber
 * @param  {String/Number} num
 * @return {String}
 *
 * @example
 * formatNumber('1000') // 1,000
 * formatNumber('1000000') // 1,000,000
 * formatNumber('abacadabra') // abacadabra
 */
export const formatNumber = num => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
  if (typeof Intl !== 'undefined') {
    const Formatter = new Intl.NumberFormat('pt-BR')

    return Formatter.format(num)
  }

  return num
}
