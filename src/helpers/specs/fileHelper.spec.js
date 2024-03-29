import { formatBytes, findFileSize } from '../FileHelper';

describe('#File Helpers', () => {
  describe('formatBytes', () => {
    it('should return zero bytes if 0 is passed', () => {
      expect(formatBytes(0)).toBe('0 Bytes');
    });
    it('should return in bytes if 1000 is passed', () => {
      expect(formatBytes(1000)).toBe('1000 Bytes');
    });
    it('should return in KB if 100000 is passed', () => {
      expect(formatBytes(10000)).toBe('9.77 KB');
    });
    it('should return in MB if 10000000 is passed', () => {
      expect(formatBytes(10000000)).toBe('9.54 MB');
    });
  });
  describe('findFileSize', () => {
    it('should return zero if 0 is passed', () => {
      expect(findFileSize(0)).toBe(0);
    });
    it('should return 19.07 if 20000000 is passed', () => {
      expect(findFileSize(20000000)).toBeCloseTo(19.07, 2);
    });
  });
});
