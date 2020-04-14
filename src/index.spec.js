import regex from '.'

export default {
  test: () => {
    // taken from https://github.com/npm/validate-npm-package-name
    expect(regex.test('some-package')).toBeTruthy()
    expect(regex.test('example.com')).toBeTruthy()
    expect(regex.test('under_score')).toBeTruthy()
    expect(regex.test('period.js')).toBeTruthy()
    expect(regex.test('123numeric')).toBeTruthy()
    expect(regex.test('@npm/thingy')).toBeTruthy()

    expect(regex.test('crazy!')).toBeFalsy()
    expect(regex.test('@npm-zors/money!time.js')).toBeFalsy()
    expect(regex.test('')).toBeFalsy()
    expect(regex.test('.start-with-period')).toBeFalsy()
    expect(regex.test('_start-with-underscore')).toBeFalsy()
    expect(regex.test('contain:colons')).toBeFalsy()
    expect(regex.test(' leading-space')).toBeFalsy()
    expect(regex.test('trailing-space ')).toBeFalsy()
    expect(regex.test('s/l/a/s/h/e/s')).toBeFalsy()
    expect(regex.test('CAPITAL-LETTERS')).toBeFalsy()
    const getStringWithMoreThan214Characters = () => Array(215).fill(1).map(i => i).join('')
    expect(regex.test(getStringWithMoreThan214Characters())).toBeFalsy()
  },
}
