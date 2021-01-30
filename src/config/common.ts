interface IApiBase {
  domainURL: string;
}

export default class Common {
  mode: string | undefined;
  environment: any;

  constructor() {
    this.mode = process.env.MODE;
    this.environment = {
      dev: {
        domainURL: 'https://api.dev.xlr8rms.com',
      },
    };
  }

  getBaseApi(): IApiBase {
    if (this.mode === undefined) return this.environment.dev;

    return this.environment[this.mode];
  }
}
