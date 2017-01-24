$(document).ready(() => {
  $('#searchUser').on('keyup', (e) => {
    const username = e.target.value
    // make request to github
    $.ajax({
      url: `https://api.github.com/users/${username}`,
      data: {
        client_id: 'b11ca1439eddd99be904',
        client_secret: '60501c0ac69f7c2702edc599579f713497150799',
      },
    }).done((user) => {
      $.ajax({
        url: `https://api.github.com/users/${username}/repos`,
        data: {
          client_id: 'b11ca1439eddd99be904',
          client_secret: '60501c0ac69f7c2702edc599579f713497150799',
          sort: 'created: asc',
          per_page: 5,
        },
      }).done((repos) => {
        $.each(repos, (index, repo) => {
          $('#repos').append(`
            <div class="well">
              <div class="row">
                <div class="col-md-7">
                  <strong>${repo.name}</strong>: ${repo.description}
                </div>
                <div class="col-md-3">
                  <span class="label label-default">Forks: ${repo.forks_count}</span>
                  <span class="label label-danger">Watchers: ${repo.watchers_count}</span>
                  <span class="label label-success">Stars: ${repo.stargazers_count}</span>
                </div>
                <div class="col-md-2">
                  <a href="${repo.html_url}" target="_blank" class="btn btn-default">Repo Page</a>
                </div>
              </div>
            </div>
          `)
        })
      })
      $('#profile').html(`
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">${user.name}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3">
                <img class="thumbnail avatar" src="${user.avatar_url}" alt="" />
                <a class="btn btn-primary btn-block" target="_blank" href="${user.html_url}">View Profile</a>
              </div>
              <div class="col-md-9">
                <span class="label label-default">Public Repos: ${user.public_repos}</span>
                <span class="label label-primary">Public Gists: ${user.public_gists}</span>
                <span class="label label-success">Followers: ${user.followers}</span>
                <span class="label label-info">Following: ${user.following}</span>
                <br /><br />
                <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h3 class="page-header">Latest Repos</h3>
        <div id="repos"></div>
        `)
    })
  })
})

// {
//     login: "ryanmagoon",
//     id: 5327290,
//     avatar_url: "https://avatars.githubusercontent.com/u/5327290?v=3",
//     gravatar_id: "",
//     url: "https://api.github.com/users/ryanmagoon",
//     html_url: "https://github.com/ryanmagoon",
//     followers_url: "https://api.github.com/users/ryanmagoon/followers",
//     following_url: "https://api.github.com/users/ryanmagoon/following{/other_user}",
//     gists_url: "https://api.github.com/users/ryanmagoon/gists{/gist_id}",
//     starred_url: "https://api.github.com/users/ryanmagoon/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/ryanmagoon/subscriptions",
//     organizations_url: "https://api.github.com/users/ryanmagoon/orgs",
//     repos_url: "https://api.github.com/users/ryanmagoon/repos",
//     events_url: "https://api.github.com/users/ryanmagoon/events{/privacy}",
//     received_events_url: "https://api.github.com/users/ryanmagoon/received_events",
//     type: "User",
//     site_admin: false,
//     name: "Ryan Magoon",
//     company: null,
//     blog: null,
//     location: "Raleigh, North Carolina",
//     email: null,
//     hireable: true,
//     bio: null,
//     public_repos: 39,
//     public_gists: 12,
//     followers: 0,
//     following: 3,
//     created_at: "2013-08-28T05:40:57Z",
//     updated_at: "2017-01-23T23:01:59Z"
// }
