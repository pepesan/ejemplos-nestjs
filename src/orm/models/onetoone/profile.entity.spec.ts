import { ProfileEntity } from './profile.entity';

describe('Profile', () => {
  it('should be defined', () => {
    expect(new ProfileEntity()).toBeDefined();
  });
});
