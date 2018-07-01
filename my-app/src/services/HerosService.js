import HttpService from './HttpService'

export default {
  getHeros: function () {
    return HttpService.request(
      'GET',
      'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=529b1e4d43eb2ca2db8ef0de315f5196&hash=984fe5a5389c7128dbe261cd0f714bc2',
      {
        'Content-Type': 'application/json; charset=utf-8'
      }
    )
  }
}
