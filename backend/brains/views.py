from django.shortcuts import redirect,render
from django.http import HttpResponse

import random, json

from brains.auth import STATE_KEY,generate_state,get_redirect_url,get_access_tokens
from brains.spotify_api import get_user_id
from brains.manage_tracklist import create_playlist,add_top_tracks,get_tracklist

from brains.models import Parties
from brains.models import Users

# @post party_admin
# @post party_name
# assigns random 6 digit code to party
# TODO: add code check, ensuring no duplicates in party codes
# return 6 digit numeric code
def create_party(request):
	body = json.loads(request.body)
	party_code = random.randint(100000, 999999)

	admin_uuid = body['user_uuid']
	admin = Users.objects.get(user_uuid=admin_uuid)

	playalist_id = create_playlist(admin)

	p = Parties.objects.create(
		party_admin = admin_uuid,
		party_name = body['party_name'],
		party_code = party_code,
		party_playlist_id = playalist_id
	)
	admin.user_party = p
	admin.save()
	
	print(f"Party Created with code {party_code}")

	return HttpResponse(party_code)

# @post user_uuid - Spotify user id
# @post party_code - 6 digit numeric party code
# registers a user to a party
def join_party(request):
	body = json.loads(request.body)
	user = Users.objects.get(user_uuid = body['user_uuid'])
	user_party = Parties.objects.get(party_code = body['party_code'] )
	user.user_party = user_party
	user.save()

	add_top_tracks(user,user_party.party_playlist_id)

	print(f"Party joined")
	return HttpResponse('user ' + str(body['user_uuid']) + 'added to party')

# not yet implemented
# @param party_id
# returns list of all top songs associated with a party
def party_top_tracks(request):
	body = json.loads(request.body)
	party_code = body['party_code']

	party_admin_uuid = Parties.objects.get(party_code=party_code).party_admin
	admin = Users.objects.get(user_uuid=party_admin_uuid).user_access_token

	party = Parties.objects.get(party_code=party_code)
	admin = Users.objects.get(user_uuid=party.party_admin)

	tracks = get_tracklist(admin,party.party_playlist_id)

	return HttpResponse(tracks)


def playlist_from_partycode(request):
	body = json.loads(request.body)
	party_code = body['party_code']
	name = Parties.objects.get(party_code=party_code).party_name
	return HttpResponse(name)
#---------------------------
# 	Auth Stuff ~ goh

def hello(request):
	return HttpResponse('Hello')

def login(request):
	state = generate_state()
	redirect_url = get_redirect_url(state)

	response = redirect(redirect_url)
	response.set_cookie('STATE_KEY',state)
	return response

def callback(request):
	#TODO: handle error states where the keys are not contained in the dict, check to see state===stored_state
	code = request.GET.get('code')
	#state = request.GET.get('state')
	#stored_state = request.GET.get(STATE_KEY)
        #if state is not stored_state:
        #    res = redirect(f"http://localhost:3000/entrance")
	#    res.delete_cookie(STATE_KEY)
        #    return res 
        
	token_dict = get_access_tokens(code)
	access_token = token_dict['access_token']
	user_id = get_user_id(access_token)
	user = Users.objects.create(
		user_id = user_id['id'],
		user_access_token = access_token
	)

	res = redirect(f"http://localhost:3000/joinparty?uuid={user.user_uuid}")

	res.delete_cookie(STATE_KEY)
	return res

