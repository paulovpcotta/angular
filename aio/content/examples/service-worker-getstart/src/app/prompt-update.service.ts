import { SwUpdate } from '@angular/service-worker';

function promptUser(event): boolean {
  return true;
}

// #docregion sw-activate
export class PromptUpdateService {

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      if (promptUser(event)) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }
}
// #enddocregion sw-activate
