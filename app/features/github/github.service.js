export default class GitHubService {
  constructor($http) {
    this.$http = $http;
  }

  getUser(user) {
   /* return this.$http.get('https://api.github.com/users/' + user)*/
   return this.$http.get('https://api.bitbucket.org/2.0/users/' + user)
  }
  
  getRepos(user) {
   // return this.$http.get('https://api.github.com/users/'+ user +'/repos')
   return this.$http.get('https://api.bitbucket.org/2.0/repositories/'+ user)
  }
}