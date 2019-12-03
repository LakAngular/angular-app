import { TestBed } from '@angular/core/testing';

import { ChatBoxService } from './chat-box.service';

describe('ChatBoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatBoxService = TestBed.get(ChatBoxService);
    expect(service).toBeTruthy();
  });
});
