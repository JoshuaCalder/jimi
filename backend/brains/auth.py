import random
import string
from urllib.parse import urlencode, quote_plus
from brains.keys import CLIENT_ID,CLIENT_SECRET,REDIRECT_URI
import base64
import requests
import json


STATE_KEY='spotify_auth_state'

SCOPE='user-read-private'

payload = {'username':'administrator', 'password':'xyz'}
result = urlencode(payload, quote_via=quote_plus)

def generate_state():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))

def get_redirect_url(state):
    redirect_url = 'https://accounts.spotify.com/authorize?'
    redirect_url+= urlencode({
      'response_type': 'code',
      'client_id': CLIENT_ID,
      'scope': SCOPE,
      'redirect_uri': REDIRECT_URI,
      'state': state
    },quote_plus)
    
    return redirect_url

def get_auth_options(code):
    auth_headers = f"{CLIENT_ID}:{CLIENT_SECRET}"
    auth_code = base64.b64encode(auth_headers.encode()).decode('utf-8')
    auth_options = {
		'data': {
			'code': code,
			'redirect_uri': REDIRECT_URI,
			'grant_type': 'authorization_code'
		},
		'headers': {
			'Authorization': 'Basic ' + str(auth_code)
		},
	}
    return auth_options

def get_access_tokens(code):
    auth_options = get_auth_options(code)
    response = requests.post('https://accounts.spotify.com/api/token',headers=auth_options['headers'],data=auth_options['data'])
    response = json.loads(response.text)
    return response
