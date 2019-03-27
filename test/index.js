import { assert } from 'chai';
import SensitiveInfo from '../src';

describe('testing email.', () => {
  it('should strip the email', () => {
    let sn = new SensitiveInfo();
    const expectedVal = 'hello *****';
    assert(sn.parse('hello pavankumar@gmail.com') == expectedVal, 'In correct!');
  });

  it('should strip the email with custom pattern', () => {
    let sn = new SensitiveInfo({ pattern: '###' });
    const expectedVal = 'hello ###';
    assert(sn.parse('hello pavankumar@gmail.com') == expectedVal, 'In correct!');
  });

  it('should strip the multiple email', () => {
    let sn = new SensitiveInfo();
    const expectedVal = ['hello *****', 'hello *****'];
    assert(sn.parse(['hello pavankumar@gmail.com', 'hello pavankumar@gmail.com'])[1] == expectedVal[1], 'In correct!');
  });

  it('should strip the multiple text', () => {
    let sn = new SensitiveInfo({
      pattern: '####',
      nodefaults: true,
      regex: {
        regex1: 'hello'
      }
    });
    const expectedVal = ['#### pavankumar@gmail.com', '#### pavankumar@gmail.com'];
    assert(sn.parse(['hello pavankumar@gmail.com', 'hello pavankumar@gmail.com'])[1] == expectedVal[1], 'In correct!');
  });

});
