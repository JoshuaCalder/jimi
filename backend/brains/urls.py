from django.urls import path
from . import views

# temporary bypass for csrf tokens
from django.views.decorators.csrf import csrf_exempt

# urls go here
urlpatterns = [
	path('create_party', csrf_exempt(views.create_party), name='create_party'),
	path('join_party', views.join_party, name='join_party'),
	path('party_top_tracks', views.party_top_tracks, name='party_top_tracks'),
]