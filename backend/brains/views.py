from django.shortcuts import render
from django.http import HttpResponse

import random

from brains.models import Parties

# @param user_id
# @param party_name
# assigns random 6 digit code to party
# TODO: add code check, ensuring no duplicates in party codes
# return 6 digit numeric code
def create_party(request):
	party_admin = request.POST.get('party_admin')
	party_name = request.POST.get('party_name')
	party_code = random.randint(100000, 999999)
	Parties.objects.create(
		party_admin = party_user,
		party_name = party_name,
		party_code = party_code,
	)
	return HttpResponse(party_code)

# @param party_id
# @param user_id
# registers a user to a party
def join_party(request):
	party_id = request.POST.get('party_id')
	user_id = request.POST.get('user_id')
	return HttpResponse('party_id: ' + str(party_id) + ' user_id: ' + str(user_id))

# @param party_id
# returns list of all top songs associated with a party
def party_top_tracks(request):
	party_id = request.POST.get('party_id')
	return HttpResponse('party_id: ' + str(party_id))