import requests
import json

def auth_bearer_header(user_access_token):
    return {"Authorization": 'Bearer '+user_access_token}

def make_get(url,user_access_token):
    response = requests.get("https://api.spotify.com/v1/me",headers=auth_bearer_header(user_access_token))
    response = json.loads(response.text)
# User Stuff

def get_user_id(user_access_token):
    response = requests.get("https://api.spotify.com/v1/me",user_access_token)
    print(response['display_name'])
    return response

# return list of top tracks
def get_user_top_tracks(user_access_token):

    return None


# Playlist Controls-------------------

# create admin playlist
# return playlist id
def make_playlist(admin_access_token):
    return None

def add_tracks_to_tracklist(admin_access_token,track_list):
    return None

def get_tracklist():
    return None