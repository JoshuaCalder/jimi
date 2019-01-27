from django.shortcuts import render
from django.http import HttpResponse

import random, json

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
	p = Parties.objects.create(
		party_admin = body['party_admin'],
		party_name = body['party_name'],
		party_code = party_code,
	)
	Users.objects.create(
		user_id = body['party_admin'],
		user_party = p
	)
	return HttpResponse(party_code)

# @post user_id - Spotify user id
# @post party_code - 6 digit numeric party code
# registers a user to a party
def join_party(request):
	body = json.loads(request.body)
	user_id = body['user_id']
	party_code = body['party_code']
	user_party = Parties.objects.get(party_code = party_code)
	Users.objects.create(
		user_id = user_id,
		user_party = user_party,
	)
	return HttpResponse('user ' + str(user_id) + 'added to party')

# not yet implemented
# @param party_id
# returns list of all top songs associated with a party
def party_top_tracks(request):
	body = json.loads(request.body)
	party_id = body['party_id']
	return HttpResponse('party_id: ' + str(party_id))