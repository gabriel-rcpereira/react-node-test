class ResourceAlreadyCreatedException extends Error {
  constructor(private readonly errorMessage: string) {
    super(errorMessage);
  }
}

export default ResourceAlreadyCreatedException;
