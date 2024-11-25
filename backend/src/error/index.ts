class ApiError extends Error {
  public readonly statusCode: number;

  constructor(error_description: string, error_code: number) {
    console.log({ error_description, error_code });

    super(error_description);
    this.statusCode = error_code;
  }
}

export { ApiError };
