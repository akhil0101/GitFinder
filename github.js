class Github {
    constructor() {
      this.client_id ='902feb8ca58697c24de2';
      this.client_secret ='fea346a85135a525972f21b25db11dc03c84e80d';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
    }

   async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
      
}