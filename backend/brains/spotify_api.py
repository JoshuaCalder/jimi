import requests
import json

def auth_bearer_header(access_token):
    return {"Authorization": 'Bearer '+access_token}

def get_user_id(access_token):
    response = requests.get("https://api.spotify.com/v1/me",headers=auth_bearer_header(access_token))
    response = json.loads(response.text)
    print(response['display_name'])
    return response