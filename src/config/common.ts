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
        domainURL: 'https://pokeapi.co/api/v2/',
      },
    };
  }

  getBaseApi(): IApiBase {
    if (this.mode === undefined) return this.environment.dev;

    return this.environment[this.mode];
  }
}
