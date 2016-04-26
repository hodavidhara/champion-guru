class ChampionData {
  region: string;
  data: Promise<any>;

  constructor() {
    this.region = sessionStorage.getItem('region') || 'na';
    var data = JSON.parse(sessionStorage.getItem('championData'));
    if (!data) {
      fetch('/api/static/champion/' + this.region).then(function(response: any) {
        this.data = response.json();
        return this.data;
      }.bind(this)).then(function(champions) {
        sessionStorage.setItem('championData', JSON.stringify(champions));
      });
    } else {
      this.data = Promise.resolve(data);
    }
  }

  getAll() {
    return this.data
  }

  get(id: string) {
    return this.data.then(function(champions): any {
      return champions[id];
    });
  }
}

const singleton = new ChampionData();
export default singleton;