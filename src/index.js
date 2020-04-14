const regex = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/

class PackageNameRegExp extends RegExp {
  constructor() {
    super(regex)
  }

  test(string) {
    if (string.length > 214) {
      return false
    }
    return regex.test(string)
  }
}

export default new PackageNameRegExp()
