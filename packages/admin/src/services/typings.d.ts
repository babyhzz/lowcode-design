declare namespace API {
  interface Result {
    success?: boolean;
    errorMessage?: string;
    data?: Record<string, any>;
  }
}
