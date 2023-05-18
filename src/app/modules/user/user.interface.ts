// Step 1: Interface ------------------------------

export interface IUser {
  name: {
    firstName: string; // small letter type
    lastName: string;
  };
  age: number;
  address?: string;
  isVoter: boolean;
  gender: "male" | "female";
}

// Custom method step: 1 --------------
export interface IUserMethod {
  fullName(): string;
}
