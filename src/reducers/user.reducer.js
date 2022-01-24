import actionTypes from '../constants/users'

const INITIAL_STATE = {
  users:{    
    "login": "github",
    "id": 9919,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjk5MTk=",
    "avatar_url": "https://avatars.githubusercontent.com/u/9919?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/github",
    "html_url": "https://github.com/github",
    "followers_url": "https://api.github.com/users/github/followers",
    "following_url": "https://api.github.com/users/github/following{/other_user}",
    "gists_url": "https://api.github.com/users/github/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/github/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/github/subscriptions",
    "organizations_url": "https://api.github.com/users/github/orgs",
    "repos_url": "https://api.github.com/users/github/repos",
    "events_url": "https://api.github.com/users/github/events{/privacy}",
    "received_events_url": "https://api.github.com/users/github/received_events",
    "type": "Organization",
    "site_admin": false,
    "name": "GitHub",
    "company": null,
    "blog": "https://github.com/about",
    "location": "San Francisco, CA",
    "email": null,
    "hireable": null,
    "bio": "How people build software.",
    "twitter_username": null,
    "public_repos": 404,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2008-05-11T04:37:31Z",
    "updated_at": "2020-09-28T06:15:10Z"
  },
  favoriteUsers:[]  
}

export default function reducers (state = INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.BUSCAR_USUARIO:
     return { ...state, users: action.payload}    
    default:
      return state
  }  
}

