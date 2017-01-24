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
      $('#profile').html(`
          ${user.name}
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
