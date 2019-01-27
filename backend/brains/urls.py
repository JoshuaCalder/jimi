from django.urls import path
from . import views

# temporary bypass for csrf tokens
from django.views.decorators.csrf import csrf_exempt

# urls go here
urlpatterns = [
	path('create_party', csrf_exempt(views.create_party), name='create_party'),
	path('join_party', csrf_exempt(views.join_party), name='join_party'),
	path('party_top_tracks', views.party_top_tracks, name='party_top_tracks'),
	path('playlist_from_partycode', views.playlist_from_partycode, name='playlist_from_partycode'),
	path('hello', views.hello,name='hello'),

	path('login', views.login,name="login"),
	path('callback', views.callback ,name='callback')
]