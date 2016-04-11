export default class GitHubController {
  constructor($http, $scope) {
    this.$http = $http;
    this.email;
    
    this.makeRequest();
  }
  
  makeRequest() {
    this.$http.get('https://api.github.com/users/almoanna').then((response)=>{
      this.assignToScope(response)
    });
  }
  
  assignToScope(response){
    this.email = response.data.email;
  }
}