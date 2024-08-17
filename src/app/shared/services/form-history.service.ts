import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormHistoryService {
  private history: any[] = [];
  private future: any[] = [];
  private currentState: any;

  saveState(state: any): void {
    debugger
    if (this.currentState) {
      this.history.push(this.currentState);
    }
    this.currentState = JSON.parse(JSON.stringify(state)); // Deep copy
    this.future = [];
  }

  undo(): any {
    debugger
    if (this.history.length > 0) {
      this.future.push(this.currentState);
      this.currentState = this.history.pop();
    }
    return this.currentState;
  }

  redo(): any {
    debugger
    if (this.future.length > 0) {
      this.history.push(this.currentState);
      this.currentState = this.future.pop();
    }
    return this.currentState;
  }

  canUndo(): boolean {
    return this.history.length > 0;
  }

  canRedo(): boolean {
    return this.future.length > 0;
  }
}
