export default class GitHubController {
  constructor(GitHubService, $stateParams) {
    
    this.selectedUser = $stateParams.user
    
  /*  GitHubService.getUser(this.selectedUser)
      .then(this.handleGetUserSuccess.bind(this));
    
    GitHubService.getRepos(this.selectedUser)
      .then(this.handleGetReposSuccess.bind(this));*/
     if(this.selectedUser.length > 0){
      GitHubService.getUser(this.selectedUser)
        .then(this.handleGetUserSuccess.bind(this));
      
      GitHubService.getRepos(this.selectedUser)
        .then(this.handleGetReposSuccess.bind(this));
    }
  }
  
  handleGetUserSuccess(response) {
    this.User = response.data;
    console.log(this.User);
  }
  
  handleGetReposSuccess(response) {
    this.Repos = response.data.values;
    console.log(this.Repos);
  }
 
}