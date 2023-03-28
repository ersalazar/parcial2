export interface ErrorState {
    [key: string]: string;
  }
  
export interface ValidationError {
    (value: string): string | undefined;
  }