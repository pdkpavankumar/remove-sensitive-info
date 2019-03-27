/* eslint-disable eslint-disable-line, no-param-reassign, no-useless-escape, no-unused-vars */
class SensitiveInfo {
  constructor(options) {
    this.defaults = {
      pattern: '*****',
      defaultRegex: {
        email: /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/gm,
        phone: /(\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/gm,
        ssn: [/\b\d{3}-\d{2}-\d{4}\b/gm,
          /\b\d{3}\ \d{2}\ \d{4}\b/gm,
          /\b\d{9}\b/gm]
      }
    };
    this.options = { ...this.defaults, ...options };
  }

  parse(text) {
    if (text instanceof Array) {
      const parseTextarray = [];
      text.forEach((entry) => {
        parseTextarray.push(this.parseRegex(entry));
      });
      return parseTextarray;
    }
    return this.parseRegex(text);
  }

  parseRegex(text) {
    Object.entries(this.options.defaultRegex).forEach(([key, value]) => {
      if (value instanceof Array) {
        value.forEach((regexValue) => {
          text = text.replace(regexValue, this.options.pattern);
        });
      } else {
        text = text.replace(value, this.options.pattern);
      }
    });
    if (this.options.regex) {
      Object.entries(this.options.regex).forEach(([key, value]) => {
        if (value instanceof Array) {
          value.forEach((regexValue) => {
            text = text.replace(regexValue, this.options.pattern);
          });
        } else {
          text = text.replace(value, this.options.pattern);
        }
      });
    }
    return text;
  }
}

export default SensitiveInfo;
