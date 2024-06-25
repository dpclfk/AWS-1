export interface Todo {
  getcontent(): string;
  getlimit(): string;
  getisComplete(): boolean;
  getCreatedAt(): string;
}

export class Todo {
  private content: string;
  private limit: string;
  private isComplete: boolean;
  private createdAt: string;

  constructor(content: string, limit: string, isComplete: boolean) {
    this.content = content;
    this.limit = limit;
    this.isComplete = isComplete;
    const date = new Date();
    this.createdAt = `${date.getDate()}`;
  }

  getcontent(): string {
    return this.content;
  }
  getlimit(): string {
    return this.limit;
  }
  getisComplete(): boolean {
    return this.isComplete;
  }
  getCreatedAt(): string {
    return this.createdAt;
  }
}
