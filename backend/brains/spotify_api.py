import requests
import json

#Request helpers ---------------------------

def add_auth(access_token, headers=None):
    if(headers is not None):
        headers.update({"Authorization": 'Bearer '+access_token})
    else:
        headers = {"Authorization": 'Bearer '+access_token}
    # print(headers)
    return headers

def make_get(url, access_token, headers = None ,params=None):
    print(f"Doing a get to: {url}")
    response = requests.get(url,headers=add_auth(access_token,headers),params=params)
    if(response.ok):
        print(f"Did a get: {response.status_code}")
        response = json.loads(response.text)
        return response
    else:
        print(f"It failed: {response.reason}")
        return None

def make_post(url,access_token,headers=None, params=None, body=None):
    print(f"Doing a post to: {url}")
    response = requests.post(url,headers=add_auth(access_token,headers),json=body,params=params)
    if(response.ok):
        print(f"Did a post: {response.status_code}")
        response = json.loads(response.text)
        return response
    else:
        print(f"It failed: {response.reason}")
        return None

# User Stuff -----------------------

def get_user_id(access_token):
    response = make_get("https://api.spotify.com/v1/me",access_token)
    return response

# return list of top tracks
def get_user_top_tracks(access_token,limit=3):
    #TODO: can change range of query (default: medium)
    print("get top tracks")
    response = make_get("https://api.spotify.com/v1/me/top/tracks",access_token,{"limit":str(limit)})
    return response['items']


# Playlist Controls-------------------

# create admin playlist
# return playlist id
def make_playlist(admin):
    print(f"make playlist")
    header = {'Content-Type':'application/json'}
    body = {'name':f"{admin.user_id}'s fire playlist"}
    response = make_post(f"https://api.spotify.com/v1/users/{admin.user_id}/playlists",admin.user_access_token,headers=header,body=body)
    return response['id']

def add_tracks_to_tracklist(admin,track_list,playlist_id):
    print(f"add tracks")
    header = {'Content-Type':'application/json'}
    body = {'uris':track_list}
    response = make_post(f"https://api.spotify.com/v1/playlists/{playlist_id}/tracks",admin.user_access_token, headers=header,body=body)

    return None

def get_tracklist(admin,playlist_id):
    print(f"get tracks")
    # params = {'limit': '2','fields':'items(track(name,href,album(name,href)))'}
    params = {'fields': 'items(track(name,href,album(name,href)),artist[0](name),id)'}
    response = make_get(f"https://api.spotify.com/v1/playlists/{playlist_id}/tracks",admin.user_access_token,params=params)
    print(len(response))
    return response
