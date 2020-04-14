const regex = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/

class PackageNameRegExp extends RegExp {
  constructor() {
    super(regex)
  }
}

export default new PackageNameRegExp()
