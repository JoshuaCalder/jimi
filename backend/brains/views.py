from django.shortcuts import redirect,render
from django.http import HttpResponse

import random

from brains.auth import STATE_KEY,generate_state,get_redirect_url,hello_spotify_api

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
		party_admin = party_admin,
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
	state = request.GET.get('state')
	stored_state = request.GET.get(STATE_KEY)
	
	res = HttpResponse("good?")
	res.delete_cookie(STATE_KEY)

	# auth_options = get_auth_options(code)
	# print(f'auth_options: {auth_options}')
	hello_spotify_api(code)
	return res
